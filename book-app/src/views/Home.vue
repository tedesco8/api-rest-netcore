<template>
  <v-container grid-list-m>
    <v-row>
      <Indicadores :items="items" />
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
import { mapState, mapActions } from "vuex";
import Indicadores from "../components/dashboard/Indicadores";

export default {
  data() {
    return {
      items: [
        {
          color: "#1565C0",
          cuantity: "0",
          title: "Compras",
          artist: "Compras",
        },
        {
          color: "#1565C0",
          cuantity: "0",
          title: "Libros",
          artist: "Libros",
        },
        {
          color: "#1565C0",
          cuantity: "0",
          title: "Clientes",
          artist: "Total de clientes",
        },
        {
          color: "#1565C0",
          cuantity: "0",
          title: "Editoriales",
          artist: "Editoriales",
        },
        {
          color: "#1565C0",
          cuantity: "0",
          title: "Empleados",
          artist: "Empleados",
        },
      ],
    };
  },
  created() {
    // this.getAll();
  },
  mounted() {
    this.totalCompras(),
    this.totalLibros(),
    this.totalClientes(),
    this.totalCoches(),
    this.totalEmpleados()
  },
  components: {
    Indicadores,
  },
  computed: {
    ...mapState("usuariosNamespace", ["token", "usuario"]),
    ...mapState("clientesNamespace", ["clientes"]),
    ...mapState("empleadosNamespace", ["empleados"]),
    ...mapState("editorialesNamespace", ["editoriales"]),
    ...mapState("comprasNamespace", ["compras"]),
    ...mapState("librosNamespace", ["libros"]),
  },
  methods: {
    ...mapActions("librosNamespace", ["getLibros"]),
    ...mapActions("clientesNamespace", ["getClientes"]),
    ...mapActions("empleadosNamespace", ["getEmpleados"]),
    ...mapActions("editorialesNamespace", ["getEditoriales"]),
    ...mapActions("comprasNamespace", ["getCompras"]),
    async getAll() {
      await this.getLibros(this.token);
      await this.getClientes(this.token);
      await this.getEmpleados(this.token);
      await this.getEditoriales(this.token);
      await this.getCompras(this.token);
    },
    totalCompras() {
      this.items[0].cuantity = this.compras.length;
    },
    totalLibros() {
      this.items[1].cuantity = this.libros.length;
    },
    totalClientes() {
      this.items[2].cuantity = this.clientes.length;
    },
    totalCoches() {
      this.items[3].cuantity = this.editoriales.length;
    },
    totalEmpleados() {
      this.items[4].cuantity = this.empleados.length;
    }
  },
};
</script>
