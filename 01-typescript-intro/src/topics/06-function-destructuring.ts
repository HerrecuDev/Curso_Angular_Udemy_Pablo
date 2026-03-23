interface Product{

    description: string,
    price: number,

}

const phone: Product = {

    description: 'Nokia A1',
    price: 150.0

}

const tablet: Product = {

    description: 'Ipad Air',
    price: 250.0
}


interface TaxtCalculationOptions{
    tax :number;
    products: Product[];
}

function taxCalculation(options : TaxtCalculationOptions) : [number,number] {     // Forma generica: number[]{

    let total = 0;

    options.products.forEach( ({price}) => {
        
        total+= price;
    });

    return[total, total * options.tax];

}

const shoppingCart = [phone, tablet];
const tax = 0.15;
/*
const result = taxCalculation({
    products: shoppingCart,
    tax,
})
*/

//Realizando destructuracion:
const [ total,taxResult] = taxCalculation({
     products: shoppingCart,
    tax,
});


console.log('Total', total);
console.log('Total', taxResult);


export{}