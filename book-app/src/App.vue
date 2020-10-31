<template>
  <v-app id="app">
    <NavBar />
    <v-main>
      <v-container fluid fill-height>
        <v-slide-y-transition mode="out-in">
          <router-view />
        </v-slide-y-transition>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    NavBar,
    Footer,
  },
  created() {
    // this.autoLogin();
  },
  methods: {
    ...mapActions("usuariosNamespace", ["autoLogin"]),
  },
  computed: {
    ...mapState("usuariosNamespace", ["token", "usuario"]),
  },
};
</script>
