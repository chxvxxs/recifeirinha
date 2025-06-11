import { Users, Store, ShoppingBag } from 'lucide-react'

export default function HomeCards() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">


        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Para Clientes</h3>
            <p className="text-gray-600 leading-relaxed">
              Encontre produtos locais, sustentáveis e de qualidade dos pequenos comerciantes do Recife.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Store className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Para Vendedores</h3>
            <p className="text-gray-600 leading-relaxed">
              Exponha seus produtos e alcance mais clientes com uma plataforma feita para o comércio local.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                 <ShoppingBag className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Comércio Local</h3>
                <p className="text-gray-600 leading-relaxed">
                Fortaleça a economia local e contribua para um Recife mais sustentável e próspero.
                </p>
          </div>
        </div>
      </div>
    </div>
  )
}
