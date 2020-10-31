import axios from "axios";
import swal from 'sweetalert';

export default {
  namespaced: true,
  state: {
    cliente: {},
    clientes: [],
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setCliente(state, cliente) {
      state.cliente = cliente;
    },
    setClientes(state, clientes) {
      state.clientes = clientes;
    },
  },
  actions: {
    getClientes: async function({ commit }, token) {
      let header = { Token: token };
      let configuracion = { headers: header };
      let dataV = null;

      // debugger
      await axios
        .get("clientes", configuracion)
        .then(function(response) {
          dataV = response.data;
          commit("setClientes", dataV);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getCliente: async function({ commit }, data) {
      let header = { Token: data.token };
      let configuracion = { headers: header };
      let dataV = null;

      await axios
        .get(`clientes/${data.id}`, configuracion)
        .then(function(response) {
          dataV = response.data.detalles;
          commit("setCliente", dataV);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    saveCliente: async function({ dispatch }, data) {
      let header = { Token: data.token };
      let configuracion = { headers: header };
      // debugger

      await axios
        .post(
          "clientes",
          {
            Identificacion: data.Identificacion,
            Nombres: data.Nombres,
            Apellidos: data.Apellidos,
            DireccionEnvio: data.DireccionEnvio,
            TelefonoFijo: data.TelefonoFijo,
            Celular: data.Celular,
            Email: data.Email,
          },
          configuracion
        )
        .then(function() {
          dispatch("getClientes", data.token);
          swal({
            title: "Buen trabajo!",
            text: `Cliente agregado correctamente`,
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
    updateCliente: async function({ dispatch }, data) {
      let header = { Token: data.token };
      let configuracion = { headers: header };
      //debugger;
      await axios
        .put(
          `clientes/${data.id}`,
          {
            Identificacion: data.Identificacion,
            Nombres: data.Nombres,
            Apellidos: data.Apellidos,
            DireccionEnvio: data.DireccionEnvio,
            TelefonoFijo: data.TelefonoFijo,
            Celular: data.Celular,
            Email: data.Email,
          },
          configuracion
        )
        .then(function() {
          dispatch("getClientes", data.token);
          swal({
            title: "Buen trabajo!",
            text: `Cliente editado correctamente`,
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
    deleteCliente: async function({ dispatch }, data) {
      let token = data.token;
      let header = { Token: token };
      let configuracion = { headers: header };

      await axios
        .delete(`clientes/${data.id}`, configuracion)
        .then(function() {
          // debugger
          dispatch("getClientes", data.token);
          swal({
            title: "Buen trabajo!",
            text: `Cliente eliminado correctamente`,
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
