// File: app.js
const express = require('express');
const app = express();
const PORT = 3000;
const products = require('./data/products');

// Konfigurasi EJS dan Static Files
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Route: Beranda
app.get('/', (req, res) => {
    const previewProducts = products.slice(0, 3);
    res.render('index', { products: previewProducts });
});

// Route: Daftar Produk (dengan fitur filter)
app.get('/produk', (req, res) => {
    let filteredProducts = products;
    
    if (req.query.search) {
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(req.query.search.toLowerCase())
        );
    }
    
    if (req.query.kategori) {
        filteredProducts = filteredProducts.filter(p => 
            p.category.toLowerCase() === req.query.kategori.toLowerCase()
        );
    }

    res.render('produk', { products: filteredProducts, query: req.query });
});

// Route: Detail Produk (Dinamis)
app.get('/produk/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        return res.status(404).render('detail', { product: null, error: "Produk tidak ditemukan" });
    }
    
    res.render('detail', { product, error: null });
});

// Route: Tanya AI
app.get('/tanya-ai', (req, res) => {
    res.render('tanya-ai');
});

// REST API Endpoint: GET /api/products
app.get('/api/products', (req, res) => {
    res.json({
        status: "success",
        data: products
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});