import axios from "axios";

export async function productsData() {
    const products = await axios.get(
        // "https://fakestoreapiserver.reactbd.com/products"
        "https://fakestoreapiserver.reactbd.com/amazonproducts"
        // "https://fakestoreapiserver.reactbd.com/walmart"
    )
    return products;
   
}