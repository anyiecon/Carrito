//carrusel/transición de imagenes
var imagenes =['images/img5.jpg','images/img1.jpg','images/img3.jpg']
    cont= 0;

function carrusel(contenedor){
    contenedor.addEventListener('click', e =>{
        let atras = contenedor.querySelector('.atras');
            adelante = contenedor.querySelector('.adelante');
            img = contenedor.querySelector('img');
            evelue = e.target;
        if(evelue == atras){
            if(cont < 0){
                img.src= imagenes[ cont -1];
                cont--;

            } else{
                img.src = imagenes[imagenes.length -1];
                cont = imagenes.length -1;
            }

        }else if( evelue == adelante){
            if(cont < imagenes.length -1){
                img.src = imagenes[cont +1];
                cont++;
            }else{
                img.src= imagenes[0];
                cont= 0;
            }
        }
    });
}
document.addEventListener("DOMContentLoaded", () =>{
    let contenedor = document.querySelector('.contenedor');
    carrusel(contenedor);
})

//creacion de cards

const container_productos = document.getElementById('main');
const btn_carrito = document.querySelector('.btn_carrito');
const cart = document.querySelector('.cart');

cart_food = [];

const cards_ono = ( name , img, price, id ) => {
        const card_render = document.createElement('div');
            const h2_title = document.createElement('h2');
            const card_main = document.createElement('div');
            const div_image = document.createElement('div');
            const image_card = document.createElement('img');
            const btn_card = document.createElement('button');
            const h3_price = document.createElement('price');

            card_render.classList.add('card');
            h2_title.setAttribute('id', 'h2');
            h2_title.textContent=name;
            card_main.classList.add('card-main');
            div_image.classList.add('card-image');
            image_card.setAttribute('src', img); 
            image_card.setAttribute('alt','Image Car');
            image_card.classList.add('img'); 
            h3_price.setAttribute('id', 'price');
            h3_price.textContent= price;
            
            btn_card.setAttribute('id_product', id);
            btn_card.textContent= 'Add';
            
            btn_card.classList.add('button');
            btn_card.addEventListener('click', agregarCarrito);

            card_render.appendChild(h2_title);    
            card_render.appendChild(card_main);
            card_render.appendChild(div_image);
            div_image.appendChild(image_card);
            card_render.appendChild(h3_price);
            card_render.appendChild(btn_card);
            container_productos.appendChild(card_render);
            
    
}

function create_cards(){
    products.forEach( producto =>{
        cards_ono(producto.name, producto.img, producto.price,producto.id)
        console.log(producto.name, producto.img, producto.price, producto.id);

      
            
    });
}

const mostrarCarito = () =>{
    main.innerHTML='';
    const lista = [...new Set(cart_food)];
    lista.forEach(item => {
        const todos_productos = products.filter(productos => {
            return productos.id === parseInt(item);
        })

        let count= 0;

        for(let id of cart_food){
            if(id === item){
                count++;
            }
        }
        console.log(todos_productos)

        const card_producto_cart = document.createElement('div');
        const nombre = document.createElement('p');
        const imgo = document.createElement('img');
        const price = document.createElement('p');
        const contador = document.createElement('p');
        const btn_suma = document.createElement('button');
        const btn_resta = document.createElement('button');
        const btn_eliminar = document.createElement('button');
        btn_suma.setAttribute('id_product', todos_productos[0].id);
        btn_resta.setAttribute('id_product', todos_productos[0].id);
        btn_eliminar.setAttribute('id_product', todos_productos[0].id);

        nombre.textContent = todos_productos[0].name;
        imgo.textContent = todos_productos[0].img;
        price.textContent = todos_productos[0].price;
        btn_suma.textContent ='+';
        btn_eliminar.textContent ='--' ;
        btn_eliminar.textContent ='x';
        contador.textContent = count;

        card_producto_cart.classList.add('card_render');
        card_producto_cart.appendChild(nombre);
        card_producto_cart.appendChild(imgo);
        card_producto_cart.appendChild(price);
        card_producto_cart.appendChild(contador);
        card_producto_cart.appendChild(btn_suma);
        card_producto_cart.appendChild(btn_resta);
        card_producto_cart.appendChild(btn_eliminar);

        btn_suma.addEventListener('click', agregarCarrito);
        btn_resta.addEventListener('click', restarProducto);
        btn_eliminar.addEventListener('click', eliminarProducto);

        cart.appendChild(card_producto_cart);

        
    });
}

create_cards();

function agregarCarrito(event) {
   cart_food.push(event.target.getAttribute('id_product'));
   mostrarCarito();
}

const restarProducto = (ever) => {
    let item = ever.target.getAttribute('id_product') 
    cart_food.splice(parseInt(cart_food.indexOf(item)),1)
    mostrarCarito();
}

const eliminarProducto = (eventos) => {
    let item = eventos.target.getAttribute('id_product');
    
    cart_food = cart_food.filter((id_producto) => {
        return id_producto !== item;
    });
    
    mostrarCarito();
}

btn_carrito.addEventListener('click', () => {
    cart.classList.toggle('ocult');
})
