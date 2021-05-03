<template>
  <header>
    <button @click="switchTheme" id="theme-switcher">&#9728;</button>
    <nav>
      <h1><router-link to="/">Find a coach</router-link></h1>
      <ul>
        <li><router-link to="/coaches">All Coaches</router-link></li>
        <li><router-link to="/requests">Requests</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    switchTheme() {
      const newTheme =
        document.querySelector("html").attributes["data-theme"].value ===
        "light"
          ? "dark"
          : "light";
      document.querySelector("html").setAttribute("data-theme", newTheme);
    },
  },
};
</script>

<style scoped>
header {
  background: var(--color-header-background);
  border-radius: 16px;
  padding: 8px;
  color: var(--color-light-1);
  box-shadow: 15px 15px 20px var(--shadow-dark),
    -10px -10px 16px var(--shadow-light);
  padding: 0.25rem 2rem;
  position: relative;
}

nav {
  display: flex;
  color: var(--color-ligth-1);
  align-items: center;
  justify-content: space-between;
}

h1 a {
  color: var(--color-header);
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: var(--color-header);
}

li {
  display: inline-block;
  margin: 0 8px;
  font-size: 20px;
  font-weight: 400;
}

li a {
  padding: 10px 16px;
  transition: all 0.25s ease-out;
  border-radius: 10px;
  position: relative;
  text-align: center;
  transition: all 0.2s ease-out;
  color: var(--color-header);
}

li a::before {
  content: "";
  height: 4px;
  background: var(--color-header);
  position: absolute;
  border-radius: 50px;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 4px;
  width: 0;
  transition: all 0.2s ease-out;
}

li a:hover::before {
  width: 80%;
}

li a.router-link-active::before {
  width: 80%;
}

li a.router-link-active {
  /* color: var(--color-header); */
}

#theme-switcher {
  position: absolute;
  top: 6px;
  right: 14px;
  font-size: 22px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  z-index: 50;
  border: none;
  padding: 0;
  margin: 0;
  background: none;
  outline: none;
  color: var(--color-theme-switch);
  font-weight: 500;
}

#theme-switcher::after {
  content: "Switch theme";
  width: 140px;
  background: #333 10%;
  border: solid 2px #111;
  position: absolute;
  right: 20px;
  top: 0px;
  font-size: 12px;
  color: #ccc;
  padding: 5px 0;
  border-radius: 20px;
  display: none;
  transition: all 0.2s ease-out;
  letter-spacing: 1px;
  
}

#theme-switcher:hover::after {
  display: block;
}
</style>