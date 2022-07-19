console.log("Welcome to Spotify");
let index = 1;
let audioElement = new Audio("../songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName("songItems"));
let songs = [
  {
    songName: "Let me Love You",
    filePath: "../songs/1.mp3",
    coverPath: "../img/1.jpg",
  },
  {
    songName: "Humma Humma",
    filePath: "../songs/2.mp3",
    coverPath: "../img/2.jpg",
  },
  {
    songName: "Let me Down Slowly",
    filePath: "../songs/3.mp3",
    coverPath: "../img/3.jpg",
  },
  {
    songName: "Salaam-e-ishq",
    filePath: "../songs/4.mp3",
    coverPath: "../img/4.jpg",
  },
  {
    songName: "Raabta",
    filePath: "../songs/5.mp3",
    coverPath: "../img/5.jpg",
  },
  {
    songName: "Never Say Never",
    filePath: "../songs/6.mp3",
    coverPath: "../img/6.jpg",
  },
  {
    songName: "Baby",
    filePath: "../songs/7.mp3",
    coverPath: "../img/7.jpg",
  },
  {
    songName: "Chaand Sifarish",
    filePath: "../songs/8.mp3",
    coverPath: "../img/8.jpg",
  },
  {
    songName: "Mai Agar Kahoon",
    filePath: "../songs/9.mp3",
    coverPath: "../img/9.jpg",
  },
  {
    songName: "Pee Loon",
    filePath: "../songs/10.mp3",
    coverPath: "../img/10.jpg",
  },
];
songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
//audioElement.play();
//handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = "1";
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = "0";
  }
});
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
const makeAllPlays = ()=> {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName('songItemPlay')).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
        console.log(e);
      makeAllPlays();
      index=parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src = `../songs/${index}.mp3`;
      masterSongName.innerText=songs[index-1].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = "1";
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
    });
  }
);
document.getElementById('next').addEventListener("click", () => {
if (index>=10) {
    index=0;
}
else{
    index+=1;
}
audioElement.src = `../songs/${index}.mp3`;
masterSongName.innerText=songs[index-1].songName;
      audioElement.currentTime = 0;
      audioElement.play();
     
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
});
document.getElementById('previous').addEventListener("click", () => {
    if (index<=0) {
        index=0;
    }
    else{
        index-=1;
    }
    audioElement.src = `../songs/${index}.mp3`;
    masterSongName.innerText= songs[index-1].songName;
          audioElement.currentTime = 0;
          audioElement.play();
          masterPlay.classList.remove('fa-play-circle');
          masterPlay.classList.add('fa-pause-circle');
    });
    
