const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;

const Router = require('./router/index');
// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.set("port", PORT);

app.use('/api', Router);

app.get('/', (req, res) => res.send('<h1>Hello World</h1>'));

// buat server nya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));