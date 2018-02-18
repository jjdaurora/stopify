DROP DATABASE IF EXISTS stopify_db;

CREATE DATABASE stopify_db;

use stopify_db;
drop table if exists users;
CREATE TABLE users
(
  user_id int NOT NULL
  AUTO_INCREMENT,
	user_name varchar
  (255) NOT NULL,
  user_email varchar
  (255) NOT NULL,
  user_liked_tracks varchar
  (255) NOT NULL,
  user_disliked_tracks varchar
  (255) NOT NULL,
  spotify_id int NOT NULL,
  user_image varchar
  (255) NOT NULL,
  user_subscription varchar
  (255) NOT NULL,
	PRIMARY KEY
  (user_id)
);

  drop table if exists genres;
  CREATE TABLE genres
  (
    genre_id int
    AUTO_INCREMENT,
    genre varchar
    (255) not null,
    pseudo_genre varchar
    (255) NOT NULL,
    PRIMARY KEY
    (genre_id)
);


    drop table if exists music;
    CREATE TABLE music
    (
      track_id int
      AUTO_INCREMENT,
    track_name varchar
      (255) NOT NULL,
    track_artist varchar
      (255) NOT NULL,
    track_genre varchar
      (255) NOT NULL,
    track_artwork varchar
      (255) not null,
    track_popularity integer
      (255) NOT NULL,
    PRIMARY KEY
      (track_id),
    user_id int NOT NULL,
    genre_id int not null,
    FOREIGN KEY
      (user_id) REFERENCES users
      (user_id),
    foreign key
      (genre_id) references genres
      (genre_id)
);
