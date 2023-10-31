console.log('Welcome to Spotify');
let songInder=0;
let audioElemnt=new Audio('i.mp3);
let masterPlay= documet.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar')
ler songs=[
    {songName:"Baby",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Baby",filePath:"song/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Baby",filePath:"song/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Baby",filePath:"song/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Baby",filePath:"song/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Baby",filePath:"song/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Baby",filePath:"song/7.mp3",coverPath:"covers/7.jpg"},
    

]

let audioElement= new Audio(lonely.mp3);
//audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play;
    }
})
myProgressBar.addEventListener('time',()=>{
    console.log('timeupdate');
})