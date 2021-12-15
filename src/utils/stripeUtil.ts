import Stripe from 'stripe';


const SECRET_KEY = "sk_test_51Ju7olBy32I6Nq0JdLMOTkcdotZBLcmaa8vyw2PbYFRWdQjttpPnkePiSPWdAS6LyhT02mz5AZhIZ4l2hJJ60TG600kL8AAZVS";
const stripeInstance = new Stripe(SECRET_KEY, {
    apiVersion: '2020-08-27',
});

export async function listAllProducts() {
    console.log("get project");
    console.log(stripeInstance);
    const products = await stripeInstance.products.list();
    console.log(products);
}

export async function getSingleProduct() {
    const product = await stripeInstance.products.retrieve("{{PRODUCT_ID}}");
    console.log(product);
}

