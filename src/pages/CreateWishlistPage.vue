<template>
  <div class="create">
    <div class="container">
      <h1>📝 Создание вишлиста</h1>
      <p class="subtitle">Заполните информацию о событии</p>
      
      <div class="content">
        <div class="block">
          <h2>Форма создания</h2>
          <div class="form-fields">
            <div class="field">
              <label>Название вишлиста *</label>
              <p>[Текстовое поле]</p>
            </div>
            
            <div class="field">
              <label>Дата события</label>
              <p>[Поле выбора даты]</p>
            </div>
            
            <div class="field">
              <label>Описание</label>
              <p>[Текстовая область]</p>
            </div>
            
            <div class="field">
              <p>[Кнопка "Создать вишлист"]</p>
            </div>
          </div>
        </div>
        
        <div class="block">
          <h2>Результат создания</h2>
          <p>После создания выполняется автоматический переход на страницу вишлиста</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.create {
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
  color: #9c33e7;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.field {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #9c33e7;
}

.field label {
  display: block;
  color: #4a5568;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.field p {
  color: #718096;
  font-family: monospace;
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
  content: "→";
  position: absolute;
  left: 0;
  color: #9c33e7;
  font-weight: bold;
}
</style>