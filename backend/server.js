const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',  
  database: 'pony_site',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Заповни всі поля' });
    }

    await pool.execute(
      'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );

    res.status(201).json({ ok: true });
  } catch (err) {
    console.error('Помилка при збереженні контакту:', err);
    res.status(500).json({ error: 'Помилка сервера' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
