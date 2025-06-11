import { Star } from "lucide-react";
import { Button } from "@/components/button";
import { Badge } from "@/components/badge";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Bolo de Rolo Tradicional",
    vendor: "Doces da Boa Vista",
    price: "R$ 25,90",
    originalPrice: "R$ 30,00",
    rating: 4.8,
    category: "Artesanal",
    categoryColor: "bg-green-100 text-green-800",
    image: "/produtos/BolodeRoloProduto.jpg",
    href: "/produto/[id]",
  },
  {
    id: 2,
    name: "Quadro La Ursa",
    vendor: "Moda Pernambucana",
    price: "R$ 49,90",
    rating: 4.5,
    category: "Feito à mão",
    categoryColor: "bg-blue-100 text-blue-800",
    image: "/produtos/QuadroLaursa.jpg",
    href: "/produto/[id]",
  },
  {
    id: 3,
    name: "Bolsa de Flor Crochê",
    vendor: "Cafeteria do Marco Zero",
    price: "R$ 32,50",
    originalPrice: "R$ 38,00",
    rating: 4.9,
    category: "Orgânico",
    categoryColor: "bg-yellow-100 text-yellow-800",
    image: "/produtos/BolsaCroche.jpg",
    href: "/produto/[id]",
  },
  {
    id: 4,
    name: "Artesanato em Barro",
    vendor: "Artesanato Caruaru",
    price: "R$ 45,00",
    rating: 4.7,
    category: "Tradicional",
    categoryColor: "bg-purple-100 text-purple-800",
    image: "/produtos/EsculturaBarro.jpg",
    href: "/produto/[id]",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Produtos em Destaque</h2>
          <Link href="/produtos" className="text-orange-600 hover:text-orange-700 font-medium flex items-center">
            Ver todos
            <span className="ml-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/produtos/${product.id}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
            >
              <div className="aspect-square bg-gray-100 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-3 left-3 ${product.categoryColor}`}>
                  {product.category}
                </Badge>
              </div>

              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">{product.rating}</span>
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-3">Vendido por: {product.vendor}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <Button size="sm" className="bg-[#FF5258] hover:bg-[#D1495B]">
                    Comprar
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
