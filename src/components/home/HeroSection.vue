<template>
  <section class="hero inner">
    <div class="body">
        <h1 class="title">Первый шаг к идеальному подарку — твой вишлист</h1>
        <p class="subtitle">Добавляй товары из любых магазинов, делись ссылкой с друзьями и получай именно то, о чем мечтаешь.</p>
        <RouterLink to="/create">
            <AppButton variant="white">Создать вишлист</AppButton>
        </RouterLink>
    </div>

    <div class="decor-gift" aria-hidden="true">
        <img class="decor-gift-left" src="@/assets/images/HomePage/gift-svg.svg" alt="" width="175" height="193">
        <img class="decor-gift-right" src="@/assets/images/HomePage/circle.svg" alt="" width="393" height="425">
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue';
</script>

<style scoped>

.hero {
    position: relative;
    background-color: var(--color-primary);
    width: 100vw;
    padding: 230px 60px 230px 150px;
    margin-bottom: 135px;
    overflow: hidden;
}

.inner::before {
  content: "";
  position: absolute;
  width: 725px;
  height: 725px;
  border-radius: 50%;
  background: var(--color-blur);
  filter: blur(200px);
  top: 0;
  left: 0;
  z-index: 0;
}

.body {
    position: relative;
    z-index: 1;
}

.title {
    font-weight: 800;
    font-size: 80px;
    max-width: 1230px;
    text-align: left;
    color: var(--color-white);
    margin-bottom: 25px;
}

.subtitle {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 35px;
    color: var(--color-white);
    max-width: 954px;
    margin-bottom: 35px;
}

.decor-gift {
    position: absolute;
    bottom: 0;
    left: 67%;
    display: flex;
    align-items: end;
    z-index: 0;
}

@media(max-width: 1450px) {
    .inner {
        padding: 190px 60px 190px 150px;
    }
}

@media(max-width: 1250px) {
    .inner {
        padding: 190px 60px 190px 100px;
    }

    .title {
        font-size: 65px;
    }

    .subtitle {
        font-size: 30px;
    }

    .decor-gift {
        left: 65%;
    }

    .decor-gift-left {
        width: 125px;
        height: auto;
    }

    .decor-gift-right {
        width: 300px;
        height: auto;
    }
}

@media(max-width: 1100px) {
    .inner {
        margin-bottom: 100px;
    }
}

@media(max-width: 986px) {
    .inner {
        padding: 150px 70px 150px 70px;
    }

    .inner::before {
      width: 550px;
      height: 550px;
      filter: blur(150px);

    }

    .decor-gift {
        left: 60%;
    }

    .decor-gift-left {
        width: 100px;
    }

    .decor-gift-right {
        width: 220px;
    }
}

@media(max-width: 800px) {
    .title {
        font-size: 45px;
    }

    .subtitle {
        font-size: 20px;
    }
}

@media(max-width: 600px) {
    .inner {
        padding: 80px 40px 80px 40px;
        margin-bottom: 50px;
    }

    .inner::before {
      width: 400px;
      height: 400px;
      filter: blur(100px);
    }

    .title {
        font-size: 30px;
    }

    .subtitle {
        font-size: 16px;
    }

    .decor-gift {
        left: 50%;
    }

    .decor-gift-left {
        width: 70px;
    }

    .decor-gift-right {
        width: 150px;
    }
}

@media(max-width: 385px) {
    .inner {
        padding: 60px 30px 60px 30px;
        margin-bottom: 50px;
    }

    .inner::before {
      width: 400px;
      height: 400px;
      filter: blur(100px);
    }

    .title {
        font-size: 25px;
        margin-bottom: 15px;
    }

    .subtitle {
        font-size: 14px;
        margin-bottom: 20px;
    }

    .decor-gift {
        left: 60%;
    }

    .decor-gift-left {
        width: 50px;
    }

    .decor-gift-right {
        width: 120px;
    }
}

</style>