let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};

let passportWithAddressCopy = structuredClone(passportWithAddress);

console.log(passportWithAddress.address.city);
passportWithAddressCopy.address.city = "Bobryisk";
console.log(passportWithAddressCopy.address.city);
