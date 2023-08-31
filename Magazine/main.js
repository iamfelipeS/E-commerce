// const nomeProduto = 'Casaco Branco';


const catalog = [
  {
    id: 1,
    name: 'Casaco Branco',
    brand: 'Zara',
    price: 70,
    img: "product-1.jpg",
    woman: false,
  },
  {
    id: 2,
    name: 'Casaco Branco',
    brand: 'Zara',
    price: 70,
    img: "product-2.jpg",
    woman: true,
  },
  {
    id: 3,
    name: 'Casaco Branco',
    brand: 'Zara',
    price: 70,
    img: "product-3.jpg",
    woman: false,
  },
  {
    id: 4,
    name: 'Casaco Branco',
    brand: 'Zara',
    price: 70,
    img: "product-4.jpg",
    woman: false,
  },
  {
    id: 5,
    name: 'Casaco Branco',
    brand: 'Zara',
    price: 70,
    img: "product-5.jpg",
    woman: false,
  },
  {
    id: 6,
    name: 'Casaco Branco',
    brand: 'Zara',
    price: 70,
    img: "product-6.jpg",
    woman: true,
  },
  {
    id: 7,
    name: 'Casaco Branco',
    brand: 'Zara',
    price: 70,
    img: "product-7.jpg",
    woman: true,
  },
]

for (const productCatalog of catalog) {

  const productCard = `<div class="border-solid border-2 border-sky-500">
  <img 
  src = "./assets/img/${productCatalog.img}"
  alt = "img-produto" 
  style = "height: 300px;"
  />
      <p class='marca'>${productCatalog.brand}</p>
      <p>${productCatalog.name}</p>
      <p>R$ ${productCatalog.price}</p>
      <button class="btn-add">Adicionar</button>
      </div>`;
  document.querySelector('#container-produto').innerHTML += productCard;
  
}