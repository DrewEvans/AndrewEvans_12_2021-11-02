const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(router);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
