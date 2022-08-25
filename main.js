const arrayProductos = productos;


document.addEventListener('DOMContentLoaded', () => {
    renderizarHtml(arrayProductos);

    const nombreProducto = document.querySelector('#nombre-producto');

    nombreProducto.addEventListener('input', () => {
        const encontrados = arrayProductos.filter( ( { nombre } ) => {
            return nombre.toUpperCase().includes(nombreProducto.value.toUpperCase());
        });
        renderizarHtml(encontrados);
    });

    const filtrar = document.querySelector('#filtrar');

    filtrar.addEventListener('click', () => {
        const desde = document.querySelector('#desde').value;
        const hasta = document.querySelector('#hasta').value;

        const encontrados = arrayProductos.filter( ( { precio } ) => {
            return  Number(precio) >= desde && Number(precio) <= hasta;
        });
        renderizarHtml(encontrados);
    })


})


function renderizarHtml(array){
    const tbody = document.querySelector('tbody');

    tbody.innerHTML = '';

    if(array.length === 0){
        tbody.innerHTML = "<h1 class='mt-5'>No se encontraron resultados</h1>"
    }

    array.forEach( ( { imagen, nombre, precio } ) => {
        const tr = document.createElement('tr');  
        tr.innerHTML = `<td><img src="${imagen}"></td>
                        <td>${nombre}</td>
                        <td>$${precio}</td>`

        
        tbody.appendChild(tr);
    });
}

