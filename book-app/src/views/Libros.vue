<template>
  <Table
    :title="'Libros'"
    :opciones="true"
    :headers="headers"
    :arrayList="libros"
  />
</template>

<script>
import { mapState } from "vuex";
import Table from "../components/base/Table";
import Headers from "../util/headers";
export default {
  data() {
    return {
      headers: Headers.headersLibros,
    };
  },
  components: {
    Table,
  },
  computed: {
    ...mapState("librosNamespace", ["libros"]),
  },
};
</script>

<style></style>
