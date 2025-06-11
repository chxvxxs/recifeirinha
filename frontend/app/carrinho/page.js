"use client"

import { useEffect, useState } from "react"
import { useCartStore } from "@/app/zustand/useCartStore"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { RadioGroup, RadioGroupItem } from "@/components/radio-group"
import { Label } from "@/components/label"
import { Badge } from "@/components/badge"
import { Minus, Plus, Trash2, Shield } from "lucide-react"
import Link from 'next/link'

export default function CarrinhoPage() {
  const { cartItems, updateQuantity, removeItem, addItem } = useCartStore()
  const [couponCode, setCouponCode] = useState("")
  const [shippingOption, setShippingOption] = useState("standard")

  // Popular o carrinho com dados mockados uma vez (dev)
  useEffect(() => {
    if (cartItems.length === 0) {
      const initialItems = [
        {
          id: 1,
          name: "Bolo de Rolo Tradicional",
          vendor: "Doces da Boa Vista",
          price: 25.9,
          originalPrice: 29.9,
          quantity: 1,
          category: "Artesanal",
          categoryColor: "bg-green-100 text-green-800",
          image: "/produtos/BolodeRoloProduto.jpg",
        },
        {
          id: 2,
          name: "Quadro La Ursa",
          vendor: "Artesanato Pernambucano",
          price: 49.9,
          quantity: 1,
          category: "Feito à mão",
          categoryColor: "bg-blue-100 text-blue-800",
          image: "/produtos/QuadroLaursa.jpg",
        },
        {
          id: 3,
          name: "Escultura de Barro",
          vendor: "Artesanato Pernambucano",
          price: 32.5,
          originalPrice: 38.0,
          quantity: 1,
          category: "Orgânico",
          categoryColor: "bg-yellow-100 text-yellow-800",
          image: "/produtos/EsculturaBarro.jpg",
        },
      ]
      initialItems.forEach((item) => addItem(item))
    }
  }, [cartItems.length, addItem])

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = 9.5
  const shippingCost =
    shippingOption === "standard" ? 12.0 :
    shippingOption === "express" ? 22.0 : 0
  const total = subtotal - discount + shippingCost

  const recommendedProducts = [
    {
      id: 4,
      name: "Bolsa de Crochê",
      vendor: "Artesanato Caruaru",
      price: 45.0,
      image: "/produtos/BolsaCroche.jpg",
    },
    {
      id: 5,
      name: "Escultura de CD",
      vendor: "Música Pernambucana",
      price: 22.9,
      image: "/produtos/CDEscultura.png",
    },
    {
      id: 6,
      name: "Bolsa Artesanal",
      vendor: "Couro & Arte",
      price: 59.9,
      image: "/produtos/ChapeudePalha.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Meu Carrinho</h1>
                <span className="text-gray-500">{cartItems.length} itens</span>
              </div>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white border rounded-lg p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-500">Vendido por: {item.vendor}</p>
                            <Badge className={`${item.categoryColor} mt-1`}>{item.category}</Badge>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-600"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 p-0"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 p-0"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>

                          <div className="text-right">
                            <div className="flex items-center space-x-2">
                              <span className="text-lg font-bold text-gray-900">
                                R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                              </span>
                              {item.originalPrice && (
                                <span className="text-sm text-gray-400 line-through">
                                  R$ {(item.originalPrice * item.quantity).toFixed(2).replace(".", ",")}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Você também pode gostar</h2>
                <div className="grid grid-cols-3 gap-4">
                  {recommendedProducts.map((product) => (
                    <div key={product.id} className="bg-white border rounded-lg p-4 text-center">
                      <div className="w-full h-24 bg-gray-100 rounded-lg mb-3">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{product.name}</h3>
                      <p className="text-xs text-gray-500 mb-2">{product.vendor}</p>
                      <p className="font-bold text-orange-600 text-sm mb-2">
                        R$ {product.price.toFixed(2).replace(".", ",")}
                      </p>
                      <Button size="sm" variant="outline" className="w-full text-xs">
                        Adicionar
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white border rounded-lg p-6 sticky top-4">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Resumo do Pedido</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">R$ {subtotal.toFixed(2).replace(".", ",")}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Desconto</span>
                    <span>- R$ {discount.toFixed(2).replace(".", ",")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Frete</span>
                    <span className="font-medium">R$ {shippingCost.toFixed(2).replace(".", ",")}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-[#FF5258]">R$ {total.toFixed(2).replace(".", ",")}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      ou 3x de R$ {(total / 3).toFixed(2).replace(".", ",")} sem juros
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <Label htmlFor="coupon" className="text-sm font-medium text-gray-700">Cupom de desconto</Label>
                  <div className="flex mt-1">
                    <Input
                      id="coupon"
                      placeholder="Digite seu cupom"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="rounded-r-none"
                    />
                    <Button variant="outline" className="rounded-l-none border-l-0">
                      Aplicar
                    </Button>
                  </div>
                </div>

                <div className="mb-6">
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">Opções de entrega</Label>
                  <RadioGroup value={shippingOption} onValueChange={setShippingOption}>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg">
                      <RadioGroupItem value="standard" id="standard" />
                      <Label htmlFor="standard" className="flex-1 cursor-pointer">
                        <div className="flex justify-between">
                          <span>Padrão (3-5 dias úteis)</span>
                          <span className="font-medium">R$ 12,00</span>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg">
                      <RadioGroupItem value="express" id="express" />
                      <Label htmlFor="express" className="flex-1 cursor-pointer">
                        <div className="flex justify-between">
                          <span>Expresso (1-2 dias úteis)</span>
                          <span className="font-medium">R$ 22,00</span>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup" className="flex-1 cursor-pointer">
                        <div className="flex justify-between">
                          <span>Retirar na loja</span>
                          <span className="font-medium text-green-600">Grátis</span>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Link href="/checkout" passHref>
                    <Button className="w-full bg-[#FF5258] hover:bg-[#d1495b] text-white mb-3">
                      Finalizar Compra
                    </Button>
                  </Link>

                  <Link href="/produtos" passHref>
                    <Button variant="outline" className="w-full">
                      Continuar Comprando
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
                  <Shield className="w-4 h-4 mr-1" />
                  Pagamento 100% seguro
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
