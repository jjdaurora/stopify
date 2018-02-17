SELECT *
FROM music;

INSERT INTO music
    (track_name, track_artist, track_genre, track_popularity )
VALUES
    ("She Hates Me", "Puddle of Mud", "Rock", "0"),
    ("Pedal to the Medal", "Kazzer", "Rock", "0"),
    ("Louis XIV", "Find Out True Love is Blind", "Rock", "0"),
    ("Photograph", "Nickelback", "Rock", "0"),
    ("Worthy to Say Hi", "Nickelback", "Rock", "0"),
    ("Stars are Blind", "Paris Hilton", "Rock", "0"),
    ("My Humps", "Black Eyed Peas", "Dance", "0"),
    ("Achy Breaky Heart", "Billy Ray Cyrus", "Country", "0"),
    ("Rockstar", "Nickelback", "Rock", "0"),
    ("Nookie", "Limp Bizkit", "Rap", "0");

SELECT *
FROM genres;

INSERT INTO genres
    (pseudo_genre, genre)
VALUES
    ("Rock", "Rock"),
    ("Pop""Pop"),
    ("Country", "Country"),
    ("Rap", "Rap"),
    ("Metal", "Metal"),
    ("R&B", "R&B"),
    ("Jazz", "Jazz"),
    ("Blues", "Blues"),
    ("Folk", "Folk"),
    ("Post Teen Pop", "Post Teen Pop");