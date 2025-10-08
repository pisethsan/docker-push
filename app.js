import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MESSAGE = process.env.MESSAGE;

app.get('/', (req, res) => {
    res.send(MESSAGE+"2");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});