<template>
  <Table
    :title="'Empleados'"
    :opciones="true"
    :headers="headers"
    :arrayList="empleados"
  />
</template>

<script>
import { mapState } from "vuex";
import Table from "../components/base/Table";
import Headers from "../util/headers";
export default {
  data() {
    return {
      headers: Headers.headersEmpleados,
    };
  },
  components: {
    Table,
  },
  computed: {
    ...mapState("empleadosNamespace", ["empleados"]),
  },
};
</script>

<style></style>
