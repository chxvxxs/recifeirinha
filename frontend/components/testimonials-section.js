import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ana Beatriz",
    location: "Recife, PE",
    rating: 5,
    comment:
      "Comprei um bolo de rolo para presentear um amigo e foi um sucesso! A qualidade é incrível e o sabor é autêntico. Recomendo demais!",
  },
  {
    name: "Carlos Eduardo",
    location: "São Paulo, SP",
    rating: 5,
    comment:
      "Mesmo morando longe de Pernambuco, consigo matar a saudade da minha terra com os produtos da Recifeirinha. Entrega rápida e tudo muito bem embalado.",
  },
  {
    name: "Juliana Alves",
    location: "Olinda, PE",
    rating: 4,
    comment:
      "Adoro a proposta de valorizar os artesãos locais. Já comprei várias peças de artesanato e todas são lindas e de excelente qualidade.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">O que nossos clientes dizem</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">"{testimonial.comment}"</p>

              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
