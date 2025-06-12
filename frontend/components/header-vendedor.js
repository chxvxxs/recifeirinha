"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, User } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center">
            <Link href="/" className="flex items-center w-40">
              <img src="/LogoRecifeirinha.png" alt="Logo" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link href="/" className="text-gray-600 hover:text-[#FF5258] transition-colors text-sm xl:text-base">
              Início
            </Link>
            <Link href="/sobre" className="text-gray-600 hover:text-[#FF5258] transition-colors text-sm xl:text-base">
              Sobre
            </Link>
            <Link href="/contato" className="text-gray-600 hover:text-[#FF5258] transition-colors text-sm xl:text-base">
              Contato
            </Link>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link
              href="/perfil"
              className="text-gray-600 hover:text-[#FF5258] transition-colors flex items-center space-x-1"
            >
              <User className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="hidden sm:inline text-sm">Perfil</span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-600 hover:text-[#FF5258] transition-colors ml-2"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-white">
            <div className="flex items-center mb-4">
              <div className="w-full relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar pedidos..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5258] focus:border-[#FF5258] text-sm"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Link
                href="/"
                className="block text-gray-600 hover:text-[#FF5258] transition-colors py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/me"
                className="block text-gray-600 hover:text-[#FF5258] transition-colors py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Meus Produtos
              </Link>
              
              <Link
                href="/perfil-vendedor"
                className="block text-gray-600 hover:text-[#FF5258] transition-colors py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Perfil
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
