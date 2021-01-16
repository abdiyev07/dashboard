 <template>
  <main class="main">
    <div class="container">
      <Header />
      <Dashboard />
      <transition name="fade-in" mode="out-in">
      <Modal v-if="showModal"/>
    </transition>
    </div>
  </main>
</template>

<script>
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";

export default {
  name: "Home",
  computed: {
    dashboardList() {
      return this.$store.getters.getDashboardList;
    },
    
    showModal() {
      return this.$store.getters.getModalValue
    }
  },

  components: {
    Header,
    Dashboard,
    Modal: () => import("@/components/Modal")
  }
};
</script>
