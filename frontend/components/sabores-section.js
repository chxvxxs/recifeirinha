import { Button } from "@/components/button"
import Link from "next/link"

export default function SaboresSection() {
  return (
    <section className="bg-[#219EBC] text-white py-30">
      <div className="container mx-auto px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6  pr-20 ">
            <h2 className="text-4xl font-bold">Sabores de Pernambuco</h2>
            <p className="text-lg text-gray-50 leading-relaxed">
              Descubra os doces e iguarias tradicionais que fazem parte da cultura pernambucana. Do bolo de rolo à
              cartola, temos as melhores opções para você experimentar.
            </p>

            <Link href="/produtos" className="flex items-center">
              <Button size="lg" className="bg-[#FF5258] hover:bg-[#D1495B]">
                Explorar doces regionais
              </Button>
            </Link>
          </div>

          <div className="static flex items-center justify-center">
            <div className="w-80 h-80 relative">
              <img
                src="/BolodeRolo.svg"
                alt="Bolo de Rolo"
                className="w-full h-full object-contain"
              />
              <div className="absolute top-20 right-0 bg-[#FF5258] text-white rounded-lg px-4 py-4 text-left">
                <div className="text-sm font-bold">15% OFF</div>
                <div className="text-xs">Primeira compra</div>
              </div>
              <div className="absolute bottom-0 transform-translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-16 border-l-transparent border-r-transparent border-t-orange-500">
              </div>
            </div>

            
          </div>

        </div>
      </div>
    </section>
  )
}
