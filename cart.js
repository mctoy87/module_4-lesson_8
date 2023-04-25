'use strict';


const cart = {
    items: [],      //это товары
    totalPrice: 0,      //общая стоимость корзины
    count: 0,       //количество товаров

    add (productName, price, currentCount = 1) {    //добавить товар   
        this.items.push({ productName, price, currentCount });                   //этот метод формирует объект из полученных параметров и добавляет его в свойство items
        this.increaseCount(currentCount);           //так же вызывает все необходимые методы чтобы свойства count и totalPrice были актуальные
        this.calculateItemPrice();
    },

    calculateItemPrice() {                                  //посчитать общую стоимость товаров.
        return this.items.reduce((total, item) => {  
            return this.totalPrice = total + item.price * item.currentCount;    //пересчитывает стоимость всей корзины используя метод reduce и записывает значение в totalPrice 
        }, 0);
    },

    getTotalPrice() {                               //получить общую стоимость товаров. метод возвращает значение свойства totalPrice
        return this.totalPrice;
    },

    increaseCount (number) {                        //увеличить количество товаров. Принимает один параметр(число). Увеличивает свойство count на это число
        this.count += number;
        return this.count;
    },

    clear() {                                       //Очищает полностью нашу корзину, возвращает все значения в изначальные
        this.items = [];
        this.totalPrice = 0;
        this.count = 0;
    },

    print() {
        console.log(JSON.stringify(this.items));
        console.log(JSON.stringify(this.totalPrice));
    }

}
cart.add('Огурец', 200)
console.log(cart.totalPrice);
console.log(cart.count);

cart.add('помидор', 280, 3);
console.log(cart.totalPrice);
console.log(cart.count);

cart.add('Перец', 300, 2);
console.log(cart.totalPrice);
console.log(cart.count);

// cart.clear();
// console.log(cart);

cart.print();


// const objName = {                           //add() Принимает три параметра: 1.название товара, 2.цену товара, 3.количество товара (опциональный параметр, по умолчанию 1 товар)
//     productName,
//     price,
//     currentCount,
// };                         
// this.items.push(objName);  