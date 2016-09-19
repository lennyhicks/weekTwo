var person = {
    firstName: "Lenny",
    lastName: "Hicks",
    email: "",
    phone: "606060606",
    birthday: "10-31-1990",

    fullname: function() {
        return this.firstName + " " + this.lastName;
    }
}

function printDetails(p) {
    console.log(p.fullname());
    console.log(p.email);
    console.log(p.phone);
    console.log(p.birthday);

}
printDetails(person);

JSON.parse()