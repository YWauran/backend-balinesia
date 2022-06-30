const mysql = require('mysql');
// buat konfigurasi koneksi
const db = mysql.createConnection({
    host: 'sql6.freesqldatabase.com',
    user: 'sql6503128',
    password: 'tPtKJrl5aX',
    database: 'sql6503128',
    multipleStatements: true
});
// koneksi database
db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});
module.exports = db;