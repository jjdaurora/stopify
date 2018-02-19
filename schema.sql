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
   user_id int not null,
    genre_id int not null,
    index
      (user_id, genre_id),
     constraint FOREIGN KEY
      (user_id) REFERENCES users
      (user_id)
      ON
      UPDATE CASCADE,
    constraint foreign key
      (genre_id) references genres
      (genre_id)
      ON
      UPDATE CASCADE
);

      drop table if exists track_feedback;
      CREATE TABLE track_feedback
      (
        feedback_id INT NOT NULL
        AUTO_INCREMENT,
  user_feedback int not null,
  track_feedback int not null,
  feedback BOOLEAN DEFAULT false,
  primary key
        (feedback_id),
  user_id int not null,
  track_id int not null,
  index
        (user_id, track_id),
 constraint FOREIGN KEY
        (user_id) REFERENCES users
        (user_id)
      ON
        UPDATE CASCADE,
     constraint FOREIGN KEY
        (track_id) REFERENCES music
        (track_id)
      ON
        UPDATE CASCADE
);
