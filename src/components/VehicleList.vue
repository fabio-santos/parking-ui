<template>
  <v-container>
    <div class="text-center ma-2">
      <v-snackbar v-model="showMessage">
        {{ message }}
      </v-snackbar>
    </div>
    <v-table>
      <thead>
      <tr>
        <th class="text-left">
          Spot Number
        </th>
        <th class="text-left">
          Spot Type
        </th>
        <th class="text-left">
          Vehicle Plate
        </th>
        <th class="text-left">
          Vehicle Type
        </th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="item in vehicles"
        :key="item.id"
      >
        <td>{{ item.number }}</td>
        <td>{{ item.spotType }}</td>
        <td>{{ item.vehicle.plate }}</td>
        <td>{{ item.vehicle.vehicleType }}</td>
        <td><v-btn color="error" @click="removeVehicle(item.vehicle.id)">Delete</v-btn></td>
      </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>

import VehicleService from "@/services/VehicleService";

export default {
  name: "VehicleList",
  data () {
    return {
      vehicles: [],
      showMessage: false,
      message: null,
    }
  },
  methods: {
    fetch() {
      VehicleService.getParkedVehicles().then(response => this.vehicles = response.data);
    },
    removeVehicle(id) {
      VehicleService.deleteVehicle(id).then(() => {
        this.showMessage = true;
        this.message = 'Vehicle removed successfully';
        this.fetch();
      });
    },
  },
  created() {
    this.fetch();
  }
}
</script>

<style scoped>

</style>
