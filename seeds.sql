SELECT *
FROM users;

INSERT INTO users
    (user_name, user_email, spotify_id, user_image, user_subscription)
VALUES
    ("Steve", "stuff@emil.com", "1", "picture", "stuff"),
    ("Roger", "thing@emil.com", "2", "pictureA", "thing"),
    ("Sam", "hi@email.com", 3, "pictureB", "hi");

SELECT *
FROM music;

INSERT INTO music
    (track_name, track_artist, track_genre, track_artwork, track_popularity)
VALUES
    ("She Hates Me", "Puddle of Mud", "Rock", "picture", "0"),
    ("Pedal to the Medal", "Kazzer", "Rock", "picture", "0" ),
    ("Louis XIV", "Find Out True Love is Blind", "Rock", "picture", "0"),
    ("Photograph", "Nickelback", "Rock", "picture", "0"),
    ("Worthy to Say Hi", "Nickelback", "Rock", "picture", "0"),
    ("Stars are Blind", "Paris Hilton", "Rock", "picture", "0"),
    ("My Humps", "Black Eyed Peas", "Dance", "picture", "0"),
    ("Achy Breaky Heart", "Billy Ray Cyrus", "Country", "picture", "0"),
    ("Rockstar", "Nickelback", "Rock", "picture", "0"),
    ("Nookie", "Limp Bizkit", "Rap", "picture", "0");

SELECT *
FROM genres;

INSERT INTO genres
    (pseudo_genre, genre)
VALUES
    ("Rock", "Rock"),
    ("Pop", "Pop"),
    ("Country", "Country"),
    ("Rap", "Rap"),
    ("Metal", "Metal"),
    ("R&B", "R&B"),
    ("Jazz", "Jazz"),
    ("Blues", "Blues"),
    ("Folk", "Folk"),
    ("Post Teen Pop", "Post Teen Pop");



SELECT *
FROM track_feedback;

insert into track_feedback
    ( feedback)
VALUES
    ( true),
    (false);
