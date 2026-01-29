<template>
  <div class="wishlist">
    <div class="container">
      <h1>🎁 Страница вишлиста</h1>
      <p class="subtitle">Универсальная страница (просмотр + редактирование)</p>
      
      <div class="content">
        <div class="block">
          <h2>Шапка вишлиста</h2>
          <p>Название, дата события, описание</p>
        </div>
        
        <div class="block">
          <h2>Список подарков</h2>
          <p>Карточки товаров с информацией:</p>
          <ul>
            <li>🎁 Наушники - 15 000₽ - [Удалить] [Редактировать]</li>
            <li>🎁 Книга "Лучшая книга" - 2 500₽ - [Удалить] [Редактировать]</li>
            <li>🎁 Кофемашина - 45 000₽ - [Удалить] [Редактировать]</li>
          </ul>
        </div>
        
        <div class="block">
          <h2>Кнопки действий</h2>
          <p>Зависят от режима:</p>
          <ul>
            <li><strong>Режим владельца:</strong> [+ Добавить товар] [⚙️ Редактировать]</li>
            <li><strong>Режим гостя:</strong> [🎁 Забронировать подарок]</li>
          </ul>
        </div>
        
        <div class="block">
          <h2>Раскрывающаяся форма "Добавить товар"</h2>
          <p>Форма появляется на странице при нажатии на кнопку:</p>
          
          <div class="toggle-section">
            <button class="toggle-btn">Добавить подарок</button>
            
            <div class="form-container">
              <div class="form-fields">
                <div class="field">
                  <label>Название товара *</label>
                  <p>[Текстовое поле]</p>
                </div>
                
                <div class="field">
                  <label>Ссылка на товар</label>
                  <p>[Текстовое поле]</p>
                </div>
                
                <div class="field">
                  <label>Цена</label>
                  <p>[Текстовое поле]</p>
                </div>
                
                <div class="field">
                  <label>Фото</label>
                  <p>Добавление фото</p>
                </div>
                
                <div class="field">
                  <label>Комментарий к подарку</label>
                  <p>[Текстовая область]</p>
                </div>
                
                <div class="field actions">
                  <p>[Кнопка "Отмена"] [Кнопка "Добавить"]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.wishlist {
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

.block h3 {
  color: #48bb78;
  margin: 1.5rem 0 1rem 0;
  font-size: 1.2rem;
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
  color: #9c33e7;
  font-weight: bold;
}

.toggle-section {
  margin-top: 1.5rem;
}

.toggle-btn {
  background: #400069;
  background: linear-gradient(90deg,rgba(64, 0, 105, 1) 0%, rgba(119, 33, 181, 1) 53%, rgba(64, 0, 105, 1) 100%);
  color: white;
  border: none;
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.toggle-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}

.form-container {
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.field {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  border-left: 3px solid #9c33e7;
}

.field.actions {
  background: #f0f0f0;
  border-left-color: #cbd5e0;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1rem;
}

.field label {
  display: block;
  color: #4a5568;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.field p {
  color: #718096;
  font-family: monospace;
  font-size: 0.9rem;
  margin: 0;
}

</style>