import Swal from "sweetalert2"
function updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}
export const cart = {
    namespaced: true,
    state: () => ({
        cart: []
    }),
    getters: {
        count(state) {
            return state.cart.length
        },
        allProducts(state) {
            return state.cart
        },
        totalAmount(state) {
            return state.cart.reduce((total, p) => {
                return total + p.price * p.quantity
            }, 0)
        }
    },
    mutations: {
        increment(state, id) {
            const item = state.cart.find((p) => p.id == id)
            if (item) {
                item.quantity++
            }
            updateLocalStorage(this.cart)

        },
        decrement(state, id) {
            const item = state.cart.find((p) => p.id == id)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                }
            }


        },
        addToCart(state, product) {
            const item = state.cart.find((p) => p.id == product.id)

            if (!item) {
                state.cart.push({
                    ...product,
                    quantity: 1
                })
            } else {
                item.quantity++
            }
            updateLocalStorage(state.cart)
        },
        clear(state) {
            state.cart = []
        },
        remove(state, id) {
            state.cart = state.cart.filter(cart => cart.id != id)
            updateLocalStorage(state.cart)
        }

    },
    actions: {
        addToCart({ commit }, product) {
            commit('addToCart', product)
            Swal.fire({
                title: 'product Added',
                icon: 'success',
                showConfirmButton: 'false',
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top'
            })
        },
        clear({ commit }) {
            commit('clear')
        },
        remove({ commit }, id) {
            commit('remove', id)
            Swal.fire({
                title: 'product deleted',
                icon: 'warning',
                showConfirmButton: 'false',
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top'
            })
        },
        increment({ commit }, id) {
            commit('increment', id)
        },
        decrement({ commit }, id) {
            commit('decrement', id)
        }
    }
}
export default cart