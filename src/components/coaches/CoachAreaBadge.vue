<template>
    <span>
        <slot></slot>
    </span>
</template>

<style scoped>
span {
  background: var(--color-secondary) 100%;
  color: var(--color-dark);
  display: inline-block;
  padding: 6px 8px;
  border-radius: 6px;
  margin-right: 10px;
  text-transform: uppercase;
  font-size: 12px;
  transition: all 0.25s ease-out;
}
</style>