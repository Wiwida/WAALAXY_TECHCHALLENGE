export interface Product {
    _id: string,
    name: string,
    description: string,
    image: string,
    price: number,
    tags: Items[],
};

export interface OneProduct {
    product: {
        _id: string,
        name: string,
        description: string,
        image: string,
        price: number,
        tags: Items[],
    },
};

export interface Items {
    nameTag: string,
    wantDelete?: boolean,
    newArrayWithoutTag?: any,
};

export interface ProductsState {
    products: Product[],
    count: number,
    productClicked: OneProduct,
    loading: boolean,
    error?: string | null,
};

export interface ProductSubmitForm {
    name: string, 
    price: number, 
    description: string,
    image: string,
    tags: Items[]
};

export interface PropEditOrAddProduct {
    icon?: string, 
    type?: string, 
    nameButton?: string  
};

export interface ButtonProps {
    nameButton: string,
    typeButton?: string | any,
    icon? : string,
    actionAfterClick? : void | any,
};

