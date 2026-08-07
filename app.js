// File: app.js
require('dotenv').config();
const express = require('express');
const app = express();

// Menggunakan PORT dari file .env, atau 3000 sebagai fallback
const PORT = process.env.PORT || 3000;

// Memuat data dummy produk dari file terpisah
const products = require('./data/products');

// Konfigurasi EJS sebagai view engine dan folder public untuk static file
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Route: Beranda (Menampilkan preview 3 produk)
app.get('/', (req, res) => {
    const previewProducts = products.slice(0, 3);
    res.render('index', { products: previewProducts });
});

// Route: Daftar Produk (Dilengkapi fitur filter server-side via query string)
app.get('/produk', (req, res) => {
    let filteredProducts = products;

    // Logika filter pencarian berdasarkan teks (search)
    if (req.query.search) {
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(req.query.search.toLowerCase())
        );
    }

    // Logika filter kategori
    if (req.query.kategori) {
        filteredProducts = filteredProducts.filter(p =>
            p.category.toLowerCase() === req.query.kategori.toLowerCase()
        );
    }

    res.render('produk', { products: filteredProducts, query: req.query });
});

// Route: Detail Produk (Route dinamis berdasarkan parameter ID URL)
app.get('/produk/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    // Menangani kasus jika ID produk tidak ditemukan agar tidak error crash
    if (!product) {
        return res.status(404).render('detail', { product: null, error: "Produk tidak ditemukan" });
    }

    res.render('detail', { product, error: null });
});

// Route: Tanya AI (Hanya menampilkan form/UI untuk Sprint 1)
app.get('/tanya-ai', (req, res) => {
    res.render('tanya-ai');
});

// REST API Endpoint: Mengembalikan seluruh data produk dummy dalam format JSON
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