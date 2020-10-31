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
      let data = null;

      // debugger
      await axios
        .get("usuario/list", configuracion)
        .then(function(response) {
          data = response.data;
          commit("llenarUsuarios", data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getUsuario: async function({ commit }, dataUsuario) {
      let header = { Token: dataUsuario.token };
      let configuracion = { headers: header };
      let data = null;

      await axios
        .get(`usuario/query?id=${dataUsuario.id}`, configuracion)
        .then(function(response) {
          data = response.data.detalles;
          commit("llenarUsuario", data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    saveUsuario: async function({ dispatch }, dataUsuario) {
      let header = { Token: dataUsuario.token };
      let configuracion = { headers: header };
      // debugger

      await axios
        .post(
          "usuario/add",
          {
            usuario: dataUsuario.usuario,
            nombre: dataUsuario.nombre,
            apellido: dataUsuario.apellido,
            email: dataUsuario.email,
            contrasena: dataUsuario.contrasena,
          },
          configuracion
        )
        .then(function(res) {
          dispatch("getUsuarios", dataUsuario.token);
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
    updateUsuario: async function({ dispatch }, dataUsuario) {
      let header = { Token: dataUsuario.token };
      let configuracion = { headers: header };
      //debugger;
      await axios
        .put(
          "usuario/update",
          {
              id: dataUsuario.id,
              usuario: dataUsuario.usuario,
              tipo: dataUsuario.tipo,
              nombre: dataUsuario.nombre,
              tipo_documento: dataUsuario.tipo_documento,
              num_documento: dataUsuario.num_documento,
              direccion: dataUsuario.direccion,
              telefono: dataUsuario.telefono,
              email: dataUsuario.email,
              password: dataUsuario.password,
          },
          configuracion
        )
        .then(function(res) {
          dispatch("getUsuarios", dataUsuario.token);
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
    activateUsuario: async function({ dispatch }, dataUsuario) {
      let header = { Token: dataUsuario.token };
      let configuracion = { headers: header };
      //debugger
      await axios
        .put(`usuario/activate`, { _id: dataUsuario.id }, configuracion)
        .then(function() {
          dispatch("getUsuarios", dataUsuario.token);
          swal({
            title: "Buen trabajo!",
            text: `Usuario activado correctamente`,
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
    deactivateUsuario: async function({ dispatch }, dataUsuario) {
      let header = { Token: dataUsuario.token };
      let configuracion = { headers: header };
      //debugger
      await axios
        .put("usuario/deactivate", { _id: dataUsuario.id }, configuracion)
        .then(function() {
          dispatch("getUsuarios", dataUsuario.token);
          swal({
            title: "Buen trabajo!",
            text: `Usuario desactivado correctamente`,
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
    deleteUsuario: async function({ dispatch }, dataUsuario) {
      let token = dataUsuario.token;
      let header = { Token: token };
      let configuracion = { headers: header };

      await axios
        .delete(`usuario/remove?_id=${dataUsuario.id}`, configuracion)
        .then(function() {
          // debugger
          dispatch("getUsuarios", dataUsuario.token);
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
