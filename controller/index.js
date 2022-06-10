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
        // buat variabel penampung data dan query sql
        const data = { ...req.body };
        const querySql = 'SELECT * FROM destinasi_wisata WHERE id = ?';
        // jalankan query
        db.query(querySql, req.params.id, (err, rows, field) => {
            // error handling
            if (err) {
                return res.status(500).json({ message: 'Ada kesalahan', error: err });
            }
            // jika request berhasil
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
        // buat variabel penampung data dan query sql
        const data = { ...req.body };
        const querySearch = 'SELECT * FROM destinasi_wisata WHERE id = ?';
        const queryUpdate = 'UPDATE destinasi_wisata SET ? WHERE id = ?';
    
        // jalankan query untuk melakukan pencarian data
        db.query(querySearch, req.params.id, (err, rows, field) => {
            // error handling
            if (err) {
                return res.status(500).json({ message: 'Ada kesalahan', error: err });
            }
            // jika id yang dimasukkan sesuai dengan data yang ada di db
            if (rows.length) {
                // jalankan query update
                koneksi.query(queryUpdate, [data, req.params.id], (err, rows, field) => {
                    // error handling
                    if (err) {
                        return res.status(500).json({ message: 'Ada kesalahan', error: err });
                    }
                    // jika update berhasil
                    res.status(200).json({ success: true, message: 'Berhasil update data!' });
                });
            } else {
                return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
            }
        });
    },
    deleteDestination : (req, res) => {
        // buat query sql untuk mencari data dan hapus
        const querySearch = 'SELECT * FROM destinasi_wisata WHERE id = ?';
        const queryDelete = 'DELETE FROM destinasi_wisata WHERE id = ?';
    
        // jalankan query untuk melakukan pencarian data
        db.query(querySearch, req.params.id, (err, rows, field) => {
            // error handling
            if (err) {
                return res.status(500).json({ message: 'Ada kesalahan', error: err });
            }
    
            // jika id yang dimasukkan sesuai dengan data yang ada di db
            if (rows.length) {
                // jalankan query delete
                koneksi.query(queryDelete, req.params.id, (err, rows, field) => {
                    // error handling
                    if (err) {
                        return res.status(500).json({ message: 'Ada kesalahan', error: err });
                    }
    
                    // jika delete berhasil
                    res.status(200).json({ success: true, message: 'Berhasil hapus data!' });
                });
            } else {
                return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
            }
        });
    }
}