import Vue from 'vue';

export default {
    state: {
        cart: [],
    },
    mutations: {
        addToCart(state, item) {
            let found = state.cart.find(product => product.id == item.id);
            if (found) {
                found.quantity ++;
                found.totalPrice = found.quantity * found.cost;
            } else {
                state.cart.push(item);
                Vue.set(item, 'quantity', 1);
                Vue.set(item, 'totalPrice', item.cost);
            }
        },
        clearCart(state){
            state.cart = [];
        }
    },
    actions: {
    },
    getters: {

    },
}
