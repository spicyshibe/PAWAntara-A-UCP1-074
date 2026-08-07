# PAWAntara-A-UCP1-074 - Toko Sembako Ariesta

Tugas UCP 1 Pengembangan Aplikasi Web (PAW) - Program Studi Teknologi Informasi.

## 👤 Informasi Mahasiswa
* **Nama:** Rafie Rasydan Wahyudi
* **NIM:** 20240140074
* **Kelas:** PAW A

---

## 📝 Deskripsi Project
**Toko Sembako Ariesta** adalah aplikasi web berbasis Node.js dengan framework Express dan engine template EJS. Aplikasi ini dirancang untuk menampilkan katalog sembako secara interaktif. Pada pengembangan tahap awal (Sprint 1), aplikasi ini mencakup fitur:
1. **Homepage / Beranda:** Menampilkan preview produk pilihan.
2. **Katalog Produk:** Dilengkapi dengan fitur pencarian teks (search) dan filter kategori secara *server-side*.
3. **Detail Produk:** Halaman dinamis berdasarkan ID produk.
4. **Tanya AI (Mockup UI):** Simulasi halaman chat untuk asisten pintar Toko Ariesta.
5. **REST API Endpoint:** Menyediakan akses data produk dalam format JSON.

---

## 🚀 Cara Menjalankan Project Secara Lokal

Ikuti langkah-langkah berikut untuk menjalankan project ini di komputer Anda:

1. **Clone repository ini / Ekstrak source code.**
2. **Buka terminal** di direktori utama project.
3. **Instal seluruh dependensi** yang diperlukan:
   ```bash
   npm install
   ```
4. **Siapkan file `.env`** (jika belum ada, buat di root folder):
   ```env
   PORT=3005
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=admin123
   ```
5. **Jalankan server dalam mode pengembangan** (menggunakan nodemon):
   ```bash
   npm run dev
   ```
6. **Akses aplikasi** melalui browser di:
   [http://localhost:3005](http://localhost:3005)

---

## 🔗 Daftar Routing & Endpoint API

Berikut adalah daftar routing halaman serta endpoint REST API beserta method dan fungsinya:

### Halaman Web (EJS Views)
* **`GET /`**  
  * **Deskripsi:** Menampilkan halaman Beranda (Homepage) Toko Sembako Ariesta dengan sambutan selamat datang serta preview 3 produk pilihan.
* **`GET /produk`**  
  * **Deskripsi:** Menampilkan katalog lengkap produk sembako. Mendukung query pencarian teks (`?search=nama_produk`) dan filter kategori (`?kategori=nama_kategori`) secara server-side.
* **`GET /produk/:id`**  
  * **Deskripsi:** Menampilkan detail informasi dari suatu produk tertentu secara dinamis berdasarkan ID produk (seperti harga, kategori, dan sisa stok).
* **`GET /tanya-ai`**  
  * **Deskripsi:** Halaman mockup/simulasi antarmuka chat dengan asisten AI Toko Ariesta (persiapan untuk integrasi Sprint 2).

### REST API Endpoints
* **`GET /api/products`**  
  * **Deskripsi:** Mengembalikan seluruh daftar data produk dummy dari file `data/products.js` dalam format JSON.
  * **Format Respon:**
    ```json
    {
      "status": "success",
      "data": [
        { "id": 1, "name": "Beras Pandan Wangi 7kg", "category": "Beras", "price": 65000, "stock": 20 },
        ...
      ]
    }
    ```

---

## 🖼️ Dokumentasi Tampilan Antarmuka (UI) & Pengujian

Berikut adalah penjelasan dan dokumentasi visual tampilan aplikasi serta pengujian API yang terletak pada folder `SCREENSHOT`:

1. **Homepage (Beranda)**
   * **File Screenshot:** [HOMEPAGE.png](/SCREENSHOT/HOMEPAGE.png)
   * **Deskripsi:** Halaman utama yang memuat navigasi menu bar (Navbar), banner sambutan Toko Ariesta, tombol jalan pintas ke katalog, serta daftar card produk pilihan (limit 3 produk) dengan link detail.

2. **Katalog Produk**
   * **File Screenshot:** [KATALOG.png](/SCREENSHOT/KATALOG.png)
   * **Deskripsi:** Halaman katalog lengkap yang menampilkan seluruh daftar produk sembako. Di bagian atas, terdapat formulir pencarian serta opsi dropdown filter kategori ("Beras", "Minyak", "Gula", "Telur", "Mie", "Bumbu") beserta tombol "Cari".

3. **Detail Produk**
   * **File Screenshot:** [VIEW DETAIL PRODUK.png](/SCREENSHOT/VIEW%20DETAIL%20PRODUK.png)
   * **Deskripsi:** Halaman detail produk dinamis yang menampilkan spesifikasi nama produk, label kategori, harga terformat (Rupiah), sisa stok, tombol navigasi kembali, dan tombol ke menu Tanya AI.

4. **Tanya AI Mockup**
   * **File Screenshot:** [TANYA AI.png](/SCREENSHOT/TANYA%20AI.png)
   * **Deskripsi:** Antarmuka simulasi asisten virtual berupa window chat interaktif lengkap dengan input text untuk mengetik pertanyaan dan tombol kirim, sebagai persiapan fitur pintar di Sprint berikutnya.

5. **Pengujian REST API via Postman**
   * **File Screenshot:** [POSTMAN GET API.png](/SCREENSHOT/POSTMAN%20GET%20API.png)
   * **Deskripsi:** Hasil pengujian endpoint `GET /api/products` menggunakan aplikasi Postman, menunjukkan respons JSON berstatus "success" beserta data-data produk yang sesuai dengan source code backend.
