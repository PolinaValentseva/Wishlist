<template>
    <section class="howt-works container">
      <h2 class="title">Как это работает?</h2>
      <ul class="list">
          <li class="item">
              <img
                  class="image"
                  src="@/assets/images/HomePage/card-1.jpg"
                  alt=""
                  width="526" height="417" loading="lazy"
              >
              <h3 class="card-title">ШАГ 1</h3>
              <p class="card-subtitle">Добавь подарок</p>
          </li>
          <li class="item">
              <img
                  class="image"
                  src="@/assets/images/HomePage/card-2.jpg"
                  alt=""
                  width="526" height="417" loading="lazy"
              >
              <h3 class="card-title">ШАГ 2</h3>
              <p class="card-subtitle">Поделись с друзьями</p>
          </li>
          <li class="item">
              <img
                  class="image"
                  src="@/assets/images/HomePage/card-3.jpg"
                  alt=""
                  width="526" height="417" loading="lazy"
              >
              <h3 class="card-title">ШАГ 3</h3>
              <p class="card-subtitle">Получи подарок</p>
          </li>
      </ul>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

.howt-works {
    margin-bottom: 130px;
}

.title {
    font-weight: 600;
    font-size: 60px;
    margin-bottom: 45px;
}

.list {
    display: flex;
    justify-content: space-between;
    gap: 26px;
}

.item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image {
    border-radius: 50px;
    margin-bottom: 25px;
}

.card-title {
    font-weight: 500;
    font-size: 45px;
    margin-bottom: 15px;
}

.card-subtitle {
    font-weight: 400;
    font-size: 30px;
}

@media(max-width: 1670px) {

    .image {
        width: 90%;
        height: auto;
    }

    .card-title {
        font-size: 33px;
    }

    .card-subtitle {
        font-size: 27px;
    }
}

@media(max-width: 1100px) {
    .container {
        margin-bottom: 100px;
    }

    .title {
        font-size: 45px;
    }

    .list {
        column-gap: 0px;
    }

    .card-title {
        font-size: 25px;
        margin-bottom: 10px;
    }

    .card-subtitle {
        font-size: 23px;
    }
}

@media(max-width: 900px) {
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .list {
        flex-wrap: wrap;
        justify-content: center;
    }

    .item {
        max-width: 320px;
    }
}

@media(max-width: 600px) {
    .container {
        margin-bottom: 50px;
    }
    
    .list {
        flex-wrap: wrap;
        justify-content: center;
        gap: 40px;
    }

    .title {
        font-size: 30px;
        margin-bottom: 40px;
    }

    .image {
        border-radius: 40px;
        margin-bottom: 20px;
    }

    .card-title {
        font-size: 22px;
        margin-bottom: 5px;
    }

    .card-subtitle {
        font-size: 20px;
    }
}

@media(max-width: 385px) {  
    .list {
        gap: 35px;
    }

    .title {
        font-size: 25px;
        margin-bottom: 30px;
    }

    .image {
        border-radius: 30px;
        margin-bottom: 15px;
    }

    .card-title {
        font-size: 18px;
        margin-bottom: 5px;
    }

    .card-subtitle {
        font-size: 16px;
    }
}
</style>