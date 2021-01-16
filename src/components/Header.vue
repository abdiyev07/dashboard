<template>
  <header class="header">
    <Switcher />
    <button class="button header__add-button" @click="toAddCard">
      Добавить
    </button>
  </header>
</template>

<script>
import Switcher from "@/components/Switcher";

export default {
  name: "AppHeader",
  methods: {
    toAddCard() {
      this.$router.push("/new-card");
    }
  },

  components: { Switcher }
};
</script>
