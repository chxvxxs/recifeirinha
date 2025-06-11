"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative text-white py-12 sm:py-16 md:py-20 lg:py-24"
    style={{ backgroundColor: '#219EBC' }}>
      <div className="container mx-auto px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Descubra o melhor de Pernambuco
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              Produtos artesanais, doces regionais e muito mais, diretamente dos artesãos para sua casa.
            </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/cadastro"
              className="px-6 py-3 bg-[#D1495B] text-white font-medium rounded-md hover:bg-rose-800 transition-colors text-center"
            >
              Comprar produtos
            </Link>
            <Link
              href="/cadastro-vendedor"
              className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-slate-900 hover:bg-opacity-30 transition-colors text-center"
                    >
            Vender Produtos
          </Link>
        </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img
                  src="/HeroRecifeirinha.svg"
                  alt="Produtos artesanais de Pernambuco"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded"
                />
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-white p-2 sm:p-3 rounded-lg shadow-lg">
                <div className="text-rose-600 font-bold text-sm sm:text-base">+200</div>
                <div className="text-gray-600 text-xs sm:text-sm">Artesãos</div>
              </div>
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 bg-white p-2 sm:p-3 rounded-lg shadow-lg">
                <div className="text-rose-600 font-bold text-sm sm:text-base">+1000</div>
                <div className="text-gray-600 text-xs sm:text-sm">Produtos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 md:h-16 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
      ></div>
    </section>
  );
}