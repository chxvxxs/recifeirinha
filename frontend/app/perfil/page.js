"use client"

import { useState } from "react"
import Header from "@/components/header-cliente"
import Footer from "@/components/footer"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { User, MapPin, Package, Heart, Settings, LogOut } from "lucide-react"

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState("informacoes")

  const menuItems = [
    { id: "informacoes", label: "Informações Pessoais", icon: User },
    { id: "enderecos", label: "Meus Endereços", icon: MapPin },
    { id: "pedidos", label: "Meus Pedidos", icon: Package },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">


            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border p-6">


                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[#FF5258] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
                    JD
                  </div>
                  <h3 className="font-semibold text-gray-900">João da Silva</h3>
                  <p className="text-sm text-gray-500">joao.silva@email.com</p>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mt-2">
                    Cliente desde 2023
                  </span>
                </div>

                <nav className="space-y-2">
                  {menuItems.map((item) => {
                    const IconComponent = item.icon
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                          activeTab === item.id
                            ? "bg-red-50 text-[#FF5258] border-l-4 border-[#FF5258]"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="text-sm">{item.label}</span>
                      </button>
                    )
                  })}
                </nav>

                <div className="mt-6 pt-6 border-t">
                  <Link href="/">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sair da conta
                  </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {activeTab === "informacoes" && (
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Informações Pessoais</h2>
                    <Button variant="outline">Editar</Button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nome">Nome completo</Label>
                      <Input id="nome" value="João da Silva" readOnly className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" value="joao.silva@email.com" readOnly className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input id="telefone" value="(81) 98765-4321" readOnly className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="cpf">CPF</Label>
                      <Input id="cpf" value="123.456.789-00" readOnly className="mt-1" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Segurança</h3>
                      <Button variant="outline">Alterar senha</Button>
                    </div>

                  </div>
                </div>

                
              )}

              {activeTab === "enderecos" && (
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Meus Endereços</h2>
                    <Button className="bg-[#FF5258] hover:bg-[#FF5258]">Adicionar Endereço</Button>
                  </div>

                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">Casa</h3>
                          <p className="text-gray-600 mt-1">
                            Rua das Flores, 123, Apt 45
                            <br />
                            Boa Viagem, Recife - PE
                            <br />
                            CEP: 51020-000
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                            Excluir
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "pedidos" && (
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Meus Pedidos</h2>

                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">Pedido #12345</h3>
                          <p className="text-sm text-gray-500">Realizado em 15/12/2024</p>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Entregue</span>
                      </div>
                      <p className="text-gray-600 mb-2">3 itens • Total: R$ 110,80</p>
                      <Button variant="outline" size="sm">
                        Ver detalhes
                      </Button>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">Pedido #12344</h3>
                          <p className="text-sm text-gray-500">Realizado em 10/12/2024</p>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Em trânsito</span>
                      </div>
                      <p className="text-gray-600 mb-2">2 itens • Total: R$ 75,40</p>
                      <Button variant="outline" size="sm">
                        Rastrear pedido
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
