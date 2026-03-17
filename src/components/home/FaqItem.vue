<template>
    <div class="item" :class="{ 'item--active': props.isActive }">
        <button
            class="question"
            @click="$emit('toggle')"
        >
            <span>{{ props.question }}</span>
            <span class="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
        </button>
        <div v-if="isActive" class="answer">
            <p>{{ props.answer }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    question: string;
    answer: string;
    isActive: boolean;
}>();

const emits = defineEmits<{
    toggle: [];
}>();

</script>

<style scoped>
.item {
    background: var(--color-white);
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
    transform: rotate(180deg);
}

.answer {
    padding: 0 28px 24px 28px;
}

.answer p {
    font-size: 16px;
    line-height: 1.6;
    color: var(--color-text-gray-light);
}

@media(max-width: 768px) {
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
