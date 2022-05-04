/* eslint-disable import/no-anonymous-default-export */
import { ProductSubmitForm } from '../models/redux-models';
import Api from './Api';

export default {
    async getAllProducts(queryVariable: string) {
        const response = await Api().get(`products/${queryVariable}`);
        return response.data;
    },

    async getParticularProduct(product_id : string) {
        const response = await Api().get(`products/${product_id}`);
        return response.data;
    },

    async updateProduct(product_id : string, dataTosend : ProductSubmitForm) {
        const response = await Api().put(`products/${product_id}`, dataTosend);
        return response.data;
    },

    async createProduct(dataTosend : ProductSubmitForm) {
        const response = await Api().post('products', dataTosend);
        return response.data;
    },
};