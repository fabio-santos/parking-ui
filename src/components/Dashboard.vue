<template>
  <div>
    <v-container>
      <v-row
        align="start"
      >
        <v-col>
          <v-card
            class="mx-auto"
          >
            <v-card-item class="bg-grey-darken-1">
              <v-card-title>
                <span class="text-h6">Available Spots <v-icon icon="mdi-crop-free" /></span>
              </v-card-title>
            </v-card-item>
            <v-list>
              <v-list-item
                prepend-icon="mdi-motorbike"
                :title=availableSpots.motorcycleSpots
              ></v-list-item>

              <v-divider inset></v-divider>

              <v-list-item
                prepend-icon="mdi-car"
                :title=availableSpots.carSpots
              ></v-list-item>

              <v-divider inset></v-divider>

              <v-list-item
                prepend-icon="mdi-van-utility"
                :title=availableSpots.vanSpots
              ></v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="mx-auto"
          >
            <v-card-item class="bg-grey-darken-1">
              <v-card-title>
                <span class="text-h6">Taken Spots <v-icon icon="mdi-target" /></span>
              </v-card-title>
            </v-card-item>

            <v-list>
              <v-list-item
                prepend-icon="mdi-motorbike"
                :title=takenSpots.motorcycleSpots
              ></v-list-item>

              <v-divider inset></v-divider>

              <v-list-item
                prepend-icon="mdi-car"
                :title=takenSpots.carSpots
              ></v-list-item>

              <v-divider inset></v-divider>

              <v-list-item
                prepend-icon="mdi-van-utility"
                :title=takenSpots.vanSpots
              ></v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import VehicleService from "@/services/VehicleService";

export default {
  name: "Dashboard.vue",
  data() {
    return {
      availableSpots: {},
      takenSpots: {},
    }
  },
  methods: {
    fetch() {
      VehicleService.getAvailableSpots().then(response => this.availableSpots = response.data);
      VehicleService.getTakenSpots().then(response => this.takenSpots = response.data);
    }
  },
  created() {
    this.fetch();
  }
}
</script>

<style scoped>

</style>
