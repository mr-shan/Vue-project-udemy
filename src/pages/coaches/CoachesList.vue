<template>
  <base-card>
    <section style="padding: 1rem 0">
      <div
        style="
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        "
      >
        <base-button mode="secondary">Refresh</base-button>
        <base-button mode="secondary-filled" link linkUrl="/register"
          >Registration</base-button
        >
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :areas="coach.areas"
          :rate="coach.hourlyRate"
        />
      </ul>
      <p v-else>No coach found</p>
    </section>
  </base-card>
</template>

<script>
import CoachItem from "./../../components/coaches/CoachItem";

export default {
  components: { "coach-item": CoachItem },
  computed: {
    filteredCoaches() {
      return this.$store.getters["coaches/coaches"];
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>