function triangleLeft(height) {
    for (let i = 1; i <= height; i++) {
     let row = "";
     for (let j = 1; j <= i; j++) {
        row += "*";
     }
     console.log(row);
    }
    }
    
  triangleLeft(4);

function triangleRight(height) {
    for (let i = 0; i < height; i++) {
        let row = "";
        for (let j = 1; j <= height; j++) {
         if ( j < height - i) row += " ";//   *,
         else row += "*";   
    }
    console.log(row);
}
}

triangleRight(4);

console.log("Pemisah");

function triangleDownLeft(height) {
    for (let i = 0; i <= height; i++) {
       let row = "";
       for (let j = 0; j < height; j++) {
        if (j < i) row += " "
        else row += "*";
        
       }
        console.log(row);
    }
}

triangleDownLeft(4);

function triangleDownRight(height) {
    for (let i = 0; i < height; i++) {
        let row = "";
        for (let j = 0; j < height - i; j++) {
         if (j < height ) row += "*";
         else row += " "
            
        }
        console.log(row);
    }
}

triangleDownRight(4)
// function excelColumn(column) {

// }

// let text = "HELLO WORLD";
// let code = text.charCodeAt(0);

// console.log(code);

// arr = [2,2,1,5,1]

// function single(array) {    
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (i !== j && array[i] === array[j]) {
//                 console.log(array[j]);
//                 break;
//             }
//         }
// };
// }
// console.log(single(arr));

/*
function titleToNumber(column) {
    let result = 0;
    
    for (let i = 0; i < column.length; i++) {
        result = result * 26 + (column.charCodeAt(i) - 64); 
    }
    
    return result;
}

console.log(titleToNumber("AB"));
*/

// const columnSheet("") {
//     const alphabets = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
//     const array = col
//         .toUpperCase()
//         .split("")
//         .map((char) => alphabets.indexOf(char) + 1);
// }


class Produk {
    constructor(menu, price){
        this.menu = menu;
        this.price = price;
    }
}

class Resto {
    constructor(nama, jarak){
        this.nama = nama;
        this.jarak = jarak;
    }
}

class Transaction {
    #total = 0;
    #menu = [];

    addToCart(menu, qty, jarak) {
        if(menu instanceof Produk && qty > 0) {
            menu.qty = qty;
            this.#menu.push(menu);

        }else console.log("invalid prdoduct");
    }

    showTotal() {
        this.#total = this.#menu.reduce(
            (sum, current) => sum + current?.price * current?.qty, 0
        );
        return this.#total;
    }

    checkout(pay = 0) {
        this.showTotal();
        if (this.#total > pay) return console.log("insuficient balance");
        this.#menu = [];
        console.log("Terima kasih sudah berbelanja", "kembalian anda adalah Rp." + 
        (pay - this.#total.toLocaleString("id-ID"))
        );
        return (this.#total = 0)
    }

    removeFromCart(index) {
        if (index >= 0 && index < this.#menu.length) {
            this.#menu.splice(index, 1);
            console.log("Item removed from the cart");
        } else {
            console.log("Invalid index. Item not removed from the cart.");
        }
    }

}

const transaction = new Transaction();
transaction.addToCart(new Produk("capcay", 50000), 2);
console.log(transaction.showTotal());
console.log(transaction.checkout(600000));

class Product {
    constructor(name, stock, category, color) {
        this.name = name;
        this.stock = stock;
        this.category = category;
        this.color = color;
    }
    checkStock() {
        console.log(`Stock untuk ${this.name}: ${this.stock}`);
    }
}

class Tokopedia {
    constructor() {
        this.products = []
        this.cart = []
    }

    addProduct(name, stock, category, color, extraInfo) {
        const product = new Product(name, stock, category, color, extraInfo)
        this.products.push(product);
    }

    editProduct(name, newStock) {
        const product = this.products.find((item) => item.name === name);
        if (product) {
            product.stock = newStock;
        } else {
            console.log("Product not found ;(");
        }
    }

    deleteProduct(name) {
        const index = this.products.findIndex((item) => item.name === name);
        if (index !== -1) {
            this.products.splice(index, 1);
        } else {
            console.log("Product not found");
        }
    }

    addToCart(name, quantity) {
        const product = this.products.find((item) => item.name === name);
        if (product && product.stock >= quantity) {
            product.stock -= quantity;
            const cartItem = {...product, quantity};
            this.cart.push(cartItem);
        } else {
            console.log("Prduct not found or insufficient stock");
        }
    }

    checkout() {
        for (const cartItem of this.cart) {
            const product = this.products.find((item) => item.name === cartItem.name);
            if (product) {
                product.stock += cartItem.quantity;
            }
        }  
        this.cart = [];
        console.log("Ckeckout successful. Cart is empty.");
    }

    checkProductStock(name) {
        const product = this.products.find((item) => item.name === name)
        if (product) {
            product.checkStock();
        } else {
            console.log("Product not found");
        }
    }

    showCart() {
        if (this.cart.length === 0) {
            console.log("Cart is empty.");
        } else {
            console.log("Cart:");
            this.cart.forEach((cartItem) => {
                console.log(
                    `${cartItem.name} - Quantity: ${cartItem.quantity} - Category: ${cartItem.category} - Color: ${cartItem.color}`
                );
            });
        }
    }
    
}

const tokopedia = new Tokopedia();
tokopedia.addProduct("cargo pant", 50, "trousers", "camo", {ukuran: "M", brand: "WATAPS"});
tokopedia.addProduct("coding for dummies", 50, "buku", "kuning", {author: "dev", brand: "dev"});
tokopedia.addProduct("Ozweego", 40, "shoes", "grey", {ukuran: "43", brand: "Adidas"});
tokopedia.addToCart("Ozweego", 5)
tokopedia.addToCart("cargo pant", 3);
tokopedia.addToCart("coding for dummies", 1);
tokopedia.showCart();
tokopedia.editProduct("coding for dummies", 7)
tokopedia.showCart()
tokopedia.checkout()
tokopedia.showCart()
tokopedia.checkProductStock("coding for dummies")

// function single(array) {
//     let res = ''; 

//     for (let i = 0; i < array.length; i++) {
//         let foundDuplicate = false;
//         for (let j = 0; j < array.length; j++) {
//             if (i !== j && array[i] === array[j]) {
//                 foundDuplicate = true;
//                 break;
//             }
//         }
        
//         if (!foundDuplicate) {
//             res = array[i];
//             break; 
//         }
//     }
    
//     return res;
// }

const unik = (numb) => {
    return numb.sort((a,b) => a - b).filter((num, idx) => 
    num != numb[idx - 1] && num != numb[idx - 1])
}

const arr = [4,1,2,1,2];
console.log(unik(arr));



// let s = "three"
// let g = "eehrt"
// const sortedS = s.split('').sort().join('')
// const sortedg = g.split('').sort().join('')

// console.log(sortedS);
// console.log(sortedg);
// console.log(sortedS === sortedg);
function anagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    const sorted1 = string1.split('').sort().join('');
    const sorted2 = string2.split('').sort().join('');
   
    return sorted1 === sorted2

}

console.log(anagram("anagram", "nagaram")); 
console.log(anagram("three", "tree")); 

function romanNumb(string) {
    const roman = {I : 1, IV : 4, V : 5, IX : 9, X : 10, L : 50, C : 100, D : 500, M : 1000}
    let res = 0;
    for (let i = 0; i < string.length; i++) {
        if (roman[string[i]] < roman[string[i+1]]){
            res -= roman[string[i]] 
        }
        else res += roman[string[i]]
    }
    return res
}

console.log(romanNumb("II"));

console.log("test");