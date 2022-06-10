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
    getDestinationById : (req, res) => {
        const data = { ...req.body };
        const querySql = 'SELECT * FROM destinasi_wisata WHERE id = ?';
        db.query(querySql, req.params.id, (err, rows, field) => {
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
    updateDestination : (req, res) => {
        const data = { ...req.body };
        const querySearch = 'SELECT * FROM destinasi_wisata WHERE id = ?';
        const queryUpdate = 'UPDATE destinasi_wisata SET ? WHERE id = ?';

        db.query(querySearch, req.params.id, (err, rows, field) => {
            if (err) {
                return res.status(500).json({ message: 'Ada kesalahan', error: err });
            }
            if (rows.length) {
                koneksi.query(queryUpdate, [data, req.params.id], (err, rows, field) => {
                    if (err) {
                        return res.status(500).json({ message: 'Ada kesalahan', error: err });
                    }
                    res.status(200).json({ success: true, message: 'Berhasil update data!' });
                });
            } else {
                return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
            }
        });
    },
    deleteDestination : (req, res) => {
        const querySearch = 'SELECT * FROM destinasi_wisata WHERE id = ?';
        const queryDelete = 'DELETE FROM destinasi_wisata WHERE id = ?';

        db.query(querySearch, req.params.id, (err, rows, field) => {
            if (err) {
                return res.status(500).json({ message: 'Ada kesalahan', error: err });
            }
    
            if (rows.length) {
                koneksi.query(queryDelete, req.params.id, (err, rows, field) => {
                    if (err) {
                        return res.status(500).json({ message: 'Ada kesalahan', error: err });
                    }
                    res.status(200).json({ success: true, message: 'Berhasil hapus data!' });
                });
            } else {
                return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
            }
        });
    }
}