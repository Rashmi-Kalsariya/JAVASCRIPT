const songsArray = [
  {
    image: "Pictures/Aimer - Akanesasu_cover.jpg",
    name: "AkaneSasu",
    audio: "Songs/Aimer - AkaneSasu.mp3",
    artist: "Aimer",
    album: "Blanc"
  },
  {
    image: "Pictures/Aimer - Shiroiro Kagerou_cover.jpg",
    name: "Shiroiro Kagerou",
    audio: "Songs/Aimer - Shiroiro Kagerou.mp3",
    artist: "Aimer",
    album: "Shiroiro Kagerou"
  },
  {
    image: "Pictures/YUNGBLUD - Abyss_cover.jpg",
    name: "Abyss",
    audio: "Songs/YUNGBLUD - Abyss.mp3",
    artist: "YUNGBLUD",
    album: "Abyss"
  },
  {
    image: "Pictures/Em Beihold - Numb Little Bug_cover.jpg",
    name: "Numb Little Bug",
    audio: "Songs/Em Beihold - Numb Little Bug.mp3",
    artist: "Em Beihold",
    album: "Egg in the Backseat"
  },
  {
    image: "Pictures/Uru - Kamihitoe_cover.jpg",
    name: "Kamihitoe",
    audio: "Songs/Uru - Kamihitoe.mp3",
    artist: "Uru",
    album: "Kokoroe"
  },
  {
    image: "Pictures/Stephen Sanchez - Until I Found You_cover.jpg",
    name: "Until I Found You",
    audio: "Songs/Stephen Sanchez - Until I Found You.mp3",
    artist: "Stephen Sanchez",
    album: "Angel Face"
  },
  {
    image: "Pictures/Aimer - Kyou Kara Omoide_cover.jpg",
    name: "Kyou kara Omoide",
    audio: "Songs/Aimer - Kyou kara Omoide.mp3",
    artist: "Aimer",
    album: "Black Bird"
  },
  {
    image: "Pictures/Aimer - Kimi Wo Matsu_cover.jpg",
    name: "Kimi wo Matsu",
    audio: "Songs/Aimer - Kimi Wo Matsu.mp3",
    artist: "Aimer",
    album: "Dawn"
  }
];

let currentSongIndex = 0;
let isPlaying = false;
let repeatMode = false;


const audioPlayer = new Audio();


const handleData = (index) => {
  const selectedSong = songsArray[index];
  document.getElementById("imageBig").src = selectedSong.image;
  audioPlayer.src = selectedSong.audio;
  currentSongIndex = index;
  playSong();
};

const playSong = () => {
  if (!isPlaying) {
    audioPlayer.play();
    isPlaying = true;
    document.querySelector('#playButton i').classList.remove("fa-play");
    document.querySelector('#playButton i').classList.add("fa-pause");
  } else {
    audioPlayer.pause();
    isPlaying = false;
    document.querySelector('#playButton i').classList.remove("fa-pause");
    document.querySelector('#playButton i').classList.add("fa-play");
  }
};

const playNextSong = () => {
  currentSongIndex = (currentSongIndex + 1) % songsArray.length;
  handleData(currentSongIndex);
};

const playPreviousSong = () => {
  currentSongIndex = (currentSongIndex - 1 + songsArray.length) % songsArray.length;
  handleData(currentSongIndex);
};

const toggleRepeat = () => {
  repeatMode = !repeatMode;
  const repeatButton = document.getElementById("repeatButton");
  if (repeatMode) {
    repeatButton.classList.add("active");
  } else {
    repeatButton.classList.remove("active");
  }
};

const updateProgressBar = () => {
  const progressBar = document.getElementById("progressBar");
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.style.width = `${progress}%`;

  if (audioPlayer.currentTime === audioPlayer.duration && !repeatMode) {
    playNextSong();
  }
};


audioPlayer.addEventListener("timeupdate", updateProgressBar);

const SongsDetails = (audios) => {
  audios.forEach((song, index) => {
    let div = document.createElement("div");
    div.classList.add("song-item");

    let songDetails = document.createElement("div");
    songDetails.classList.add("song-details");

    let name = document.createElement("h2");
    name.innerHTML = song.name;

    let artist = document.createElement("p");
    artist.innerHTML = `Artist: ${song.artist}`;

    let album = document.createElement("p");
    album.innerHTML = `Album: ${song.album}`;

    let hr = document.createElement("hr");

    div.addEventListener("click", () => handleData(index)); // Updated click event

    let iconParent = document.createElement("div");
    iconParent.classList.add("iconparent");
    iconParent.innerHTML = `<i class="fa-solid fa-play"></i>`;

    songDetails.append(name, artist, album);
    div.append(songDetails, iconParent, hr);
    document.getElementById("songPlayer").appendChild(div);
  });
};

SongsDetails(songsArray);

document.getElementById("playButton").addEventListener("click", playSong);
document.getElementById("nextButton").addEventListener("click", playNextSong);
document.getElementById("prevButton").addEventListener("click", playPreviousSong);
document.getElementById("repeatButton").addEventListener("click", toggleRepeat);
