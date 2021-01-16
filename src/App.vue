<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    dashboardList() {
      return this.$store.getters.getDashboardList;
    }
  },

  created() {
    window.addEventListener("beforeunload", this.saveChanges);
    const cards = localStorage.getItem("abdiyev_cards");
    if (cards && cards.length) {
      this.$store.dispatch("SET_DASHBOARD_LIST", JSON.parse(cards));
    }
  },

  methods: {
    saveChanges() {
      localStorage.setItem("abdiyev_cards", JSON.stringify(this.dashboardList));
      window.removeEventListener("beforeunload", this.saveChanges);
    }
  }
};
</script>

<style lang="scss">
@import "assets/style/bootstrap-grid.min.css";
@import "assets/style/app";
</style>
