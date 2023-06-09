const celulares = {
    productos: [
        {
            id : 1,
            modelo : "iphone 14",
            descripcion :  "Pantalla Super Retina XDR, Pantalla OLED de 6.1 pulgadas (diagonal) sin marco y Resolución de 2532 x 1170 pixeles a 460 ppi ",
            foto : '/images/products/iphone-14.png', 
            fecha : " 25/01/2023",
        },
 
        {
            id : 2,
            modelo : "iphone 14 pro",
            descripcion : " Pantalla Super Retina XDR, Pantalla OLED de 6.1 pulgadas (diagonal) sin marco y Resolución de 2556 x 1179 pixeles a 460 ppi",
            foto : '/images/products/iphone-14-pro.jpg',
            fecha : "17/01/2023",
        },
        {
            id : 3,
            modelo : "iphone 14 pro max",
            descripcion : "Pantalla Super Retina XDR, Pantalla OLED de 6.7 pulgadas (diagonal) sin marco y Resolución de 2796 x 1290 pixeles a 460 ppi",
            foto : "/images/products/iphone-14-pro-max.webp ",
            fecha : "03/02/2023",
        },
        {
            id : 4,
            modelo : "iphone 13",
            descripcion : "Pantalla Super Retina XDR, Pantalla OLED de 6.1 pulgadas (diagonal) sin marco y Resolución de 2532 x 1170 pixeles a 460 ppi",
            foto : "/images/products/iphone-13.png",
            fecha : "13/09/2021",
        },
        {
            id : 5,
            modelo : "iphone SE(tercera generacion)",
            descripcion : "Pantalla Retina HD, Pantalla widescreen LCD Multi-Touch de 4.7 pulgadas (diagonal) con tecnología IPS y Resolución de 1334 x 750 pixeles a 326 ppi",
            foto : "/images/products/iphone-se-3ra.jpg",
            fecha : "13/09/2020 "
        },
        {
            id: 6,
            modelo: "iphone 12",
            descripcion: " Pantalla Super Retina XDR, Pantalla OLED de 6.1 pulgadas (diagonal) sin marco, Resolución de 2532 x 1170 pixeles a 460 ppi",
            foto: "/images/products/iphone-12.jpg",
            fecha : "03/01/2023"
        },
        {
            id: 7,
            modelo: "iphone 11",
            descripcion: " Liquid Retina HD, Pantalla LCD Multi-Touch de 6,1 pulgadas (en diagonal) con tecnología IPS, Resolución de 1.792 por 828 píxeles a 326 p/p",
            foto: "/images/products/iphone-11.png",
            fecha : "22/08/2022"
        },
        {
            id: 8,
            modelo: "iphone 11 pro",
            descripcion: "Super Retina XDR, Pantalla OLED Multi-Touch de 5,8 pulgadas (en diagonal), Pantalla HDR, Resolución de 2.436 por 1.125 píxeles a 458 p/p",
            foto: "/images/products/iphone-11-pro.png",
            fecha : "24/10/2022"
        },
        {
            id: 9,
            modelo: "iphone X",
            descripcion: "El iPhone X es un teléfono inteligente de Apple con pantalla OLED de 5.8 pulgadas, cámara trasera doble de 12 megapíxeles, procesador A11 Bionic, almacenamiento interno de 256 GB, carga inalámbrica y Face ID.",
            foto: "/images/products/iphone-x.png",
            fecha : "28/09/2021"
        },
        {
            id: 10,
            modelo: "iphone 8",
            descripcion: "El iPhone 8 es un teléfono inteligente de Apple con pantalla LCD de 4.7 pulgadas, cámara trasera de 12 megapíxeles, procesador A11 Bionic, almacenamiento interno de 64 GB, carga inalámbrica y Touch ID.",
            foto: "/images/products/iphone-8.png",
            fecha : "06/04/2020"
        },
    ],
    comentarios: [
        {
            usuario: "Fernando",
            texto:"Me podrian pasar disponibilidad de colores?",
            fotoPerfil: "/images/users/usuario1.jpg"
        },
        {
            usuario: "Steve Jobs",
            texto:"Agradecido de ser parte de esto!",
            fotoPerfil: "/images/users/usuario2.jpg"
        },
        {
            usuario: "Ignacio",
            texto:"Promete mas de lo que es",
            fotoPerfil: "/images/users/usuario3.jpg"
        },
        {
            usuario: "Mariano",
            texto:"Agradecido de ser parte de esto!",
            fotoPerfil: "/images/users/usuario4.jpg"
        },
        {
            id: 5,
            usuario: "Marisa",
            texto:"Agradecido de ser parte de esto!",
            fotoPerfil: "/images/users/usuario5.jpg"
        },
        {
            id: 6,
            usuario: "Tomas",
            texto:"Agradecido de ser parte de esto!",
            fotoPerfil: "/images/users/usuario6.jpeg"
        },
        {
            id: 7,
            usuario: "Julian",
            texto:"Agradecido de ser parte de esto!",
            fotoPerfil: "/images/users/usuario7.jpg"
        },
        {
            id: 8,
            usuario: "Lucas",
            texto:"Agradecido de ser parte de esto!",
            fotoPerfil: "/images/users/usuario8.jpg"
        },
        {
            id: 9,
            usuario: "Juliana",
            texto:"Agradecido de ser parte de esto!",
            fotoPerfil: "/images/users/usuario9.jpg"
        }
    ],
    usuario: 
        {
            email:"Juancarlos@gmail.com",
            nombre: "Juan Carlos",  
            contrasenia: "JuanLorcas",
            fechaDeNacimiento: "29/03/1986",
            dni: "32478541",
            fotoDePerfil: "/images/users/usuario8.jpg"
        }
    
};


module.exports = celulares;