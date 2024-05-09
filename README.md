Este código comienza con una generación de 25 productos. No voy a mentir, le pedí a ChatGPT que me los haga. La definición de la clase Producto, el array productos al cual se le va a hacer un push de cada uno de los productos, y la creación de la clase Artículo. 
A continuación, se crea un carrito de compras que va a ser un array vacío.
En la función shopping, se definen varias variables que toman del documento clases o ids para controlar el botón home, que está fijo y tiene un evento que siempre va a mostrar la lista de productos completa. 
Lo primero que hace el programa es revisar si en el localStorage hay almacenada una lista de productos guardada y un subtotal. Si esto es real, lo muestra en la lista; sino, la lista va a estar vacía y el total va a ser cero.
La barra de tareas es una barra creada con JavaScript al 100%, la cual busca las categorías en cada producto y crea el botón con esa categoría. 
Si se presiona cada uno de los botones, se va a hacer una filtración de la lista total de productos para mostrar solamente los productos correspondientes a esa categoría.
La barra de búsqueda es un input de texto en el cual, si se presiona Enter, se va a hacer la búsqueda. Si se presiona el botón de la lupa, se va a hacer la búsqueda de la misma manera, filtrando el resultado buscado solamente. 
Cada ítem tiene una cantidad de unidades disponibles y un botón con un carrito. Las unidades disponibles serán restadas una vez que el producto se agrega al carrito, y en la lista de compras se agregará el producto y se creará un botón para borrar el producto.
Si el producto no tiene stock, el botón estará deshabilitado. Si al producto le queda una sola unidad, se mostrará un aviso de que le queda solamente una unidad.
