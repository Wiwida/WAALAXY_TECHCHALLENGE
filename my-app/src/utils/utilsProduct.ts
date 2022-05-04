import { Items, Product } from '../models/redux-models';
    
export const whichProductsHaveTheSameTag = (allProducts: Product[], tagsOfProductSelected: Items[], productSelected: Product) => {

    // Sorting of products that have at least one similar tag (case sensitive) :
    const selectionProduct: Array<Product> = [];

    for (const productGeneral of allProducts) {
        for (const value of tagsOfProductSelected) {
            if (productGeneral.tags.includes(value)) {
                
                // check that the product is not in the list and that it is not the clicked product either :
                (selectionProduct.indexOf(productGeneral) === -1 && productSelected._id !== productGeneral._id) && selectionProduct.push(productGeneral);
            };          
        };
    };

    return selectionProduct;
};  
