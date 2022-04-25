import Api from './Api';

export default {

    async getAllProducts() {

        const response = await Api().get('products');
        return response.data;
    },

    async getParticularProduct(product_id : string) {

        const response = await Api().get(`products/${product_id}`);
        return response.data;
    }
}