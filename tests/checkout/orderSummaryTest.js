import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { loadFromStorage } from "../../data/cart.js";


describe('test suite: renderOrderSummary', () => {
    it('displays the cart', () => {
        document.querySelector('.js-test-container')
            .innerHTML = `
                <div class="js-order-summary"></div>
            `;

        const productId1 = '3ebe75dc-64d2-4137-8860-1f5a963e534b';
        const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d'
        spyOn(Storage.prototype, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: productId1,
                quantity: 2,
                deliveryOptionId: '1'
            }, {
                productId: productId2,
                quantity: 1,
                deliveryOptionId: '3'
            }]);
        });
        loadFromStorage();

        renderOrderSummary();

        expect(
            document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(2);

        expect(
            document.querySelector(`.js-product-quantity-${productId1}`).innerText
        ).toContain('Quantity: 2');
        expect(
            document.querySelector(`.js-product-quantity-${productId2}`).innerText
        ).toContain('Quantity: 1');
    });
});                                       