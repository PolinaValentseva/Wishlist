<template>
  <div class="profile">
    <div class="container">
      <h1>Профиль</h1>
      <p class="subtitle">Управление вашими вишлистами</p>
      
      <div class="content">
        <div class="block">
          <h2>Информация пользователя</h2>
          <p>Имя, email и т.д</p>
        </div>
        
        <div class="block">
          <h2>Мои вишлисты</h2>
          <p>Список всех созданных вишлистов:</p>
          <ul>
            <li>🎁 День рождения (15.03.2026) - 5 подарков</li>
            <li>🎁 Новый год (31.12.2026) - 3 подарка</li>
            <li>🎁 Свадьба (20.06.2027) - 0 подарков</li>
          </ul>
        </div>
        
        <div class="block">
          <h2>Действия</h2>
          <p>Кнопки: "Создать новый вишлист", "Выйти"</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.profile {
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
  margin-bottom: 1rem;
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
  border-bottom: 1px solid #f0f0f0;
}

.block li:last-child {
  border-bottom: none;
}

.block li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}
</style>