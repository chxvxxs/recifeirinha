import Header from "@/components/header-cliente"
import Footer from "@/components/footer"
import VendedoresGrid from "@/components/vendedores-grid"
import { Suspense } from "react"

export default function VendedoresPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Artesãos Pernambucanos</h1>
            <p className="text-gray-600">Conheça os talentosos artesãos que preservam nossa cultura</p>
          </div>

          <div>
            <div className="lg:col-span-3">
              <Suspense fallback={<div>Carregando artesãos...</div>}>
                <VendedoresGrid />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
