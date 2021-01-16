d<template>
  <div class="row">
    <draggable
      v-model="dashboardList"
      class="dashboard mt-5"
      :sort="true"
      :disabled="!isDraggable"
    >
      <DashboardElement
        v-for="(element, index) in dashboardList"
        :key="index"
        :element="element"
      />
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import DashboardElement from "@/components/DashboardElement";

export default {
  name: "AppDashboard",
  computed: {
    dashboardList: {
      get() {
        return this.$store.state.dashboard.dashboardList;
      },
      set(value) {
        this.$store.dispatch("SET_DASHBOARD_LIST", value);
      }
    },

    isDraggable() {
      return this.$store.getters.getDraggableValue;
    }
  },

  components: {
    DashboardElement,
    draggable
  }
};
</script>
