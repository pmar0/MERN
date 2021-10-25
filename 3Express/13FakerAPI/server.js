const express = require('express')
const faker = require('faker');
const app = express();
const port = 8000;

const createUser = () => {
    return {
        "_id": faker.datatype.uuid(),
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName(),
        "phoneNumber": faker.phone.phoneNumber(),
        "email": faker.internet.email(),
        "password": faker.internet.password(),
    }
}

const createCompany = () => {
    return {
        "_id": faker.datatype.uuid(),
        "name": faker.company.companyName(),
        "address": {
            "street": faker.address.streetName(),
            "city": faker.address.cityName(),
            "state": faker.address.state(),
            "zipCode": faker.address.zipCode(),
            "country": faker.address.country(),
        }
    }
}

app.get("/api/users/new", (req, res) => {
    res.json(createUser());
})

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
})

app.get("/api/user/company", (req, res) => {
    res.json({'user': createUser(),
    'company':createCompany()
    });
})





app.listen( port, () => console.log(`Listening on port: ${port}`) );