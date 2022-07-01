//////////////////////////// TRABAJANDO  //////////////////// {


		///////////////////////    NOTAS    ///////////////////////
			// let cateNombre = arrayDeCategorias.filter( (aFiltrar) => aFiltrar.categoria.includes('buscadoAFiltrar'));
			// if (document.getElementById('filtraditos').value == ){


		// FILTRAR ITEMS2

			// 	let arrayDeCategorias = items2.filter((item,index)=>{
   // 		   return items2.indexOf(item) === index && item != undefined;
   //  		})
			// } else {

			// }	

	///////////////////////  COSAS QUE ESTOY TRABAJANDO  ///////////////////////

	// 0
	 // 230 !!
// que no se repita en carrito
//////////////////////////////////////////////
	 
	// 1
	// boton filtrar =
	// 160 function filtrandoItems(){

	//////////////////////////////////////////////


	// 2
	//  como selleccionar cuantas comprar
	//  https://www.cotodigital3.com.ar/sitios/cdigi/browse/catalogo-bebidas-bebidas-con-alcohol-cerveza/_/N-137sk0z

	//////////////////////////////////////////////

	// 3 
	// como seleccionar varias cosas (classname, nunca me anda )

	//////////////////////////////////////////////

	//4
	//como poner cantidades en la pagina


		
// }
//////////////////////////// INICIALIZACIONES  //////////////////// {
 
	let miCarritoEnLS = JSON.parse(localStorage.getItem("miCarro"))										
	let totaldelcarro = JSON.parse(localStorage.getItem("totaldelcarro"))
	let vistaTotalCarroArriba = document.getElementById("totalCarritoArriba")
	let drop2 = document.getElementById("drop2")
	let miCarro = JSON.parse(localStorage.getItem("miCarro"))
	let probando = document.getElementById("probando")
	let carroFlotante = document.getElementById("botonFlotante")
	let miCarrito = []
	let productos = []
	let productosEnStock = []
	let ofertaArray = []
	let items = []
	let arrayDeCategorias =[]
	let i=0
	let h=0
	// JSON = todoslosproductos1.JSON

	class Producto {
	    constructor(nombre, precio, nroItem, cantidad,descripcion,categoria,marca,descripcionLarga){
	        this.nombre = nombre;
	        this.precio = parseFloat(precio);
	         this.nroItem = nroItem;
	         this.cantidad = parseFloat(cantidad);
	          this.descripcion = descripcion;
	           this.categoria =  categoria;
	           this.marca =  marca;
	           this.descripcionLarga =  descripcionLarga;
	        this.oferta = false;
	    }


	    verInfo(){
      Swal.fire({
        title: `${this.nombre}`,
        text: `${this.descripcion}, PRECIO: $${this.precio}`,
        imageUrl: `${this.img}`,
        imageHeight: 300,
        imageAlt: 'Imagen del producto'        
      })
    }

	}

//}

//////////////////////////// FUNCIONES ////////////////////////////{
	//----------------------------------------------------------------
	function borrarstorage ()  {
		localStorage.clear()
		sessionStorage.clear()
	}
	//----------------------------------------------------------------
	function guardarLocal (clave, valor)  {
		localStorage.setItem(clave, valor)
	}
	//----------------------------------------------------------------
	function mueveElChanguito(){
			for(var i=0; i<4 ; i++){     
			          carroFlotante.classList.add('moviendoElChango1')
			setTimeout(() => {
			          carroFlotante.classList.remove('moviendoElChango1')
			            }, 500)
			setTimeout(() => {
			          carroFlotante.classList.add('moviendoElChango2')
			            }, 501)    
			setTimeout(() => {
			          carroFlotante.classList.remove('moviendoElChango2')
			            }, 1000)
			}
	}

	//--------------------------------------------------------------
		 function	sigueComprando(numerito,numeroAComprar){

				

			}
				
	//---------------------------------------------------------------
	function botoncarroFlotante(){
  Swal.fire({
    title: '<h3>Su carrito</h3> <br> <div id="vistaRapida"></div><div id="vistaRapida2"></div> ',
    icon: 'info',
  })

	miCarritoEnLS = JSON.parse(localStorage.getItem("miCarro"))
  for(num in miCarritoEnLS){
    let carritoRapido = document.getElementById("vistaRapida");
    carritoRapido.innerHTML += `<h5><img width="30%" src="img/${miCarritoEnLS[num].nombre}.jpg"> ${miCarritoEnLS[num].nombre} ||  $ ${miCarritoEnLS[num].precio}</h5>`
     }
      let carritoRapido = document.getElementById("vistaRapida2");
     carritoRapido.innerHTML += `<br><h3> TOTAL: ${totaldelcarro}</h3>`
     carritoRapido.append();
}	


