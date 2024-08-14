console.log("welcome to spotify");

let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressbar=document.getElementById('myProgressbar');
let gif=document.getElementById('gif');
let songItems =Array.from(document.getElementsByClassName('songItem'));





let songs =[
    {songName: "warriyo-mortals",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "cielo-huma-huma",filepath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName: "DEAF KEV-invincible",filepath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName: "diffrent heaven",filepath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName: "janji-heroes ",filepath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName: "rbba-salam-e-isq ",filepath:"songs/6.mp3",coverPath:"covers/6.jpg"},

]
songItems.forEach((element,i )=> {
  console.log(element,1);
  element.getElemenetsByTagname("img")[0].src=songs[1].coverpath;
    

});
// audioElement.play();

// handle play /pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})

// listen to events
audioElement.addEventListener('timeupdate',()=>{

// update seekbar
progress=perseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressbar.value=progress
})

myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressbar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classlist.add('fa-pause-circle');



})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    console.log(e.target);
    makeAllPlays();
    e.target.classlist.remove('fa-play-circle');
    e.target.classlist.add('fa-pause-circle');

})


})








