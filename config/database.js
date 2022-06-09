const mysql = require('mysql');
// buat konfigurasi koneksi
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_balinesia',
    multipleStatements: true
});
// koneksi database
db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});
module.exports = db;