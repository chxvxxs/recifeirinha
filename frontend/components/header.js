"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, User, UserPlus } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center w-40">
              <img src="/LogoRecifeirinha.png" alt="Logo" />
            </Link>
          </div>

          {/* Navegação principal (desktop) */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link href="/" className="text-gray-600 hover:text-[#FF5258] transition-colors text-sm xl:text-base">
              Início
            </Link>
            <Link href="/produtos" className="text-gray-600 hover:text-[#FF5258] transition-colors text-sm xl:text-base">
              Produtos
            </Link>
            <Link href="/vendedores" className="text-gray-600 hover:text-[#FF5258] transition-colors text-sm xl:text-base">
              Vendedores
            </Link>
            <Link href="/sobre" className="text-gray-600 hover:text-[#FF5258] transition-colors text-sm xl:text-base">
              Sobre
            </Link>
            <Link href="/contato" className="text-gray-600 hover:text-[#FF5258] transition-colors text-sm xl:text-base">
              Contato
            </Link>
          </div>

          {/* Botões de Login / Cadastro + Menu Mobile */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Botão de Login */}
            <Link
              href="/caminho-login"
              className="text-gray-600 hover:text-[#FF5258] transition-colors flex items-center space-x-1"
            >
              <User className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="hidden sm:inline text-sm">Login</span>
            </Link>

            {/* Botão de Cadastro */}
            <Link
              href="/caminho-cadastro"
              className="text-gray-600 hover:text-[#FF5258] transition-colors flex items-center space-x-1"
            >
              <UserPlus className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="hidden sm:inline text-sm">Cadastro</span>
            </Link>

            {/* Botão do menu mobile */}
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

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-white">
            {/* Campo de busca mobile */}
            <div className="flex items-center mb-4">
              <div className="w-full relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5258] focus:border-[#FF5258] text-sm"
                />
              </div>
            </div>

            {/* Links mobile */}
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-gray-600 hover:text-[#FF5258] transition-colors py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/produtos"
                className="block text-gray-600 hover:text-[#FF5258] transition-colors py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link
                href="/artesaos"
                className="block text-gray-600 hover:text-[#FF5258] transition-colors py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Artesãos
              </Link>
              <Link
                href="/sobre"
                className="block text-gray-600 hover:text-[#FF5258] transition-colors py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/contato"
                className="block text-gray-600 hover:text-[#FF5258] transition-colors py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>

              {/* Links de Login/Cadastro no mobile */}
              <div className="pt-2 mt-2 border-t border-gray-200 space-y-3">
                <Link
                  href="/login"
                  className="flex items-center text-gray-600 hover:text-[#FF5258] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5 mr-2" />
                  Login
                </Link>
                <Link
                  href="/cadastro"
                  className="flex items-center text-gray-600 hover:text-[#FF5258] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <UserPlus className="h-5 w-5 mr-2" />
                  Cadastro
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}