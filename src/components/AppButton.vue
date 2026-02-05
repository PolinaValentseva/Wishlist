<template>
    <button 
        :class="['button', `button--${variant}`]"
        type="button"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">

export type ButtonVariant = 'primary' | 'outline'

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
    background: inherit;
    color: #000;
}

.button--outline {
    background: inherit;
    color: #000;
    border: 3px solid #f8859c;
}

.button--outline:hover {
    background: #f8859c;
    color: #FFF;
}

</style>