let audioElement = new Audio('Zayn_Shaed_-_Trampoline.mp3');
let pausePlayButton = document.getElementById("play");
let lengthofsong = document.getElementById("song-length");
let showinggif = document.getElementById("gif");
let songscontaineradding = document.getElementById("all-songs-container");
let currentPlayingIndex = -1;
let progress;
let nextsonmg=document.getElementById("nextsong");
let previoussong=document.getElementById("previoussong");
let songnamedisplay=document.getElementById("song-name-display");




previoussong.addEventListener('click',()=>{
    if(currentPlayingIndex===0){
        let previousIElement = document.getElementById("i" + currentPlayingIndex);
        previousIElement.classList.remove("fa-pause-circle");
        previousIElement.classList.add("fa-play-circle");
        currentPlayingIndex=songs.length-1;
        songnamedisplay.textContent=songs[currentPlayingIndex].songname;
        let ielementid = "i" + currentPlayingIndex;
        let iElement = document.getElementById(ielementid);
        audioElement.src = songs[currentPlayingIndex].songfile;
        audioElement.play();
        pausePlayButton.classList.add("fa-pause-circle");
        pausePlayButton.classList.remove("fa-play-circle");
        audioElement.currentTime = 0;
        iElement.classList.add("fa-pause-circle");
        iElement.classList.remove("fa-play-circle");
        currentPlayingIndex = index;
        showinggif.classList.remove('invisible');
    }
    else{
        let previousIElement = document.getElementById("i" + currentPlayingIndex);
        previousIElement.classList.remove("fa-pause-circle");
        previousIElement.classList.add("fa-play-circle");
        currentPlayingIndex=currentPlayingIndex-1;
        songnamedisplay.textContent=songs[currentPlayingIndex].songname;
        let ielementid = "i" + currentPlayingIndex;
        let iElement = document.getElementById(ielementid);
        audioElement.src = songs[currentPlayingIndex].songfile;
        audioElement.play();
        pausePlayButton.classList.add("fa-pause-circle");
        pausePlayButton.classList.remove("fa-play-circle");
        audioElement.currentTime = 0;
        iElement.classList.add("fa-pause-circle");
        iElement.classList.remove("fa-play-circle");
        currentPlayingIndex = index;
        showinggif.classList.remove('invisible');
    }
})

nextsonmg.addEventListener("click",()=>{
    if(currentPlayingIndex===songs.length-1){
        let previousIElement = document.getElementById("i" + currentPlayingIndex);
        previousIElement.classList.remove("fa-pause-circle");
        previousIElement.classList.add("fa-play-circle");
        currentPlayingIndex=0
        songnamedisplay.textContent=songs[currentPlayingIndex].songname;
        let ielementid = "i" + currentPlayingIndex;
        let iElement = document.getElementById(ielementid);
        audioElement.src = songs[currentPlayingIndex].songfile;
        audioElement.play();
        pausePlayButton.classList.add("fa-pause-circle");
        pausePlayButton.classList.remove("fa-play-circle");
        audioElement.currentTime = 0;
        iElement.classList.add("fa-pause-circle");
        iElement.classList.remove("fa-play-circle");
        currentPlayingIndex = index;
        showinggif.classList.remove('invisible');
    }
    else{
        let previousIElement = document.getElementById("i" + currentPlayingIndex);
        previousIElement.classList.remove("fa-pause-circle");
        previousIElement.classList.add("fa-play-circle");
        currentPlayingIndex=currentPlayingIndex+1;
        songnamedisplay.textContent=songs[currentPlayingIndex].songname;
        let ielementid = "i" + currentPlayingIndex;
        let iElement = document.getElementById(ielementid);
        audioElement.src = songs[currentPlayingIndex].songfile;
        audioElement.play();
        pausePlayButton.classList.add("fa-pause-circle");
        pausePlayButton.classList.remove("fa-play-circle");
        audioElement.currentTime = 0;
        iElement.classList.add("fa-pause-circle");
        iElement.classList.remove("fa-play-circle");
        currentPlayingIndex = index;
        showinggif.classList.remove('invisible');
    }
})
pausePlayButton.addEventListener('click', () => {
    let ielementid = "i" + currentPlayingIndex;
    let iElement = document.getElementById(ielementid);
    if (audioElement.paused || audioElement.currentTime === 0) {
        audioElement.play();
        pausePlayButton.classList.remove("fa-play-circle");
        pausePlayButton.classList.add("fa-pause-circle");
        showinggif.classList.toggle('invisible');
        iElement.classList.add("fa-pause-circle");
        iElement.classList.remove("fa-play-circle");
    } else {
        audioElement.pause();
        pausePlayButton.classList.remove("fa-pause-circle");
        pausePlayButton.classList.add("fa-play-circle");
        iElement.classList.add("fa-play-circle");
        iElement.classList.remove("fa-pause-circle");
        showinggif.classList.toggle('invisible');
    }
});

