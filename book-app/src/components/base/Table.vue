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
            <v-tooltip v-if="!extra && !precio_extra" bottom>
              <template v-slot:activator="{ on }">
                <v-icon
                  v-if="item.estado"
                  small
                  class="mr-2"
                  v-on="on"
                  @click="activarDesactivar(2, item)"
                  >block</v-icon
                >
                <v-icon
                  v-else
                  small
                  class="mr-2"
                  @click="activarDesactivar(1, item)"
                  >check</v-icon
                >
              </template>
              <span>{{ item.estado ? "Anular" : "Activar" }}</span>
            </v-tooltip>
            <v-tooltip v-if="esAdministrador" bottom>
              <template v-slot:activator="{ on }">
                <v-icon small class="mr-2" v-on="on" @click="eliminar(item)"
                  >delete</v-icon
                >
              </template>
              <span>Eliminar</span>
            </v-tooltip>
            <v-tooltip v-if="reserva" bottom>
              <template v-slot:activator="{ on }">
                <v-icon small class="mr-2" v-on="on" @click="imprimir(item)"
                  >print</v-icon
                >
              </template>
              <span>Imprimir</span>
            </v-tooltip>
            <v-tooltip v-if="reserva" bottom>
              <template v-slot:activator="{ on }">
                <v-icon small class="mr-2" v-on="on" @click="email(item)"
                  >email</v-icon
                >
              </template>
              <span>Enviar por email</span>
            </v-tooltip>
          </template>
          <template v-slot:item.usuario="{ item }">
            <div>
              <span class="blue--text">{{ nombreUsuario(item) }}</span>
            </div>
          </template>
          <template v-if="reserva" v-slot:item.id_usuario="{ item }">
            <div>
              <span class="blue--text">{{ nombreUsuario(item) }}</span>
            </div>
          </template>
          <template v-if="reserva" v-slot:item.id_coche="{ item }">
            <div>
              <span class="green--text">{{ nombreCoche(item) }}</span>
            </div>
          </template>
          <template v-if="precio_extra" v-slot:item.extra="{ item }">
            <div>
              <span class="blue--text">{{ nombreExtra(item) }}</span>
            </div>
          </template>
          <template v-if="reserva" v-slot:item.id_persona="{ item }">
            <div>
              <span class="blue--text">{{ item.id_persona }}</span>
            </div>
          </template>
          <template v-if="reserva" v-slot:item.id="{ item }">
            <div>
              <span class="green--text">{{ item.id }}</span>
            </div>
          </template>
          <template v-slot:item.grupo="{ item }">
            <div>
              <span class="blue--text">{{ nombreGrupo(item) }}</span>
            </div>
          </template>
          <template v-if="extra" v-slot:item.nombre="{ item }">
            <div>
              <span class="blue--text">{{ item.nombre }}</span>
            </div>
          </template>
          <template v-if="coche" v-slot:item.combustible_actual="{ item }">
            <div>
              <span class="red--text" v-if="item.combustible_actual == 0"
                >Vacio</span
              >
              <span class="orange--text" v-if="item.combustible_actual == 1"
                >1/8</span
              >
              <span class="orange--text" v-if="item.combustible_actual == 2"
                >1/4</span
              >
              <span class="orange--text" v-if="item.combustible_actual == 3"
                >3/8</span
              >
              <span class="blue--text" v-if="item.combustible_actual == 4"
                >1/2</span
              >
              <span class="blue--text" v-if="item.combustible_actual == 5"
                >5/8</span
              >
              <span class="green--text" v-if="item.combustible_actual == 6"
                >3/4</span
              >
              <span class="green--text" v-if="item.combustible_actual == 7"
                >Full</span
              >
            </div>
          </template>
          <template v-if="coche" v-slot:item.estado="{ item }">
            <div>
              <span class="red--text" v-if="item.estado == 0">Inactivo</span>
              <span class="green--text" v-if="item.estado == 1">Libre</span>
              <span class="blue--text" v-if="item.estado == 2">Alquilado</span>
              <span class="orange--text" v-if="item.estado == 3"
                >En Taller</span
              >
              <span class="indigo--text" v-if="item.estado == 4">Vendido</span>
            </div>
          </template>
          <template v-else v-slot:item.estado="{ item }">
            <div>
              <span class="red--text" v-if="item.estado == false"
                >Inactivo</span
              >
              <span class="green--text" v-if="item.estado == true">Activo</span>
            </div>
          </template>
          <template v-if="reserva" v-slot:item.id_tarifa="{ item }">
            <div>
              <span class="blue--text">{{ item.id_tarifa }}</span>
            </div>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Table",
  data() {
    return {};
  },
  props: {
    title: String,
    coche: {
      type: Boolean,
      default: false,
    },
    reserva: {
      type: Boolean,
      default: false,
    },
    extra: {
      type: Boolean,
      default: false,
    },
    precio_extra: {
      type: Boolean,
      default: false,
    },
    headers: Array,
    arrayList: Array,
    search: "",
    select: "",
    opciones: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.getUsuarios(this.token);
  },
  computed: {
    ...mapState("usuarioNamespace", ["token", "usuario", "usuarios"]),
    ...mapState("grupoNamespace", ["grupos"]),
    ...mapState("cocheNamespace", ["coches"]),
    ...mapState("extraNamespace", ["extras"]),
    logueado() {
      return this.usuario;
    },
    esAdministrador() {
      return this.usuario && this.usuario.rol == "Administrador";
    },
  },
  methods: {
    ...mapActions("usuarioNamespace", ["getUsuarios"]),
    nombreUsuario: function(item) {
      let me = this;
      let nombre = "";
      this.usuarios.forEach((i) => {
        if (i.id === item.id_usuario) {
          nombre = i.nombre;
        }
      });
      return nombre;
    },
    nombreGrupo: function(item) {
      let me = this;
      let nombre = "";
      this.grupos.forEach((i) => {
        if (i.id === item.grupo) {
          nombre = i.nombre;
        }
      });
      return nombre;
    },
    nombreExtra: function(item) {
      let me = this;
      let nombre = "";
      this.extras.forEach((i) => {
        if (i.id === item.id) {
          nombre = i.nombre;
        }
      });
      return nombre;
    },
    nombreCoche: function(item) {
      let me = this;
      let nombre = "";
      this.coches.forEach((i) => {
        if (i.id === item.id_coche) {
          nombre = i.marca + " " + i.modelo;
        }
      });
      return nombre;
    },
    activarDesactivar(action, item) {
      this.$emit("act", action, item);
    },
    verIngreso(item) {
      this.$emit("detalle", item);
    },
    editItem(item) {
      this.$emit("edit", item);
      console.log(item);
    },
    imprimir(item) {
      this.$emit("imprimir", item);
    },
    email(item) {
      this.$emit("email", item);
    },
    eliminar(item) {
      this.$emit("delete", item);
    },
  },
};
</script>
