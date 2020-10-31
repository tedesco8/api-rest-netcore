import decode from "jwt-decode";
import axios from "axios";
import router from "../../router";
import swal from 'sweetalert';

export default {
  namespaced: true,
  state: {
    token: null,
    usuario: null,
    usuarioQuery: {},
    usuarios: [],
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUsuario(state, usuario) {
      state.usuario = usuario;
    },
    llenarUsuarios(state, data) {
      state.usuarios = data;
    },
    llenarUsuario(state, data) {
      state.usuarioQuery = data;
    },
  },
  actions: {
    guardarToken({ commit }, token) {
      commit("setToken", token);
      commit("setUsuario", decode(token));
      localStorage.setItem("token", token);
    },
    autoLogin({ commit }) {
      let token = localStorage.getItem("token");

      let decodificado = decode(token);
      
      var current_time = Date.now() / 1000;
      if (decodificado.exp < current_time) {
        router.push({ name: "login" });
      } else {
        commit("setToken", token);
        commit("setUsuario", decodificado);
        router.push({ name: "home" });
      }
    },
    salir({ commit }) {
      commit("setToken", null);
      commit("setUsuario", null);
      localStorage.removeItem("token");
      router.push({ name: "login" });
    },
    getUsuarios: async function({ commit }, token) {
      let header = { Token: token };
      let configuracion = { headers: header };
      let dataV = null;

      // debugger
      await axios
        .get("usuarios", configuracion)
        .then(function(response) {
          dataV = response.data;
          commit("llenarUsuarios", dataV);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getUsuario: async function({ commit }, data) {
      let header = { Token: data.token };
      let configuracion = { headers: header };
      let dataV = null;

      await axios
        .get(`usuarios/${data.id}`, configuracion)
        .then(function(response) {
          dataV = response.data.detalles;
          commit("llenarUsuario", dataV);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    saveUsuario: async function({ dispatch }, data) {
      let header = { Token: data.token };
      let configuracion = { headers: header };
      //// debugger

      await axios
        .post(
          "usuarios",
          {
            
          },
          configuracion
        )
        .then(function(res) {
          dispatch("getUsuarios", data.token);
          swal({
            title: "Buen trabajo!",
            text: `Usuario ${res.data.nombre} agregado correctamente`,
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
    updateUsuario: async function({ dispatch }, data) {
      let header = { Token: data.token };
      let configuracion = { headers: header };
      //debugger;
      await axios
        .put(
          "usuarios",
          {
            
          },
          configuracion
        )
        .then(function(res) {
          dispatch("getUsuarios", data.token);
          swal({
            title: "Buen trabajo!",
            text: `Usuario ${res.data.nombre} editado correctamente`,
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
    deleteUsuario: async function({ dispatch }, data) {
      let token = data.token;
      let header = { Token: token };
      let configuracion = { headers: header };

      await axios
        .delete(`usuarios/${data.id}`, configuracion)
        .then(function() {
          // debugger
          dispatch("getUsuarios", data.token);
          swal({
            title: "Buen trabajo!",
            text: `Usuario eliminado correctamente`,
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
