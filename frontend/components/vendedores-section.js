import { Button } from "@/components/button"
import Image from "next/image"

const artesaos = [
  {
    name: "Maria das Rendas",
    specialty: "Rendas e Bordados",
    location: "Olinda, PE",
    avatar: "/users/User1.jpg",
  },
  {
    name: "João do Barro",
    specialty: "Cerâmica",
    location: "Caruaru, PE",
    avatar: "/users/User2.png",
  },
  {
    name: "Coletivo Mulheres de Barro",
    specialty: "Cerâmica",
    location: "Tracunhaém, PE",
    avatar: "/users/User3.png",
  },
]

export default function VendedoresSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Vendedores em Destaque</h2>
          <a href="#" className="text-orange-600 hover:text-orange-700 font-medium flex items-center">
            Ver todos
            <span className="ml-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artesaos.map((artesao, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full overflow-hidden mb-4">
                <Image
                  src={artesao.avatar}
                    alt={artesao.name}
                    width={180}
                    height={180}
                    className="w-full h-full object-cover"
                  />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{artesao.name}</h3>
              <p className="text-orange-600 font-medium mb-1">{artesao.specialty}</p>
              <p className="text-gray-500 text-sm mb-4">{artesao.location}</p>
              <Button variant="outline" className="w-full border-[#FF5258] text-[#FF5258] hover:bg-rose-100">
                Ver perfil e produtos
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
