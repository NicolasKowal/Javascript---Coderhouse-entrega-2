class Producto {
	constructor(nombre, descripcion, categoria, foto, cantidad, precio) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.categoria = categoria;
		this.foto = foto;
		this.cantidad = cantidad;
		this.precio = precio;
	}
}

let producto1 = new Producto("Smartphone X","Potente smartphone con cámara de alta resolución y procesador rápido. Ideal para usuarios exigentes que buscan rendimiento y calidad en un solo dispositivo. Disfruta de una experiencia multimedia inmersiva y fluida en un diseño elegante y moderno.","Electrónica","https://via.placeholder.com/300x200?text=Smartphone+X",15,100 );
let producto2 = new Producto("Laptop Pro","Laptop potente y elegante diseñada para usuarios que demandan alto rendimiento y portabilidad. Con un diseño sofisticado y características avanzadas, esta laptop es ideal para trabajo creativo, entretenimiento y multitarea sin compromisos.","Electrónica","https://via.placeholder.com/300x200?text=Laptop+Pro",10, 400);
let producto3 = new Producto("Auriculares BT","Auriculares inalámbricos con cancelación de ruido para una experiencia auditiva inmersiva. Diseñados para brindar comodidad durante horas de uso y calidad de audio excepcional, son ideales para disfrutar de tu música favorita en cualquier lugar.","Electrónica","https://via.placeholder.com/300x200?text=Auriculares+BT",0,300 );
let producto4 = new Producto("Cámara 4K","Cámara de alta resolución para capturar momentos especiales con calidad. Compacta y versátil, esta cámara te permite expresar tu creatividad en fotografía y video.","Electrónica","https://via.placeholder.com/300x200?text=Cámara+4K",18, 203);
let producto5 = new Producto("Camisa Casual","Camisa cómoda y elegante para uso diario. Confeccionada con materiales de alta calidad y diseño moderno, esta camisa es perfecta para diversas ocasiones y estilos.","Ropa","https://via.placeholder.com/300x200?text=Camisa+Casual",5, 2304);
let producto6 = new Producto("Pantalones Vaqueros","Pantalones de mezclilla duraderos y de estilo moderno. Con un ajuste cómodo y detalles de calidad, estos pantalones son imprescindibles en cualquier guardarropa casual.","Ropa","https://via.placeholder.com/300x200?text=Pantalones+Vaqueros",0,3024 );
let producto7 = new Producto("Vestido de Noche","Vestido elegante para ocasiones especiales. Confeccionado con telas de alta calidad y un diseño atemporal, este vestido te hará lucir radiante en eventos formales.","Ropa","https://via.placeholder.com/300x200?text=Vestido+de+Noche",12,403 );
let producto8 = new Producto("Zapatillas Deportivas","Zapatillas cómodas y con estilo para actividades deportivas. Diseñadas para brindar soporte y rendimiento en cada paso, estas zapatillas son ideales para tus entrenamientos diarios.","Ropa","https://via.placeholder.com/300x200?text=Zapatillas+Deportivas",20,3004 );
let producto9 = new Producto("Bufanda de Lana","Bufanda suave y abrigada para el invierno. Confeccionada con lana de alta calidad, esta bufanda te mantendrá cálido y con estilo en los días fríos.","Ropa","https://via.placeholder.com/300x200?text=Bufanda+de+Lana",3,2304 );
let producto10 = new Producto("Juego de Sábanas","Sábanas suaves y de alta calidad para un descanso reparador. Disfruta de noches tranquilas y cómodas con este juego de sábanas diseñado para tu confort.","Hogar","https://via.placeholder.com/300x200?text=Juego+de+Sábanas",10,503 );
let producto11 = new Producto("Cafetera Automática","Cafetera programable para disfrutar de café fresco en cualquier momento. Prepara tu café favorito con facilidad y precisión gracias a esta cafetera automática con múltiples funciones.","Hogar","https://via.placeholder.com/300x200?text=Cafetera+Automática",0, 203);
let producto12 = new Producto("Lámpara LED","Lámpara moderna y eficiente para iluminar cualquier espacio. Ajusta la intensidad de luz y crea ambientes acogedores con esta lámpara LED de diseño elegante y funcional.","Hogar","https://via.placeholder.com/300x200?text=Lámpara+LED",8, );
let producto13 = new Producto("Juego de Ollas","Ollas de cocina antiadherentes de alta calidad para cocinar con facilidad. Prepara deliciosas comidas sin preocuparte por que se peguen gracias a este juego de ollas duradero y funcional.","Hogar","https://via.placeholder.com/300x200?text=Juego+de+Ollas",16, 4103);
let producto14 = new Producto("Alfombra Decorativa","Alfombra elegante para dar un toque especial a tus espacios. Transforma tus habitaciones con estilo y confort gracias a esta alfombra decorativa de diseño único.","Hogar","https://via.placeholder.com/300x200?text=Alfombra+Decorativa",0, 1203);
let producto15 = new Producto("Balón de Fútbol","Balón oficial para practicar y disfrutar del fútbol. Diseñado para ofrecer un rendimiento óptimo y durabilidad, este balón es perfecto para partidos y entrenamientos.","Deportes","https://via.placeholder.com/300x200?text=Balón+de+Fútbol",14,2300 );
let producto16 = new Producto("Raqueta de Tenis","Raqueta de tenis profesional para jugar con precisión. Mejora tu juego y disfruta de tus partidos con esta raqueta diseñada para rendimiento y comodidad.","Deportes","https://via.placeholder.com/300x200?text=Raqueta+de+Tenis",0, 304);
let producto17 = new Producto("Mancuernas Ajustables","Mancuernas versátiles y ajustables para entrenamientos en casa. Tonifica tu cuerpo y mejora tu fuerza con estas mancuernas diseñadas para adaptarse a tus necesidades.","Deportes","https://via.placeholder.com/300x200?text=Mancuernas+Ajustables",6,340 );
let producto18 = new Producto("Bicicleta de Montaña","Bicicleta resistente y ágil para recorridos en terrenos variados. Explora nuevos caminos y aventuras con esta bicicleta de montaña diseñada para rendimiento y durabilidad.","Deportes","https://via.placeholder.com/300x200?text=Bicicleta+de+Montaña",0,1203 );
let producto19 = new Producto( "Pantalones Deportivos", "Pantalones cómodos y transpirables para actividades físicas. Confeccionados con tejidos de alta calidad y diseño ergonómico, estos pantalones son ideales para tu rutina deportiva.","Deportes", "https://via.placeholder.com/300x200?text=Pantalones+Deportivos", 19, 201);
let producto20 = new Producto("El Alquimista","Novela inspiradora que invita a reflexionar sobre el destino y la felicidad. Descubre un viaje espiritual y emocional a través de las páginas de esta obra clásica de la literatura contemporánea.","Libros","https://via.placeholder.com/300x200?text=El+Alquimista",13, 403);
let producto21 = new Producto("Cien años de soledad","Obra maestra de la literatura latinoamericana que narra la historia de la familia Buendía. Sumérgete en un universo mágico y realista a la vez, lleno de personajes inolvidables y giros sorprendentes.","Libros","https://via.placeholder.com/300x200?text=Cien+años+de+soledad",0, 504);
let producto22 = new Producto("Breve historia del tiempo","Libro que explora temas complejos de la física de manera accesible para el público general. Acompaña al autor en un viaje por los misterios del universo, desde el Big Bang hasta los agujeros negros.","Libros","https://via.placeholder.com/300x200?text=Breve+historia+del+tiempo",11,403 );
let producto23 = new Producto("El principito","Clásico de la literatura infantil que encierra grandes lecciones para adultos. Descubre la filosofía y la magia de la vida a través de los ojos de un pequeño príncipe en este cuento atemporal.","Libros","https://via.placeholder.com/300x200?text=El+principito",0, 230);
let producto24 = new Producto("1984","Distopía que reflexiona sobre el control del Estado y la pérdida de libertades individuales. Sumérgete en un mundo de vigilancia y manipulación en esta obra clásica que sigue siendo relevante en la actualidad.","Libros","https://via.placeholder.com/300x200?text=1984",4,302 );
let producto25 = new Producto("Tablet A","Tablet ligera y versátil para trabajo y entretenimiento. Con un diseño elegante y rendimiento eficiente, esta tablet es ideal para multitarea y entretenimiento digital.","Electrónica","https://via.placeholder.com/300x200?text=Tablet+A",1, 1203);


