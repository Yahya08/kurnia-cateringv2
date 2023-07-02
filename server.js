const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const mysql = require("mysql");

app.use(cors());
app.use(express.json());

// Konfigurasi untuk membuat koneksi ke database MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kurnia_catering",
});

// Endpoints untuk API
app.get("/dataMenu/:jenis", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  db.query("SELECT * FROM data_menu WHERE jenis = ?", 
  [jenis],
  (error, result) => {
    if (error) {
      console.error("Terjadi kesalahan dalam kueri:", error);
      res.status(500).json({ error: "Terjadi kesalahan dalam server" });
    } else {
      res.json(result);
    }
  });
});

// Pengaturan koneksi dan pengujian koneksi ke server MySQL
db.connect((error) => {
  if (error) {
    console.error(
      "Terjadi kesalahan saat menyambungkan ke server MySQL: ",
      error
    );
  } else {
    console.log("Berhasil terhubung ke server MySQL");
  }
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
