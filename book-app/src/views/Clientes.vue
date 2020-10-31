<template>
  <Table
    :title="'Clientes'"
    :opciones="true"
    :headers="headers"
    :arrayList="clientes"
  />
</template>

<script>
import { mapState } from "vuex";
import Table from "../components/base/Table";
import Headers from "../util/headers";
export default {
  data() {
    return {
      headers: Headers.headersClientes,
    };
  },
  components: {
    Table,
  },
  computed: {
    ...mapState("clientesNamespace", ["clientes"]),
  },
};
</script>

<style></style>
