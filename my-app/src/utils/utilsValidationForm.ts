import * as Yup from 'yup';

const validationSchema = Yup.object().shape({

    name:            Yup.string() 
                        .required('Le nom du produit est requis.'),
    price:           Yup.number()
                        .transform((value) => (isNaN(value) ? undefined : value))
                        .nullable()
                        .required('Le prix est requis.')
                        .min(0, 'Le prix minimal est de 0 euro.')
                        .max(20, 'Le prix maximal est de 20 euros.'),
    description:     Yup.string()
                        .required('Au moins un mot ?'),
    image:           Yup.string()
                        .url('Le format doit correspondre à une url.')
                        .required('Une image est requise.'),
  });

  export default validationSchema;