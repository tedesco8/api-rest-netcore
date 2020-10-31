<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span>{{ title }}</span>
      </v-col>
      <v-col>
        <v-text-field
          class="text-xs-center"
          v-model="search"
          append-icon="search"
          label="Búsqueda"
          single-line
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <!--Data Table-->
        <v-data-table
          :headers="headers"
          :items="arrayList"
          :search="search"
          :single-select="true"
          class="elevation-1"
        >
          <template v-if="opciones" v-slot:item.opciones="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon small class="mr-2" v-on="on" @click="verIngreso(item)"
                  >tab</v-icon
                >
              </template>
              <span>Ver detalle</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon small class="mr-2" v-on="on" @click="editItem(item)"
                  >edit</v-icon
                >
              </template>
              <span>Editar artículo</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon small class="mr-2" v-on="on" @click="eliminar(item)"
                  >delete</v-icon
                >
              </template>
              <span>Eliminar</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Table",
  data() {
    return {
      search: "",
      select: "",
    };
  },
  props: {
    title: String,
    clientes: {
      type: Boolean,
      default: false,
    },
    compras: {
      type: Boolean,
      default: false,
    },
    editoriales: {
      type: Boolean,
      default: false,
    },
    empleados: {
      type: Boolean,
      default: false,
    },
    libros: {
      type: Boolean,
      default: false,
    },
    headers: Array,
    arrayList: Array,
    opciones: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    verIngreso(item) {
      this.$emit("detalle", item);
    },
    editItem(item) {
      this.$emit("edit", item);
      console.log(item);
    },
    eliminar(item) {
      this.$emit("delete", item);
    },
  },
};
</script>
