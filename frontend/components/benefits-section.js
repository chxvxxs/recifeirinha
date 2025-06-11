import { Check, Shield, Zap } from "lucide-react"

const benefits = [
  {
    icon: Check,
    title: "Produtos Autênticos",
    description: "Garantia de qualidade e autenticidade em todos os produtos artesanais",
  },
  {
    icon: Shield,
    title: "Compra Segura",
    description: "Pagamento seguro e proteção total em todas as suas compras",
  },
  {
    icon: Zap,
    title: "Entrega Rápida",
    description: "Entrega expressa para todo o Brasil com embalagem especial",
  },
]

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
