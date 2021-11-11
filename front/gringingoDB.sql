drop database gringingo;
create database gringingo;
use gringingo;

create table usuarios(
  id int primary key auto_increment,
  nick text,
  password text,
  vida int,
  experiencia int
);

create table premios(
  id int primary key auto_increment,
  nombre text,
  img text
);

create table desafios(
  id int primary key auto_increment,
  nombre text,
  premio_id int,
  foreign key (premio_id) references premios(id)
);

create table desafio_usuario(
  id int primary key auto_increment,
  desafio_id int not null,
  usuario_id int not null,
  foreign key (desafio_id) references desafios(id),
  foreign key (usuario_id) references usuarios(id)
);


create table niveles(
  id int primary key auto_increment,
  nombre text
);

create table lecciones(
  id int primary key auto_increment,
  nombre text,
  img text,
  nivel_id int,
  foreign key (nivel_id) references niveles(id)
);


create table leccion_usuario(
  id int primary key auto_increment,
  leccion_id int not null,
  usuario_id int not null,
  foreign key (leccion_id) references lecciones(id),
  foreign key (usuario_id) references usuarios(id)
);

create table preguntas(
  id int primary key auto_increment,
  detalle text,
  tipo text,
  leccion_id int not null,
  foreign key (leccion_id) references lecciones(id)
);

create table respuestas(
  id int primary key auto_increment,
  nombre text,
  correpta bool,
  pregunta_id int not null,
  foreign key (pregunta_id) references preguntas(id)
);

create table ligas(
  id int primary key auto_increment,
  nombre text,
  puntos int
);

create table notificaciones(
  id int primary key auto_increment,
  user_id int,
  tabla text,
  tabla_id int,
  mostrado bool,
  foreign key (user_id) references usuarios(id)
);




insert into ligas values
(default, "Diamante", 100),
(default, "Oro", 80),
(default, "Plata", 60);

insert into niveles values
(default, "Nivel 1"),
(default, "Nivel 2");

insert into lecciones values
(default, "Introduccion", "",1),
(default, "Saludos", "",2),
(default, "Viajes", "",2);

insert into preguntas values
(1, 'Traducir a ingles [Buenos días]',"opciones", 1),
(2, 'Traducir a ingles [Mucho gusto]',"opciones", 1),
(3, 'Traducir a ingles [Bienvenido a Bolivia]',"opciones", 1),
(4, 'Traducir a español [Good morning!]',"opciones", 1),
(5, 'Traducir a Ingles [Yo soy de Bolivia.]',"opciones", 1),
(6, 'Escribe [Bienvenido] en ingles ',"comparar", 1),
(7, 'Escribe [Mucho gusto] en ingles ',"comparar", 1);

insert into preguntas values
(8, 'Traducir al español [Good afternoon, nice to met you]',"opciones", 2),
(9, 'Traducir al español [How are you?]',"opciones", 2),
(10, 'Traducir al español [Nice to see you again]',"comparar", 2);

insert into preguntas values
(11, 'Traducir al español [What cities have you travelled to?]',"opciones", 3),
(12, 'Traducir al español [Why do people like to travel?]',"opciones", 3),
(13, 'Traducir al español [Paris is such a wonderfull place]',"comparar", 3);

insert into respuestas values
(default, "Good morning",true,1),
(default, "Good night",false,1),
(default, "Good evening",false,1);
insert into respuestas values
(default, "Nice to meet you.",true,2),
(default, "I meet you.",false,2),
(default, "Nice to meet your.",false,2);
insert into respuestas values
(default, "Welcome to Bolivia",true,3),
(default, "Welcome from Bolivia",false,3),
(default, "Welcome to Bolivian",false,3);
insert into respuestas values
(default, "Good morning",false,4),
(default, "Good night",true,4),
(default, "Good evening",false,4);
insert into respuestas values
(default, "Welcome to Bolivia.",false,5),
(default, "I am from Bolivia.",true,5),
(default, "I am Bolivia.",false,5);
insert into respuestas values 
(default, "Welcome",true,6);
insert into respuestas values 
(default, "Nice to meet you.",true,7);
insert into respuestas values
(default, "Buenas tardes, mucho gusto",true,8),
(default, "Buenos dias, mucho gusto",false,8),
(default, "Buenas noches, mucho gusto",true,8);
insert into respuestas values
(default, "Como estuviste?",false,9),
(default, "Como has estado?",false,9),
(default, "Como estas?",true,9);
insert into respuestas values 
(default, "Que bueno verte denuevo",true,10);
insert into respuestas values
(default, "A cuantas ciudades has viajado?",true,11),
(default, "Cuantas ciudades viajaste?",false,11),
(default, "Has viajado a ciudades?",false,11);
insert into respuestas values
(default, "A cuantas ciudades has viajado?",true,12),
(default, "Cuantas ciudades viajaste?",false,12),
(default, "Has viajado a ciudades?",false,12);
insert into respuestas values
(default, "Porque te gusta viajar?",false,13),
(default, "Porque a la gente le gusta viajar?",true,13),
(default, "Porque A la gente le gustó viajar?",false,13);

