
// SI usamos const se usa para delcarar una guerra solo puede ser de este tipo
const skills : string[] = ['Bash' ,'Counter','Healing'];

interface Character {

        name: string;
        hp: number;
        skills: string[];
        hometown?: string; //Para decir que el hometown sea indefinido es mejor poner el simbolo de ?.

}
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    
}

strider.hometown = 'Fuengirola'


console.table(strider);

export{}