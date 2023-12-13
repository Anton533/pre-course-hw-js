let passport = {
  name: "Petr",
  surname: "Petrov",
};

const passportIvan = { ...passport };
passportIvan.name = "Ivan";
console.log(passport.name);
console.log(passportIvan.name);
