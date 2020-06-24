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
          "https://imdb-video.media-imdb.com/vi2608248601/1434659607842-pgv4ql-1469716635759.mp4?Expires=1593018233&Signature=rHEi6qQR7qi9Qi~b0a1Kvsd~vJKVgiiz9cCfOUQcAtCrYoTkwOQ32qsIwEr7gE2N-0EVp4sujXL99L6WRQgSeAUCfY7NkG2Kg4mS7XI8Ndx~xCnGyuZ1TWoto32jCpB7oK3OKDDSY~z1Q2H0sJVkK9WVIYS9Tu4uWw0TxlnIjran1bhqoP6RfzGK~rYc7SZWBJMMWtNSN4rymZ7JXfJ5YbOXMhsV0ybRAqD0u4ZXCTiJr86n102U8LUBry3tlioc5uyq2WwuQcdIq9trcutg4-7zlh-5tXgWzyKZkvDMw7Y8PMo~uhX2slLXikt7gYjsKoQXsdkk9siTEOSKEqFoww__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
          "https://imdb-video.media-imdb.com/vi3802708505/1434659607842-pgv4ql-1564057645003.mp4?Expires=1593066110&Signature=LMUU1UItTcpCIXFuVgXokN9nEtX1DpKrPinm295~hzLL1fzFOV250jHqJt8oZOdFj1qYtOKT7tYtWAQHY3WeG7YpnQWsNFWPu-rfdEe8yd3SZtMJ4wYvh5qWpgQJS9-uAzJyfRcjrHAxUhIyRcT~gTIz0Hxz6pi3MK~BKLHVGNsc6VkqRa18bdNJx3yTa3sSoEBn-byHORfMbHP8LzzFuK5M0HPAyVhlLIpqwtlkJQ0SDhv71q9Ik4FQcyFuZzd4dHbR4vEA8kHt4a6fWeq1EjmMinz310HW70BfMXDtY~N6tH4R7QqimU1mptFSnKoIAukkHWmPY40lRmAlct8TPw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
          "https://imdb-video.media-imdb.com/vi3898409497/1434659607842-pgv4ql-1563433543633.mp4?Expires=1593065693&Signature=vQ196rEuW7NPIGk-Qzy1eqmOjhEZxf4vcs7NUL62K4zeOs9L2pELD4I5bFPAEGaUPaHokvArxwopIbJlgbf7OYbEZNxvukn~0Fbi6BeohQNgQFmTfz0zeLES~6iZLbkzxM73kSJ0n~ADe~by4z82NkDSkdStyUGCVEwNEhTkm-q9DYmVWb7fdc-LWHnHZQgfgBtKObONaHSOiAOrHgR8G5UzEs0rxkqk55667O2DqebysJulgbGNgz8bxT90BrQCFznU-bleb0mKkOLZt7X8KK2VMpcoo85FGrZR1BIamfOjSyKMMSzM03B~xxRha1h7vNMEb5Ph7oYDBs-xmFL4XQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
          "https://imdb-video.media-imdb.com/vi173933081/1434659607842-pgv4ql-1564515501851.mp4?Expires=1593065908&Signature=iX3Rc3YSXu2LX5Y5d4ODmFbQmw5a-H3SxmxnEhgEfCNFwuVmtizklg4y2OZKe1~kYwoQgQg9zVA-2X-GTiazYdTER4sv6q76N6XJ~j4qUjH8ouOgEG75yFT5gdCr4odGDGZU0Ot66Qo-N6tApESSIfbb8YlFYdMbAa~uOOiGHhWP~LWsbFkqYyHvEkpLbU8v3UToYocMEfI6p6itXDSnoCJS6ceuK6jzmA8D8oaGUFXPStn10Hda9r-2iLzXoSwa7m6eRmw09yVBcqMsw07QpcWM89GjEnxZNVfR7zL0~3hBDRNLhtDVDl7CWuJ053xrlNrvI~xohQ3JLreLuP~D6g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
        trailerPoster: "https://images.justwatch.com/backdrop/11009023/s1440/fireproof",
      },
    ],
  });
};
