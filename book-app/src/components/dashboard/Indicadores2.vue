<template>
  <v-container>
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="12" xs="12" sm="3">
        <v-card class="mt-4 mx-auto" max-width="400">
          <v-sheet
            class="v-sheet--offset mx-auto"
            :color="item.color"
            elevation="12"
            max-width="calc(100% - 32px)"
          >
            <v-sparkline
              :labels="item.labels"
              :value="item.value"
              color="white"
              line-width="2"
              padding="16"
            ></v-sparkline>
          </v-sheet>

          <v-card-text class="pt-0">
            <div class="title font-weight-light mb-2">User Registrations</div>
            <div class="subheading font-weight-light grey--text">
              Last Campaign Performance
            </div>
            <v-divider class="my-2"></v-divider>
            <v-icon class="mr-2" small>
              mdi-clock
            </v-icon>
            <span class="caption grey--text font-weight-light"
              >last registration 26 minutes ago</span
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
        value: [200, 675, 410, 390, 310, 460, 250, 240],
        color: "light-blue",
      },
      {
        labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
        value: [200, 675, 410, 390, 310, 460, 250, 240],
        color: "cyan",
      },
      {
        labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
        value: [200, 675, 410, 390, 310, 460, 250, 240],
        color: "teal",
      },
      {
        labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
        value: [200, 675, 410, 390, 310, 460, 250, 240],
        color: "deep-purple",
      },
    ],
  }),
};
</script>

<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
