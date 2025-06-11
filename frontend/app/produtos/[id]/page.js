import Header from "@/components/header-cliente"
import ProductDetailPage from "@/components/product-detail"
import Footer from "@/components/footer"

export default function ProductDetail({ params }) {
  return (
    <>
    <Header />
      <main className="container mx-auto px-4 py-8">
        <ProductDetailPage productId={params.id} />
      </main>
      <Footer />
    </>
  )
}
