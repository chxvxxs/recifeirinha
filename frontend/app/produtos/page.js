import Header from "@/components/header-cliente"
import Footer from "@/components/footer"
import ProductsGrid from "@/components/products-grid"
import { Suspense } from "react"

export default function ProdutosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Produtos Recifenses</h1>
            <p className="text-gray-600">Descubra o melhor da cultura pernambucana</p>
          </div>

          <div className="">
            <div>
              <Suspense fallback={<div>Carregando produtos...</div>}>
                <ProductsGrid />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
