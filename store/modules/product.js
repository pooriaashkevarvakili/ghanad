import shirinisix from "../../static/shirinisix.png"
import shiriniten from "../../static/shiriniten.png"
import shirinieight from "../../static/shirinieight.png"
import shirininight from "../../static/shirininight.png"
import shirinifive from "../../static/shirinifive.png"
import shirinieleven from "../../static/shirinieleven.png"
import shiriniseven from "../../static/shiriniseven.png"
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

        ],
        productCake: [
            {
                id: 1,
                name: 'کاپ کیک ردولت',
                title: 'Reduluth cupcakes',
                img: shirininight,
                price: 135000
            },
            {
                id: 2,
                name: 'چیزکیک شکلاتی',
                title: 'chocolate chesecake',
                img: shirinifive,
                price: 45000
            },
            {
                id: 3,
                title: 'Sweet special honey',
                name: 'شیرینی عسل مخصوص',
                img: shirinieleven,
                price: 110000
            },
            {
                id: 4,
                name: 'کیک پرتقالی',
                title: 'Orange cake',
                img: shiriniseven,
                price: 130000
            }
        ]
    }),
    getters: {
        allProducts(state) {
            return state.product
        },
        allproductCake(state) {
            return state.productCake
        }
    },
    mutations: {

    },
    actions: {

    }
}
export default product