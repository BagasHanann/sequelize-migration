const express = require('express');
const app = express();
const cors = require('cors');

const port = 3000;
const allRoutes = require('./routes/index');

app.use(cors());
app.use(express.json());

app.use(allRoutes);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
