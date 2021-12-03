import {get} from '.';

export const getProducts = () => {
    return get('/products');
}