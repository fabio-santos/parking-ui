<template>
  <div>
    <div class="text-center ma-2">
      <v-snackbar v-model="showMessage">
        {{ message }}
      </v-snackbar>
    </div>
    <v-sheet class="mx-auto">
      <v-form @submit.prevent="submit">
        <v-container>
          <v-row
            align="start"
          >
            <v-col>
              <v-text-field
                label="Plate"
                v-model="vehicle.plate"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-select
                label="Type"
                v-model="vehicle.vehicleType"
                :items="typeOptions"
                item-value="id"
                item-title="name"
              ></v-select>
            </v-col>

            <v-col>
              <v-btn variant="tonal" type="submit" prepend-icon="mdi-content-save">Save</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-sheet>
    </div>
</template>

<script>
import VehicleService from "@/services/VehicleService";

export default {
  name: "NewVehicle",
  data() {
    return {
      vehicle: {
        plate: null,
        vehicleType: null,
      },
      typeOptions: [
        { id: 'MOTORCYCLE', name:'Motorcycle' },
        { id: 'CAR', name:'Car' },
        { id: 'VAN', name:'Van' },
      ],
      showMessage: false,
      message: null,
    }
  },
  methods: {
    submit() {
      VehicleService.saveVehicle(this.vehicle).then(() => {
        this.cleanForm();
        this.showMessage = true;
        this.message = 'Vehicle parked successfully';
        this.$emit('refresh');
      }).catch(error => {
        this.showMessage = true;
        this.message = error.response.data;
      })
    },
    cleanForm() {
      this.vehicle = {
        plate: null,
        vehicleType: null,
      }
    }
  }
}
</script>

<style scoped>

</style>
