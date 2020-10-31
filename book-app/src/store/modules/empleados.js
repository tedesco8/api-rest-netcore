import axios from "axios";
import swal from 'sweetalert';

export default {
  namespaced: true,
  state: {
    empleado: {},
    empleados: [],
  },
  mutations: {
    setEmpleado(state, empleado) {
      state.empleado = empleado;
    },
    setEmpleados(state, empleados) {
      state.empleados = empleados;
    },
  },
  actions: {
    getEmpleados: async function({ commit }, token) {
      let header = { Token: token };
      let configuracion = { headers: header };
      let dataV = null;

      // debugger
      await axios
        .get("empleados", configuracion)
        .then(function(response) {
          dataV = response.data;
          commit("setEmpleados", dataV);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getEmpleado: async function({ commit }, data) {
      let header = { Token: data.token };
      let configuracion = { headers: header };
      let dataV = null;

      await axios
        .get(`empleados/${data.id}`, configuracion)
        .then(function(response) {
          dataV = response.data.detalles;
          commit("setEmpleado", dataV);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    saveEmpleado: async function({ dispatch }, data) {
      let header = { Token: data.token };
      let configuracion = { headers: header };
      // debugger

      await axios
        .post(
          "empleados/",
          {
            Nombres: data.Nombres,
            Apellidos: data.Apellidos,
            Direccion: data.Direccion,
            TelefonoFijo: data.TelefonoFijo,
            Celular: data.Celular,
            Cargo: data.Cargo,
          },
          configuracion
        )
        .then(function() {
          dispatch("getEmpleados", data.token);
          swal({
            title: "Buen trabajo!",
            text: `Empleado agregado correctamente`,
            icon: "success",
          });
        })
        .catch(function(error) {
          swal({
            title: "Lo sentimos!",
            text: `Ha ocurrido un error de tipo ${error}`,
            icon: "error",
          });
        });
    },
    updateEmpleado: async function({ dispatch }, data) {
      let header = { Token: data.token };
      let configuracion = { headers: header };
      //debugger;
      await axios
        .put(
          `empleados/${data.id}`,
          {
            Nombres: data.Nombres,
            Apellidos: data.Apellidos,
            Direccion: data.Direccion,
            TelefonoFijo: data.TelefonoFijo,
            Celular: data.Celular,
            Cargo: data.Cargo,
          },
          configuracion
        )
        .then(function() {
          dispatch("getEmpleados", data.token);
          swal({
            title: "Buen trabajo!",
            text: `Empleado editado correctamente`,
            icon: "success",
          });
        })
        .catch(function(error) {
          swal({
            title: "Lo sentimos!",
            text: `Ha ocurrido un error de tipo ${error}`,
            icon: "error",
          });
        });
    },
    deleteEmpleado: async function({ dispatch }, data) {
      let token = data.token;
      let header = { Token: token };
      let configuracion = { headers: header };

      await axios
        .delete(`empleados/${data.id}`, configuracion)
        .then(function() {
          // debugger
          dispatch("getEmpleados", data.token);
          swal({
            title: "Buen trabajo!",
            text: `Empleado eliminado correctamente`,
            icon: "success",
          });
        })
        .catch(function(error) {
          swal({
            title: "Lo sentimos!",
            text: `Ha ocurrido un error de tipo ${error}`,
            icon: "error",
          });
          console.log(error);
        });
    },
  },
};
