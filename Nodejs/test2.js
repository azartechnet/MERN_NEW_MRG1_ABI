const express = require('express');
const app = express();
const PORT = 3000;

// --- STATIC DATA (Simulating two separate backend services) ---
const INVENTORY_DATA = {
    'A101': { name: 'Laptop Pro', stock: 15 },
    'B202': { name: 'Monitor Ultra', stock: 40 },
};

const PRICING_DATA = {
    'A101': { price: 1299.99, currency: 'USD' },
    'B202': { price: 349.50, currency: 'USD' },
};

// --- ROUTE HANDLER (The "Gateway" Logic) ---
app.get('/api/product/:sku', (req, res) => {
    const sku = req.params.sku.toUpperCase(); 

    const inventory = INVENTORY_DATA[sku];
    const pricing = PRICING_DATA[sku];

    if (!inventory || !pricing) {
        return res.status(404).json({ error: 'Product Not Found', sku });
    }

    // Combine and structure the static data
    const combinedProductData = {
        sku: sku,
        name: inventory.name,
        stock: inventory.stock,
        price: pricing.price,
        currency: pricing.currency,
        is_available: inventory.stock > 0
    };

    res.json(combinedProductData);
});

app.listen(PORT, () => console.log(`Mock API Gateway running at http://localhost:${PORT}`));
// Test URLs:
// http://localhost:3000/api/product/A101
// http://localhost:3000/api/product/B202