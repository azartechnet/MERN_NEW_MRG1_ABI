import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Product from './pages/Product';
import Login from './pages/Login';
import FeedbackForm from './pages/FeedbackForm';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="feedback" element={<FeedbackForm/>}/>
      <Route path="*" element={<NoPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    );
    }
  
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<App/>)