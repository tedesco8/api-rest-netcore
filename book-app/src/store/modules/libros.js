import axios from "axios";
import swal from 'sweetalert';

export default {
  namespaced: true,
  state: {
    libro: {},
    libros: [],
  },
  mutations: {
    setLibro(state, libro) {
      state.libro = libro;
    },
    setLibros(state, libros) {
      state.libros = libros;
    },
  },
  actions: {
    getLibros: async function({ commit }, token) {
      let header = { Token: token };
      let configuracion = { headers: header };
      let dataV = null;

      // debugger
      await axios
        .get("libros", configuracion)
        .then(function(response) {
          dataV = response.data;
          commit("setLibros", dataV);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getLibro: async function({ commit }, data) {
      let header = { Token: data.token };
      let configuracion = { headers: header };
      let dataV = null;

      await axios
        .get(`libros/${data.id}`, configuracion)
        .then(function(response) {
          dataV = response.data.detalles;
          commit("setLibro", dataV);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    saveLibro: async function({ dispatch }, data) {
      let header = { Token: data.token };
      let configuracion = { headers: header };
      // debugger

      await axios
        .post(
          "libros",
          {
            Titulo: data.Titulo,
            Editoriales: data.Editoriales,
            Fecha: data.Fecha,
            Costo: data.Costo,
            PrecioSugerido: data.PrecioSugerido,
          },
          configuracion
        )
        .then(function() {
          dispatch("getLibros", data.token);
          swal({
            title: "Buen trabajo!",
            text: `Libro agregado correctamente`,
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
    updateLibro: async function({ dispatch }, data) {
      let header = { Token: data.token };
      let configuracion = { headers: header };
      //debugger;
      await axios
        .put(
          `libros/${data.id}`,
          {
            Titulo: data.Titulo,
            Editoriales: data.Editoriales,
            Fecha: data.Fecha,
            Costo: data.Costo,
            PrecioSugerido: data.PrecioSugerido,
          },
          configuracion
        )
        .then(function() {
          dispatch("getLibros", data.token);
          swal({
            title: "Buen trabajo!",
            text: `Libro editado correctamente`,
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
    deleteLibro: async function({ dispatch }, data) {
      let token = data.token;
      let header = { Token: token };
      let configuracion = { headers: header };

      await axios
        .delete(`libros/${data.id}`, configuracion)
        .then(function() {
          // debugger
          dispatch("getLibros", data.token);
          swal({
            title: "Buen trabajo!",
            text: `Libro eliminado correctamente`,
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
