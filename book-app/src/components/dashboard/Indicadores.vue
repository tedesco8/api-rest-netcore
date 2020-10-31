<template>
  <v-container>
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="12" xs="12" sm="6" md="4">
        <v-card max-width="344" :color="item.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
            </div>

            <div>
              <span
                class="display-2 font-weight-black"
                v-text="item.cuantity"
                style="padding-top:18px;"
              ></span>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  props: {
    items: Array,
  },
};
</script>

<style></style>
