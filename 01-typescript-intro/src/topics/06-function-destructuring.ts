export interface Product{

    description: string,
    price: number,

}

/* const phone: Product = {

    description: 'Nokia A1',
    price: 150.0

}

const tablet: Product = {

    description: 'Ipad Air',
    price: 250.0
} */


interface TaxtCalculationOptions{
    tax :number;
    products: Product[];
}


//De esta forma podemos obetener todas las opciones de la interfaz taxt
export function taxCalculation(options : TaxtCalculationOptions) : [number,number] {     // Forma generica: number[]{

    //Declaramos la constante de los atributos que vamos a utilizar:
    const { tax, products } = options;


    let total = 0;

    products.forEach( ({price}) => {
        
        total+= price;
    });

    return[total, total * tax];

}

/* const shoppingCart = [phone, tablet];
const tax = 0.15;
/* 
const result = taxCalculation({
    products: shoppingCart,
    tax,
})
*/

//Realizando destructuracion:
/* const [ total,taxResult] = taxCalculation({

        products: shoppingCart,
        tax: tax,

}); */


/* console.log('Total', total);
console.log('Total', taxResult); */


