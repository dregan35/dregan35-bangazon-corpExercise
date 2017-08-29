// select s.title, a.artistname from song s, artist a where a.artistName = 'Jay Z' and s.artistid = a.artistid

1. SELECT * FROM genre

2. insert into artist
(ArtistId, YearEstablished, ArtistName)
values (69, '1965', 'Pink Floyd');

3. insert into album
(AlbumId, Title, ReleaseDate, AlbumLength, Label, ArtistID, GenreID)
values (101, 'Dark Side Of The Moon', '03/01/1973', 4500, 'Capitol Record', 69, 2);

4. insert into song
(SongId, Title, ReleaseDate, SongLength, AlbumID, ArtistID, GenreID)
values (25, 'Money', '1973', 4500, 101, 69, 2);

5. SELECT al.title, s.Title, ar.artistname 
FROM artist ar, album al LEFT JOIN song s on s.albumid = al.albumid
where ar.artistName = 'Pink Floyd' 
and al.artistid = ar.Artistid

6. select count()

from song
group by "albumid"

7. select count()

from song
group by "artistid"

8. select count()

from song
group by "genreid"

9. SELECT
AlbumLength, title
FROM
album
WHERE
AlbumLength = (SELECT max(AlbumLength) FROM album);

10. SELECT
SongLength, title
FROM
song
WHERE
SongLength = (SELECT max(SongLength) FROM song);

11. 



