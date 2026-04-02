<template>
    <div class="item" :class="{ 'item--active': props.isActive }">
        <button
            class="question"
            @click="emit('toggle')"
        >
            <span>{{ props.question }}</span>
            <span class="icon">
<img class="icon-svg" src="@/assets/icons/arrow-down.svg" alt="Развернуть" width="24" height="24">
            </span>
        </button>
        <div v-if="isActive" class="answer">
            <p class="answer-text">{{ props.answer }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    question: string;
    answer: string;
    isActive: boolean;
}>();

const emit = defineEmits<{
    toggle: [];
}>();
</script>

<style scoped>
.item {
    background: var(--color-white);
    border-radius: 12px;
    margin-bottom: 16px;
    box-shadow: 0 2px 8px var(--color-shadow-sm);
    transition: box-shadow 0.3s ease;
}

.item:hover {
    box-shadow: 0 4px 16px var(--color-shadow-md);
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
    transform: rotate(180deg);
}

.answer {
    padding: 0 28px 24px 28px;
}

.answer-text {
    font-size: 16px;
    line-height: 1.6;
    color: var(--color-text-70);
}

@media(max-width: 768px) {
    .question {
        padding: 20px 20px;
        font-size: 18px;
    }

    .answer {
        padding: 0 20px 20px 20px;
    }

    .answer-text {
        font-size: 15px;
    }
}

@media(max-width: 600px) {
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

    .icon-svg {
        width: 20px;
        height: 20px;
    }

    .answer {
        padding: 0 16px 16px 16px;
    }

    .answer-text {
        font-size: 14px;
    }
}
</style>
