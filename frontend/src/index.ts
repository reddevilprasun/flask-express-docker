import express , { Request, Response } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.post('/submit', async (req: Request, res: Response) => {
  try{
    const formData = req.body;
    console.log(formData);
    const response = await axios.post('http://backend:5000/process', formData);
    res.send(`Form submission success! Flask responded with: Message: ${response.data.message}`);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});