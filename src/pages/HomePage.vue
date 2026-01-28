<template>
  <div class="home">
    <div class="container">
      <h1>🏠 Главная страница</h1>
      <p class="subtitle">Лендинг - привлечение пользователей</p>
      
      <div class="content">
        <div class="block">
          <h2>Hero секция</h2>
          <p>Заголовок + Описание + Кнопка "Создать вишлист"</p>
        </div>
        
        <div class="block">
          <h2>Преимущества</h2>
          <ul>
            <li>🔒 Приватность - доступ только по ссылке</li>
            <li>📱 Удобство - работает на всех устройствах</li>
            <li>✨ Простота - интуитивный интерфейс</li>
          </ul>
        </div>
        
        <div class="block">
          <h2>Как это работает</h2>
          <p>Пошаговое объяснение процесса создания вишлиста</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home {
  padding: 3rem 1rem;
  flex: 1;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #2d3748;
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.subtitle {
  text-align: center;
  color: #718096;
  margin-bottom: 3rem;
  font-size: 1.2rem;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.block {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.block h2 {
  color: #667eea;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.block p {
  color: #4a5568;
  line-height: 1.8;
}

.block ul {
  list-style: none;
  padding: 0;
}

.block li {
  padding: 0.75rem 0;
  padding-left: 2rem;
  position: relative;
  color: #4a5568;
}

.block li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}
</style>