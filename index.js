// Импорт модулей
const express = require('express'); // Фреймворк для создания веб-приложений
const app = express(); // Создание экземпляра приложения
const port = 3000; // Порт, на котором будет работать сервер

// Средство для парсинга JSON-данных
app.use(express.json());

// Роут для получения списка курсов
app.get('/courses', (req, res) => {
  const courses = [
    { id: 1, name: 'Web Development' },
    { id: 2, name: 'Data Science' }
  ];
  res.json(courses); // Отправка JSON-ответа
});

// Роут для регистрации пользователя
app.post('/register', (req, res) => {
  const { username, password } = req.body; // Извлечение данных из запроса
  // Логика регистрации (например, сохранение в базе данных)
  res.status(201).json({ message: 'User registered successfully' }); // Отправка ответа
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`); // Сообщение о запуске сервера
});