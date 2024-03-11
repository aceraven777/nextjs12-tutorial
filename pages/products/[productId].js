import { useRouter } from "next/router";

function ProductDetail() {
    const router = useRouter();

    return <h1>Details about product {router.query.productId}</h1>
}

export default ProductDetail
