export function renderizeCatalog() {

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
}