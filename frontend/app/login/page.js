"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { Checkbox } from "@/components/checkbox"
import { ShoppingBag, Store, ArrowLeft } from 'lucide-react'
import Link from "next/link"

export default function LoginPage() {
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
          <div className="max-w-md mx-auto">
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
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Bem-vindo de volta!</h1>
                    <p className="text-gray-600">Entre na sua conta para continuar</p>
                  </div>

                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        E-mail
                      </Label>
                      <Input id="email" type="email" placeholder="seu@email.com" className="mt-1 h-12" required />
                    </div>

                    <div>
                      <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Senha
                      </Label>
                      <Input id="password" type="password" placeholder="••••••••" className="mt-1 h-12" required />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember" className="text-sm text-gray-600">
                          Lembrar de mim
                        </Label>
                      </div>
                      <Link href="/recuperar-senha" className="text-sm text-[#FF5258] hover:text-[#D1495B]">
                        Esqueceu a senha?
                      </Link>
                    </div>
                   <Link href="/home-page/cliente">
                    <Button type="submit" className="w-full h-12 bg-[#FF5258] hover:bg-[#D1495B] text-lg font-semibold">
                      Entrar
                    </Button>
                    </Link>
                  </form>

                  <div className="my-8 flex items-center">
                    <div className="flex-1 border-t border-gray-200"></div>
                    <span className="px-4 text-sm text-gray-500">ou</span>
                    <div className="flex-1 border-t border-gray-200"></div>
                  </div>

                  <div className="space-y-3">
                    <Button variant="outline" className="w-full h-12 border-gray-300">
                      <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      Continuar com Google
                    </Button>

                    <Button variant="outline" className="w-full h-12 border-gray-300">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Continuar com Facebook
                    </Button>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-gray-600">
                      Não tem uma conta?{" "}
                      <Link href="/cadastro" className="text-[#FF5258] hover:text-[#D1495B] font-semibold">
                        Criar conta
                      </Link>
                    </p>
                  </div>
                </>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}