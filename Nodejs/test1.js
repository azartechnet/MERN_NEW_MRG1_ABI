const express = require('express');
const app = express();
const PORT = 3000;

// --- STATIC DATA (In-Memory) ---
const BLOCKED_KEYWORDS = ['script', 'admin', 'delete'];

// --- MIDDLEWARE FUNCTION ---
const querySanitizer = (req, res, next) => {
    const query = req.query.q || '';
    
    if (BLOCKED_KEYWORDS.some(keyword => query.toLowerCase().includes(keyword))) {
        return res.status(403).json({ 
            error: 'Forbidden Query', 
            message: 'Blocked keyword detected.' 
        });
    }

    req.sanitizedQuery = query.replace(/[^a-zA-Z0-9\s]/g, '');
    next();
};

// --- ROUTES ---

// Route 1: Validates a numeric URL parameter
app.get('/validate/user/:id', (req, res) => {
    const userId = req.params.id;

    if (isNaN(userId) || parseInt(userId) < 100) {
        return res.status(400).json({ 
            error: 'Invalid ID', 
            message: 'User ID must be a number greater than 100.' 
        });
    }

    res.json({ success: true, message: `User ID ${userId} is valid.` });
});

// Route 2: Sanitizes a query parameter using middleware
app.get('/search', querySanitizer, (req, res) => {
    res.json({
        success: true,
        original_query: req.query.q,
        sanitized_query: req.sanitizedQuery,
    });
});

app.listen(PORT, () => console.log(`Validator API running at http://localhost:${PORT}`));
// Test URLs:
// http://localhost:3000/validate/user/150
// http://localhost:3000/search?q=Node%26Express!