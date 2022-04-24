export interface Product {
    name: string,
    description: string,
    image: string,
    price: number,
    tags: Array<string>,
};

export interface ProductsState {
    products: Product[],
    loading: boolean,
    error?: string | null,
}

export enum ProductsActionTypes {
    FETCH__PRODUCT = '@@products/FETCH__PRODUCT',
    FETCH__PRODUCT_SUCCESS = '@@products/FETCH__PRODUCT_SUCCESS',
    FETCH__PRODUCT_FAIL = '@@products/FETCH__PRODUCT_FAIL',
}