alter table desafios add column tipo text;
alter table desafios add parametro int;

insert into premios values(default, "Un buen inicio", "");
insert into premios values(default, "Sin restrecciones", "");

insert into desafios values(default, "Responde tu primera pregunta correpta",1,"exp",10);
insert into desafios values(default, "Consigue 60 de experiencia",2,"exp",60);
insert into desafios values(default, "Completa tu primera lección",2,"leccion",1);



DELIMITER $$
drop PROCEDURE if exists sp_usuario_insert;$$
CREATE PROCEDURE sp_usuario_insert(_nick text, _password text)  BEGIN
	INSERT into usuarios values (DEFAULT, _nick, sha1(_password), 5, 0);
    select * from usuarios where id = LAST_INSERT_ID();
END$$

DELIMITER $$
drop PROCEDURE if exists sp_usuario_selectByLogin;$$
CREATE PROCEDURE sp_usuario_selectByLogin (_nick TEXT,_password TEXT)  BEGIN
	SELECT id, nick, vida, experiencia from usuarios where nick like _nick and password like sha1(_password);
END$$

DELIMITER $$
drop PROCEDURE if exists sp_progresoByUser;$$
CREATE PROCEDURE sp_progresoByUser(_usuario_id int)  BEGIN

    select z.id,z.nombre, x.lecciones,z.completados from (
    select n.id, count(n.id) as lecciones from niveles n
    join lecciones l on n.id = l.nivel_id
    group by n.id) x

    join (
      select n2.*, ifnull(completados,0) as completados from niveles n2
          left join (
            select l.*, count(l.id) as completados from niveles n
            join lecciones l on n.id = l.nivel_id
            join leccion_usuario lu on l.id = lu.leccion_id
            where lu.usuario_id = _usuario_id
            group by n.id) leu on n2.id = leu.id) z on x.id = z.id;

END$$

DELIMITER $$
drop PROCEDURE if exists sp_leccion_usuario_insert;$$
CREATE PROCEDURE sp_leccion_usuario_insert(_leccion_id int, _usuario_id int)  BEGIN
  
  declare isRepetido int default 0;
  declare _nivel_id int default 0;

  select nivel_id into _nivel_id from lecciones where id = _leccion_id;
  select count(*) into isRepetido from leccion_usuario where usuario_id = _usuario_id and leccion_id = _leccion_id; 
  
  if isRepetido = 0 then

    insert into leccion_usuario values(default, _leccion_id, _usuario_id);

  end if;
    
  call sp_progresoByUser(_usuario_id);
	
END$$


DELIMITER $$
drop PROCEDURE if exists sp_usuarioExperiencia_update;$$
CREATE PROCEDURE sp_usuarioExperiencia_update(_id int)  BEGIN
  
  declare _punto int default 10;

  update usuarios set experiencia = (select experiencia from usuarios where id = _id) + _punto
    where id = _id;
  
  select * from usuarios where _id;
	
END$$


DELIMITER $$
drop PROCEDURE if exists sp_usuarioQuitarVida;$$
CREATE PROCEDURE sp_usuarioQuitarVida(_id int)  BEGIN
  
  declare _vida int default 0;

  select vida into _vida from usuarios where id = _id;
  if _vida <> 0 then
    update usuarios set vida = _vida -1  where id = _id;
  end if;
  
  
  select * from usuarios where id = _id;
	
END$$




