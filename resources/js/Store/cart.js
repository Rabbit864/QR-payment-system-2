import Vue from 'vue';

export default {
    state: {
        cart: [],
    },
    mutations: {
        addToCart(state, item) {
            let found = state.cart.find(product => product.id == item.id);
            if (found) {
                found.quantity++;
                found.totalPrice = found.quantity * found.cost;
            } else {
                state.cart.push(item);
                Vue.set(item, 'quantity', 1);
                Vue.set(item, 'totalPrice', item.cost);
            }
        },
        removeFromCart(state, item) {
            let index = state.cart.indexOf(item);

            if (index > -1) {
                let product = state.cart[index];

                if (product.quantity > 1) {
                    product.quantity--;
                    product.totalPrice = product.quantity * product.cost;
                } else {
                    state.cart.splice(index, 1);
                }
            }
        },
        clearCart(state) {
            state.cart = [];
        }
    },
    actions: {
    },
    getters: {

    },
}
