<template>
  <the-header />
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
export default {
  components: {
    "the-header": TheHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-light-1);
  box-sizing: border-box;
}

body {
  background: var(--color-dark);
  margin: 2rem;
  transition: all 0.25s ease-out;
}

html {
  transition: all 0.2s ease-out;
}

html[data-theme="dark"] {
  --color-primary: #b9428b;
  --color-secondary: #39abb5;
  --color-light-1: #eee;
  --color-light-2: #ccc;
  --color-dark: #202020;
  --color-dark-2: #333;

  --shadow-light: #2f2f2f;
  --shadow-dark: #181818;

  --color-header: #b9428b;
  --color-header-background: transparent;

  --color-border: #666;
  --color-theme-switch: #999;
}

html[data-theme='light'] {
  --color-primary: #b9428b;
  --color-secondary: #39abb5;
  --color-light-1: #202020;
  --color-light-2: #333;
  --color-dark: #eee;
  --color-dark-2: #ccc;

  --shadow-light: #fff;
  --shadow-dark: #bbb;

  --color-header: #eee;
  --color-header-background: #b9428b;

  --color-border: #ccc;
  --color-theme-switch: #333;
}

h1 {
  font-size: 32px;
}

h2 {
  font-size: 26px;
}

h3 {
  font-size: 20px;
}

h4 {
  font-size: 16px;
}
</style>
