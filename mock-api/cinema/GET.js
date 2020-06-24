module.exports = (req, res) => {
  console;
  return res.status(200).json({
    id: "1",
    title: "cinema",
    list: [
      {
        id: "cinema-1",
        title: "Captain America: The First Avenger",
        duration: "2h 4m",
        tags: ["Rent"],
        bannerUrl:
          "https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg",
        titleUrl: "https://i.ya-webdesign.com/images/captain-america-civil-war-logo-png.png",
        match: "95% Match",
        year: 2011,
        grade: "PG-13",
        summary: `In the present day, scientists in the Arctic uncover an old, frozen aircraft. In March 1942, Nazi officer Johann Schmidt and his men steal a mysterious relic called the Tesseract,[N 2] which possesses untold powers, from the town of Tønsberg in German-occupied Norway.`,
        starring: ["Chris Evans", "Tommy Lee Jones"],
        category: ["Action", "Exciting", "Thrilling"],
        trailerUrl:
          "https://imdb-video.media-imdb.com/vi2912787481/MV5BODg3OTkyOTI2Ml5BMTFeQW1wNF5BbWU3MDI5MzIyNzU@.mp4?Expires=1593019330&Signature=pSAjy46H8iUSnInoiyN69q4UGj2Ufc9Y2KfceNqROLZG~KrQQXgBKBqTugX-fqd8B2ZG7mT2jxhbVVHxeERfK0scB2asi8Zw~b~N0NKH9tYqAzAVOx8~qowdoS96-fGnuAKc8E12RG~kvMEj6f2gkiaKuYCEpF5ySX5Sh5YrPeLQwC08Zz72yfniEHTM2LQeYtbEyqNqUMyEdQJ9D~v0Fwe2t9~rASp3CiqiT1U1uja4WIhEjJiQ78W6jD1XiESCQRvB7GsAtMiiXl1uXS7-gRvDsveiodUxu7EdobTt8syyt5~~uao7yDd6D6ii9jFqVJGy-bW~mQFzjIzj6sYXSg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
        trailerPoster:
          "https://cdn1.thr.com/sites/default/files/imagecache/768x433/2011/07/fb-fx-0072_a_l.jpg",
      },
      {
        id: "cinema-2",
        title: "Iron Man 2",
        duration: "2h 4m",
        tags: ["Watch free with ads"],
        bannerUrl: "https://upload.wikimedia.org/wikipedia/en/e/ed/Iron_Man_2_poster.jpg",
        titleUrl: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman2_lob_log_03_0.png",
        match: "100% Match",
        year: 2010,
        grade: "PG-13",
        summary: `In Russia, the media covers Tony Stark's disclosure of his identity as Iron Man. Ivan Vanko, whose father, Anton Vanko, has just died, sees this and begins building a miniature arc reactor similar to Stark's.`,
        starring: ["Robert Downey Jr.", "Gwyneth Paltrow"],
        category: ["Fantasy", "Action"],
        trailerUrl:
          "https://imdb-video.media-imdb.com/vi2256077849/MV5BNWU5NGRjNzctNGFhZS00YjlkLWJmOWUtZDAzMzI1YWVjNDYzXkExMV5BbXA0XkFpbWRiLWV0cy10cmFuc2NvZGU@.mp4?Expires=1593019573&Signature=JBP41mBaX6nqIwQAK1N-ynyRz49OBAuPgtSdkW~YJlpHKfrxSFpJ1G-nyHW2tDOjew0UJt3HBa7tgxDgPVOQKPQDoWKF8to26oz-TmiboBZqD20xZ5nl1q7vqSmYgDR8FgIEn7s2L7UPZVgGfq2FXtvuBrlAcjKWAoJKBOKcXs2qPoOxNuNnSBdxSmthRAt4CLGd7xyffdofBog6H1AzIPs906fgXSMJAoXyL5d0J3IM~9zYLt5LgbwgDAReVDKKtCHUOxrC4zMUynYpIcamY~RAH6GRgnA6IpfmtjKsI2yg~EqdNUKT4xDuaGBIpXcf2Bc03rbKBDBYkHPymv1aHA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
        trailerPoster: "https://miro.medium.com/max/4096/1*BX3hgiOqRznnXEhXHRMy5A.jpeg",
      },
      {
        id: "cinema-3",
        title: "Hulk",
        duration: "1h 52m",
        tags: ["Free"],
        bannerUrl: "https://upload.wikimedia.org/wikipedia/en/8/88/The_Incredible_Hulk_poster.jpg",
        titleUrl:
          "https://img.pngio.com/hd-marvel-cinematic-universe-movie-logos-album-on-imgur-the-incredible-hulk-logo-png-700_176.png",
        match: "100% Match",
        year: 2008,
        grade: "PG-13",
        summary: `At Culver University in Virginia, General Thaddeus "Thunderbolt" Ross meets with Dr. Bruce Banner, the colleague and boyfriend of his daughter Betty, regarding an experiment that Ross claims is meant to make humans immune to gamma radiation.`,
        starring: ["Edward Norton", "Liv Tyler"],
        category: ["Action"],
        trailerUrl:
          "https://imdb-video.media-imdb.com/vi1726152985/MV5BMjI2MTI2NjMyOV5BMTFeQW1wNF5BbWU3MDQ2ODczMzM@.mp4?Expires=1593020157&Signature=SW4LyeAfkDeAjPuVaxfV9BX0FBdo0dkH3Yx~~25ZoIuQ0LhixrkAJrpk2bvO0iKv26ZUSn3kd~L9PsLw7wYJ7ONzAxndU4zp4qZ9LK1lZQtO7Vf0gqOvi3WnikiCr~TBcKEcbcffvmFxlkNs8zaPxjNT6-C9XRCAi-LFtoP6os3lySbOa4oTNEdl9XaOq~8fDUsNZxEC0jXj99wX-x4gl74Me6xBu0YdTHtH8DrZadLYRDqCTQBXqkH9QWpVgLx~-KMJV~-pcDXQaph2DTXMmx4mLYWeh1Ro5mhNolPF0awYIJSP8guo9MRkXPapImqD8~3Gk7OJm2znE4hbS4Xx6g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
        trailerPoster:
          "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/the-incredible-hulk-revisited-1-700x297.jpg",
      },
      {
        id: "cinema-4",
        title: "Thor",
        duration: "1h 54m",
        tags: ["Free"],
        bannerUrl: "https://upload.wikimedia.org/wikipedia/en/f/fc/Thor_poster.jpg",
        titleUrl: "https://i.ya-webdesign.com/images/thor-movie-logo-png-5.png",
        match: "95% Match",
        year: 2011,
        grade: "PG-13",
        summary: `In 965 AD, Odin, king of Asgard, wages war against the Frost Giants of Jotunheim and their leader Laufey, to prevent them from conquering the nine realms, starting with Earth.`,
        starring: ["Chris Hemsworth", "Natalie Portman"],
        category: ["Action", "Thrilling"],
        trailerUrl:
          "https://imdb-video.media-imdb.com/vi1431476761/MV5BOGRmOTI0ODktM2VlMy00YzZjLWFlMzAtNGMxNzdjOWRjOTQ1XkExMV5BbXA0XkFpbWRiLWV0cy10cmFuc2NvZGU@.mp4?Expires=1593019940&Signature=Gu--b1tgZLDw05pj1RmsR6usLVRCCVk94svMViKr7BOos1muytTjiiwa5T8ULF6vh7E28AJ0vh2b1PQ5R4szwJV8BKYpD5Q~Ml7zGXFoOiAhwQ2h6dtS4eZa3xKrHUnsjcrvXH6PU6sRYlH6Znsfbouq9FxgUqZLpZu1EZ~psGVuMFMe6gvV0rK04mMm6YqHViZM12JhfUIW0syayWx5nIt7B63kOT-ztQFJWS3v6KQARGuJ03ctRP4q40AKYeANqIWKQDyuikFBt29K5SO0qfp63qc50Ehd37w5PKRCf9~-~KE1CrEFz8ytmYMzUbMBCrHfoh9dNhASM410j22Zow__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
        trailerPoster:
          "https://static.wixstatic.com/media/f732fa_23cbd07c0a5e42b08c1238c500f8379b~mv2.jpg/v1/fit/w_2500,h_1330,al_c/f732fa_23cbd07c0a5e42b08c1238c500f8379b~mv2.jpg",
      },
      {
        id: "cinema-5",
        title: "The Avengers",
        duration: "2h 23m",
        tags: ["Buy"],
        bannerUrl:
          "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
        titleUrl:
          "https://pluspng.com/img-png/avengers-logo-png-marvel-the-hulk-thor-iron-man-captain-america-black-widow-nick-fury-text-font-1516.png",
        match: "100% Match",
        year: 2012,
        grade: "PG-13",
        summary: `The Asgardian Loki encounters the Other, the leader of an extraterrestrial race known as the Chitauri. In exchange for retrieving the Tesseract, a powerful energy source of unknown potential, the Other promises Loki an army with which he can subjugate Earth.`,
        starring: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"],
        category: ["Comedy", "Action"],
        trailerUrl:
          "https://imdb-video.media-imdb.com/vi1891149081/MV5BMjE0NjU2NDE3MF5BMTFeQW1wNF5BbWU3MDE4OTg1MDg@.mp4?Expires=1593020424&Signature=JGoWQd-N~lhnixZOMCWr8CAxAqRu3DrwNwFv5VKUYvMREvhMZli5B1b8J3UmHSmh5pzn6prpgf-roG7DYYx~iQ5zFDpEof3EqjoRQ2vV0UrtJX8ZMtXddk1IQ9r-VONkWLv~CXjjMIAz~dFsHZiNkftzmOk~QxE-oH6qpzuYkgMs7PT4UlbqO4xiSUkFYqmKBIfSFmLD9NKTCm3YbmFtQhFDwUaXQqg0WrAWuceRmKbYl46NPpFMfkzrDBXX26amrF02TzYozmKH0pcy5k9Q-tGlaoonTjW-WebY0Ub1pctbSdYd4R56pnf9Rfnhacup5FlRIMI6W2mjEuwpeojmNw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
        trailerPoster:
          "https://www.fanman.me/wp-content/uploads/2018/04/Road-to-Avengers-Infinity-War-Recap-The-Avengers-2012.jpg",
      },
    ],
  });
};
