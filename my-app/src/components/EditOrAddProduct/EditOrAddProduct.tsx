// Component :
import Tag from '../Commons/Tag/Tag';

// Type(s) :
import { ProductSubmitForm, PropEditOrAddProduct, Items } from '../../models/redux-models';

// Hook(s) :
import React, { ChangeEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';

// Action(s) :
import { updateParticularProduct, createOneProduct } from '../../store/products-action';

// Form :
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema  from '../../utils/utilsValidationForm';

// Style :
import './EditOrAddProduct.scss';
import Buttonfoodaawa from '../Commons/Button/Button';


const EditOrAddProduct = ({ icon, type, nameButton }: PropEditOrAddProduct) => {

    // Hooks :
    const { productId } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // List of products :
    const allProducts = useAppSelector(state => state.products.products);
    
    // Particular :
    const productSelected = allProducts.filter(el => el._id === productId);
    const tagsProductSelected = productSelected[0]?.tags;

    // Local State :
    const [productName, setProductName] = useState(productSelected[0]?.name);
    const [priceValue , setPriceValue] = useState(productSelected[0]?.price);
    const [descriptionValue, setDescriptionValue] = useState(productSelected[0]?.description);
    const [imageUrlValue, setImageUrlValue] = useState(productSelected[0]?.image);
    const [tagsValue, setTagsValue] = useState(tagsProductSelected);

    // Form validate :
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<ProductSubmitForm>({
        resolver: yupResolver(validationSchema)
    });

    // Launch request :
    const onSubmit = (data: ProductSubmitForm) => {
        data.tags = tagsValue !== undefined ? tagsValue : [];
        type === 'update' && dispatch(updateParticularProduct(`${productId}`, data));
        type === 'create' && dispatch(createOneProduct(data));

        navigate(type === 'update' ? `/products/${productId}` : '/');
    };

    // Add tag :
    const pushIntoTags = (event: React.KeyboardEvent<HTMLInputElement>) => {

        const currentValueOnInput: any = event.currentTarget.value;

        // keyCode space instead of enter :
        if (event.keyCode === 32 && tagsValue !== undefined) {
            setTagsValue([...tagsValue , currentValueOnInput]);
            event.currentTarget.value = "";  

        } else if (event.keyCode === 32 && tagsValue === undefined) {
            setTagsValue([currentValueOnInput]);
            event.currentTarget.value = "";
        };

    };

    // Delete tag :
    const newArrayWithoutTag = (tag: Items) => {
        
        const arrayWithoutTag: any = tagsValue.filter(el => el !== tag);
        setTagsValue([...arrayWithoutTag]);

    };

    return (

        <div className="container__editoraddproduct">
            <div className="editoraddproduct__header__icon">
                <div className="header__icon__square">
                    <i className={`${icon}`}/>
                </div>
                <div className="header__icon__content">
                    {
                        type === 'update'   ? <h2 className="header__icon__title">Edit product informations</h2>
                                            : <h2 className="header__icon__title">Add a new product</h2>
                    }
                    <span className="header__icon__subtitle">Lorem Ipsum.</span>
                </div>
            </div>
            <form onSubmit={e => e.preventDefault()}>
                <div className="wrapper__headerform">
                    <div className="form__group firstpart">
                        <label>Nom du produit</label>
                        <input 
                            value={productName !== undefined ? productName : ""} 
                            placeholder='Nom du produit' 
                            type="text" 
                            {...register('name')} 
                            onFocus={() => errors.name = undefined } 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setProductName(e.target.value)} 
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                        />
                        <div className="invalid-feedback">{errors.name?.message}</div>
                    </div>

                    <div className="form__group secondpart">
                        <label>Prix</label>
                        <input 
                            value={priceValue} 
                            placeholder='0,00€' 
                            step='0.01'
                            type="number" 
                            inputMode='numeric'
                            {...register('price')} 
                            onFocus={() => errors.price = undefined } 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => isNaN(parseFloat(e.target.value)) ? 0.00 : setPriceValue(parseFloat(e.target.value))} 
                            className={`form-control ${errors.price ? 'is-invalid' : ''}`} 
                        />
                        <div className="invalid-feedback">{errors.price?.message || priceValue === undefined}</div>
                    </div>
                </div>

                <div className="form__group">
                    <label>Description</label>
                    <input 
                        value={descriptionValue !== undefined ? descriptionValue : ""} 
                        placeholder='Entrer la description du produit ici.' 
                        type="text" 
                        {...register('description')} 
                        onFocus={() => errors.description = undefined } 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setDescriptionValue(e.target.value)} 
                        className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.description?.message}</div>
                </div>

                <div className="form__group">
                    <label>Image</label>
                    <input 
                        value={imageUrlValue !== undefined ? imageUrlValue : ""} 
                        placeholder="Entrer l'url de l'image ici." 
                        type="text" 
                        {...register('image')} 
                        onFocus={() => errors.image = undefined } 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setImageUrlValue(e.target.value)} 
                        className={`form-control ${errors.image ? 'is-invalid' : ''}`} 
                    />
                    <div className="invalid-feedback">{errors.image?.message}</div>
                </div>

                <div className="form__group">
                    <label>Tag(s)</label>
                    <input type="text" placeholder="Write a tag and hit space to add it. (one word)" onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => pushIntoTags(event)}/>
                    <div className="form__group__tags">
                        {
                            tagsValue?.map((tag, index) => (
                                <Tag 
                                    nameTag={`${tag}`} 
                                    key={`${tag}${index}`} 
                                    wantDelete={true} 
                                    newArrayWithoutTag={newArrayWithoutTag}/>
                            ))
                        }
                    </div>
                </div>
                <div className="container__button">
                    <Buttonfoodaawa typeButton={'submit'} icon={`${icon}`} actionAfterClick={handleSubmit(onSubmit)} nameButton={`${nameButton}`}/>                  
                </div>
            </form>

        </div>

    );
};

export default EditOrAddProduct;