let productos = [];
productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);
productos.push(producto6);
productos.push(producto7);
productos.push(producto8);
productos.push(producto9);
productos.push(producto10);
productos.push(producto11);
productos.push(producto12);
productos.push(producto13);
productos.push(producto14);
productos.push(producto15);
productos.push(producto16);
productos.push(producto17);
productos.push(producto18);
productos.push(producto19);
productos.push(producto20);
productos.push(producto21);
productos.push(producto22);
productos.push(producto23);
productos.push(producto24);
productos.push(producto25);

class Articulo {
	constructor(nombre, precio) {
		this.nombre = nombre;
		this.precio = precio;
	}
}

let carritoDeCompras = [];

function shopping() {
	let lista = document.querySelector("#listaShopp");
	let barraNav = document.querySelector("#navBarShopp");
	let botonH = document.querySelector("#General");
	let listaCompra = document.querySelector(".cantidad");
	let totalSuma = document.querySelector(".sumaTotal");

	if (localStorage.getItem('carrito')) {
		carritoDeCompras = JSON.parse(localStorage.getItem('carrito'));
		let totalGuardado = JSON.parse(localStorage.getItem('total'));
		totalSuma.textContent= totalGuardado;
		carritoDeCompras.forEach((producto) => {
			let agregarInicio = document.createElement("li");
			agregarInicio.textContent = " " + producto.nombre + "   $" + producto.precio; 
			let botonEliminarInicio = document.createElement("button");
			botonEliminarInicio.textContent="🗑️";
			listaCompra.appendChild(agregarInicio);
			agregarInicio.appendChild(botonEliminarInicio);
			botonEliminarInicio.addEventListener("click", () =>{
				producto.cantidad +=  1;
				mostrarLista(productos);
				let elementoAEliminar = carritoDeCompras.indexOf(producto);
				carritoDeCompras.splice(elementoAEliminar, 1);
				let totalSum = carritoDeCompras.reduce((acum,item) => acum + item.precio, 0 );
				totalSuma.textContent= "$ " + totalSum;
				const sumaJSON = JSON.stringify(totalSuma.textContent);
				localStorage.setItem("total", sumaJSON);
				listaCompra.removeChild(agregarInicio);
				const enJSON = JSON.stringify(carritoDeCompras);
				localStorage.setItem("carrito", enJSON);
				
			});
		});	
	}
	else{
		totalSuma.textContent="$ 0";
	}

	const buscarEnBarra = () => {
		let barraBuscar = document.querySelector("#barraBuscar");
		let botonBuscar = document.querySelector("#buscarLista");

		function Filtrar(){
			let contenidoBarraBuscar = barraBuscar.value;
			let listaBuscada = productos.filter((producto) => producto.nombre.toLowerCase().includes(contenidoBarraBuscar.toLowerCase()));
			mostrarLista(listaBuscada);
		}

		botonBuscar.addEventListener("click", Filtrar);

		barraBuscar.addEventListener("keypress", function(event) {
			if (event.key === "Enter") {
				Filtrar();
			}
		});
	};

	

	const crearNav = () => {
		barraNav.innerHTML = "";
		const categorias = productos.map((elemento) => elemento.categoria);
		const categoriasFilter = categorias.filter((item, index) => {
			return categorias.indexOf(item) === index;
		});

		const Filtrar = () => {
			let listaFiltrada = productos.filter(
				(producto) => producto.categoria === nuevoBoton.textContent
			);
			mostrarLista(listaFiltrada);
		};

		categoriasFilter.forEach((categoria) => {
			let nuevoBoton = document.createElement("button");
			nuevoBoton.textContent = categoria;
			barraNav.appendChild(nuevoBoton);

			nuevoBoton.addEventListener("click", Filtrar);
		});
	};

	const mostrarLista = (Array) => {
		lista.innerHTML = "";
		Array.forEach((producto) => {
			let divPadre = document.createElement("li");
			let nuevaImagen = document.createElement("img");
			nuevaImagen.src = producto.foto;
			let divHijo = document.createElement("div");
			let boton = document.createElement("button");
			boton.textContent = "🛒";
			let nuevoTitulo = document.createElement("h3");
			nuevoTitulo.textContent = producto.nombre;
			nuevoTitulo.style.fontWeight = "bold";
			let nuevaDescripcion = document.createElement("p");
			nuevaDescripcion.textContent = producto.descripcion;
			let cantidad = document.createElement("p");
			cantidad.textContent = producto.cantidad;
			if (cantidad.textContent > 1) {
				cantidad.textContent = producto.cantidad + " Unidades disponibles";
			} 
			else if (cantidad.textContent == 1) {
				cantidad.textContent = "Ultimo disponible!";
			} 
			else if (cantidad.textContent == 0) {
				cantidad.textContent = "Sin stock";
				boton.disabled = true;
			}
			let precio = document.createElement("p");
			precio.textContent = "$ " + producto.precio + " -";
			let divNieto = document.createElement("div");
			lista.appendChild(divPadre);
			divPadre.appendChild(nuevaImagen);
			divPadre.appendChild(divHijo);
			divHijo.appendChild(nuevoTitulo);
			divHijo.appendChild(nuevaDescripcion);
			divNieto.appendChild(precio)
			divNieto.appendChild(cantidad);
			divNieto.appendChild(boton);
			divHijo.appendChild(divNieto);

			boton.addEventListener("click", ()=>{
				producto.cantidad -=  1;
				mostrarLista(productos);
				let item = new Articulo(producto.nombre, producto.precio, producto.cantidad);
				carritoDeCompras.push(item);
				const enJSON = JSON.stringify(carritoDeCompras);
				localStorage.setItem("carrito", enJSON);
				let totalSum = carritoDeCompras.reduce((acum,item) => acum + item.precio, 0 );
				totalSuma.textContent= "$ " + totalSum;
				const sumaJSON = JSON.stringify(totalSuma.textContent);
				localStorage.setItem("total", sumaJSON);
				let agregar = document.createElement("li");
				agregar.textContent = " " + producto.nombre + "   $" + producto.precio; 
				let botonEliminar = document.createElement("button");
				botonEliminar.textContent="🗑️";
				listaCompra.appendChild(agregar);
				agregar.appendChild(botonEliminar);

				botonEliminar.addEventListener("click", () =>{
					producto.cantidad +=  1;
					mostrarLista(productos);
					let elementoAEliminar = carritoDeCompras.indexOf(item);
					carritoDeCompras.splice(elementoAEliminar, 1);
					let totalSum = carritoDeCompras.reduce((acum,item) => acum + item.precio, 0 );
					totalSuma.textContent= "$ " + totalSum;
					const sumaJSON = JSON.stringify(totalSuma.textContent);
					localStorage.setItem("total", sumaJSON);
					listaCompra.removeChild(agregar);
					const enJSON = JSON.stringify(carritoDeCompras);
					localStorage.setItem("carrito", enJSON);
					
				});
			});
		});
	};

	crearNav();
	mostrarLista(productos);
	buscarEnBarra();
}

shopping();
