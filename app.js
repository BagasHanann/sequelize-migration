const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;
const allRoutes = require('./routes/index');

app.use(cors());
app.use(express.json());

app.use(allRoutes);
app.get('/', (req, res) => {
	res.send('Success');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
