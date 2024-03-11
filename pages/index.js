import { useRouter } from "next/router"
import Link from "next/link"

function Home() {
    const router = useRouter()
    const handleClick = () => {
        router.push("/products")
    }

    return (
        <div>
            <h1>Home Page</h1>
            <Link href="/blog">
                Blog
            </Link>
            <Link href="/products">
                Products
            </Link>
            <button onClick={handleClick}>
                Place Order
            </button>
        </div>
    )
}

export default Home
