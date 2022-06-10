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
    },
    getAllDestinations : (req, res) => {
        const querySql = 'SELECT * FROM destinasi_wisata';

        db.query(querySql, (err, rows, field) => {
            if (err) {
                return res.status(500).json({ message: 'Ada kesalahan', error: err });
            }
    
            res.status(200).json({ success: true, data: rows });
        });
    },
    getDestinationsByLocation : (req, res) => {
        const data = { ...req.body };
        const querySql = 'SELECT * FROM destinasi_wisata WHERE lokasi = ?';

        db.query(querySql, req.params.lokasi, (err, rows, field) => {
            if (err) {
                return res.status(500).json({ message: 'Ada kesalahan', error: err });
            }  
            res.status(200).json({ success: true, data: rows });
        });
    },
    getDestinationsByRating: (req, res) => {
        const querySql = 'SELECT * FROM destinasi_wisata WHERE rating >= 4.5 ORDER BY rating DESC ';
    
        db.query(querySql, (err, rows, field) => {
            if (err) {
                return res.status(500).json({ message: 'Ada kesalahan', error: err });
            }
            res.status(200).json({ success: true, data: rows });
        });
    },
}