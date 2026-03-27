

export class Person{
    //La forma mas usual de declarar el contructor sería :
    //Para usar esto debemos de en tsconfig.json
        /*   {
        "compilerOptions": {
            "erasableSyntaxOnly": false
        } */

    constructor(
        public firstName: string,
        public lastName: string,

        private address: string = 'No Address'
    ){}


}

/* export class Hero extends Person{
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) {

        super(realName, 'New York');

    }
    
} */

export class Hero {

    //public person: Person;
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        //this.person = new Person(realName);

    }
    
}
const tony = new Person('Tony', 'stark', 'New york');
const ironman = new Hero('Ironman',45,'Tony',tony);

console.log(ironman)