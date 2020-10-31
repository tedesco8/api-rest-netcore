<template>
  <Table
    :title="'Editoriales'"
    :opciones="true"
    :headers="headers"
    :arrayList="editoriales"
  />
</template>

<script>
import { mapState } from "vuex";
import Table from "../components/base/Table";
import Headers from "../util/headers";
export default {
  data() {
    return {
      headers: Headers.headersEditoriales,
    };
  },
  components: {
    Table,
  },
  computed: {
    ...mapState("editorialesNamespace", ["editoriales"]),
  },
};
</script>

<style></style>
