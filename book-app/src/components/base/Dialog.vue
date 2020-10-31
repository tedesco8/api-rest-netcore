<template>
  <v-dialog v-model="show" max-width="290">
    <v-card>
      <v-card-title class="headline"
        >{{formTitle}} {{ object.element }}</v-card-title
      >
      <v-card-text v-if="!correo">
        Estás a punto de {{formTitle}}
        el {{ object.element }} {{ object.adId }}
      </v-card-text>
      <v-card-text v-else>
        Estás a punto de enviar por email la reserva {{ object.adId }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          @click="cancelar()"
          color="green darken-1"
          text="text"
          >Cancelar</v-btn
        >
        <v-btn
          @click="send()"
          color="orange darken-4"
          text="text"
          >{{formTitle}}</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    object: Object,
    show: Boolean,
    correo: Boolean
  },
  computed: {
    formTitle() {
      let me = this;
      let titulo = ''
      if(me.object.adAccion == 1) {
        titulo = 'Activar'
      } else if (me.object.adAccion == 2) {
        titulo = 'Desactivar'
      } else if (me.object.adAccion == 3) {
        titulo = 'Enviar email'
      } else {
        titulo = 'Eliminar'
      }
      // this.update ? "Edución de registro" : "Nuevo registro";
      return titulo
    },
  },
  methods: {
    cancelar() {
      this.$emit("close");
    },
    send() {
      debugger
      let me = this;
      if(this.object.adAccion == 1) {
        this.$emit("activate", me.object.adId)
      } else if (this.object.adAccion == 2) {
        this.$emit("deactivate", me.object.adId)
      } else if (this.object.adAccion == 3) {
        this.$emit("email", me.object.obj)
      } else {
        this.$emit("delete", me.object.id)
      }
    },
  },
};
</script>

<style></style>
