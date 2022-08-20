const items = [
    {
      id: 1,
      name: 'Spider-Man',
      price: 5.00,
      image: 'assets/images/Spider-Man1.png',
      category: 'Common',
      quantity: 20
    },
    {
        id: 2,
        name: 'Smigol',
        price: 5.00,
        image: 'assets/images/Smigol.png',
        category: 'Common',
        quantity: 25
    },
    {
      id: 3,
      name: 'Fenix',
      price: 18.00,
      image: 'assets/images/Fenix.png',
      category: 'Rare',
      quantity: 10
    },
    {
        id: 4,
        name: 'Sauron',
        price: 14.00,
        image: 'assets/images/Sauron.png',
        category: 'Rare',
        quantity: 8
      },
    {
      id: 5,
      name: 'Mr-Sinister',
      price: 20.00,
      image: 'assets/images/Mr-Sinister.png',
      category: 'Chase',
      quantity: 4
    },
    {
        id: 6,
        name: 'Deathstroke',
        price: 25.00,
        image: 'assets/images/Deathstroke.png',
        category: 'Chase',
        quantity: 2
    }
  ]

document.addEventListener( "DOMContentLoaded", () =>{
    load()
    showProducts( items )
})

/* =========== LOADER ========== */
const loader = document.getElementById( "loader" )
function load () {
    setTimeout(() => {
        loader.classList.add( "hide" )
    }, 3000);
}

/* =========DARK MODE======== */
const themeButton = document.getElementById( "theme-button" )

themeButton.addEventListener( "click", () =>{
    document.body.classList.toggle( "dark-theme" )

    if( themeButton.classList.contains( "bx-moon" ) ){
        themeButton.classList.replace( "bx-moon", "bx-sun" )
    }else{
        themeButton.classList.replace( "bx-sun", "bx-moon" )
    }
})


/*=======  CARRITO =========== */

const cartOpen = document.getElementById( "cart-shop" )
const cartClose = document.getElementById( "close-cart" )
const cartContainer = document.getElementById( "cart-container" )

cartOpen.addEventListener( "click", () => {
    cartContainer.classList.remove( "hide" )
})

cartClose.addEventListener( "click", () => {
    cartContainer.classList.add( "hide" )
})



/* ========SCROLL========= */

const header = document.getElementById("header")

window.addEventListener( "scroll", () =>{
    if( window.scrollY >= 50 ){
        header.classList.add("scroll-header")
    }else{
        header.classList.remove("scroll-header")
    }
})

/* AÑADIR PRODUCTO */

const productContainer = document.querySelector( "#products-list" )

function showProducts( products ){
    let fragment = ``

    products.map( product => {
        fragment += `
        <div class="product-card"id="${product.id}">
	   <div class="product-card-image_cont">
            <img src=${product.image} alt=${product.name}>
	   </div>
       <button class="btn-add"><i class='bx bx-plus' ></i></button>
	   <div class="product-card_info">
		<h2 class="product-card_price">$${product.price} |<span class="product-card_quantity">Stock: ${product.quantity}</span></h2>
		<h3 class="product-card_category">${product.category}<h3>
	   </div>
        </div>
        ` 
})

    productContainer.innerHTML = fragment

    cartFunctionality()
}


/* AGREGAR AL CARRITO */

function cartFunctionality( ){
    const btns = document.querySelectorAll( ".btn-add" ) //NodeList
    console.log( btns )
    
    //Arreglo con todos los botones
    const cart = []
    
    btns.forEach( button =>{
        button.addEventListener( "click", e => {
            const id = parseInt(e.target.parentElement.id)
            const selectedProduct = items.find( item => item.id === id)
            cart.push( selectedProduct )
            agregarContador()
            console.log( cart )
        })
    })
}


let valor = 0
function agregarContador(){
    let contador = document.querySelector(".counter");
    valor++;
    contador.textContent = valor;
}
/*
function cartProducts (cart){
    const cart = document.getElementById( "cvart" )
    let fragment=``
    cart.forEachj( (item, index) =>{
        cart.innerHTML += '
        '
    })
}

cartC

function deleteProduct( index, cart){
    cart.splice( index,1 )

    cartProducts( cart )
}
*/