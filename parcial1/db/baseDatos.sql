-- crear el schema --
create SCHEMA productos;
-- entrar a la db --
use productos;

-- creando las tablas -- 
create table usuarios(

id                int            unsigned primary key auto_increment,
mail              varchar(50)    not null,
contrasenia       varchar(100)   not null,
nombre            varchar(50)    not null,
fotoPerfil        varchar(200),
fecha             date           not null,
dni               int            not null UNIQUE,

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table productos(
id                 int            unsigned primary key auto_increment,
nombre             varchar(100)   not null,
descripcion        varchar(350)   not null,
foto               varchar(200)   not null,
id_usuario         int            unsigned,
foreign key (id_usuario) REFERENCES usuarios(id),

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table comentarios(

id                 int            unsigned primary key auto_increment,
texto              varchar(500)   not null,


id_usuario          INT           UNSIGNED,
id_producto         INT           UNSIGNED,
foreign key (id_usuario) REFERENCES usuarios(id),
foreign key (id_producto) REFERENCES productos(id),

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO usuarios(id, mail, contrasenia, nombre, fotoPerfil, fecha, dni)
VALUES (default, 'Juancarlos@gmail.com', 'JuanLorcas', 'juan', '/images/users/usuario1.jpg','1986-03-29', '32478541'),
(default,'matiasrocha@hotmail.com', 'rochaesteban', 'matias', '/images/users/usuario4.jpg', '1995-12-04', '37838709'),
(default,'pedritoelrocho@gmail.com', 'turko123', 'pedro', '/images/users/usuario5.jpg', '2001-11-13', '43522951'),
(default,'lolaino@gmail.com', 'lolopepe', 'lorenzo', '/images/users/usuario2.jpg', '1945-08-06','17684100'),
(default,'isabel@gmail.com', 'lucifer', 'isabella', '/images/users/usuario1.jpg','1962-11-23', '19605018');

INSERT INTO productos(id, nombre, descripcion, foto, id_usuario)
VALUES (DEFAULT,'iphone 14','Pantalla Super Retina XDR, Pantalla OLED de 6.1 pulgadas (diagonal) sin marco y Resolución de 2532 x 1170 pixeles a 460 ppi ','/images/products/iphone-14.png', 1),
(DEFAULT,'iphone 14 pro',' Pantalla Super Retina XDR, Pantalla OLED de 6.1 pulgadas (diagonal) sin marco y Resolución de 2556 x 1179 pixeles a 460 ppi','/images/products/iphone-14-pro.jpg', 2),
(DEFAULT,'iphone 14 pro max','Pantalla Super Retina XDR, Pantalla OLED de 6.7 pulgadas (diagonal) sin marco y Resolución de 2796 x 1290 pixeles a 460 ppi','/images/products/iphone-14-pro-max.webp', 3),
(DEFAULT,'iphone 13','Pantalla Super Retina XDR, Pantalla OLED de 6.1 pulgadas (diagonal) sin marco y Resolución de 2532 x 1170 pixeles a 460 ppi','/images/products/iphone-13.png', 4),
(DEFAULT,'iphone SE(tercera generacion)','Pantalla Retina HD, Pantalla widescreen LCD Multi-Touch de 4.7 pulgadas (diagonal) con tecnología IPS y Resolución de 1334 x 750 pixeles a 326 ppi','/images/products/iphone-se-3ra.jpg', 5),
(DEFAULT,'iphone 12','Pantalla Super Retina XDR, Pantalla OLED de 6.1 pulgadas (diagonal) sin marco, Resolución de 2532 x 1170 pixeles a 460 ppi','/images/products/iphone-12.jpg', 2),
(DEFAULT,'iphone 11','Liquid Retina HD, Pantalla LCD Multi-Touch de 6,1 pulgadas (en diagonal) con tecnología IPS, Resolución de 1.792 por 828 píxeles a 326 p/p','/images/products/iphone-11.png', 1),
(DEFAULT,'iphone 11 pro','Super Retina XDR, Pantalla OLED Multi-Touch de 5,8 pulgadas (en diagonal), Pantalla HDR, Resolución de 2.436 por 1.125 píxeles a 458 p/p','/images/products/iphone-11-pro.png', 3),
(DEFAULT,'iphone X','El iPhone X es un teléfono inteligente de Apple con pantalla OLED de 5.8 pulgadas, cámara trasera doble de 12 megapíxeles, procesador A11 Bionic, almacenamiento interno de 256 GB, carga inalámbrica y Face ID.','/images/products/iphone-x.png', 5),
(DEFAULT,'iphone 8','El iPhone 8 es un teléfono inteligente de Apple con pantalla LCD de 4.7 pulgadas, cámara trasera de 12 megapíxeles, procesador A11 Bionic, almacenamiento interno de 64 GB, carga inalámbrica y Touch ID.','/images/products/iphone-8.png', 4);

INSERT INTO comentarios(id, texto, id_usuario, id_producto)
VALUES (DEFAULT, 'Hola, en dolares a cuanto lo dejas?', 1, 1),
(DEFAULT, 'Capacidad de la batería?', 1, 1),
(DEFAULT, 'Paypal?', 1, 1),
(DEFAULT, 'Hola. Cuál es el modelo del IPhone? Compatible con las bandas de Movistar? Saludos', 1, 1),
(DEFAULT, 'Acepta ApplePay o paypal?', 1, 10),
(DEFAULT, 'Hola el 14 512g viene con cargador?', 1, 2),
(DEFAULT, 'Hacen factura A? Las cuotas son fijas?', 1, 2),
(DEFAULT, 'Excelente como todo lo que produce apple', 1, 2),
(DEFAULT, 'E x c e l e n t e ! ! !. No hay palabras para describir esta terrible maquina. Si estas leyendo este comentario porque necesitas opiniones del celular, te digo, no pienses mas.', 2, 2),
(DEFAULT, 'Quisiera que fuera lo más rápido posible', 2, 3),
(DEFAULT, 'Bien ¿Ustedes venden el cargador? Si es así ¿Me pasas el enlace? Gracias', 2, 3),
(DEFAULT, 'Hola qué tal? Te hago una consulta, tienen algún celular marca Huawei? O sólo Apple, disculpa la molestia, saludos!', 2, 3),
(DEFAULT, 'Son refurbished ?', 2, 3),
(DEFAULT, 'Buen dia, el telefono es nuevo en caja o es usado?', 2, 4),
(DEFAULT, 'Hola, el publicado es el valor con factura e impuestos? sino cuanto sale final facturado? gracias!', 2, 4),
(DEFAULT, 'Hola, que incluye la compra, año de fabricacion?', 2, 4),
(DEFAULT, 'Hola ¿Viene con el sello de seguridad de no haber sido abierto? ¿Incluye cargador? De no incluir cargador ¿Venden? Gracias', 3, 4),
(DEFAULT, 'Buenas noches, viene con vidrio templado cargador o funda? saludos', 3, 5),
(DEFAULT, 'Tienen cuotas con tarjeta?', 3, 5),
(DEFAULT, 'Hola! Viene en caja sellada,es original, trae cable, que año de fabricacion es, si coloco el numero de serie en la pagina de apple figara la garantia? Gracias', 3, 5),
(DEFAULT, 'Excelente es muy rapido y la camara zarpada.', 3, 5),
(DEFAULT, 'Excelente , tenia un ipfone 7 y la difierencia es unica. Super contento.', 3, 6),
(DEFAULT, 'Agradecido de ser parte de esto!', 3, 6),
(DEFAULT, 'Me podrian pasar disponibilidad de colores?', 3, 6),
(DEFAULT, 'Excelente !!! no es una sorpresa, es lo que iphone te garantiza.', 4, 6),
(DEFAULT, 'Tal cual fue contratado, todo lo detallado es correcto.', 4, 7),
(DEFAULT, 'Muy bueno, fue un regalo de navidad para mi hijo, quedo muy conforme.', 4, 7),
(DEFAULT, 'Excelente compra y en buenas condiciones.', 4, 7),
(DEFAULT, 'Bien por el celular, pero no trae cargador y la ficha no es usb. Demora entonces el comenzar a usarlo.', 4, 7),
(DEFAULT, 'me mintieron!!!!!!!! estos son unos estafadoress. NO COMPRAR', 4, 8),
(DEFAULT, 'Excelente equipo todo funciono muy bien!.', 4, 8),
(DEFAULT, 'Es iphone. Nada más que decir. Excelente le queda corto.', 4, 8),
(DEFAULT, 'Hola hay stock? se puede comprar?', 5, 8),
(DEFAULT, 'Buenisimo, lo mejor del mercado.', 5, 9),
(DEFAULT, 'Viene cerrado en caja? es original?', 5, 9),
(DEFAULT, 'Excelente y muy buen producto!!!.', 5, 9),
(DEFAULT, 'Carga super rápido, la batería dura el doble. Mucho más robusto. Lo recomiendo.', 5, 9),
(DEFAULT, 'Buen día! te queda en stock? gracias', 5, 10),
(DEFAULT, 'Es con sim?', 5, 10),
(DEFAULT, 'Excelente equipo, muy rápido y fluido.', 5, 10);

DROP TABLE usuarios;



-- eliminar la base de datos --
DROP DATABASE productos;