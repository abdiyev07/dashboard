<template>
  <div class="card-modal__wrapper" @click="closeModal">
    <div class="card-modal">
      <h3 class="card-modal__title">{{ card.title }}</h3>
      <br><hr><br>
      <p class="card-modal__body">{{ card.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  computed: {
    card() {
      return this.$store.getters.getSelectedCard;
    }
  },

  methods: {
    closeModal(event) {
      if (event.target && event.target.className === "card-modal__wrapper") {
        this.$store.commit("CLOSE_MODAL");
      }
    }
  }
};
</script>
