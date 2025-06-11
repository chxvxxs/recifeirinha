import { Twitter, Instagram, Facebook, Mail } from "lucide-react"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white p-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">


          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/IconeCabSomb.svg"
                alt="Recifeirinha"
                className="h-12 object-contain"
              />
              <img
                src="/NomeRecifeirinha.png"
                alt="Recifeirinha"
                className="h-8 object-contain"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Apoiando o comércio local de Recife e valorizando os produtos e artesãos da nossa terra.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white p-2">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white p-2">
                <Facebook className="w-4 h-4" />
              </Button>
            </div>
          </div>

         
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Links Rápidos</h3>
            <div className="space-y-2">
              <Link href="/sobre" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Sobre nós
              </Link>
              <Link href="/contato" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Como vender
              </Link>
              <Link href="/privacidade" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Termos de Uso
              </Link>
              <Link href="/contato" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Contato
              </Link>
            </div>
          </div>



          <div className="space-y-4">
            <h3 className="font-semibold text-white">Categorias</h3>
            <div className="space-y-2">
              <Link
                href="/produtos?categoria=artesanato"
                className="block text-gray-300 hover:text-white text-sm transition-colors"
              >
                Artesanato
              </Link>
              <Link
                href="/produtos?categoria=doces"
                className="block text-gray-300 hover:text-white text-sm transition-colors"
              >
                Doces Regionais
              </Link>
              <Link
                href="/produtos?categoria=moda"
                className="block text-gray-300 hover:text-white text-sm transition-colors"
              >
                Moda Regional
              </Link>
              <Link
                href="/produtos?categoria=bebidas"
                className="block text-gray-300 hover:text-white text-sm transition-colors"
              >
                Bebidas
              </Link>
              <Link
                href="/produtos?categoria=acessorios"
                className="block text-gray-300 hover:text-white text-sm transition-colors"
              >
                Acessórios
              </Link>
            </div>
          </div>



          <div className="space-y-4">
            <h3 className="font-semibold text-white">Newsletter</h3>
            <p className="text-gray-300 text-sm">Receba novidades e promoções de produtos locais.</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
              />
              <Button className="bg-[#FF5258] hover:bg-[#D1495B] flex-shrink-0">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Recifeirinha. Todos os direitos reservados. Feito com ❤️ em Pernambuco.
          </p>
        </div>
      </div>
    </footer>
  )
}
