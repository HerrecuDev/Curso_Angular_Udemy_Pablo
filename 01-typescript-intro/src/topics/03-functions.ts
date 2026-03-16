
function addNumbers(a: number, b: number){

    return a + b;
  
    
}

//Ahora con funciones flechas: Tambien se le puede indicar que devuelve un String.
const addNumbersArrrow = (a: number, b:number) => {

    //De esta forma nos permite hacer caracteres multilineas o una injección de Js:

    return `${ a + b }`;
}

//Primero obligatorios , despues los opcionales y por ultimo lo que tiene un valor predefinido.

function multiply( firstNumber: number, secondNumber?:number, base:number = 2){

    return firstNumber * base;
}

/* const result = addNumbers(1,2);
const result2 = addNumbersArrrow(1,2);
const multiplyresult:number= multiply(5);

console.log({ result,  result2, multiplyresult }); */ // con las llaves imprime el objeto sin llaves solo imprime el resultado 3.

//nuestros objetos van a tener siempre una interfaz que les diga como queremos que sean nuestros objetos :

interface Character {
    name: string,
    hp:number,
    showHp: () => void;
}

const healCharacter = ( Character: Character , amount: number) => {

    Character.hp += amount;
}

const strider = {
    name2: 'Strider',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${ this.hp }`);
    }
}


export{}