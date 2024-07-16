const songsArray = [
  {
    image: "https://assets.audiomack.com/zaryab-marri/6d27aa47a7287aa5476a50a0409e9f7c1941cda534df6148124a2ee15aabaf5f.jpeg?width=1000&height=1000&max=true",
    name: "Nayan Ne Bandh Rakhi ne",
    audio: "Songs/Nayan-Ne-Bandh-Rakhine_192(PagalWorld).mp3",
    artist: "Darshan Raval",
    album: "Nayan Ne Bandh Rakhine"
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273d5f82af8440afe4973bd5fd2",
    name: "Saiyyan",
    audio: "Songs/Saiyyan - Kailash Kher_320(MyMp3Song).mp3",
    artist: "Kailash Khair",
    album: "Saiyyan"
  },
  {
    image: "https://i.ytimg.com/vi/5qIJ7tQ2QbM/maxresdefault.jpg",
    name: "Kinna Sona",
    audio: "Songs/Kinna Sona Bhaag Johnny 320 Kbps.mp3",
    artist: "Sunil Kamath, Mithoon",
    album: "Bhaag Johnny"
  },
  {
    image: "https://i.ytimg.com/vi/hl01mhZVoAo/maxresdefault.jpg",
    name: "Maiyya-Mainu",
    audio: "Songs/Maiyya-Mainu(PagalNew.Com.Se).mp3",
    artist: "Sachet Tandon",
    album: "Jersey"
  },
  {
    image: "https://i1.sndcdn.com/artworks-Tg4FyciZAaWypzUs-q9njHg-t500x500.jpg",
    name: "Ve Haaniya",
    audio: "Songs/Ve Haniya_192(PagalWorld.com.sb).mp3",
    artist: "Danny",
    album: "Thank GOD"
  },
  {
    image: "Pictures/Stephen Sanchez - Until I Found You_cover.jpg",
    name: "Until I Found You",
    audio: "Songs/Stephen Sanchez - Until I Found You.mp3",
    artist: "Stephen Sanchez",
    album: "Angel Face"
  },
  {
    image: "https://c.saavncdn.com/438/Rabba-Mehar-Kari-Hindi-2021-20210213092052-500x500.jpg",
    name: "Rabba Mehar Kari",
    audio: "Songs/Rabba Mehar Kari_320(PagalWorld.com.sb).mp3",
    artist: "Darshan Raval",
    album: "Rabba Mehar Kari"
  },
  {
    image: "https://c.saavncdn.com/blob/761/Gori-Tame-Manda-Lidha-Mohi-Raj-Gujarati-2022-20220721083823-500x500.jpg",
    name: "Gori Tame Manda Lidha Mohi Raj",
    audio: "Songs/Gori Tame Manda Lidha Mohi Raj.mp3",
    artist: "Umesh Barot, Ishani Dave",
    album: "Gori Tame Manda Lidha Mohi Raj"
  },
  {
    image: "https://cdns-images.dzcdn.net/images/cover/e500f0fd16471ed69aff8d8ea56caf48/1900x1900-000000-80-0-0.jpg",
    name: "Laal Bindi",
    audio: "Songs/Laal Bindi Akull 128 Kbps.mp3",
    artist: "Akull",
    album: "Holi Party With Akull"
  },
  {
    image: "https://static.qobuz.com/images/covers/dc/3o/qobxyg0363odc_600.jpg",
    name: "Laal Chunariya",
    audio: "Songs/new_192_Laal Chunariya - Akull.mp3",
    artist: "Akull",
    album: "Laal Chunariya"
  },
];

let currentSongIndex = 0;
let isPlaying = false;
let repeatMode = false;

let audioPlayer = new Audio();

const handleData = (index, songs = songsArray) => {
  let selectedSong = songs[index];
  document.getElementById("imageBig").src = selectedSong.image;
  audioPlayer.src = selectedSong.audio;
  currentSongIndex = songsArray.findIndex(song => song.audio === selectedSong.audio);
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
  let repeatButton = document.getElementById("repeatButton");
  if (repeatMode) {
    repeatButton.classList.add("active");
  } else {
    repeatButton.classList.remove("active");
  }
};

const updateProgressBar = () => {
  let progressBar = document.getElementById("progressBar");
  let progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.style.width = `${progress}%`;

  if (audioPlayer.currentTime === audioPlayer.duration && !repeatMode) {
    playNextSong();
  }
};

audioPlayer.addEventListener("timeupdate", updateProgressBar);

const SongsDetails = (audios) => {
  audios.map((song, index) => {
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

    div.addEventListener("click", () => handleData(index, audios));

    let iconParent = document.createElement("div");
    iconParent.classList.add("iconparent");
    iconParent.innerHTML = `<i class="fa-solid fa-play"></i>`;

    songDetails.append(name, artist, album);
    div.append(songDetails, iconParent, hr);
    document.getElementById("songPlayer").append(div);
  });
};

document.getElementById("searchBar").addEventListener("input", (event) => {
  let query = event.target.value.toLowerCase();
  filterSongs(query);
});

const filterSongs = (query) => {
  let filteredSongs = songsArray.filter(song => song.artist.toLowerCase().includes(query));
  updateSongList(filteredSongs);
};

const updateSongList = (songs) => {
  let songPlayer = document.getElementById("songPlayer");
  songPlayer.innerHTML = "";

  songs.map((song, index) => {
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

    div.addEventListener("click", () => handleData(index, songs));

    let iconParent = document.createElement("div");
    iconParent.classList.add("iconparent");
    iconParent.innerHTML = `<i class="fa-solid fa-play"></i>`;

    songDetails.append(name, artist, album);
    div.append(songDetails, iconParent, hr);
    songPlayer.append(div);
  });
};

updateSongList(songsArray);

document.getElementById("playButton").addEventListener("click", playSong);
document.getElementById("nextButton").addEventListener("click", playNextSong);
document.getElementById("prevButton").addEventListener("click", playPreviousSong);
document.getElementById("repeatButton").addEventListener("click", toggleRepeat);