const peliculas = [
  {
    id: 1,
    titulo: "Your Name (Kimi no Na wa)",
    img: "../images/1.jpg",
    descripcion: "Una historia de dos adolescentes que intercambian cuerpos y buscan encontrarse en un mundo separado por el tiempo.",
    reparto: [
      "Ryunosuke Kamiki (voz de Taki Tachibana)",
      "Mone Kamishiraishi (voz de Mitsuha Miyamizu)"
    ],
    duracion: "106 minutos",
    genero: ["Romance", "Fantasía", "Drama"],
    fecha_lanzamiento: "2016-08-26"
  },
  {
    id: 2,
    titulo: "A Silent Voice (Koe no Katachi)",
    img: "../images/2.jpg",
    descripcion: "Un joven busca redimirse tras haber acosado a una compañera con discapacidad auditiva en el pasado.",
    reparto: [
      "Miyu Irino (voz de Shoya Ishida)",
      "Saori Hayami (voz de Shoko Nishimiya)"
    ],
    duracion: "130 minutos",
    genero: ["Drama", "Romance"],
    fecha_lanzamiento: "2016-09-17"
  },
  {
    id: 3,
    titulo: "El Viaje de Chihiro (Spirited Away)",
    img: "../images/3.jpg",
    descripcion: "Chihiro, una niña de 10 años, se adentra en un mundo mágico lleno de espíritus mientras intenta salvar a sus padres.",
    reparto: [
      "Rumi Hiiragi (voz de Chihiro)",
      "Miyu Irino (voz de Haku)",
      "Mari Natsuki (voz de Yubaba)"
    ],
    duracion: "125 minutos",
    genero: ["Fantasía", "Aventura"],
    fecha_lanzamiento: "2001-07-20"
  },
  {
    id: 4,
    titulo: "La Princesa Mononoke (Princess Mononoke)",
    img: "../images/4.jpg",
    descripcion: "Un joven príncipe queda atrapado en la lucha entre los humanos y los dioses guardianes de un bosque.",
    reparto: [
      "Yoji Matsuda (voz de Ashitaka)",
      "Yuriko Ishida (voz de San)"
    ],
    duracion: "134 minutos",
    genero: ["Fantasía", "Aventura"],
    fecha_lanzamiento: "1997-07-12"
  },
  {
    id: 5,
    titulo: "Kimetsu no Yaiba: El Tren Infinito (Demon Slayer: Mugen Train)",
    img: "../images/5.jpg",
    descripcion: "Tanjiro y sus amigos se embarcan en una misión dentro de un tren donde enfrentan a un demonio poderoso.",
    reparto: [
      "Natsuki Hanae (voz de Tanjiro Kamado)",
      "Akari Kito (voz de Nezuko Kamado)",
      "Yoshitsugu Matsuoka (voz de Zenitsu Agatsuma)"
    ],
    duracion: "117 minutos",
    genero: ["Acción", "Fantasía"],
    fecha_lanzamiento: "2020-10-16"
  },
  {
    id: 6,
    titulo: "Attack on Titan: The Final Season",
    img: "../images/6.jpg",
    descripcion: "La lucha entre la humanidad y los titanes alcanza su punto culminante en la última temporada.",
    reparto: [
      "Yuki Kaji (voz de Eren Yeager)",
      "Marina Inoue (voz de Armin Arlert)"
    ],
    duracion: "24 minutos por episodio",
    genero: ["Acción", "Aventura", "Drama"],
    fecha_lanzamiento: "2020-12-07"
  },
  {
    id: 7,
    titulo: "My Hero Academia: Two Heroes",
    img: "../images/7.jpg",
    descripcion: "Izuku Midoriya y sus amigos luchan contra un grupo de villanos en un evento especial que desafiará su heroísmo.",
    reparto: [
      "Daiki Yamashita (voz de Izuku Midoriya)",
      "Kenta Miyake (voz de All Might)"
    ],
    duracion: "96 minutos",
    genero: ["Acción", "Superhéroes"],
    fecha_lanzamiento: "2018-08-03"
  },
  {
    id: 8,
    titulo: "Violet Evergarden",
    img: "../images/8.jpg",
    descripcion: "Violet Evergarden, una exsoldado, comienza una nueva vida como 'Auto Memories Doll', escribiendo cartas para las personas que necesitan expresar sus emociones. A través de sus cartas, intenta comprender lo que significa el amor y las profundas conexiones humanas.",
    reparto: [
      "Daisuke Kikuta (voz de Claudia Hodgins)",
      "Yui Ishikawa (voz de Violet Evergarden)",
      "Takehito Koyasu (voz de Gilbert Bougainvillea)"
    ],
    duracion: "140 minutos",
    genero: ["Drama", "Fantasía", "Romance"],
    fecha_lanzamiento: "2020-09-18"
  },
  {
    id: 9,
    titulo: "Jujutsu Kaisen 0",
    img: "../images/9.jpg",
    descripcion: "Yuta Okkotsu, un joven atormentado por la maldición de su amiga Rika, se une a la Escuela de Magia Jujutsu para aprender a controlar sus habilidades. Junto a otros hechiceros, enfrentará poderosas maldiciones en una batalla por la supervivencia.",
    reparto: [
      "Junya Enoki (voz de Yuta Okkotsu)",
      "Kana Hanazawa (voz de Rika Orimoto)",
      "Takahiro Sakurai (voz de Satoru Gojo)"
    ],
    duracion: "105 minutos",
    genero: ["Acción", "Sobrenatural", "Oscuro", "Aventura"],
    fecha_lanzamiento: "2021-12-24"
  },
  {
    id: 10,
    titulo: "I Want to Eat Your Pancreas",
    img: "../images/10.jpg",
    descripcion: "Un joven estudiante encuentra el diario de una compañera de clase, quien padece una enfermedad terminal. A medida que se va conociendo, ambos comienzan a formar un vínculo profundo mientras ella enfrenta su destino con valentía.",
    reparto: [
      "Mahiro Takasugi (voz de Haruki Shiga)",
      "Lynn (voz de Sakura Yamauchi)"
    ],
    duracion: "108 minutos",
    genero: ["Drama", "Romance"],
    fecha_lanzamiento: "2018-09-01"
  },
  {
    id: 11,
    titulo: "Sword Art Online: Ordinal Scale",
    img: "../images/11.jpg",
    descripcion: "Después de los eventos de Aincrad y Alfheim, los jugadores de Sword Art Online se adentran en un nuevo juego de realidad aumentada llamado Ordinal Scale. Sin embargo, descubren que este juego tiene oscuros secretos que amenazan sus vidas.",
    reparto: [
      "Yoshitsugu Matsuoka (voz de Kirito)",
      "Haruka Tomatsu (voz de Asuna)",
      "Ayana Taketatsu (voz de Silica)"
    ],
    duracion: "119 minutos",
    genero: ["Acción", "Aventura", "Ciencia Ficción", "Anime"],
    fecha_lanzamiento: "2017-02-18"
  },
  {
    id: 12,
    titulo: "Howl's Moving Castle",
    img: "../images/12.jpg",
    descripcion: "Una joven es transformada en una anciana por una maldición y busca la ayuda de un mago excéntrico y su castillo ambulante.",
    reparto: [
      "Chieko Baishō (voz de Sophie)",
      "Takuya Kimura (voz de Howl)"
    ],
    duracion: "119 minutos",
    genero: ["Fantasía", "Aventura"],
    fecha_lanzamiento: "2004-11-20"
  },
  {
    id: 13,
    titulo: "Solo Leveling: Segundo Despertar",
    img: "../images/13.jpg",
    descripcion: "Tras una serie de batallas épicas, Sung Jinwoo, el cazador más débil del mundo, experimenta una nueva etapa de poder. En este 'Segundo Despertar', sus habilidades se intensifican, permitiéndole enfrentarse a enemigos aún más peligrosos. Ahora, Jinwoo debe proteger su mundo y descubrir el origen de sus poderes mientras lidia con amenazas sobrenaturales que superan todo lo que ha enfrentado antes.",
    reparto: [
      "ban taito(voz de Jinwoo )", 
      "Reina Ueda(voz de Hae-In Cha)",
      "Nakamura(voz de Jin-Ho yoo)" ,
    ],
    duracion: "120 minutos",
    genero: ["Acción", "Aventura", "Fantasia", "Superpoderes", "Sobrenatural"],
    fecha_lanzamiento: "2024-12-05"
  },
  {
    id: 14,
    titulo: "Ponyo",
    img: "../images/14.jpg",
    descripcion: "Un niño y una criatura mágica en forma de pez se embarcan en una aventura para salvar el océano.",
    reparto: [
      "Noah Cyrus (voz de Ponyo)",
      "Frankie Jonas (voz de Sosuke)"
    ],
    duracion: "101 minutos",
    genero: ["Fantasía", "Aventura", "Niños"],
    fecha_lanzamiento: "2008-07-19"
  },
  {
    id: 15,
    titulo: "5 Centimeters Per Second",
    img: "../images/15.jpg",
    descripcion: "Un relato de amor y distancia, '5 Centimeters Per Second' sigue la historia de Takaki Tōno y Akari Shinohara, dos amigos que se enamoran pero se ven separados por la distancia y el paso del tiempo.",
    reparto: [
      "Kenji Mizuhashi (voz de Takaki Tōno)",
      "Yoshimi Iwasaki (voz de Akari Shinohara)",
      "Satomi Hanamura (voz de Kanae Sumita)"
    ],
    duracion: "63 minutos",
    genero: ["Romance", "Drama", "Slice of Life"],
    fecha_lanzamiento: "2007-03-03"
  },
  {
    id: 16,
    titulo: "Neon Genesis Evangelion: The End of Evangelion",
    img: "../images/16.jpg",
    descripcion: "La conclusión de la famosa serie sobre ángeles, robots gigantes y las luchas psicológicas de los adolescentes que los manejan.",
    reparto: [
      "Megumi Ogata (voz de Shinji Ikari)",
      "Yuko Miyamura (voz de Rei Ayanami)"
    ],
    duracion: "87 minutos",
    genero: ["Mecha", "Psicológico", "Drama"],
    fecha_lanzamiento: "1997-07-19"
  },
  {
    id: 17,
    titulo: "One Piece Film: Red",
    img: "../images/17.jpg",
    descripcion: "Luffy y su tripulación se enfrentan a una nueva amenaza cuando se encuentran con Uta, la hija del legendario cantante Shanks.",
    reparto: [
      "Monkey D. Luffy (voz de Mayumi Tanaka)",
      "Roronoa Zoro (voz de Kazuya Nakai)",
      "Nami (voz de Akemi Okamura)"
    ],
    duracion: "115 minutos",
    genero: ["Aventura", "Acción", "Fantasía", "Música", "Animación"],
    fecha_lanzamiento: "2022-08-06"
  },
  {
    id: 18,
    titulo: "Belle",
    img: "../images/18.jpg",
    descripcion: "La historia sigue a Suzu, una joven tímida que vive en una pequeña aldea en Japón, quien toma la forma de Belle en un mundo virtual.",
    reparto: [
      "Kaho Nakamura (voz de Suzu/Belle)",
      "Takeru Satoh (voz de Shinobu)",
      "Lilas Ikeda (voz de Ruka)",
      "Tsubasa Honda (voz de Kamishin)",
      "Shota Sometani (voz de The Dragon)"
    ],
    duracion: "121 minutos",
    genero: ["Animación", "Aventura", "Fantasía", "Drama", "Musical"],
    fecha_lanzamiento: "2021-07-16"
  },
  {
    id: 19,
    titulo: "One Punch Man: Road to Hero",
    img: "../images/19.jpg",
    descripcion: "Un resumen de los eventos que llevaron a Saitama a convertirse en el héroe más fuerte del mundo.",
    reparto: [
      "Makoto Furukawa (voz de Saitama)",
      "Kaito Ishikawa (voz de Genos)",
      "Yōji Ueda (voz de Mumen Rider)",
      "Hiroki Yasumoto (voz de Speed-o'-Sound Sonic)"
    ],
    duracion: "60 minutos",
    genero: ["Acción", "Comedia", "Superhéroes"],
    fecha_lanzamiento: "2015-12-12"
  },
  {
    id: 20,
    titulo: "Dragon Ball Super: Broly",
    img: "../images/20.jpg",
    descripcion: "Goku y Vegeta se enfrentan a un guerrero legendario, Broly.",
    reparto: [
      "Masako Nozawa (voz de Goku)",
      "Ryo Horikawa (voz de Vegeta)",
      "Bin Shimada (voz de Broly)"
    ],
    duracion: "101 minutos",
    genero: ["Acción", "Aventura", "Anime", "Pelea"],
    fecha_lanzamiento: "2018-12-14"
  }
];

  

let card = document.getElementById("camPelis");

peliculas.filter((x) => {
    card.innerHTML += /*html*/ `
      <div class="card" style="width: 18rem;" id="camPelis">
        <img src="${x.img}" class="card-img-top" alt="${x.titulo}">
        <div class="card-body">
          
        </div>
      </div>
     
    `;
});