<template>
  <v-dialog v-model="show" max-width="1200px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="4">
            <v-autocomplete
              v-model="object.tipo_cliente"
              :items="tipoclienteArr"
              dense
              label="Tipo de cliente"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              type="text"
              v-model="object.nombre"
              label="Nombre"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              type="text"
              v-model="object.apellido"
              label="Apellido"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              type="email"
              v-model="object.email"
              label="Email"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-menu
              v-model="dateFN"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="object.fecha_nacimiento"
                  label="Fecha de nacimiento"
                  prepend-icon="event"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date_FN"
                @input="dateFN = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              type="text"
              v-model="object.pais"
              label="País"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              type="text"
              v-model="object.tipo_documento"
              label="Tipo documento"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              type="text"
              v-model="object.num_documento"
              label="Número documento"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-menu
              v-model="dateDE"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="object.doc_expedido"
                  label="Expedido"
                  prepend-icon="event"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date_DE"
                @input="dateDE = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" md="3">
            <v-menu
              v-model="dateDV"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="object.doc_vencimiento"
                  label="Vencimiento"
                  prepend-icon="event"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date_DV"
                @input="dateDV = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              type="text"
              v-model="object.licencia"
              label="Licencia"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-menu
              v-model="dateLE"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="object.lic_expedido"
                  label="Expedida"
                  prepend-icon="event"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date_LE"
                @input="dateLE = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" md="4">
            <v-menu
              v-model="dateLV"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="object.lic_vencimiento"
                  label="Vencimiento"
                  prepend-icon="event"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date_LV"
                @input="dateLV = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              type="text"
              v-model="object.telefono"
              label="Fax"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              type="text"
              v-model="object.telefono_movil"
              label="Móvil"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            Reputación
            <v-rating
              v-model="object.reputacion"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
              medium
              label="Móvil"
            ></v-rating>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              type="text"
              v-model="object.direccion_habitual"
              label="Dirección habitual"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              type="text"
              v-model="object.municipio_habitual"
              label="Municipio habitual"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              type="text"
              v-model="object.provincia_habitual"
              label="Provincia habitual"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              type="text"
              v-model="object.direccion_local"
              label="Dirección local"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              type="text"
              v-model="object.municipio_local"
              label="Municipio local"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              type="text"
              v-model="object.provincia_local"
              label="Provincia local"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-responsive class="pt-4">
              <img aspect-ratio="1" :src="object.imagen" />
            </v-responsive>
          </v-col>
          <v-col cols="12" md="6">
            <v-textarea
              v-model="object.observaciones"
              justify="space-between"
              outlined
              name="input-7-4"
              label="Observaciones"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn v-if="object" color="blue darken-1" text @click="close">
          Volver
        </v-btn>
        <v-btn v-else color="blue darken-1" text @click="close">
          Cancelar
        </v-btn>
        <v-btn v-if="!detalle" color="blue darken-1" text @click="guardar">
          Guardar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
import { required } from "vuelidate/lib/validators";
import moment from "moment";

export default {
  data() {
    return {
      image: "",
      rulesImage: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      ],
      tipoclienteArr: ["Particular", "Empresa"],
      date_FN: new Date().toISOString().substr(0, 10),
      date_DV: new Date().toISOString().substr(0, 10),
      date_DE: new Date().toISOString().substr(0, 10),
      date_LE: new Date().toISOString().substr(0, 10),
      date_LV: new Date().toISOString().substr(0, 10),
      dateFN: false,
      dateDV: false,
      dateDE: false,
      dateLE: false,
      dateLV: false,
    };
  },
  props: {
    object: Object,
    show: Boolean,
    update: Boolean,
    detalle: Boolean,
  },
  validations: {
    tipo_cliente: { required },
    nombre: { required },
    apellido: { required },
  },
  computed: {
    ...mapState("clienteNamespace", ["cliente"]),
    formTitle() {
      let me = this;
      let titulo = "";
      if (me.update) {
        titulo = "Edución de registro";
      } else if (me.detalle) {
        titulo = "Detalle";
      } else {
        titulo = "Nuevo registro";
      }
      // this.update ? "Edución de registro" : "Nuevo registro";
      return titulo;
    },
    tipoClienteErrors() {
      const errors = [];
      if (!this.$v.tipo_cliente.$dirty) return errors;
      // !this.$v.name.decimal && errors.push('Name must be a number')
      !this.$v.tipo_cliente.required &&
        errors.push("Debes seleccionar el tipo de cliente");
      return errors;
    },
    nombreErrors() {
      const errors = [];
      if (!this.$v.nombre.$dirty) return errors;
      // !this.$v.name.decimal && errors.push('Name must be a number')
      !this.$v.nombre.required && errors.push("El nombre es requerido");
      return errors;
    },
    apellidoErrors() {
      const errors = [];
      if (!this.$v.apellido.$dirty) return errors;
      // !this.$v.name.decimal && errors.push('Name must be a number')
      !this.$v.apellido.required && errors.push("EL apellido es requerido");
      return errors;
    },
  },
  methods: {
    guardar() {
      debugger;
      (this.object.fecha_nacimiento = this.date_FN),
        (this.object.doc_vencimiento = this.date_DV),
        (this.object.doc_expedido = this.date_DE),
        (this.object.lic_expedido = this.date_LE),
        (this.object.lic_vencimiento = this.date_LV),
        this.$emit("save", this.object);
    },
    close() {
      this.$emit("close");
    },
  },
  watch: {
    date_FN: function(val) {
      this.object.fecha_nacimiento = moment(val).format("LL");
    },
    date_DV: function(val) {
      this.object.doc_vencimiento = moment(val).format("LL");
    },
    date_DE: function(val) {
      this.object.doc_expedido = moment(val).format("LL");
    },
    date_LE: function(val) {
      this.object.lic_expedido = moment(val).format("LL");
    },
    date_LV: function(val) {
      this.object.lic_vencimiento = moment(val).format("LL");
    },
  },
};
</script>

<style></style>
