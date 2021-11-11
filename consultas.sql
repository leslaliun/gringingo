DROP DATABASE BusinessBackend;
show databases;
create database BusinessBackend;
drop database gringingo;

use gringingo;

select * from desafio_usuario;
select * from desafios;
select * from leccion_usuario;
select * from lecciones;
select * from ligas;
select * from niveles;
select * from notificaciones;
select * from preguntas;
select * from premios;
select * from respuestas;
select * from usuarios;


insert into usuarios values
(default,"gonzalo", "12345", 5, 40),
(default,"daniel", "12345", 5, 100),
(default,"josue", "12345", 5, 60),
(default,"analia", "12345", 5, 80),
(default,"jose", "12345", 5, 90),
(default,"sara", "12345", 5, 70),
(default,"flavia", "12345", 5, 50),
(default,"matias", "12345", 5, 30);