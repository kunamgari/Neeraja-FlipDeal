const express = require('express');
const { resolve } = require('path');
let cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('static'));

let products = [
  {
    id: 1,
    name: "Xiaomi iPhone 12",
    brand: "Xiaomi",
    price: 70000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: "Android",
    camera: 108,
  },
  {
    id: 2,
    name: "Oppo Mi 10",
    brand: "Xiaomi",
    price: 25000,
    ram: 5,
    rom: 512,
    rating: 3.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 3,
    name: "Samsung Mi 10",
    brand: "Oppo",
    price: 25000,
    ram: 8,
    rom: 256,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 4,
    name: "Apple Find X2",
    brand: "Samsung",
    price: 80000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 5,
    name: "Oppo Mi 11",
    brand: "Xiaomi",
    price: 19999,
    ram: 12,
    rom: 256,
    rating: 4,
    os: "iOS",
    camera: 24,
  },
  {
    id: 6,
    name: "OnePlus Find X3",
    brand: "Apple",
    price: 35000,
    ram: 12,
    rom: 256,
    rating: 4.5,
    os: "Android",
    camera: 24,
  },
  {
    id: 7,
    name: "Apple Pixel 5",
    brand: "Apple",
    price: 70000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 8,
    name: "Google Mi 10",
    brand: "Oppo",
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 108,
  },
  {
    id: 9,
    name: "Oppo Mi 11",
    brand: "Samsung",
    price: 12999,
    ram: 8,
    rom: 128,
    rating: 4.5,
    os: "Android",
    camera: 64,
  },
  {
    id: 10,
    name: "Xiaomi Mi 10",
    brand: "Oppo",
    price: 45000,
    ram: 16,
    rom: 512,
    rating: 4.6,
    os: "Android",
    camera: 12,
  },
  {
    id: 11,
    name: "OnePlus Pixel 5",
    brand: "Apple",
    price: 50000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 64,
  },
  {
    id: 12,
    name: "Xiaomi OnePlus 8",
    brand: "Xiaomi",
    price: 60000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: "Android",
    camera: 48,
  },
  {
    id: 13,
    name: "Xiaomi Pixel 6",
    brand: "Oppo",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 64,
  },
  {
    id: 14,
    name: "Samsung Find X2",
    brand: "Oppo",
    price: 39999,
    ram: 12,
    rom: 256,
    rating: 4.7,
    os: "Android",
    camera: 48,
  },
  {
    id: 15,
    name: "Google OnePlus 8",
    brand: "Apple",
    price: 30000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 16,
    name: "OnePlus iPhone 12",
    brand: "OnePlus",
    price: 40000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 17,
    name: "Google Mi 11",
    brand: "Oppo",
    price: 60000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 18,
    name: "Google OnePlus 9",
    brand: "Apple",
    price: 50000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: "Android",
    camera: 48,
  },
  {
    id: 19,
    name: "Oppo Galaxy S22",
    brand: "Samsung",
    price: 50000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: "Android",
    camera: 48,
  },
  {
    id: 20,
    name: "Apple Pixel 5",
    brand: "Oppo",
    price: 40000,
    ram: 8,
    rom: 256,
    rating: 4.7,
    os: "Android",
    camera: 108,
  },
];

function sortProductsByRatingsDescending(product1,product2) {
  return product2.rating - product1.rating;  
}
app.get("/products/sort/popularity", (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortProductsByRatingsDescending);  
  res.json(sortedProducts);  
});

function sortProductsByPricesDescending(product1,product2) {
  return product2.price - product1.price;  
}
app.get("/products/sort/price-high-to-low", (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortProductsByPricesDescending);  
  res.json(sortedProducts);  
});

function sortProductsByPricesAscending(product1,product2) {
  return product1.price - product2.price;  
}
app.get("/products/sort/price-low-to-high", (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortProductsByPricesAscending);  
  res.json(sortedProducts);  
})

function filterByRam(product,selectedRam){
  return product.ram===selectedRam;
}
app.get("/products/filter/ram",(req,res)=>{
  let selectedRam=parseFloat(req.query.ram);
  let result=products.filter(product=>filterByRam(product,selectedRam));
  res.json(result);
});

function filterByRom(product,selectedRom){
  return product.rom===selectedRom;
}
app.get("/products/filter/rom",(req,res)=>{
  let selectedRom=parseFloat(req.query.rom);
  let result=products.filter(product=>filterByRom(product,selectedRom));
  res.json(result);
});

function filterByBrand(product,brand){
  return product.brand.toLowerCase()===brand.toLowerCase();
}
app.get("/products/filter/brand",(req,res)=>{
  let brand=req.query.brand;
  let result=products.filter(product=>filterByBrand(product,brand));
  res.json(result);
});

function filterByOs(product,os){
  return product.os.toLowerCase()===os.toLowerCase();
}
app.get("/products/filter/os",(req,res)=>{
  let os=req.query.os;
  let result=products.filter(product=>filterByOs(product,os));
  res.json(result);
});

function filterByPrice(product,price){
  return product.price<=price;
}
app.get("/products/filter/price",(req,res)=>{
  let price=req.query.price;
  let result=products.filter(product=>filterByPrice(product,price));
  res.json(result);
});

app.get("/products",(req,res)=>{
  res.json({products});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
