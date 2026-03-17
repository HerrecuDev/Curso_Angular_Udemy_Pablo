interface AudioPlayer{

    audioVolumne: number;
    songDuration:number;
    song: string;
    details: Details;

}

interface Details{

    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {

    audioVolumne: 90,
    songDuration: 30,
    song: "Mess",

    details: {
        author: "Ed Sheeran",
        year: 2015
    }


}


//De esta forma realizamos una destructuracion del objeto:
const song = 'New Song';
const { song: anotherSong , songDuration: duration } = audioPlayer;


//Imprimir por pantalla:

console.log('Song:' , anotherSong);
console.log('Duration: ', duration);

//Otra forma :
console.log('Author: ' , audioPlayer.details.author );

export{};