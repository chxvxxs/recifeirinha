"use client"

import { useState } from "react"
import Image from 'next/image';
import { Star, MapPin, Calendar, Grid3X3, List } from "lucide-react"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select"

const vendedores = [
  {
    id: 1,
    name: "Maria das Rendas",
    specialty: "Rendas e Bordados",
    location: "Olinda, PE",
    experience: "15 anos",
    rating: 4.9,
    products: 23,
    avatar: "/users/User1.jpg",
    description: "Especialista em rendas tradicionais pernambucanas, preservando técnicas centenárias.",
  },
  {
    id: 2,
    name: "João do Barro",
    specialty: "Cerâmica",
    location: "Caruaru, PE",
    experience: "12 anos",
    rating: 4.8,
    products: 18,
    avatar: "/users/User2.png",
    description: "Ceramista tradicional do Alto do Moura, criando peças únicas em barro.",
  },
  {
    id: 3,
    name: "Coletivo Mulheres de Barro",
    specialty: "Cerâmica",
    location: "Tracunhaém, PE",
    experience: "8 anos",
    rating: 4.7,
    products: 31,
    avatar: "/users/User3.png",
    description: "Grupo de artesãs que trabalha com cerâmica utilitária e decorativa.",
  },
  {
    id: 4,
    name: "Carlos Couro & Arte",
    specialty: "Couro",
    location: "Garanhuns, PE",
    experience: "20 anos",
    rating: 4.6,
    products: 15,
    avatar: "/users/User4.png",
    description: "Artesão especializado em bolsas, carteiras e acessórios em couro.",
  },
  {
    id: 5,
    name: "Ana Tecidos",
    specialty: "Tecidos",
    location: "Recife, PE",
    experience: "6 anos",
    rating: 4.5,
    products: 27,
    avatar: "/users/User6.png",
    description: "Criadora de roupas e acessórios com tecidos regionais e sustentáveis.",
  },
  {
    id: 6,
    name: "Mestre Zé da Madeira",
    specialty: "Madeira",
    location: "Petrolina, PE",
    experience: "25 anos",
    rating: 4.8,
    products: 12,
    avatar: "/users/User5.png",
    description: "Escultor e marceneiro, especialista em peças decorativas e utilitárias.",
  },
]

export default function VendedoresGrid() {
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("relevance")

  return (
    <div className="space-y-6">


      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="text-gray-600">{vendedores.length} artesãos encontrados</p>

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
        {vendedores.map((vendedor) => (
          <div
            key={vendedor.id}
            className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6 ${
              viewMode === "list" ? "flex items-center space-x-6" : "text-center"
            }`}
          >
            <div className={`${viewMode === "list" ? "flex-shrink-0" : "mx-auto mb-4"}`}>
              <div>
                <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full overflow-hidden mb-4">
                  <Image
                  src={vendedor?.avatar  || "https://st.depositphotos.com/3538103/5151/i/450/depositphotos_51514387-stock-photo-photograph-icon.jpg"}
                  alt={vendedor.name}
                  width={180}
                  height={180}
                  className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className={`${viewMode === "list" ? "flex-1" : ""}`}>
              <div className={`${viewMode === "list" ? "flex justify-between items-start" : ""}`}>
                <div className={`${viewMode === "list" ? "" : "mb-4"}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{vendedor.name}</h3>
                  <Badge className="bg-orange-100 text-orange-800 mb-2">{vendedor.specialty}</Badge>

                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{vendedor.rating}</span>
                  </div>

                  <div className={`space-y-1 text-sm text-gray-500 ${viewMode === "list" ? "text-left" : ""}`}>
                    <div className="flex items-center justify-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{vendedor.location}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{vendedor.experience} de experiência</span>
                    </div>
                    <p className="text-center">{vendedor.products} produtos</p>
                  </div>

                  {viewMode === "list" && <p className="text-gray-600 mt-2 max-w-md">{vendedor.description}</p>}
                </div>

                <div className={`${viewMode === "list" ? "flex-shrink-0 ml-4" : ""}`}>
                  <Button
                    variant="outline"
                    className={`border-orange-500 text-orange-600 hover:bg-orange-50 ${
                      viewMode === "grid" ? "w-full" : ""
                    }`}
                  >
                    Ver perfil e produtos
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
