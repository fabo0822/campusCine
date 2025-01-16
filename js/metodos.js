const peliculas = [
    {
      id: 1,
      titulo: "Your Name (Kimi no Na wa)",
      img: "../images/yourname.jpg",
      descripcion: "Una historia de dos adolescentes que intercambian cuerpos y buscan encontrarse en un mundo separado por el tiempo.",
      reparto: ["Ryunosuke Kamiki", "Mone Kamishiraishi"],
      duracion: "106 minutos",
      genero: ["Romance", "Fantasía", "Drama"],
      fecha_lanzamiento: "2016-08-26"
    },
    {
      id: 2,
      titulo: "A Silent Voice (Koe no Katachi)",
      img: "../images/unavozsilenciosa.jpg",
      descripcion: "Un joven busca redimirse tras haber acosado a una compañera con discapacidad auditiva en el pasado.",
      reparto: ["Miyu Irino", "Saori Hayami"],
      duracion: "130 minutos",
      genero: ["Drama", "Romance"],
      fecha_lanzamiento: "2016-09-17"
    },
    {
      id: 3,
      titulo: "El Viaje de Chihiro (Spirited Away)",
      img: "../images/elviajedechihiro.jpg",
      descripcion: "Chihiro, una niña de 10 años, se adentra en un mundo mágico lleno de espíritus mientras intenta salvar a sus padres.",
      reparto: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
      duracion: "125 minutos",
      genero: ["Fantasía", "Aventura"],
      fecha_lanzamiento: "2001-07-20"
    },
    {
      id: 4,
      titulo: "La Princesa Mononoke (Princess Mononoke)",
      imagen_url: "https://tse1.mm.bing.net/th?id=OIP.eq9VVvTIQtyIp2okOOCZZQHaLH&pid=Api",
      descripcion: "Un joven príncipe queda atrapado en la lucha entre los humanos y los dioses guardianes de un bosque.",
      reparto: ["Yoji Matsuda", "Yuriko Ishida"],
      duracion: "134 minutos",
      genero: ["Fantasía", "Aventura"],
      fecha_lanzamiento: "1997-07-12"
    },
    {
      id: 5,
      titulo: "Kimetsu no Yaiba: El Tren Infinito (Demon Slayer: Mugen Train)",
      imagen_url: "images/yourname.jpg",
      descripcion: "Tanjiro y sus amigos se embarcan en una misión dentro de un tren donde enfrentan a un demonio poderoso.",
      reparto: ["Natsuki Hanae", "Akari Kito", "Yoshitsugu Matsuoka"],
      duracion: "117 minutos",
      genero: ["Acción", "Fantasía"],
      fecha_lanzamiento: "2020-10-16"
    },
    {
      id: 6,
      titulo: "Attack on Titan: The Final Season",
      imagen_url: "https://tse1.mm.bing.net/th?id=OIP.Xozpc2CrVZRPuyWAuVX79wHaEK&pid=Api",
      descripcion: "La lucha entre la humanidad y los titanes alcanza su punto culminante en la última temporada.",
      reparto: ["Yuki Kaji", "Marina Inoue"],
      duracion: "24 minutos por episodio",
      genero: ["Acción", "Aventura", "Drama"],
      fecha_lanzamiento: "2020-12-07"
    },
    {
      id: 7,
      titulo: "My Hero Academia: Two Heroes",
      imagen_url: "https://tse3.mm.bing.net/th?id=OIP.YkyJclHlnRaeMmZgD9q5sQHaLH&pid=Api",
      descripcion: "Izuku Midoriya y sus amigos luchan contra un grupo de villanos en un evento especial que desafiará su heroísmo.",
      reparto: ["Daiki Yamashita", "Kenta Miyake"],
      duracion: "96 minutos",
      genero: ["Acción", "Superhéroes"],
      fecha_lanzamiento: "2018-08-03"
    },
    {
      id: 8,
      titulo: "The Garden of Words",
      imagen_url: "https://tse3.mm.bing.net/th?id=OIP.HXTvS1ECxPOlQSt1p9LO8AHaK_&pid=Api",
      descripcion: "Un joven y una mujer se encuentran en un jardín durante la temporada de lluvias y comienzan a formar un lazo inesperado.",
      reparto: ["Miyu Irino", "Kana Hanazawa"],
      duracion: "46 minutos",
      genero: ["Romance", "Drama"],
      fecha_lanzamiento: "2013-05-31"
    },
    {
      id: 9,
      titulo: "Weathering With You",
      imagen_url: "https://tse3.mm.bing.net/th?id=OIP.Md9TAXSg9ybQrx9hw3ptzQHaL8&pid=Api",
      descripcion: "Un chico y una chica descubren que ella tiene la capacidad de manipular el clima, lo que cambiará sus vidas.",
      reparto: ["Kotaro Daigo", "Nijiro Murakami"],
      duracion: "112 minutos",
      genero: ["Romance", "Fantasía", "Drama"],
      fecha_lanzamiento: "2019-07-19"
    },
    {
      id: 10,
      titulo: "Perfect Blue",
      imagen_url: "https://tse4.mm.bing.net/th?id=OIP.oxGV1B-fWzX9xz9VZtvm6AHaLs&pid=Api",
      descripcion: "Una joven cantante pop se ve atrapada en una espiral de paranoia y terror cuando empieza a perder la distinción entre realidad y fantasía.",
      reparto: ["Junko Iwao", "Rika Fukami"],
      duracion: "81 minutos",
      genero: ["Psicológico", "Thriller", "Misterio"],
      fecha_lanzamiento: "1997-02-28"
    },
    {
      id: 11,
      titulo: "Akira",
      imagen_url: "https://tse4.mm.bing.net/th?id=OIP.K-D2pKbE6lxTbdQrd5nq_gHaKe&pid=Api",
      descripcion: "En un Tokio post-apocalíptico, un joven con poderes psíquicos desata el caos mientras su amigo intenta detenerlo.",
      reparto: ["Mitsuo Iwata", "Nozomu Sasaki"],
      duracion: "124 minutos",
      genero: ["Ciencia ficción", "Acción", "Distopía"],
      fecha_lanzamiento: "1988-07-16"
    },
    {
      id: 12,
      titulo: "Howl's Moving Castle",
      imagen_url: "https://tse1.mm.bing.net/th?id=OIP.XGHW2yCG2EodwNFGRu4bRgHaLH&pid=Api",
      descripcion: "Una joven es transformada en una anciana por una maldición y busca la ayuda de un mago excéntrico y su castillo ambulante.",
      reparto: ["Chieko Baishō", "Takuya Kimura"],
      duracion: "119 minutos",
      genero: ["Fantasía", "Aventura"],
      fecha_lanzamiento: "2004-11-20"
    },
    {
      id: 13,
      titulo: "Nausicaä of the Valley of the Wind",
      imagen_url: "https://tse3.mm.bing.net/th?id=OIP.0KHiM_Dw2p9I4pQ5GZPMAAHaLH&pid=Api",
      descripcion: "En un mundo post-apocalíptico, una princesa lucha por salvar la humanidad mientras enfrenta las fuerzas de la naturaleza.",
      reparto: ["Sumi Shimamoto", "Goro Naya"],
      duracion: "116 minutos",
      genero: ["Fantasía", "Aventura", "Acción"],
      fecha_lanzamiento: "1984-03-11"
    },
    {
      id: 14,
      titulo: "Ponyo",
      imagen_url: "https://tse1.mm.bing.net/th?id=OIP.ZdUVzTxjYJxjKbk8S5ugrgHaLH&pid=Api",
      descripcion: "Un niño y una criatura mágica en forma de pez se embarcan en una aventura para salvar el océano.",
      reparto: ["Noah Cyrus", "Frankie Jonas"],
      duracion: "101 minutos",
      genero: ["Fantasía", "Aventura", "Niños"],
      fecha_lanzamiento: "2008-07-19"
    },
    {
      id: 15,
      titulo: "Made in Abyss",
      imagen_url: "https://tse2.mm.bing.net/th?id=OIP.1VZ8V4gLv11ffh0D-HgEdAHaKP&pid=Api",
      descripcion: "Un grupo de exploradores se aventura en un misterioso abismo donde descubren secretos oscuros y criaturas extrañas.",
      reparto: ["Miyu Tomita", "Eri Kitamura"],
      duracion: "24 minutos por episodio",
      genero: ["Aventura", "Fantasía", "Misterio"],
      fecha_lanzamiento: "2017-07-07"
    },
    {
      id: 16,
      titulo: "Neon Genesis Evangelion: The End of Evangelion",
      imagen_url: "https://tse1.mm.bing.net/th?id=OIP.z7zWs23K14V_LlNoY_U8VgHaLH&pid=Api",
      descripcion: "La conclusión de la famosa serie sobre ángeles, robots gigantes y las luchas psicológicas de los adolescentes que los manejan.",
      reparto: ["Megumi Ogata", "Yuko Miyamura"],
      duracion: "87 minutos",
      genero: ["Mecha", "Psicológico", "Drama"],
      fecha_lanzamiento: "1997-07-19"
    },
    {
      id: 17,
      titulo: "Ghost in the Shell",
      imagen_url: "https://tse3.mm.bing.net/th?id=OIP.xhzAF2lWj_6eORc3lpsugAHaJl&pid=Api",
      descripcion: "Una cyborg de la policía investiga un hacker que ha infiltrado el sistema de inteligencia artificial de su ciudad.",
      reparto: ["Atsuko Tanaka", "Iemasa Kayumi"],
      duracion: "83 minutos",
      genero: ["Ciencia ficción", "Thriller", "Acción"],
      fecha_lanzamiento: "1995-11-18"
    },
    {
      id: 18,
      titulo: "Cowboy Bebop: The Movie",
      imagen_url: "https://tse4.mm.bing.net/th?id=OIP.8Fn0V6ybYzZvV8rVhks5aAHaHa&pid=Api",
      descripcion: "Spike Spiegel y su equipo de cazarrecompensas deben detener a un terrorista que planea un ataque químico en una ciudad.",
      reparto: ["Kouichi Yamadera", "Megumi Hayashibara"],
      duracion: "115 minutos",
      genero: ["Ciencia ficción", "Acción", "Policíaco"],
      fecha_lanzamiento: "2001-09-01"
    },
    {
      id: 19,
      titulo: "Paprika",
      imagen_url: "https://tse3.mm.bing.net/th?id=OIP.XflIjdQQF2FpewJro6rJggHaKg&pid=Api",
      descripcion: "Una terapeuta utiliza una máquina para entrar en los sueños de los pacientes y ayudarlos a superar sus traumas.",
      reparto: ["Megumi Hayashibara", "Toru Emori"],
      duracion: "90 minutos",
      genero: ["Ciencia ficción", "Psicológico", "Misterio"],
      fecha_lanzamiento: "2006-11-25"
    },
    {
      id: 20,
      titulo: "Steins;Gate",
      imagen_url: "https://tse3.mm.bing.net/th?id=OIP.NR5_VzLBaeiNBKfzZgLQwgHaL8&pid=Api",
      descripcion: "Un grupo de amigos desarrolla una máquina para enviar mensajes al pasado, lo que desencadena una serie de eventos catastróficos.",
      reparto: ["Mamoru Miyano", "Asami Imai"],
      duracion: "24 minutos por episodio",
      genero: ["Ciencia ficción", "Thriller", "Drama"],
      fecha_lanzamiento: "2011-04-06"
    }
  ];
  

let card = document.getElementById("camPelis");

peliculas.filter((x) => {
    card.innerHTML += `
      <div class="card" style="width: 18rem;" id="camPelis">
        <img src="${x.img}" class="card-img-top" alt="${x.titulo}">
        <div class="card-body">
          
        </div>
      </div>
     
    `;
});