audioElement.addEventListener('timeupdate', function () {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    lengthofsong.value = progress;
});

lengthofsong.addEventListener('change', () => {
    audioElement.currentTime = (lengthofsong.value * audioElement.duration) / 100;
});

function playPause(index) {
    let ielementid = "i" + index;
    let iElement = document.getElementById(ielementid);
    songnamedisplay.textContent=songs[index].songname;

    if (index === currentPlayingIndex) {
        if (audioElement.paused || audioElement.currentTime === 0) {
            audioElement.play();
            pausePlayButton.classList.add("fa-pause-circle");
            pausePlayButton.classList.remove("fa-play-circle");
            showinggif.classList.toggle('invisible');
            iElement.classList.add("fa-pause-circle");
            iElement.classList.remove("fa-play-circle");
        } else {
            audioElement.pause();
            pausePlayButton.classList.add("fa-play-circle");
            pausePlayButton.classList.remove("fa-pause-circle");
            showinggif.classList.toggle('invisible');
            iElement.classList.add("fa-play-circle");
            iElement.classList.remove("fa-pause-circle");
        }
    } else {
        if (currentPlayingIndex !== -1) {
            let previousIElement = document.getElementById("i" + currentPlayingIndex);
            previousIElement.classList.remove("fa-pause-circle");
            previousIElement.classList.add("fa-play-circle");
        }

        audioElement.src = songs[index].songfile;
        audioElement.play();
        pausePlayButton.classList.add("fa-pause-circle");
        pausePlayButton.classList.remove("fa-play-circle");
        audioElement.currentTime = 0;
        iElement.classList.add("fa-pause-circle");
        iElement.classList.remove("fa-play-circle");
        currentPlayingIndex = index;
        showinggif.classList.remove('invisible');
    }
}

let songs = [
    { songname: "Love me Like you do", songfile: "assets/songs/Love-Me-Like-You-Do(musicdownload.cc).mp3", imagepath: "assets/images/love me like you do.jpeg" },
    { songname: "Let her go", songfile: "assets/songs/Let Her Go_320(PagalWorld).mp3", imagepath: "assets/images/let her go.jpeg" },
    { songname: "Trampoline", songfile: "assets/songs/Zayn_Shaed_-_Trampoline.mp3", imagepath: "assets/images/trampoline.jpeg" },
    { songname: "Middle of the night", songfile: "assets/songs/MIDDLE-OF-THE-NIGHT.mp3", imagepath: "assets/images/middleofthenight.jpeg" },
    { songname: "No Lie", songfile: "assets/songs/No Lie Sean Paul 320 Kbps.mp3", imagepath: "assets/images/no lie.jpeg" },
    { songname: "Hall Of Frames", songfile: "assets/songs/The-Script---Hall-Of-Fame(pagalworld.co.uk).mp3", imagepath: "assets/images/hall of frames.jpeg" },
    { songname: "7Years", songfile: "assets/songs/7 Years - Lukas Graham 192(PagalWorld).mp3", imagepath: "assets/images/7years.jpeg" },
    { songname: "Neeve", songfile: "assets/songs/Darling Neeve Song (Pagalworld123.com).mp3", imagepath: "assets/images/neeve.jpeg" },
    { songname: "Hukum", songfile: "assets/songs/Hukum - Thalaivar Alappara - SamWep.mp3", imagepath: "assets/images/hukum.jpeg" },
];


for (let i = 0; i < songs.length; i++) {
    let song = songs[i];
    let ielementid = "i" + i;
    let divElement = document.createElement("div");
    divElement.classList.add("songcontainer");

    let imageElement = document.createElement("img");
    imageElement.src = song.imagepath;
    imageElement.classList.add("songlist-image");
    divElement.appendChild(imageElement);

    let spanElement = document.createElement("span");
    spanElement.textContent = song.songname;
    divElement.appendChild(spanElement);

    let iElement = document.createElement("i");
    iElement.classList.add("fa-solid", "fa-play-circle","curserpoint");
    iElement.id = ielementid;
    iElement.onclick = function () {
        playPause(i);
    };

    let spanDuration = document.createElement("span");
    spanDuration.classList.add("songduration");
    let spanTimeInSong = document.createElement("span");
    spanTimeInSong.classList.add("time-in-song");
    spanTimeInSong.appendChild(iElement);
    spanDuration.appendChild(spanTimeInSong);
    divElement.appendChild(spanDuration);

    songscontaineradding.appendChild(divElement);
}
