SELECT * FROM music;

INSERT INTO music
    (track_name, track_artist, track_genre, track_popularity )
VALUES
    ("She Hates Me", "Puddle of Mud", "Rock", "low"),
    ("Pedal to the Medal", "Kazzer", "Rock", "low"),
    ("Louis XIV", "Find Out True Love is Blind", "Rock", "low"),
    ("Photograph", "Nickelback", "Rock", "low"),
    ("Worthy to Say Hi", "Nickelback", "Rock", "low"),
    ("Stars are Blind", "Paris Hilton", "Rock", "low"),
    ("My Humps", "Black Eyed Peas", "Dance", "low"),
    ("Achy Breaky Heart", "Billy Ray Cyrus", "Rock", "low"),
    ("Rockstar", "Nickelback", "Rock","low"),
    ("Nookie", "Limp Bizkit", "Rap", "low");

SELECT *
FROM genres;

INSERT INTO genres
    (pseudo_genre )
VALUES
    ("Rock"),
    ("Pop"),
    ("Country"),
    ("Rap"),
    ("Metal"),
    ("R&B"),
    ("Jazz"),
    ("Blues"),
    ("Folk"),
    ("Polka");