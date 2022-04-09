const faker = require('faker');
const fs = require('fs');

const { price, productName, productDescription } = faker.commerce;
const products = [...Array(30).keys()].map((d, i) => ({
  id: i + 1,
  title: productName(),
  description: productDescription(),
  price: price(),
  imageUrl: 'https://picsum.photos/300/300',
}));

const json = { products, orders: [] };

fs.writeFileSync('db.json', JSON.stringify(json), 'utf-8', () => {
  console.log('file was successfully created');
});
