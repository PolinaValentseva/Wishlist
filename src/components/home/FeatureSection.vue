<template>
    <section class="feature">
        <div class="body">
          <h2 class="title">Ты лучше знаешь, что тебе нужно</h2>
          <p class="subtitle">Избавь близких от сложных догадок и мук выбора — просто поделись своим списком желаний и получай именно те подарки, о которых мечтаешь</p>
          <RouterLink to="/create">
              <AppButton variant="primary" class="button">Создать вишлист</AppButton>
          </RouterLink>
        </div>
        <div class="image">
          <img
              class="img"
              src="@/assets/images/HomePage/gift.png"
              alt=""
              width="420" height="422" loading="lazy"
          >
        </div>
    </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';

</script>

<style scoped>

.feature {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    background: var(--color-bg-light);
    padding: 75px 50px 75px 50px;
}

.title {
    font-weight: 600;
    font-size: 54px;
    margin-bottom: 20px;
}

.subtitle {
    font-size: 30px;
    max-width: 1226px;
    margin-bottom: 35px;
}

.button {
    font-size: 22px;
}

@media(max-width: 1100px) {
    .title {
        font-size: 45px;
    }

    .subtitle {
        font-size: 23px;
    }

    .img {
        width: 280px;
        height: auto;
    }

    .button {
        font-size: 18px;
    }
}

@media(max-width: 800px) {
    .img {
        display: none;
    }
}

@media(max-width: 600px) {
    .inner {
        padding: 50px 30px 50px 30px;
        margin-bottom: 90px;
    }

    .title {
        font-size: 30px;
    }

    .subtitle {
        font-size: 16px;
    }

    .button {
        font-size: 16px;
    }
}

@media(max-width: 385px) {
    .inner {
        padding: 40px 25px 40px 25px;
        margin-bottom: 90px;
    }

    .title {
        font-size: 25px;
        margin-bottom: 15px;
    }

    .subtitle {
        font-size: 14px;
        margin-bottom: 25px;
    }

    .button {
        font-size: 14px;
    }
}

</style>