module.exports = (req, res) => {
  console;
  return res.status(200).json({
    id: "1",
    title: "cinema",
    list: [
      {
        id: "subscription-1",
        title: "Hacksaw Ridge",
        duration: "2h 19m",
        tags: ["Free"],
        bannerUrl: "https://upload.wikimedia.org/wikipedia/en/8/8a/Hacksaw_Ridge_poster.png",
        titleUrl:
          "https://fanart.tv/fanart/movies/324786/hdmovielogo/hacksaw-ridge-57f3aa7d75c8c.png",
        match: "100% Match",
        year: 2016,
        grade: "PG-13",
        summary: `In rural 1920s Virginia, the young Desmond Doss nearly kills his little brother Hal while roughhousing. This event and his Seventh-day Adventist upbringing reinforce Desmond's belief in the commandment "Thou shalt not kill".`,
        starring: ["Andrew  Garfield", "Sam Worthington"],
        category: ["Action"],
        trailerUrl:
          "https://firebasestorage.googleapis.com/v0/b/jc-general.appspot.com/o/simple-vod-app%2FhacksawRidge.mp4?alt=media&token=5d1374fd-215b-4ee3-afa9-a5f8fa8c64dc",
        trailerPoster: "https://pbs.twimg.com/media/Cv4D_CTWIAAw3b8.jpg",
      },
      {
        id: "subscription-2",
        title: "Heaven is for Real",
        duration: "1h 51m",
        tags: ["Watch free with ads"],
        bannerUrl:
          "https://upload.wikimedia.org/wikipedia/en/b/b8/Heavenisforrealtheaterposter.jpg",
        titleUrl:
          "https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABffJu6OKCrq5hecDLED3gVJodRoaRKBfQ6a_IubO6cQpodWqzlTqu4sUZuyE3g_z-gGcrddb67EePgIXJIV3mrHT3C0r4hkN_pP5.png?r=181",
        match: "100% Match",
        year: 2014,
        grade: "G",
        summary: `Four-year-old Colton Burpo (Connor Corum) is the son of Todd Burpo (Greg Kinnear), pastor of Crossroads Wesleyan Church in Imperial, Nebraska. Colton says he experienced Heaven during an emergency surgery.`,
        starring: [
          "Greg Kinnear",
          "Kelly Reilly",
          "Connor Corum",
          "Margo Martindale",
          "Thomas Haden Church",
        ],
        category: ["Comedy", "Drama"],
        trailerUrl:
          "https://firebasestorage.googleapis.com/v0/b/jc-general.appspot.com/o/simple-vod-app%2FheavenIsForReal.mp4?alt=media&token=2d04502f-8d5a-4b04-8e83-d49441599793",
        trailerPoster:
          "https://img.washingtonpost.com/rf/image_480w/2010-2019/WashingtonPost/2014/04/07/Style/Images/DF-08806.jpg?uuid=_DKUVL6UEeOxld0MEXQFLA",
      },
      {
        id: "subscription-3",
        title: "Facing the Giants",
        duration: "1h 51m",
        tags: ["Buy", "Rent"],
        bannerUrl: "https://upload.wikimedia.org/wikipedia/en/7/7c/Facing_the_giants.jpg",
        titleUrl: "https://www.kendrickbrotherscatalogue.com/facingthegiants/_images/title.png",
        match: "100% Match",
        year: 2006,
        grade: "G",
        summary: `In 2003, Grant Taylor (Alex Kendrick) is the head football coach at Shiloh Christian Academy, and has yet to post a winning record in his six-year tenure. After his seventh season begins with a three-game losing streak, the players' fathers begin to agitate for his firing.`,
        starring: ["Alex Kendrick", "Shannen Fields", "Tracy Goode"],
        category: ["Action", "Comedy", "Drama"],
        trailerUrl:
          "https://firebasestorage.googleapis.com/v0/b/jc-general.appspot.com/o/simple-vod-app%2FfacingTheGiants.mp4?alt=media&token=9128cb8f-2a92-46a1-a848-fc89c8c1ad39",
        trailerPoster: "https://i.ytimg.com/vi/-sUKoKQlEC4/maxresdefault.jpg",
      },
      {
        id: "subscription-4",
        title: "Fireproof",
        duration: "2h 2m",
        tags: ["Free", "Rent"],
        bannerUrl: "https://upload.wikimedia.org/wikipedia/en/b/b7/Fireproof_poster.jpg",
        titleUrl: "https://www.kendrickbrotherscatalogue.com/fireproof/_images/title.png",
        match: "100% Match",
        year: 2008,
        grade: "G",
        summary: `Married couple Caleb (Kirk Cameron), a fire captain, and Catherine Holt (Erin Bethea), a hospital administrator, are experiencing marital difficulties. At work, Caleb underscores the importance of never leaving one's partner behind, but at home, he and Catherine argue constantly.`,
        starring: ["Kirk Cameron", "Erin Bethea", "Ken Bevel"],
        category: ["Action", "Drama"],
        trailerUrl:
          "https://firebasestorage.googleapis.com/v0/b/jc-general.appspot.com/o/simple-vod-app%2Ffireproof.mp4?alt=media&token=3927701d-ea7d-4d96-be7a-9e1e354e911c",
        trailerPoster: "https://images.justwatch.com/backdrop/11009023/s1440/fireproof",
      },
    ],
  });
};
