let vehicles = [
  {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6,
  },
  {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5,
  },
  {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("12-30-2022"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2023"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5,
  },
];

// 1. Find vehicles that are RED
console.log("Vehicles that are RED:");
for (let i = 0; i < vehicles.length; i++) {
  if (vehicles[i].color === "Red") {
    console.log(vehicles[i]);
  }
}

// 2. Find vehicles with expired registrations
console.log("Vehicles with expired registrations:");
let today = new Date(); // Get the current date
for (let i = 0; i < vehicles.length; i++) {
  if (vehicles[i].registrationExpires < today) {
    console.log(vehicles[i]);
  }
}

// 3. Find vehicles that hold at least 6 people
console.log("Vehicles that hold at least 6 people:");
for (let i = 0; i < vehicles.length; i++) {
  if (vehicles[i].capacity >= 6) {
    console.log(vehicles[i]);
  }
}

// 4. Find vehicles with license plates that end with '222'
console.log("Vehicles with license plates that end with '222':");
for (let i = 0; i < vehicles.length; i++) {
  if (vehicles[i].licenseNo.endsWith("222")) {
    console.log(vehicles[i]);
  }
}
