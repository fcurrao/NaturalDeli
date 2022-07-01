
//////////////////////////// INICIALIZACIONES  //////////////////// {
	let miCarrito = []
	let productos = []
	let productosEnStock = []
	let items = []
	let items2 = []
	let totaldelcarro = JSON.parse(localStorage.getItem("totaldelcarro"))
	let vistaCarritoArriba = document.getElementById("totalCarritoArriba")

	class Producto {
	    constructor(nombre, precio, nroItem, cantidad){
	        this.nombre = nombre;
	        this.precio = parseFloat(precio);
	         this.nroItem = nroItem;
	         this.cantidad = parseFloat(cantidad);
	        this.vendido = false;
	    }

	    sumaIva(){
	    this.precio = this.precio * 1.21;
	    }
	}

//////////////////////////// FUNCIONES ////////////////////////////{

	function guardarLocal (clave, valor)  {
			localStorage.setItem(clave, valor)
	}
// -------------------------------------------------------
	function arrayPorJsonProductos(){

				fetch('todoslosproductos1.JSON')
				.then((response) => response.json())
					.then((json) =>  {
						json.forEach((cadaUno) => {
							productos.push(new Producto(cadaUno.nombre,cadaUno.precio,cadaUno.nroItem, cadaUno.cantidad))	
						})
						productosEnStock = productos
						guardarLocal("TodosLosProductos1", JSON.stringify(productos))	
						guardarLocal("Stock", JSON.stringify(productos))	

															
					})
				items = JSON.parse(localStorage.getItem("TodosLosProductos1"))
				productosEnStock = JSON.parse(localStorage.getItem("TodosLosProductos1"))
				items2 = JSON.parse(localStorage.getItem("TodosLosProductos1"))

			}
//}
//////////////////////////// EJECUTA JS ////////////////////////////{
items2 = JSON.parse(localStorage.getItem("TodosLosProductos1"))
arrayPorJsonProductos()
if ( totaldelcarro == null){
vistaCarritoArriba.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" color="white"  style="width:26%;" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
						  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg> $ 0`	
} else {
vistaCarritoArriba.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" color="white" style="width:26%;" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
						  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
						</svg> $ ${totaldelcarro} `			
}
//}