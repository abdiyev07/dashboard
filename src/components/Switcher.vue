<template>
  <div class="switcher">
    <div
      class="switcher__on"
      @click="switcher"
      :class="{ switcher__on_active: isDraggable }"
    >
      On
    </div>
    <div
      class="switcher__off"
      @click="switcher"
      :class="{ switcher__off_active: !isDraggable }"
    >
      Off
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSwitcher",
  data: () => ({
    isActive: false
  }),

  computed: {
    isDraggable() {
      return this.$store.getters.getDraggableValue;
    }
  },
  
  methods: {
    switcher() {
      this.$store.dispatch("TOGGLE_DRAGGABLE");
    }
  }
};
</script>
