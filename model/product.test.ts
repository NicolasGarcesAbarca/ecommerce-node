import { getProducts } from "./product";

describe('test product model', function() {
    it('test getProducts', function() {
        let products = getProducts();
        expect(products.length).toEqual(2);
    })
})