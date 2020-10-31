<template>
  <div>
    <v-app-bar app clipped-left color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Makers</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="salir()" icon v-if="logueado">
        <v-icon>logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app clipped color="secondary">
      <v-list dense>
        <v-list-item :to="{ name: 'home' }">
          <v-list-item-content>
            <v-list-item-avatar>
              <img src="../../assets/logo.png" />
            </v-list-item-avatar>
          </v-list-item-content>
        </v-list-item>
        <!-- Libros -->
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title class="white--text pt-2"
                  >Libros</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: '' }">
              <v-list-item-action>
                <v-icon dark>storage</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="white--text pt-2"
                  >Libros</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: '' }">
              <v-list-item-action>
                <v-icon dark>business</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="white--text pt-2"
                  >Editoriales</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
        <!-- Compras -->
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title class="white--text pt-2"
                  >Compras</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'coches' }">
              <v-list-item-action>
                <v-icon dark>directions_car</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="white--text pt-2"
                  >Compras</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
        <!-- Personas -->
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title class="white--text pt-2"
                  >Personas</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: '' }">
              <v-list-item-action>
                <v-icon dark>verified_user</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="white--text pt-2"
                  >Clientes</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: '' }">
              <v-list-item-action>
                <v-icon dark>check_circle</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="white--text pt-2"
                  >Empleados</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
  computed: {
    ...mapState("usuarioNamespace", ["usuario"]),
    logueado() {
      return this.usuario;
    },
    esAdministrador() {
      return this.usuario && this.usuario.rol == "Administrador";
    },
  },
  methods: {
    ...mapActions("usuarioNamespace", ["salir"]),
  },
  // created() {
  //   this.$vuetify.theme.dark = true;
  // },
};
</script>