//---------------------------------------------------------------

function setOferta(numerito){
	items2[numerito].oferta = true
	ofertaArray.push(new Producto(items[numerito].nombre,items[numerito].descripcion,items[numerito].nroItem,items[numerito].cantidad,items[numerito].marca,items[numerito].descripcionLarga))
		localStorage.setItem("ofertaArray", ofertaArray)
		
}

//---------------------------------------------------------------

function sacarOferta(numerito){
	items2[numerito].oferta = false
	// ofertaArray.QUITAR ¡¡¡ 
}
//---------------------------------------------------------------

 function esOfertax (numerito){
 	if(items2[numerito].oferta == false){
 		alert("falso")

 	} if(items2[numerito].oferta == true){
 		alert("true")

 	}
 }


//---------------------------------------------------------------


		function mostrandoMas(numerito){
			for (var i=0; i<items2.length; i++){
							Swal.fire({
									 title: '<h3>Producto: </h3> <br> <div id="vistaRapidax"></div>',
									icon: 'info',
							    position: 'top',
							    showCancelButton: true,
								cancelButtonText: "Cancelar",
								
							    showConfirmButton: false,
							    // timer: 0,

									})
							let verM = document.getElementById("vistaRapidax");
    						verM.innerHTML += `<h5><img width="30%" src="img/${items2[numerito].nombre}.jpg">  <br><br>   ${items2[numerito].descripcionLarga}</h5>`
    						 verM.append();
						}
						}


