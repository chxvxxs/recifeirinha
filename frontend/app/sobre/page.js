import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SobrePage() {
  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">



        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sobre a Recifeirinha</h1>
          <p className="text-xl text-gray-600">Conectando de Recife a Recife</p>
        </div>



      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Nossa História</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4">
              Recifeirinha é um projeto desenvolvido inicialmente como parte de uma disciplina de faculdade, com o propósito de criar um e-commerce voltado para a valorização da produção local e a melhoria das vendas de produtos regionais. A ideia nasceu da vontade de conectar pequenos vendedores e artesãos de Recife a consumidores que valorizam a cultura e os saberes tradicionais da região.
            </p>
            <p className="text-gray-700 mb-4">
              Com o tempo, o projeto ganhou corpo, visibilidade e engajamento da comunidade. O que começou como um protótipo acadêmico se transformou em uma plataforma real, que hoje ajuda a movimentar a economia local, gerar renda para pequenos empreendedores e manter vivas as raízes culturais da cidade.
            </p>
            <p className="text-gray-700">
              Mais do que um site de vendas, Recifeirinha se tornou uma ponte entre tradição e tecnologia, contribuindo de forma concreta para o fortalecimento da economia criativa e da identidade cultural do Recife.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/HeroRecifeirinha.svg"
                alt="História da Recifeirinha"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>



      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Nossa Missão</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#17BCD1] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#219EBC]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Conectar</h3>
            <p className="text-gray-600">
              Conectar artesãos e produtores locais diretamente aos consumidores, eliminando intermediários e
              valorizando o trabalho manual.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#FF5258] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#D1495B]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Preservar</h3>
            <p className="text-gray-600">
              Preservar e promover a rica cultura pernambucana, suas tradições e sabores, garantindo que essas artes
              continuem vivas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-green-500 bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#90C96D]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Desenvolver</h3>
            <p className="text-gray-600">
              Fomentar o desenvolvimento econômico local, gerando renda para famílias e comunidades tradicionais de
              Pernambuco.
            </p>
          </div>
        </div>
      </div>


      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Nossos Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="w-10 h-10 bg-[#FFB703] rounded-full flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-1">Autenticidade</h3>
              <p className="text-gray-600">
                Valorizamos produtos genuínos, feitos com técnicas tradicionais e que contam histórias reais.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="w-10 h-10 bg-[#FFB703] rounded-full flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-1">Comunidade</h3>
              <p className="text-gray-600">
                Acreditamos no poder das comunidades e no impacto positivo que podemos gerar juntos.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="w-10 h-10 bg-[#FFB703] rounded-full flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-1">Sustentabilidade</h3>
              <p className="text-gray-600">
                Incentivamos práticas sustentáveis e produtos que respeitam o meio ambiente e as pessoas.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="w-10 h-10 bg-[#FFB703] rounded-full flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-1">Comércio Justo</h3>
              <p className="text-gray-600">
                Garantimos preços justos para produtores e consumidores, criando uma relação de respeito e valorização.
              </p>
            </div>
          </div>
        </div>
      </div>

    
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Nossa Equipe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:col-start-2">
          {[
            {
              name: "Elynne Lima",
              role: "Dev Full-Stack",
              image:
              "/Elynnelima.jpg",
            },
            {
              name: "Ewayrton Brito",
              role: "Dev Back-End",
              image:
                "/EwayrtonBrito.svg",
            },
            {
              name: "Louise Flammarion",
              role: "Dev Front-End",
              image:
                "/LouiseFlammarion.jpg",
            },
            {
              name: "Matheus Chaves",
              role: "Dev Full-Stack",
              image:
                "",
            },
            {
              name: "Matheus Kauã",
              role: "Dev Back-End",
              image:
                "/MatheusKaua.svg",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full overflow-hidden mb-4">
                <Image
                  src={member?.image || "https://st.depositphotos.com/3538103/5151/i/450/depositphotos_51514387-stock-photo-photograph-icon.jpg"}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>



      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Nosso Impacto Social</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">+200</div>
            <p className="text-gray-700">Artesãos cadastrados</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">15</div>
            <p className="text-gray-700">Comunidades impactadas</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">+5.000</div>
            <p className="text-gray-700">Produtos vendidos</p>
          </div>
        </div>
        <p className="text-gray-600 mt-6 text-center">
          A cada compra na Recifeirinha, você contribui diretamente para a economia local e para a preservação da
          cultura pernambucana.
        </p>
      </div>



      <div className="text-center mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Faça parte dessa história</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Seja comprando produtos artesanais, divulgando nosso trabalho ou se tornando um artesão parceiro, você pode
          fazer a diferença.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pb-20px">
          <a
            href="/produtos"
            className="px-6 py-3 bg-[#17BCD1] text-white rounded-md hover:bg-[#219EBC] transition-colors"
          >
            Explorar produtos
          </a>
          <a
            href="/contato"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Entre em contato
          </a>
        </div>
      </div>
     </main>

    <Footer />
    </>
  )
}
