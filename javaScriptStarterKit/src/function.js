function addToCart(productName="Elma",quantity){
    console.log("Sepete Eklendi: "+productName +
    " adet: "+quantity);
}

let sayHello = () => {
    console.log("Hello world !")
}

let sayHello2 = function () {
    console.log("Hello world!")
}

function addToCart3(product){
    console.log("Ürün: "+ product.productName);
    console.log("Fiyat: "+ product.unitPrice);
    console.log("Adet: "+ product.quantity);
}

let product1={productName:"Elma",unitPrice:10,quantity:5}

addToCart3(product1);

function add(...numbers){ //rest
    let total = 0;
    for (let index = 0; index < numbers.length; index++) {
        total=total+numbers[index];
    }
    console.log(total)
}