<template>
  <v-container grid-list-m>
    <v-row>
      <Indicadores1 :items="items" />
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="7">
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="7">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import Indicadores1 from "../components/dashboard/Indicadores";

export default {
  data() {
    return {
      items: [
        {
          color: "indigo darken-1",
          cuantity: "",
          title: "Compras",
          artist: "Compras",
        },
        {
          color: "indigo darken-1",
          cuantity: "0",
          title: "Libros",
          artist: "Libros",
        },
        {
          color: "indigo darken-1",
          cuantity: "",
          title: "Clientes",
          artist: "Total de clientes",
        },
        {
          color: "indigo darken-1",
          cuantity: "",
          title: "Editoriales",
          artist: "Editoriales",
        },
        {
          color: "indigo darken-1",
          cuantity: "",
          title: "Empleados",
          artist: "Empleados",
        },
      ],
    };
  },
  components: {
    Indicadores1,
  },
  computed: {
    ...mapState("usuarioNamespace", ["token", "usuarios"]),
  },
  methods: {
    totalReservas() {
      this.items[0].cuantity = this.reservas.length;
    },
    totalContratos() {
      this.items[1].cuantity = this.contratos.length;
    },
    totalClientes() {
      this.items[2].cuantity = this.clientes.length;
    },
    totalCoches() {
      this.items[3].cuantity = this.coches.length;
    },
    cochesDisponibles() {
      this.items[4].cuantity = this.cochesD.length;
    },
    totalTareas() {
      this.items[5].cuantity = this.tareas.length;
    },
  },
};
</script>
