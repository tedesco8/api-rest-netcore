import decode from "jwt-decode";
import axios from "axios";
import router from "../../router";
import swal from 'sweetalert';

export default {
  namespaced: true,
  state: {
    editorial: {},
    editoriales: [],
  },
  mutations: {
    setEditorial(state, editorial) {
      state.editorial = editorial;
    },
    setEditoriales(state, editoriales) {
      state.editoriales = editoriales;
    },
  },
  actions: {
    getEditoriales: async function({ commit }, token) {
      let header = { Token: token };
      let configuracion = { headers: header };
      let data = null;

      // debugger
      await axios
        .get("editoriales", configuracion)
        .then(function(response) {
          data = response.data;
          commit("setEditoriales", data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getEditorial: async function({ commit }, data) {
      let header = { Token: data.token };
      let configuracion = { headers: header };
      let data = null;

      await axios
        .get(`editoriales/${data.id}`, configuracion)
        .then(function(response) {
          data = response.data;
          commit("setEditorial", data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    saveEditorial: async function({ dispatch }, data) {
      let header = { Token: data.token };
      let configuracion = { headers: header };
      // debugger

      await axios
        .post(
          "editoriales",
          {
            Nombre: data.Nombre,
          },
          configuracion
        )
        .then(function(res) {
          dispatch("getEditoriales", data.token);
          swal({
            title: "Buen trabajo!",
            text: `Editorial agregado correctamente`,
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
    updateEditorial: async function({ dispatch }, data) {
      let header = { Token: data.token };
      let configuracion = { headers: header };
      //debugger;
      await axios
        .put(
          `editoriales/${data.id}`,
          {
            Nombre: data.Nombre,
          },
          configuracion
        )
        .then(function(res) {
          dispatch("getEditoriales", data.token);
          swal({
            title: "Buen trabajo!",
            text: `Editorial editada correctamente`,
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
    deleteEditorial: async function({ dispatch }, data) {
      let token = data.token;
      let header = { Token: token };
      let configuracion = { headers: header };

      await axios
        .delete(`editoriales/${data.id}`, configuracion)
        .then(function() {
          // debugger
          dispatch("getEditoriales", data.token);
          swal({
            title: "Buen trabajo!",
            text: `Editorial eliminada correctamente`,
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
