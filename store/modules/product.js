import shirinisix from "../../static/shirinisix.png"
import shiriniten from "../../static/shiriniten.png"
import shirinieight from "../../static/shirinieight.png"
export const product = {
    namespaced: true,
    state: () => ({
        product: [
            {
                id: 1,
                name: 'کیک شکلاتی مخصوص',
                title: 'specialchocolatecake',
                price: 38000,
                img: shirinisix

            },
            {
                id: 2,
                name: 'کاپ کیک آلبالو',
                title: 'cherrycupcake',
                price: 25000,
                img: shiriniten
            },
            {
                id: 3,
                name: 'تارت توت فرنگی',
                title: 'starwberrychart',
                price: 25000,
                img: shirinieight
            },

        ]
    }),
    getters: {
        allProducts(state) {
            return state.product
        }
    },
    mutations: {

    },
    actions: {

    }
}
export default product