//---------------------------------------------------------------

 function comprando(numerito, boton){
 	// intentando realizar la compra"
		items = JSON.parse(localStorage.getItem("Stock"))
		let StockMomentaneoProducto = 100
		// items[numerito].cantidad
		// alert(numeroAComprar)
		// document.getElementById("cantidadAcomprar").value
		// si la cantidad no se puede comprar porque es mucha



		// if(numeroAComprar <= 0 ||  numeroAComprar>StockMomentaneoProducto){
		// 	boton.classList.add('popup-active')
	 // 	  setTimeout(() => {
	 //      boton.classList.remove('popup-active')
	 // 		}, 2500)

	 // 	}
	 	//si todo esta OK! se realiza la compra
	 	// if(numeroAComprar >0 && numeroAComprar <= StockMomentaneoProducto){


							Swal
								.fire({
								title: "Cuantas quieres agregar?",
								input: "number",
								showCancelButton: true,
								confirmButtonText: "Agregar",
								cancelButtonText: "Cancelar",
								inputValidator: numero => {
								let numeroAComprar = numero
								// Si el valor es válido, debes regresar undefined. Si no, una cadena
								if (numeroAComprar <= 0 ||  numeroAComprar>StockMomentaneoProducto) {
								return "Ingrese una cantidad correcta";
								} else {
								return undefined;
								}
								}
								})
								.then(resultado => {
								if (resultado.value) {
								let numero = resultado.value;
								let numeroAComprar = numero
								Swal.fire({
							    position: 'top',
							    icon: 'success',
							    title: `AGREGANDO ${items[numerito].nombre}`,
							    showConfirmButton: false,
							    timer: 750,

									})
								console.log("Comprando, " + numeroAComprar + " " +items[numerito].nombre);
								// sigueComprando(numerito,numeroAComprar)
								
								

								// } else{}
								// document.getElementById("cantidadAcomprar").value = 1
								guardarLocal("Stock", JSON.stringify(items)) 	 
								productosEnStock = JSON.parse(localStorage.getItem("TodosLosProductos1"))
								productosEnStock[numerito].cantidad = items[numerito].cantidad

											miCarritoEnLS = JSON.parse(localStorage.getItem("miCarro"))
												
											if(miCarritoEnLS == null){
															const saldo = items[numerito].precio*numeroAComprar
									miCarrito.push(new Producto(items[numerito].nombre,saldo,items[numerito].nroItem,numeroAComprar,items[numerito].marca))
									items[numerito].cantidad = items[numerito].cantidad - numeroAComprar
									totaldelcarro = totaldelcarro + saldo
									vistaTotalCarroArriba.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" color="white"  style="width:26%;" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
						  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
						</svg> $ ${totaldelcarro} `			
									
												miCarritoEnLS = miCarrito
												guardarLocal("miCarro", JSON.stringify(miCarritoEnLS))
												guardarLocal("totaldelcarro", totaldelcarro)
												
											} else{
												miCarrito = miCarritoEnLS 
															const saldo = items[numerito].precio*numeroAComprar
									miCarrito.push(new Producto(items[numerito].nombre,saldo,items[numerito].nroItem, numeroAComprar,items[numerito].marca))
									items[numerito].cantidad = items[numerito].cantidad - numeroAComprar
									totaldelcarro = totaldelcarro + saldo
									vistaTotalCarroArriba.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" color="white" style="width:26%;" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
						  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
						</svg> $ ${totaldelcarro} `			

///////*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
									// let miCarritoString = JSON.stringify(miCarrito)
									// console.log(miCarrito)
									// let repiteEnCarro = miCarritoString.includes( items[numerito].nombre )
									// if (repiteEnCarro == true){
									// 	numeroAComprar
									// }
			
			///////*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
												
												// guardarLocal("miCarro", JSON.stringify(miCarritoEnLS) )
												guardarLocal("miCarro", JSON.stringify(miCarrito) )
												guardarLocal("totaldelcarro", totaldelcarro)

											}	
												// muevo el chango (efecto visual)
			mueveElChanguito()
			setTimeout(() => {mueveElChanguito()}, 1000)
			setTimeout(() => {mueveElChanguito()}, 2000)
			setTimeout(() => {mueveElChanguito()}, 3000)

								}
								});

			
		
							
			




		}
		// //----------------------------------------------------------------
		function reseteandoFiltros(){
			console.log("aca tengo que programar para desfiltrar o mostrar items2")
			window.open("http://localhost/fcurrao/Proyecto%20Final/xxX/ECOMERCEXXX/productos1.html" , "ventana1" , "width=120,height=300,scrollbars=NO")
			alert("")
		}
		// //----------------------------------------------------------------
			function filtrandoItems(){
			let buscadoAFiltrar = document.getElementById('filtraditos').value
			console.log(arrayDeCategorias)
			for (unoP of arrayDeCategorias){
				if (unoP == buscadoAFiltrar){
					console.log(unoP)
					console.log("buscadoAFiltrar"+ buscadoAFiltrar)
					let clave = i+1
					div1.innerHTML = `
				
				<div class="right">
	            <img src="img/${buscadoAFiltrar.nombre}.jpg">
	            <h6>${items2[i].descripcion}</h6>
	            <h3>${items2[i].nombre}</h3>
							<h6>            <span class="badge badge-pill badge-warning">   ${items2[i].categoria}</span></h6>
	            <p>$ ${buscadoAFiltrar.precio} </p>
	            <button class="btn btn-primary btn-custom m-1 productito" id="clave${clave}">AGREGARLO AL CARRO</button>
	            
	            <div class="inputCantidad"></div>
	            <div></div>	
	            </div>
	       		`
	       		lista = document.querySelector('#cuerpo')
	       		lista.append(div1)

				} else {}
			}

		}


		//----------------------------------------------------------------
		function arrancoLaPagina(){
			ofertaArray = JSON.parse(localStorage.getItem("ofertaArray"))
			console.log(ofertaArray)
			let lista = document.querySelector('#cuerpo')
			
			if(ofertaArray != null){
				for (var i=0;i< ofertaArray.length;i++){

				lista = document.querySelector('#cuerpo')
				let div1 = document.getElementById('div1')
				let div0 = document.getElementById('div0')
				let div00 = document.getElementById('div00')
				let clave = i+1

				div0.innerHTML = `   
				Filtrar por categorias: 
				<select id="filtraditos" value="">

			  <select/> `

			  div0.innerHTML += `
			   <button class="btn btn-primary btn-custom m-1 productito" id="btnFiltro">FILTRAR</button>
			  <a href="productos1.html">
 		   <button class="btn btn-primary btn-custom m-1 productito" id="btnReset" href="productos1.html">RESETEAR</button>
 		   </a> 
 		    <button class="btn btn-primary btn-custom m-1 productito" id="btnsetOferta">Poner Oferta</button>
 		     <button class="btn btn-primary btn-custom m-1 productito" id="btnsacarOferta">Sacar Oferta</button>
 		     <button class="btn btn-primary btn-custom m-1 productito" id="esOferta">Consultar oferta</button>

 			 
			  <br><br>`

			  let precioViejo = ofertaArray[i].precio*1.20
				div1.innerHTML += `
				
				<div class="right">
	            <img src="img/${ofertaArray[i].nombre}.jpg">
	            <h6>${ofertaArray[i].descripcion}</h6>	
	            <h8>${ofertaArray[i].marca}</h8>
							
							<h6><span class="badge badge-pill badge-warning" >   ${ofertaArray[i].categoria}</span></h6>
							<p><del>$ ${precioViejo} Antes |  </del> Ahora: $ ${ofertaArray[i].precio} </p>
	            <button class="btn btn-primary btn-custom m-1 productito botonesS clave${clave}" style="padding-bottom: 0px !important; height: 54.75px;" id="clave${clave}"><p style="margin-bottom: 0rem; font-size: 80%;">AGREGARLO AL <br> CARRO<p></button>
							<button class="btn btn-success btn-custom m-1 productito botonesS claveVM${clave}" id="claveVM${clave}">Ver mas</button>
	
	            <div class="inputCantidad"></div>
	            <div></div>	
	            </div>
	       		`

/*	            <h3>${items2[i].nombre}</h3>*/
	
	       		// lista.append(div0)	
	       		let btnsetOferta = document.getElementById("btnsetOferta");
					let btnsacarOferta = document.getElementById("btnsacarOferta");
					let esOferta = document.getElementById("esOferta");
					esOferta.addEventListener('click', () => {esOfertax(0)})
					btnsacarOferta.addEventListener('click', () => {sacarOferta(0)})
					btnsetOferta.addEventListener('click', () => {setOferta(0)})

	       		lista.append(div1)	
	       		let abajoCuerpo = document.getElementById('abajoCuerpo')
	       		lista.append(abajoCuerpo)	
 	
			}
		}

				let selector = document.getElementById('filtraditos')		
				
				if(ofertaArray != null){
				for (var i=0; i<ofertaArray.length; i++){		

					if (arrayDeCategorias.includes(items2[i].categoria)==false){
						arrayDeCategorias[i]=(items2[i].categoria)
					}
					if (arrayDeCategorias[i] != undefined) {
						selector.innerHTML += `<option> ${arrayDeCategorias[i]}</option> `
					}

					
				}
			}

		

				// document.querySelectorAll('.botonesS').forEach(boton => { 	boton.addEventListener('click', () => {	
















 			// 			})
		
					if(document.getElementById("btnFiltro")!= null){document.getElementById("btnFiltro").addEventListener('click', () => {filtrandoItems()})}else{}
					carroFlotante.addEventListener('click', () => {botoncarroFlotante()})

					if(document.getElementById("claveVM1") != null){ document.getElementById("claveVM1").addEventListener('click', () => {mostrandoMas(0)})}else{}
					if(document.getElementById("claveVM2")!= null){ document.getElementById("claveVM2").addEventListener('click', () => {mostrandoMas(1)})}else{}
					if(document.getElementById("claveVM3")!= null){ document.getElementById("claveVM3").addEventListener('click', () => {mostrandoMas(2)}) }else{}
					if(document.getElementById("claveVM4")!= null){ document.getElementById("claveVM4").addEventListener('click', () => {mostrandoMas(3)})}else{}
					if(document.getElementById("claveVM5")!= null){ document.getElementById("claveVM5").addEventListener('click', () => {mostrandoMas(4)})}else{}
					if(document.getElementById("claveVM6")!= null){ document.getElementById("claveVM6").addEventListener('click', () => {mostrandoMas(5)})}else{}
					if(	document.getElementById("claveVM7")!= null){ document.getElementById("claveVM7").addEventListener('click', () => {mostrandoMas(6)})}else{}
						if(document.getElementById("claveVM8")!= null){ document.getElementById("claveVM8").addEventListener('click', () => {mostrandoMas(7)})}else{}
					if(	document.getElementById("claveVM9")!= null){ document.getElementById("claveVM9").addEventListener('click', () => {mostrandoMas(8)})}else{}

				

					if(document.getElementById("clave1") != null){document.getElementById("clave1").addEventListener('click', () => {comprando(0, document.getElementById("clave1"))})}else{}
					if(document.getElementById("clave2") != null){document.getElementById("clave2").addEventListener('click', () => { comprando(1,document.getElementById("clave2"))})}else{}  
					if(document.getElementById("clave3") != null){document.getElementById("clave3").addEventListener('click', () => {comprando(2,document.getElementById("clave3"))})}else{}
					if(document.getElementById("clave4") != null){document.getElementById("clave4").addEventListener('click', () => {comprando(3,document.getElementById("clave4"))	})}else{}  
					if(document.getElementById("clave5") != null){document.getElementById("clave5").addEventListener('click', () => {comprando(4,document.getElementById("clave5"))})}else{}	
					if(document.getElementById("clave6") != null){document.getElementById("clave6").addEventListener('click', () => {comprando(5,document.getElementById("clave6"))}) }else{} 
					if(document.getElementById("clave7") != null){document.getElementById("clave7").addEventListener('click', () => {comprando(6,document.getElementById("clave7"))}) }else{} 
					if(document.getElementById("clave8") != null){document.getElementById("clave8").addEventListener('click', () => {comprando(7,document.getElementById("clave8"))})}else{}
					if(document.getElementById("clave9") != null){document.getElementById("clave9").addEventListener('click', () => {	comprando(8,document.getElementById("clave9"))})}else{}
					
			// })

		}
		//---------------------------------------------------------------
		
		function arrayPorJsonProductos(){
			// arranca la pagina y le pone los productos de la JSON a el array Productos
			fetch('todoslosproductos1.JSON')
			.then((response) => response.json())
				.then((json) =>  {
					json.forEach((cadaUno) => {
						productos.push(new Producto(cadaUno.nombre,cadaUno.precio,cadaUno.nroItem, cadaUno.cantidad, cadaUno.descripcion,cadaUno.categoria,cadaUno.marca,cadaUno.descripcionLarga))	
					})
					productosEnStock = productos
					guardarLocal("TodosLosProductos1", JSON.stringify(productos))	
					guardarLocal("Stock", JSON.stringify(productos))	

														
				})
			ofertaArray = JSON.parse(localStorage.getItem("ofertaArray"))
			productosEnStock = JSON.parse(localStorage.getItem("TodosLosProductos1"))
			items2 = JSON.parse(localStorage.getItem("TodosLosProductos1"))

		}
		//----------------------------------------------------------------
		function barraArribaCarrito(){
			if(totaldelcarro == null){
			vistaTotalCarroArriba.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" color="white" style="width:26%;" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg> $ 0 `
			} else {vistaTotalCarroArriba.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" color="white" style="width:26%;" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>  $ ${totaldelcarro} `}
		}
//}
//////////////////////////// EJECUTA JS ////////////////////////////{
	items2 = JSON.parse(localStorage.getItem("TodosLosProductos1"))
	barraArribaCarrito()
	arrayPorJsonProductos()
	arrancoLaPagina()

//}

////////////////////////// PROBANDO ///////////////////////////// {




//}
