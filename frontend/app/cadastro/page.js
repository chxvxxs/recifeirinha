"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { Checkbox } from "@/components/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/radio-group"
import { ShoppingBag, Store, ArrowLeft } from 'lucide-react'
import Link from "next/link"

export default function CadastroPage() {
  const [step, setStep] = useState(1)
  const [accountType, setAccountType] = useState("")

  const handleAccountTypeSelect = (type) => {
    setAccountType(type)
    setStep(2)
  }

  const handleBack = () => {
    setStep(1)
    setAccountType("")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">

                <>
                  <div className="flex items-center mb-6">
                    <Button 
                      type="button"
                      onClick={handleBack} 
                      className="p-2 bg-transparent hover:bg-gray-100 text-gray-600"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <div className="flex-1 text-center">
                      <img
                        src="/IconeCabSomb.svg"
                        alt="Recifeirinha"
                        className="h-10 mx-auto object-contain"
                      />
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Criar conta de Cliente</h1>
                    <p className="text-gray-600">Junte-se à comunidade Recifeirinha</p>
                  </div>

                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                        Nome Completo
                      </Label>
                      <Input id="firstName" type="text" placeholder="Seu nome" className="mt-1 h-12" required />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        E-mail
                      </Label>
                      <Input id="email" type="email" placeholder="seu@email.com" className="mt-1 h-12" required />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Telefone
                        </Label>
                        <Input id="phone" type="tel" placeholder="(81) 99999-9999" className="mt-1 h-12" required />
                      </div>

                      <div>
                        <Label htmlFor="cpf" className="text-sm font-medium text-gray-700">
                          CPF
                        </Label>
                        <Input id="cpf" type="text" placeholder="000.000.000-00" className="mt-1 h-12" required />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                          Senha
                        </Label>
                        <Input id="password" type="password" placeholder="••••••••" className="mt-1 h-12" required />
                      </div>

                      <div>
                        <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                          Confirmar senha
                        </Label>
                        <Input id="confirmPassword" type="password" placeholder="••••••••" className="mt-1 h-12" required />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox id="terms" className="mt-1" required />
                        <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                          Eu aceito os{" "}
                          <Link href="/termos" className="text-[#FF5258] hover:text-[#D1495B]">
                            Termos de Uso
                          </Link>{" "}
                          e a{" "}
                          <Link href="/privacidade" className="text-[#FF5258] hover:text-[#D1495B]">
                            Política de Privacidade
                          </Link>
                        </Label>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox id="newsletter" className="mt-1" />
                        <Label htmlFor="newsletter" className="text-sm text-gray-600">
                          Quero receber ofertas exclusivas e novidades por e-mail
                        </Label>
                      </div>
                    </div>

                    <Button href="/home-page/cliente" type="submit" className="w-full h-12 bg-[#FF5258] hover:bg-[#D1495B] text-lg font-semibold">
                      Criar conta de cliente
                    </Button>
                  </form>
                </>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}