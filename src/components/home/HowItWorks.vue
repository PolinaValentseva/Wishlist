<template>
  <div class="container">
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

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.container {
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
    column-gap: 26px;
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
    .container {
        padding-inline: 50px;
    }

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
</style>