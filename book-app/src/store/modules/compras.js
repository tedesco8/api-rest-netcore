import axios from "axios";
import swal from 'sweetalert';

export default {
  namespaced: true,
  state: {
    compra: null,
    compras: [],
  },
  mutations: {
    setCompra(state, compra) {
      state.compra = compra;
    },
    setCompras(state, compras) {
      state.compras = compras;
    },
  },
  actions: {
    getCompras: async function({ commit }, token) {
      let header = { Token: token };
      let configuracion = { headers: header };
      let dataV = null;

      // debugger
      await axios
        .get("compras", configuracion)
        .then(function(response) {
          dataV = response.data;
          commit("setCompras", dataV);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getCompra: async function({ commit }, data) {
      let header = { Token: data.token };
      let configuracion = { headers: header };
      let dataV = null;

      await axios
        .get(`compras/${data.id}`, configuracion)
        .then(function(response) {
          dataV = response.data;
          commit("setCompra", dataV);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    saveCompras: async function({ dispatch }, data) {
      let header = { Token: data.token };
      let configuracion = { headers: header };
      // debugger

      await axios
        .post(
          "compras",
          {
            Libros: data.Libros,
            Clientes: data.Clientes,
            Fecha: data.Fecha,
            Valor: data.Valor,
            Empleados: data.Empleados,
          },
          configuracion
        )
        .then(function() {
          dispatch("getCompras", data.token);
          swal({
            title: "Buen trabajo!",
            text: `Compra agregado correctamente`,
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
    updateCompras: async function({ dispatch }, data) {
      let header = { Token: data.token };
      let configuracion = { headers: header };
      //debugger;
      await axios
        .put(
          `compras/${data.id}`,
          {
            Libros: data.Libros,
            Clientes: data.Clientes,
            Fecha: data.Fecha,
            Valor: data.Valor,
            Empleados: data.Empleados,
          },
          configuracion
        )
        .then(function() {
          dispatch("getCompras", data.token);
          swal({
            title: "Buen trabajo!",
            text: `Compra editada correctamente`,
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
    deleteCompras: async function({ dispatch }, data) {
      let token = data.token;
      let header = { Token: token };
      let configuracion = { headers: header };

      await axios
        .delete(`compras/${data.id}`, configuracion)
        .then(function() {
          // debugger
          dispatch("getCompras", data.token);
          swal({
            title: "Buen trabajo!",
            text: `Compra eliminada correctamente`,
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
