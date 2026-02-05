<template>
    <div class="header">
        <div class="header-inner container">
            <router-link to="/">
                <img
                    class="header__logo logo"
                    src="../assets/logo.svg"
                    alt=""
                    width="50" height="47"
                >
            </router-link>
            <nav class="header__menu">
                <ul class="header__menu-list">
                    <li class="header__menu-item">
                        <router-link to="/create">
                            <AppButton variant="outline">Создать вишлист</AppButton>
                        </router-link>
                    </li>
                    <li class="header__menu-item">
                        <router-link to="/profile">
                            <AppButton variant="primary">Войти</AppButton>
                        </router-link>
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