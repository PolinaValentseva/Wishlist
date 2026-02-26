<template>
    <div class="header">
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
    </div>
</template>

<script setup lang="ts">
import AppButton from './AppButton.vue';

</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    width: 100%;
    z-index: 100;
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