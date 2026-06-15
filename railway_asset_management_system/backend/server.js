
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rams_db'
});

db.connect(err => {
    if(err){
        console.log(err);
    } else {
        console.log('MySQL Connected');
    }
});

app.get('/assets', (req, res) => {
    db.query('SELECT * FROM assets', (err, result) => {
        if(err){
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/assets', (req, res) => {
    const { asset_name, serial_no, status } = req.body;

    db.query(
        'INSERT INTO assets(asset_name, serial_no, status) VALUES(?,?,?)',
        [asset_name, serial_no, status],
        (err, result) => {
            if(err){
                res.send(err);
            } else {
                res.send('Asset Added Successfully');
            }
        }
    );
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
