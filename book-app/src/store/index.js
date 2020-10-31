import Vue from "vue";
import Vuex from "vuex";
import clientesNamespace from "./modules/clientes"
import empleadosNamespace from "./modules/empleados"
import editorialesNamespace from "./modules/editoriales"
import comprasNamespace from "./modules/compras"
import librosNamespace from "./modules/libros"
import usuariosNamespace from "./modules/usuarios"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    clientesNamespace,
    empleadosNamespace,
    editorialesNamespace,
    comprasNamespace,
    librosNamespace,
    usuariosNamespace
  }
});
