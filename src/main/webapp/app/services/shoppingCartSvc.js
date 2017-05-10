/**
 * Created by pnederlo on 9-5-2017.
 */
(function () {
    angular.module('myApp').value('cart',{
        shoppingCart: [],
        productCount: 0,
        cartTotal: 0,
        addProduct: function(product) {

            this.productCount++;
            function search(nameKey, myArray){
                for (var i=0; i < myArray.length; i++) {
                    if (myArray[i].name === nameKey) {
                        return i;
                    }
                }
                return -1;
            }

            var indexOfProduct = search(product.name, this.shoppingCart);

            if (indexOfProduct!==-1){
                var target = this.shoppingCart[indexOfProduct];
                target.amount++;
                target.total = target.amount * target.price;
            } else {
                product['amount'] = 0;
                product.amount++;
                product['total'] = 0;
                product.total =  product.amount * product.price;
                this.shoppingCart.push(product);
            }
            this.setCartTotal();
        },
        removeProductItem: function (itemToRemove){
            for(var i=0; i<this.shoppingCart.length; i++){
                if(this.shoppingCart[i]===itemToRemove){
                    this.shoppingCart[i].amount--;
                    this.shoppingCart[i].total = this.shoppingCart[i].amount * this.shoppingCart[i].price;
                    this.productCount--;
                    if(this.shoppingCart[i].amount===0){
                        this.shoppingCart.splice(i,1);
                    }
                }
            }
            this.setCartTotal();
        },
        removeProduct: function (productToRemove) {
            for(var i = 0; i<this.shoppingCart.length; i++){
                if(this.shoppingCart[i]===productToRemove){
                    this.productCount -= this.shoppingCart[i].amount;
                    this.shoppingCart.splice(i,1);
                }
            }
            this.setCartTotal();
        },
        setCartTotal: function () {

            this.cartTotal = 0;
            for(var i=0; i<this.shoppingCart.length; i++){
                this.cartTotal += this.shoppingCart[i].total;
            }
            console.log('Cart total: '+this.cartTotal);
        },
        emptyCart: function () {
            this.shoppingCart = [];
            this.productCount = 0;
            this.cartTotal = 0;
        }
    })
}());