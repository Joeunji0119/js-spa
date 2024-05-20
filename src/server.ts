import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

const currentDirectory = process.cwd();
console.log(`Current directory: ${currentDirectory}`);

app.use(express.static(path.join(__dirname, '/')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => {
	console.log(`server is running ${PORT}`);
});
