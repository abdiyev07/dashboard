<template>
  <section class="section">
    <h2 class="title section-title mb-5">Добавить новую карточку</h2>
    <form class="form card-form" @submit.prevent="addNewCard">
      <input
        type="text"
        placeholder="Заголовок"
        v-model.trim="title"
        class="card-form__title-input"
      />
      <textarea
        placeholder="Текст"
        v-model.trim="body"
        class="card-form__body-input"
      />
      <button class="button card-form__button" type="submit">
        Добавить
      </button>
      <button class="button card-form__button" @click.prevent="goBack">
        Отмена
      </button>
    </form>
  </section>
</template>

<script>
export default {
  data: () => ({
    title: "",
    body: ""
  }),

  methods: {
    addNewCard() {
      if (!this.title || !this.body) return;

      this.$store.dispatch("ADD_DASHBOARD_ITEM", {
        title: this.title,
        body: this.body
      });

      this.goBack();
    },

    goBack() {
      this.$router.push("/");
    }
  }
};
</script>
