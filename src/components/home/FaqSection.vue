<template>
    <section class="faq">
        <div class="container">
            <h2 class="title">Частые вопросы</h2>

            <div class="list">
                <FaqItem
                    v-for="(item, index) in faqItems"
                    :key="index"
                    :question="item.question"
                    :answer="item.answer"
                    :is-active="activeIndex === index"
                    @toggle="toggleItem(index)"
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FaqItem from '@/components/home/FaqItem.vue';

const activeIndex = ref<number | null>(null);

const toggleItem = (index: number) => {
    activeIndex.value = activeIndex.value === index ? null : index;
};

const faqItems = [
    {
        question: 'Как создать вишлист?',
        answer: 'Нажмите кнопку "Создать вишлист" в шапке сайта, заполните информацию о вашем вишлисте и добавьте желаемые товары.'
    },
    {
        question: 'Как добавить товар в вишлист?',
        answer: 'В личном кабинете вишлиста нажмите "Добавить товар", вставьте ссылку на товар из любого интернет-магазина и заполните информацию о нём.'
    },
    {
        question: 'Можно ли добавить товары из разных магазинов?',
        answer: 'Да, вы можете добавлять товары из любых интернет-магазинов. Просто скопируйте ссылку на товар и добавьте её в свой вишлист.'
    },
    {
        question: 'Как поделиться вишлистом с друзьями?',
        answer: 'После создания вишлиста вы получите уникальную ссылку. Поделитесь ею с друзьями в социальных сетях или мессенджерах.'
    },
    {
        question: 'Это бесплатно?',
        answer: 'Да, создание и использование вишлистов полностью бесплатно.'
    }
];
</script>

<style scoped>
.faq {
    padding: 80px 0;
    background-color: var(--color-bg-lighter);
    margin-bottom: 75px;
}

.title {
    font-weight: 700;
    font-size: 48px;
    text-align: center;
    margin-bottom: 50px;
}

.list {
    max-width: 800px;
    margin: 0 auto;
}
</style>
