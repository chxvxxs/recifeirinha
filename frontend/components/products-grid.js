"use client"

import { useState } from "react"
import { Star, Heart, Grid3X3, List } from "lucide-react"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select"

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
  },
  {
    id: 5,
    name: "Escultura de CD",
    vendor: "Artesanato",
    price: "R$ 22,90",
    rating: 4.6,
    category: "Local",
    categoryColor: "bg-pink-100 text-pink-800",
    image: "/produtos/CDEscultura.png",
  },
  {
    id: 6,
    name: "Bolsa Artesanal",
    vendor: "Couro & Arte",
    price: "R$ 59,90",
    rating: 4.4,
    category: "Sustentável",
    categoryColor: "bg-green-100 text-green-800",
    image: "/produtos/BolsArtesanal.png",
  },
  {
    id: 7,
    name: "Tapioca Gourmet",
    vendor: "Sabores do Nordeste",
    price: "R$ 18,50",
    rating: 4.3,
    category: "Semipronto",
    categoryColor: "bg-orange-100 text-orange-800",
    image: "/produtos/TapiocaGourmet.png",
  },
  {
    id: 8,
    name: "Chapéu de Palha",
    vendor: "Tradição Nordestina",
    price: "R$ 35,00",
    rating: 4.2,
    category: "Proteção UV",
    categoryColor: "bg-blue-100 text-blue-800",
    image: "/produtos/ChapeudePalha.png",
  },
]

export default function ProductsGrid() {
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("relevance")

  return (
    <div className="space-y-6">


      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="text-gray-600">{products.length} produtos encontrados</p>

        <div className="flex items-center space-x-4">
          <div className="flex border rounded-lg">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-l-none"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>



      <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
        {products.map((product) => (
          <div
            key={product.id}
            className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden ${
              viewMode === "list" ? "flex" : ""
            }`}
          >
            <div className={`${viewMode === "list" ? "w-48 h-48" : "aspect-square"} bg-gray-100 relative`}>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <Badge className={`absolute top-3 left-3 ${product.categoryColor}`}>{product.category}</Badge>
              <Button variant="ghost" size="sm" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
                <Heart className="w-4 h-4" />
              </Button>
            </div>

            <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
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
          </div>
        ))}
      </div>
    </div>
  )
}
