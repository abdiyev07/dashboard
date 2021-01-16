<template>
  <div class="col-lg-3 mb-5">
    <div class="dashboard__element" @dblclick="openModal">
      <h3 class="dashboard__element-title">
        {{ element.title }}
      </h3>
      <p class="dashboard__element-body">
        {{ element.body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDashboardElement',
  props: {
    element: Object
  },
  
  methods: {
    openModal() {
      this.$store.dispatch("SET_SELECTED_CARD", this.element);
      this.$store.commit("SHOW_MODAL");
    }
  }
};
</script>
