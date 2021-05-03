<template>
  <li>
    <h3>{{ fullname }}</h3>
    <h4>{{ rate }}</h4>
    <div class="areas">
      <coach-area-badge v-for="area in areas" :key="area">{{
        area
      }}</coach-area-badge>
    </div>
    <br />
    <div class="actions">
      <base-button mode="primary" :linkUrl="coachContactLink" link
        >Contact</base-button
      >
      <base-button mode="primary-filled" :linkUrl="coachDetailsLink" link
        >View Details</base-button
      >
    </div>
  </li>
</template>

<script>
import CoachAreaBadge from "./CoachAreaBadge";

export default {
  components: { "coach-area-badge": CoachAreaBadge },
  props: ["id", "firstName", "lastName", "areas", "rate"],
  computed: {
    fullname() {
      return this.firstName + " " + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
    coachDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>

<style scoped>
li {
  border: solid 1px var(--color-border);
  border-radius: 20px;
  padding: 1rem;
  margin: 12px 0;
}
h4::before {
  content: "$";
}
h4::after {
  content: "/hour";
}
div.actions {
  text-align: right;
}
div.actions a {
  margin-left: 16px;
}

h3 {
  color: var(--color-primary);
}
</style>