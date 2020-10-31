<template>
  <Table
    :title="'Compras'"
    :opciones="true"
    :headers="headers"
    :arrayList="compras"
  />
</template>

<script>
import { mapState } from "vuex";
import Table from "../components/base/Table";
import Headers from "../util/headers";
export default {
  data() {
    return {
      headers: Headers.headersCompras,
    };
  },
  components: {
    Table,
  },
  computed: {
    ...mapState("comprasNamespace", ["compras"]),
  },
};
</script>

<style></style>
