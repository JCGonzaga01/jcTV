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
          "https://firebasestorage.googleapis.com/v0/b/jc-general.appspot.com/o/simple-vod-app%2FcaptainAmericaTheFirstAvenger.mp4?alt=media&token=2dcf2f91-c0d6-43fd-9c18-ab8f467f9eb0",
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
          "https://firebasestorage.googleapis.com/v0/b/jc-general.appspot.com/o/simple-vod-app%2FironMan2.mp4?alt=media&token=287b41d1-5c87-4139-8f25-41e88774e7a7",
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
          "https://firebasestorage.googleapis.com/v0/b/jc-general.appspot.com/o/simple-vod-app%2FtheIncredibleHulk.mp4?alt=media&token=d89de8fc-b65d-41f1-a59f-8351e9529bd1",
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
          "https://firebasestorage.googleapis.com/v0/b/jc-general.appspot.com/o/simple-vod-app%2Fthor.mp4?alt=media&token=5511a4a1-826c-426a-9a3e-308b8bc99d13",
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
          "https://firebasestorage.googleapis.com/v0/b/jc-general.appspot.com/o/simple-vod-app%2FtheAvengers.mp4?alt=media&token=02b74afc-d67d-4554-bab7-898be8992d80",
        trailerPoster:
          "https://www.fanman.me/wp-content/uploads/2018/04/Road-to-Avengers-Infinity-War-Recap-The-Avengers-2012.jpg",
      },
    ],
  });
};
