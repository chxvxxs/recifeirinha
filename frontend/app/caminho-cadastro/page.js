
"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ShoppingBag, Store } from 'lucide-react'
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CadastroPage() {
  const router = useRouter()

  const handleAccountTypeSelect = (type) => {
    router.push(`/cadastro${type}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <img src="/IconeCabSomb.svg" alt="Recifeirinha" className="h-12 mx-auto object-contain" />
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Criar conta</h1>
                <p className="text-gray-600">Escolha o tipo de conta que deseja criar</p>
              </div>

              <div className="space-y-4">
                <div onClick={() => handleAccountTypeSelect("")}
                     className="border-2 border-gray-200 rounded-xl p-6 cursor-pointer hover:border-[#FF5258] transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#FF5258] bg-opacity-10 p-3 rounded-full">
                      <ShoppingBag className="h-8 w-8 text-[#FF5258]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">Conta de Cliente</h3>
                      <p className="text-gray-600 mt-1">Para comprar produtos únicos e artesanais</p>
                      <ul className="text-sm text-gray-500 mt-2 space-y-1">
                        <li>• Acesso a produtos exclusivos</li>
                        <li>• Favoritar vendedores</li>
                        <li>• Histórico de compras</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div onClick={() => handleAccountTypeSelect("-vendedor")}
                     className="border-2 border-gray-200 rounded-xl p-6 cursor-pointer hover:border-[#FF5258] transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#FF5258] bg-opacity-10 p-3 rounded-full">
                      <Store className="h-8 w-8 text-[#FF5258]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">Conta de Vendedor</h3>
                      <p className="text-gray-600 mt-1">Para vender seus produtos e alcançar mais clientes</p>
                      <ul className="text-sm text-gray-500 mt-2 space-y-1">
                        <li>• Criar sua loja virtual</li>
                        <li>• Gerenciar produtos e vendas</li>
                        <li>• Relatórios de desempenho</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Já tem uma conta? <Link href="/login" className="text-[#FF5258] hover:text-[#D1495B] font-semibold">Fazer login</Link>
                </p>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
