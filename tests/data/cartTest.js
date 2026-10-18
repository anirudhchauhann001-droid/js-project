import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe('test suite: addTocart', () => {
    it('adds an existing product to the cart', () => {
        spyOn(Storage.prototype, 'setItem');
        spyOn(Storage.prototype, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();

        addToCart('15b6fc6f-327a-4ec4-896f-486349e85a3d');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('15b6fc6f-327a-4ec4-896f-486349e85a3d');
        expect(cart[0].quantity).toEqual(2);
    });

    it('adds a new product to the cart', () => {

        // spyOn(localStorage, 'getItem').and.callFake(() => {
        //     return JSON.stringify([]);
        // });
        spyOn(Storage.prototype, 'setItem');
        spyOn(Storage.prototype, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });

        loadFromStorage();

        addToCart('15b6fc6f-327a-4ec4-896f-486349e85a3d');
        expect(cart.length).toEqual(1);

        // to check if the setItem is called
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('15b6fc6f-327a-4ec4-896f-486349e85a3d');
        expect(cart[0].quantity).toEqual(1);
    });
});