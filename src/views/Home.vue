<template>
  <Dashboard ref="dashboard"/>
  <NewVehicle @refresh="refreshVehicleList"/>
  <VehicleList ref="vehicleList"/>
</template>

<script>
import Dashboard from "@/components/Dashboard";
import NewVehicle from "@/components/NewVehicle";
import VehicleList from "@/components/VehicleList";

export default {
  components: {
    Dashboard,
    NewVehicle,
    VehicleList
  },
  methods: {
    refreshVehicleList() {
      this.$refs.vehicleList.fetch();
      this.$refs.dashboard.fetch();
    }
  }
}
</script>
