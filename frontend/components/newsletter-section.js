import { Button } from "@/components/button"
import Link from "next/link"

export default function NewsletterSection() {
  return (
    <section className="bg-[#219EBC] text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Junte-se à comunidade Recifeirinha</h2>
        <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
          Cadastre-se agora e receba ofertas exclusivas, novidades sobre produtos artesanais e muito mais!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Link href="/cadastro">
            <Button size="lg" className="bg-white text-[#D1495B] hover:bg-sky-100 font-semibold w-full sm:w-auto">
              Criar uma conta
            </Button>
          </Link>
          <Link href="/login">
            <Button
              size="lg"
              variant="outline"
              className=" bg-transparent border-white text-white hover:bg-white hover:text-[#D1495B] font-semibold w-full sm:w-auto"
            >
              Já tenho uma conta
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
