module.exports = (req, res) => {
  console;
  return res.status(200).json({
    id: "1",
    title: "cinema",
    list: [
      {
        id: "free-1",
        title: "Sintel",
        duration: "14m 48s",
        tags: ["Free"],
        bannerUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Sintel_poster.jpg",
        titleUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sintel_The_Game_Logo_Small.svg/2560px-Sintel_The_Game_Logo_Small.svg.png",
        match: "95% Match",
        year: 2010,
        grade: "G",
        summary: `The main character, Sintel, is attacked while traveling through a wintry mountainside. After defeating her attacker and taking his spear, she finds refuge in a shaman's hut`,
        starring: ["Halina Reijin", "Thom Hoffman"],
        category: ["Action", "Thrilling"],
        trailerUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        trailerPoster: "https://media.w3.org/2010/05/sintel/poster.png",
      },
      {
        id: "free-2",
        title: "Big Buck Bunny",
        duration: "9m 56s",
        tags: ["Free"],
        bannerUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/1024px-Big_buck_bunny_poster_big.jpg",
        titleUrl: "https://en.wikifur.com/w/images/0/08/Big_Buck_Bunny_logo.png",
        match: "100% Match",
        year: 2008,
        grade: "G",
        summary: `The plot follows a day in the life of Big Buck Bunny, during which time he meets three bullying rodents: Frank the flying squirrel (the leader), Rinky the red squirrel, and Gimera the chinchilla (his sidekicks).`,
        starring: [
          "Big Buck Bunny",
          "Frank the flying squirrel",
          "Rinky the red squirrel",
          "Gimera the chinchilla",
        ],
        category: ["Comedy", "Fantasy"],
        trailerUrl: "https://media.w3.org/2010/05/bunny/trailer.ogv",
        trailerPoster: "https://media.w3.org/2010/05/bunny/poster.png",
      },
    ],
  });
};
