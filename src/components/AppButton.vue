<template>
    <button 
        :class="['button', `button--${variant}`]"
        type="button"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">

export type ButtonVariant = 'primary' | 'outline' | 'white'

const props = defineProps<{
  variant: ButtonVariant
}>()

</script>

<style scoped>

.button {
    border: 3px solid #f8859c;
    border-radius: 8px;
    padding: 12px 29px;
    font-size: 14px;
    cursor: pointer;
    transition-duration: 0.25s;
}

.button--primary {
    background: #f8859c;
    color: #FFF;
}

.button--primary:hover {
    transform: translateY(-5px);
}

.button--outline {
    background: inherit;
    color: #000;
    border: 3px solid #f8859c;
}

.button--outline:hover {
    transform: translateY(-5px);
}

.button--white {
    background: var(--color-white);
    border-radius: 30px;
    font-weight: 500;
    font-size: 30px;
    color: #333;
    transition-duration: 0.25s;
}

.button--white:hover {
    transform: translateY(-10px);
}

</style>