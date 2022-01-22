let listaTitulos = [
  "Shingeki no Kyojin",
  "Fullmetal Alchemist",
  "Haikyuu",
  "Death Note",
  "The Promised Neverland",
  "Erased",
  "Ponyo: uma amizade que veio do mar",
  "Castelo Animado",
  "Castelo no Céu",
  "Princesa Kaguya",
  "Princesa Mononoke",
  "Túmulo de Vagalumes",
  "Meu amigo Totoro",
  "A viagem de Chihiro",
  "O serviço de entregas da Kiki"
]

let listaImagens = [
  "https://sortie.news/wp-content/uploads/2021/02/Attack-on-Titan-Chapter-136-4-3.jpg",
  "https://sm.ign.com/ign_br/tv/f/fullmetal-/fullmetal-alchemist-brotherhood-1_qzyx.jpg",
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iEfeHkx98I9prqPzyMS7p19Rq13.jpg",
  "https://img.quizur.com/f/img60d76989481ad8.64915494.jpg",
  "https://img.elo7.com.br/product/600x380/26BC338/big-poster-anime-the-promised-neverland-lo12-90x60-cm-anime.jpg",
  "https://sucodemanga.com.br/wp-content/uploads/2016/02/erased-thumb.jpg",
  "http://1.bp.blogspot.com/-uO_C6mbVIzE/XpHr86KOibI/AAAAAAAAJsM/ErwxuXAZL98ea-kXr5IxIsEqRhqJXIv2QCK4BGAYYCw/s1600/ponyo.png",
  "https://geeksinaction.com.br/wp-content/uploads/2020/02/cd49aa9308b91f51d205cdd73763e3c7-752x440.png",
  "https://sucodemanga.com.br/wp-content/uploads/2020/02/o-castelo-no-ceu-ghibli-2.jpg",
  "https://i2.wp.com/site.studioghibli.com.br/wp-content/uploads/2013/12/Imagem-23.jpg",
  "https://coisasdojapao.com/wp-content/uploads/2018/11/princesa-mononoke-curiosidades_opt.jpg",
  "https://coisasdojapao.com/wp-content/uploads/2019/08/tumulo-dos-vagalumes-curiosidades-hotaru-n-haka_opt.jpg",
  "https://www.planocritico.com/wp-content/uploads/2021/01/meu_amigo_totoro_plano_critico.jpg",
  "https://rollingstone.uol.com.br/media/_versions/a_viagem_de_chihiro_foto_divulgacao_studio_ghibli_widelg.jpg",
  "https://coisasdojapao.com/wp-content/uploads/2019/07/o-servico-de-entregas-da-kiki_opt.jpg"
]

let listaTrailer = [
  "https://www.youtube.com/watch?v=tent6DjmQxw",
  "https://www.youtube.com/watch?v=2Dsa8j_usqI",
  "https://www.youtube.com/watch?v=JOGp2c7-cKc",
  "https://www.youtube.com/watch?v=NlJZ-YgAt-c",
  "https://www.youtube.com/watch?v=ApLudqucq-s",
  "https://www.youtube.com/watch?v=D0UNRqtqtB8"
]

let listaFilmes = document.querySelector("#movies")

for (let i = 0; i < listaImagens.length && i < listaTitulos.length; i++) {
    listaFilmes.innerHTML +=
      "<div class='filmes'><span id='" +
      i +
      "' onclick='abrirModal(this.id)'><img src='" +
      listaImagens[i] +
      "'><h3>" +
      listaTitulos[i] +
      "</h5></div></div>";
  }

const abrirModal = (clicked_id) => {
    document.querySelector(".modal").style.display = "block";
    document.querySelector(".modal-bg").style.display = "block";
    let codigoYT = listaTrailer[clicked_id].substr(
      listaTrailer[clicked_id].length - 11
    );
  
    let  iframe = document.querySelector(".modal iframe");
    iframe.src = "https://www.youtube.com/embed/" + codigoYT;
  }
  
  const fechar = () => {
    document.querySelector(".modal").style.display = "none"
    document.querySelector(".modal-bg").style.display = "none"
    let iframe = document.querySelector(".modal iframe")
    iframe.src = ""
  }