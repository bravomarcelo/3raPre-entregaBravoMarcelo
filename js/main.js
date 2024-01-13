const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const cuadriculaContainer = document.getElementById("cuadricula-container")
const cantidadCarrito = document.getElementById("cantidadCarrito")


const productos = [
{
    id: 1,
    nombre: "Samsung Galaxy S23 Ultra",
    precio: 80000,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_799456-MLU72675206798_112023-F.webp",
    cantidad: 1,
},
{
    id: 2,
    nombre: "Motorola Edge 30 fusion",
    precio: 100000,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_684994-MLU72892501584_112023-F.webp",
    cantidad: 1,
},
{
    id: 3,
    nombre: "Xiaomi Redmi 13C",
    precio: 150000,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_780144-MLA72668121499_112023-F.webp",
    cantidad: 1,
},
{
    id: 4,
    nombre: "Apple iPhone 14 Pro Max",
    precio: 200000,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_605126-MLM51559383638_092022-F.webp",
    cantidad: 1,
},
];

let carrito = JSON.parse(localStorage.getItem("carrito"))  ||  [];

productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio} $</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "Comprar";
    comprar.className = "comprar";
    content.append(comprar);

    comprar.addEventListener("click", () =>{

        const repeat = carrito.some ((repeatProduct) => repeatProduct.id === product.id);
       
        if (repeat){
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            })
        }else {

        carrito.push({
          id : product.id,
          img : product.img,
          nombre: product.nombre,
          precio : product.precio,
          cantidad: product.cantidad,
        });
    }
        console.log(carrito);
        carritoCounter ();
        saveLocal();
    })
});

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


