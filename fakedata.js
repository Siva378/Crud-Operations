var faker = require('faker');

var database = { products: []};

for (var i = 1; i<= 100; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product"
    
  });
}

console.log(JSON.stringify(database));