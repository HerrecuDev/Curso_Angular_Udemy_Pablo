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

const song = 'New Song';

//De esta forma realizamos una destructuracion del objeto:
const { song: anotherSong , songDuration: duration } = audioPlayer;

//forma mas repetitiva :
console.log('Author: ' , audioPlayer.details.author );

//Imprimir por pantalla forma util:

console.log('Song:' , anotherSong);
console.log('Duration: ', duration);

//Primero desestructuramos lo details y despues el author
const { author: autor, year: yearSong } = audioPlayer.details;

//Imprimir por pantalla los elementos del details:

console.log('Author:' , autor);
console.log('Year: ', yearSong);


//Explicacion de Desestructuracion de arreglos:

const [ , , trunks]: string[] = ['Goku' , 'Vegete' , 'Trunk'];


console.error('Personaje 3:' , trunks);





export{};