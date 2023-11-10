const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const allRoutes = require('./routes/index');

app.use(cors());
app.use(express.json());

app.use(allRoutes);
app.get('/', (req, res) => {
	res.send('Success');
});

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
