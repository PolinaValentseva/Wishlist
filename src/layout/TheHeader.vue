<template>
    <header class="header">
        <div class="header-inner container">
            <RouterLink to="/">
                <img
                    class="header__logo logo"
                    src="@/assets/logo.svg"
                    alt=""
                    width="50" height="47"
                >
            </RouterLink>

            <button
                class="burger-btn"
                :class="{ 'burger-btn--active': isMenuOpen }"
                @click="toggleMenu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="header__menu" :class="{ 'header__menu--open': isMenuOpen }">
                <ul class="header__menu-list">
                    <li class="header__menu-item">
                        <RouterLink to="/create" @click="closeMenu">
                            <AppButton variant="outline">Создать вишлист</AppButton>
                        </RouterLink>
                    </li>
                    <li class="header__menu-item">
                        <RouterLink to="/profile" @click="closeMenu">
                            <AppButton>Войти</AppButton>
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue';
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};

const closeMenu = () => {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
};
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    background: var(--color-white);
    width: 100%;
    box-shadow: 0 2px 10px var(--color-shadow-md);
    z-index: 2;
}

.header-inner {
    display: flex;
    justify-content: space-between;
    padding-block: 20px;
    align-items: center;
}

.header__menu-list {
    display: flex;
    column-gap: 14px;
}

.burger-btn {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    background: transparent;
    border: none;
    z-index: 2;
}

.burger-btn span {
    display: block;
    width: 100%;
    height: 3px;
    background: var(--color-primary);
    border-radius: 5px;
    transition: all 0.3s ease;
}

.burger-btn--active span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
}

.burger-btn--active span:nth-child(2) {
    opacity: 0;
}

.burger-btn--active span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
}

@media(max-width: 600px) {
    .header-inner {
        padding-block: 15px;
    }

    .logo {
        width: 40px;
        height: auto;
    }
    
    .burger-btn {
        display: flex;
    }
    
    .header__menu {
        position: fixed;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100dvh;
        background: var(--color-white);
        transition: right 0.3s ease;
        padding-top: 80px;
    }
    
    .header__menu--open {
        right: 0;
    }
    
    .header__menu-list {
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
    }
}
</style>