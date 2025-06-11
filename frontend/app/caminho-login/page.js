"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/button"
import { ShoppingBag, Store } from 'lucide-react'
import Link from "next/link"

export default function LoginIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <img
                  src="/IconeCabSomb.svg"
                  alt="Recifeirinha"
                  className="h-12 mx-auto object-contain"
                />
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Fazer login</h1>
                <p className="text-gray-600">Escolha o tipo de conta para acessar</p>
              </div>

              <div className="space-y-4">
                <Link href="/login">
                  <div 
                    className="border-2 border-gray-200 rounded-xl p-6 cursor-pointer hover:border-[#FF5258] transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#FF5258] bg-opacity-10 p-3 rounded-full">
                        <ShoppingBag className="h-6 w-6 text-[#FF5258]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">Login Cliente</h3>
                        <p className="text-gray-600 text-sm">Acesse sua conta para fazer compras</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/login-vendedor">
                  <div 
                    className="border-2 border-gray-200 rounded-xl p-6 cursor-pointer hover:border-[#FF5258] transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#FF5258] bg-opacity-10 p-3 rounded-full">
                        <Store className="h-6 w-6 text-[#FF5258]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">Login Vendedor</h3>
                        <p className="text-gray-600 text-sm">Acesse sua conta para gerenciar vendas</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Não tem uma conta?{' '}
                  <Link href="/cadastro" className="text-[#FF5258] hover:text-[#D1495B] font-semibold">
                    Criar conta
                  </Link>
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
