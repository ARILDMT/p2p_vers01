// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [courses, setCourses] = useState([]); // Состояние для хранения курсов

  useEffect(() => {
    axios.get('http://localhost:3000/courses') // Запрос к бэкенду для получения курсов
      .then(response => setCourses(response.data)) // Сохранение курсов в состоянии
      .catch(error => console.error(error)); // Обработка ошибок
  }, []); // Пустой массив зависимостей для выполнения эффекта только один раз

  return (
    <div>
      <h1>Courses</h1> {/* Заголовок */}
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li> {/* Список курсов */}
        ))}
      </ul>
    </div>
  );
}

export default App;