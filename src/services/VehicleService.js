import http from "./http";

class VehicleService {
  getAvailableSpots() {
    return http.get('state/remainingSpots');
  }

  getTakenSpots() {
    return http.get('state/takenSpots');
  }

  saveVehicle(vehicle) {
    return http.post("park", vehicle);
  }

  getParkedVehicles() {
    return http.get('park');
  }

  deleteVehicle(id) {
    return http.delete(`park/vehicle/${id}`);
  }
}

export default new VehicleService();
