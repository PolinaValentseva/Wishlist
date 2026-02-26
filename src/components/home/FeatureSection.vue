<template>
    <div class="inner">
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
    </div>
</template>

<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';

</script>

<style scoped>
.inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    background: rgba(255, 142, 182, 0.15);
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
    font-weight: 800;
    font-size: 30px;
}
</style>