const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/bands", (req, res) => {
    band = [];
    band[0] = {
        name: "Jimi Hendrix",
        topSong: "The Wind Cries Mary",
        genre: "American Rock",
        years: "1942-1970",
        members: [
            ({
                name: "Jimi Hendrix",
                age: 27,
            },
            {
                name: "Noel Redding",
                age: 57,
            }),
        ],

        img: "/images/jimi.jpg",
    };
    band[1] = {
        name: "Chuck Berry",
        topSong: "Let's Twist Again",
        genre: "Blues",
        years: "1953-2017",
        members: [
            {
                name: "Charlie Edward Anderson Berry",
                age: 90,
            },
        ],

        img: "/images/berry.jpg",
    };
    band[2] = {
        name: "The Rolling Stones",
        topSong: "Like a Rolling Stone",
        genre: "Rock",
        years: "1962",
        members: [
            ({
                name: "Mick Jagger",
                age: 62,
            },
            {
                name: "Brian Jones",
                age: 58,
            }),
        ],

        img: "/images/rolling-stones.jpg",
    };
    band[3] = {
        name: "The Beatles",
        topSong: "Come Together",
        genre: "Rock",
        years: "1967",
        members: [
            ({
                name: "John Lennon",
                age: 85,
            },
            {
                name: "Paul McCarthney",
                age: 52,
            }),
        ],

        img: "/images/beatles.jpg",
    };
    band[4] = {
        name: "Ray Charles",
        topSong: "A Song For You",
        genre: "Blues",
        years: "1980",
        members: [
            ({
                name: "Ray Charles",
                age: 73,
            },
            {
                name: "David Newman",
                age: 78,
            }),
        ],

        img: "/images/ray.jpg",
    };
    band[5] = {
        name: "Bob Marley",
        topSong: "Redemption Song",
        genre: "Reggae",
        years: "1980",
        members: [
            {
                name: "Bob Marley",
                age: 38,
            },
        ],

        img: "/images/bob.jpg",
    };

    res.json(band);
});

app.listen(3000, () => {
    console.log("Listening to Port 3000");
});
