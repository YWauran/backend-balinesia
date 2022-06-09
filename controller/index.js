const db = require('../config/database');

module.exports = {
    addDestination : (req, res) => {
        const data = { ...req.body };
        const querySql = 'INSERT INTO destinasi_wisata SET ?';
    
        db.query(querySql, data, (err, rows, field) => {
            if (err) {
                return res.status(500).json({ message: 'Gagal insert data!', error: err });
            }
    
            res.status(201).json({ success: true, message: 'Berhasil insert data!' });
        });
    }
}