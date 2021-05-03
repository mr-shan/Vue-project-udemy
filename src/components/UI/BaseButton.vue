<template>
  <router-link v-if="link" :class="mode" :to="linkUrl">
    <slot></slot>
  </router-link>
  <button v-else :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: String,
    mode: String,
    link: {
      type: Boolean,
      default: false,
    },
    linkUrl: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style scoped>
button,
a {
  padding: 8px 12px;
  outline: none;
  font-size: 14px;
  border: solid 2px transparent;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 1px;
  border-radius: 4px;
  font-weight: 500;
  user-select: none;
  background: #444;
  color: #ccc;
  transition: all 0.2s ease-out;
  padding: 7px 16px;
  border-radius: 20px;
}

a {
  text-decoration: none;
  display: inline-block;
}

button:disabled,
a:disabled {
  pointer-events: none;
  background: #333;
  color: #555;
  box-shadow: none;
}

.primary-filled {
  background: var(--color-primary);
  color: white;
}

.primary {
  color: var(--color-primary);
  background: transparent;
  border: solid 2px var(--color-primary);
}

.secondary {
  border: solid 2px var(--color-secondary);
  background: transparent;
  color: var(--color-secondary);
  
}

.secondary-filled {
  background: var(--color-secondary);
  color: var(--color-dark);
  
}

.secondary:disabled,
.primary:disabled {
  background: #333;
  color: #666;
  pointer-events: none;
}

.ternery {
  background: transparent;
  box-shadow: none;
  color: #333;
  font-weight: bold;
  border: solid 1px #aaa;
  border-style: solid;
  outline: none;
}

.ternery:hover {
  background: #ccc;
}

.flat {
  background: none;
  border: solid 1px transparent;
  box-shadow: none;
}

.flat:hover {
  background: #b9428b;
  color: white;
}
</style>