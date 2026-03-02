<template>
    <header :class="['header', { 'header--scrolled': isScrolled }]">
        <div class="header-inner container">
            <RouterLink to="/">
                <img
                    class="header__logo logo"
                    src="../assets/logo.svg"
                    alt=""
                    width="50" height="47"
                >
            </RouterLink>
            <nav class="header__menu">
                <ul class="header__menu-list">
                    <li class="header__menu-item">
                        <RouterLink to="/create">
                            <AppButton variant="outline">Создать вишлист</AppButton>
                        </RouterLink>
                    </li>
                    <li class="header__menu-item">
                        <RouterLink to="/profile">
                            <AppButton variant="primary">Войти</AppButton>
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import AppButton from './AppButton.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    width: 100%;
    z-index: 100;
    transition: all 0.3s ease;
}

.header--scrolled {

    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-inner {
    display: flex;
    justify-content: space-between;
    padding-block: 20px;
}

.header__menu-list {
    display: flex;
    column-gap: 14px;
}
</style>