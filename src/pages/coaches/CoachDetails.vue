<template>
  <section>
    <base-card style="padding-bottom: 1.5rem">
      <header>
        <h2>{{ fullName }}</h2>
        <h3>${{ selectedCoach.hourlyRate }}/Hr</h3>
      </header>
      <hr />
      <div v-if="selectedCoach.areas && selectedCoach.areas.length > 0">
        <coach-area-badge v-for="area in selectedCoach.areas" :key="area">{{
          area
        }}</coach-area-badge>
      </div>
      <p><span style="color: var(--color-primary); font-weight: bold"> About me: </span>{{ selectedCoach.description }}</p>
      <div style="text-align: right">
        <base-button mode="primary" link :linkUrl="contactLink">
          Contact
        </base-button>
      </div>
    </base-card>
    <router-view></router-view>
  </section>
</template>

<script>
import CoachAreaBadge from "./../../components/coaches/CoachAreaBadge";
export default {
  components: {
    "coach-area-badge": CoachAreaBadge,
  },
  props: ["id"],
  data() {
    return { selectedCoach: {} };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    contactLink() {
      return "/coaches/" + this.id + "/contact";
    },
  },
  created() {
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      (e) => e.id === this.id
    );
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h2 {
  color: var(--color-primary);
}

h3 {
  color: var(--color-secondary)
}

p {
  /* color: var(--color-secondary); */
  margin: 1.5rem 0;
  font-weight: 500;
}

hr {
  border: none;
  border-bottom: 2px solid var(--color-border);
  margin: 0;
  padding: 0;
  margin-bottom: 1.6rem;
  border-radius: 10px;
}
</style>