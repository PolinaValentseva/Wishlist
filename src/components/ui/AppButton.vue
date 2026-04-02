<template>
    <button 
        :class="['button', `button--${variant}`]"
        type="button"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
type TButtonVariant = 'primary' | 'outline' | 'white' | 'outline-primary';

const props = withDefaults(defineProps<{
  variant?: TButtonVariant;
}>(), {
  variant: 'primary'
});
</script>

<style scoped>
.button {
    border: none;
    border-radius: 8px;
    padding: 12px 29px;
    font-size: 14px;
    cursor: pointer;
    transition-duration: 0.25s;
}

.button--primary {
    background: var(--color-primary);
    border: 3px solid var(--color-primary);
    color: var(--color-white);
}

.button--outline {
    background: inherit;
    color: var(--color-black);
    border: 3px solid var(--color-primary);
}

.button--white {
    background: var(--color-white);
    font-weight: 500;
    font-size: 22px;
    color: var(--color-text-100);
    transition-duration: 0.25s;
}

.button--outline-primary {
    background: inherit;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    font-weight: 600;
}

.button:hover {
    transform: translateY(-5px);
}

@media(max-width: 1100px) {
    .button--white {
        font-size: 20px;
    }
}

@media(max-width: 600px) {
    .button {
        padding: 8px 20px;
    }

    .button--white {
        font-size: 16px;
    }
}
</style>