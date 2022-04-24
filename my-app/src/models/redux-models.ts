export interface Product {
    name: string,
    description: string,
    image: string,
    price: number,
    tags: Array<string>,
};

export interface ProductsState {
    productClicked: Array<object>,
    products: Product[],
    loading: boolean,
    error?: string | null,
}

export enum ProductsActionTypes {
    FETCH__PRODUCT = 'FETCH__PRODUCT',
    FETCH__PRODUCT_SUCCESS = 'FETCH__PRODUCT_SUCCESS',
    FETCH__PRODUCT_FAIL = 'FETCH__PRODUCT_FAIL',
}