DELIMITER $$
drop PROCEDURE if exists sp_usuarioExperiencia_update;$$
CREATE PROCEDURE sp_usuarioExperiencia_update(_id int)  BEGIN
  
  declare _punto int default 10;
  declare _new_experiencia int default 0;
  declare _notificar int default 0;

  declare _notificacionId text default 0;
  declare _premioId int default 0;

  select experiencia into _new_experiencia from usuarios where _id;
  set _new_experiencia = _new_experiencia + _punto;

  update usuarios set experiencia = _new_experiencia where id = _id;

  
  select count(*) into _notificar from desafios where tipo = "exp" and parametro = _new_experiencia;
  if _notificar <> 0 then

    select id, premio_id into _notificacionId, _premioId from desafios where tipo = "exp" and parametro = _new_experiencia;
    insert into notificaciones values(default, _id, "desafios", _notificacionId, 0);

    call sp_insert_premios(_id, _premioId);
  end if;

  select * from usuarios where _id;
	
END$$

  


DELIMITER $$
drop PROCEDURE if exists sp_leccion_usuario_insert;$$
CREATE PROCEDURE sp_leccion_usuario_insert(_leccion_id int, _usuario_id int)  BEGIN
  
  declare isRepetido int default 0;
  declare _nivel_id int default 0;

  declare _notificacionId text default 0;
  declare _premioId int default 0;
  declare _countLecciones int default 0;
  declare _notificar int default 0;

  select nivel_id into _nivel_id from lecciones where id = _leccion_id;
  select count(*) into isRepetido from leccion_usuario where usuario_id = _usuario_id and leccion_id = _leccion_id; 
  
  if isRepetido = 0 then

    insert into leccion_usuario values(default, _leccion_id, _usuario_id);

    select count(*) into _countLecciones from leccion_usuario where usuario_id = _usuario_id;
    select count(*) into _notificar from desafios where tipo = "leccion" and parametro = _countLecciones;
    
    if _notificar <> 0 then
      select id, premio_id into _notificacionId, _premioId from desafios where tipo = "leccion" and parametro = _countLecciones;
      insert into notificaciones values(default, _usuario_id, "desafios", _notificacionId, 0);

      call sp_insert_premios(_usuario_id, _premioId);
    end if;

  end if;
    
  call sp_progresoByUser(_usuario_id);
	
END$$




DELIMITER $$
drop PROCEDURE if exists sp_notificaciones;$$
CREATE PROCEDURE sp_notificaciones(_usuario_id int)  BEGIN

  select (select count(*) from notificaciones where user_id = _usuario_id and tabla = "desafios" and mostrado = 0) as desafios,
        (select count(*) from notificaciones where user_id = _usuario_id and tabla = "premios" and mostrado = 0) as premios;
END$$

  

DELIMITER $$
drop PROCEDURE if exists sp_get_notificaciones;$$
CREATE PROCEDURE sp_get_notificaciones(_usuario_id int, _tabla text)  BEGIN
  
  update notificaciones set mostrado = 1 where user_id = _usuario_id and tabla = _tabla;  
  if _tabla = "desafios" then
    
    select n.id, d.nombre from notificaciones n
      join desafios d on n.tabla_id = d.id
    where user_id = _usuario_id and tabla = _tabla;

  elseif _tabla = "premios" then

    select n.id, p.nombre from notificaciones n
      join premios p on n.tabla_id = p.id
    where user_id = _usuario_id and tabla = _tabla;

  end if;
END$$



DELIMITER $$
drop PROCEDURE if exists sp_insert_premios;$$
CREATE PROCEDURE sp_insert_premios(_usuario_id int, _premio_id text)  BEGIN
  
  declare _countDesafios int default 0;
  declare _countDesafiosCompletados int default 0;

  declare _valido int default 0;

  select count(*) into _countDesafios from desafios where premio_id = _premio_id;

  select count(*) into _countDesafiosCompletados from (select * from notificaciones where tabla = "desafios" and user_id = 1) n
  join desafios d on n.tabla_id = d.id 
  where d.premio_id = _premio_id;

  if _countDesafios = _countDesafiosCompletados then

    select count(*) into _valido from notificaciones where tabla = "premios" and user_id = _usuario_id and tabla_id = _premio_id;
    
    if _valido = 0 then 

      insert into notificaciones values(default, _usuario_id, "premios", _premio_id, 0);

    end if;
  end if;

END$$

UPDATE `lecciones` SET `img` = 'principiante' WHERE `lecciones`.`id` = 1;
UPDATE `lecciones` SET `img` = 'medio_2' WHERE `lecciones`.`id` = 3;
UPDATE `lecciones` SET `img` = 'medio_1' WHERE `lecciones`.`id` = 2;
