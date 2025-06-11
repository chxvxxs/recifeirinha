import { Award, Wrench, User, Coffee, Package, Music } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    name: "Doces Regionais",
    count: "28 produtos",
    icon: Award,
    href: "/produtos?categoria=doces",
  },
  {
    name: "Artesanato",
    count: "45 produtos",
    icon: Wrench,
    href: "/produtos?categoria=artesanato",
  },
  {
    name: "Moda Regional",
    count: "32 produtos",
    icon: User,
    href: "/produtos?categoria=moda",
  },
  {
    name: "Bebidas",
    count: "18 produtos",
    icon: Coffee,
    href: "/produtos?categoria=bebidas",
  },
  {
    name: "Acessórios",
    count: "24 produtos",
    icon: Package,
    href: "/produtos?categoria=acessorios",
  },
  {
    name: "Música",
    count: "12 produtos",
    icon: Music,
    href: "/produtos?categoria=musica",
  },
]

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Categorias</h2>
          <Link
            href="/produtos"
            className="text-rose-600 hover:text-orange-700 font-medium flex items-center text-lg"
          >
            Ver todas
            <span className="ml-2">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Link
                key={index}
                href={category.href}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-green-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <IconComponent className="w-10 h-10" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{category.name}</h3>
                <p className="text-gray-500">{category.count}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
