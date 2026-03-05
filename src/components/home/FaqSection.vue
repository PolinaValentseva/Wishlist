<template>
    <section class="faq">
        <div class="container">
            <h2 class="title">Частые вопросы</h2>
            
            <div class="list">
                <div 
                    v-for="(item, index) in faqItems" 
                    :key="index"
                    class="item"
                    :class="{ 'item--active': activeIndex === index }"
                >
                    <button 
                        class="question"
                        @click="toggleItem(index)"
                    >
                        <span>{{ item.question }}</span>
                        <span class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </button>
                    <div class="answer" v-if="activeIndex === index">
                        <p>{{ item.answer }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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
    background-color: rgba(255, 142, 182, 0.06);
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

.item {
    background: #fff;
    border-radius: 12px;
    margin-bottom: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.3s ease;
}

.item:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.question {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 28px;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 20px;
    transition: color 0.3s ease;
}

.question:hover {
    color: var(--color-primary);
}

.icon {
    margin-left: 16px;
    transition: transform 0.3s ease;
    color: var(--color-primary);
}

.item--active .icon {
    transform: rotate(45deg);
}

.answer {
    padding: 0 28px 24px 28px;
}

.answer p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
}

@media(max-width: 768px) {
    .faq {
        padding: 60px 0;
    }

    .title {
        font-size: 36px;
        margin-bottom: 40px;
    }

    .question {
        padding: 20px 20px;
        font-size: 18px;
    }

    .answer {
        padding: 0 20px 20px 20px;
    }

    .answer p {
        font-size: 15px;
    }
}

@media(max-width: 600px) {
    .faq {
        padding: 40px 0;
    }

    .title {
        font-size: 28px;
        margin-bottom: 30px;
    }

    .item {
        border-radius: 8px;
        margin-bottom: 12px;
    }

    .question {
        padding: 16px 16px;
        font-size: 16px;
    }

    .icon {
        width: 20px;
        height: 20px;
    }

    .icon svg {
        width: 20px;
        height: 20px;
    }

    .answer {
        padding: 0 16px 16px 16px;
    }

    .answer p {
        font-size: 14px;
    }
}
</style>
