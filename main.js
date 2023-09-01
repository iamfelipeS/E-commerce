
const catalog = [
  {
    id: 1,
    brand: "Zara",
    name: "Camisa Larga com Bolsos",
    price: 70,
    img: "product-1.jpg",
    woman: false,
  },
  {
    id: 2,
    brand: "Zara",
    name: "Casaco Reto com Lã",
    price: 85,
    img: "product-2.jpg",
    woman: true,
  },
  {
    id: 3,
    brand: "Zara",
    name: "Jaqueta com Efeito Camurça",
    price: 60,
    img: "product-3.jpg",
    woman: false,
  },
  {
    id: 4,
    brand: "Zara",
    name: "Sobretudo em Mescla de Lã",
    price: 160,
    img: "product-4.jpg",
    woman: false,
  },
  {
    id: 5,
    brand: "Zara",
    name: "Camisa Larga Acolchoada de Veludo Cotelê",
    price: 110,
    img: "product-5.jpg",
    woman: false,
  },
  {
    id: 6,
    brand: "Zara",
    name: "Casaco de Lã com Botões",
    price: 170,
    img: "product-6.jpg",
    woman: true,
  },
  {
    id: 7,
    brand: "Zara",
    name: "Casaco com Botões",
    price: 75,
    img: "product-7.jpg",
    woman: true,
  },
  {
    id: 8,
    brand: "Zara",
    name: "Colete Comprido com Cinto",
    price: 88,
    img: "product-8.jpg",
    woman: true,
  },
]

for (const productCatalog of catalog) {
  const productCard = `<div class="border-solid border-2 border-indigo-600 w-48 m-2">
    <img 
    src="./assets/img/${productCatalog.img}"
    alt="img-produto" 
    style="height: 300px;"
    />
    <p class='marca'>${productCatalog.brand}</p>
    <p>${productCatalog.name}</p>
    <p>R$ ${productCatalog.price}</p>
    <button class="btn-add">Adicionar</button>
  </div>`;
  document.querySelector('#container-produto').innerHTML += productCard;
}




