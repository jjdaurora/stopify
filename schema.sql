-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS app_db;
-- Creates the "stopify" database --
CREATE DATABASE app_db;

use app_db;

CREATE TABLE `user`
( `id` Int ( 11 ) AUTO_INCREMENT NOT NULL,
  `email` VARCHAR ( 255) NOT NULL,
  `favorite_spotify_track` VARCHAR ( 255 ) NOT NULL,
  'likes' VARCHAR (255) not null,
  'dislikes' varchar (255) not null,
  'like_genre' VARCHAR (255) not null,
  'dislike_genre' varchar (255) not null,
 PRIMARY KEY ( `id` ) );


create table 'music';
('id' int (11) auto_increment not null,
'artist_name' VARCHAR (255) not null,
'genre' varchar (255) not null,
'rating' varchar (255) not null,
PRIMARY KEY ('id') );

create table 'genre';
('id' int (11) auto_increment not null,)

