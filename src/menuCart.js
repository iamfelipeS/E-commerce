function openCart() {
    document.getElementById("cart").classList.add("right-[0]");
    document.getElementById("cart").classList.remove("right-[-360]");
}
function closeCart() {
    document.getElementById("cart").classList.remove("right-[0]");
    document.getElementById("cart").classList.add("right-[-360]");
}

export function cartInitiate() {
    const btnOpenCart = document.getElementById("btn-cart");
    const btnCloseCart = document.getElementById("close");

    btnOpenCart.addEventListener("click", openCart);
    btnCloseCart.addEventListener("click", closeCart);
    
    export function addCart() {
        const conteinerProductCart = document.getElementById("product-cart");
        const cardProductCart = `<article class="flex bg-slate-100 rounded-lg p-1 relative">
        <button id="trash" class="top-0 right-2 absolute">
            <i class="fa fa-trash text-slate-500 hover:text-slate-800" aria-hidden="true"></i>
        </button>
        <img src="./assets/img/product-1.jpg" alt="carrinho: Camisa Larga com Bolsos" class="h-24 rounded-lg">
        <div class="py-2">
            <p class="text-slate-900 text-sm">Camisa Larga com Bolsos</p>
            <p class="text-slate-400 text-xs">Tamanho: M</p>
            <p class="text-green-900 text-lg">R$70,00</p>
        </div>
    </article>`
        containerProductCart.innerHTML += conteinerProductCart;
    }
}


