"use client"

import React, { useState } from "react";
import { ArrowLeft, CreditCard, Shield, Check } from "lucide-react";

function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Dados pessoais
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    cpf: "",

    // Endereço
    zipCode: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",

    // Pagamento
    paymentMethod: "credit",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvv: "",
    installments: "1",

    // PIX
    pixEmail: "",

    // Entrega
    shippingMethod: "standard",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // Dados simulados do carrinho
  const cartItems = [
    {
      id: 1,
      name: "Bolo de Rolo Tradicional",
      price: 25.9,
      quantity: 1,
      seller: "Doces da Boa Vista",
      image:
        "/produtos/BolodeRoloProduto.jpg",
    },
    {
      id: 2,
      name: "Quadro La Ursa",
      price: 49.9,
      quantity: 1,
      seller: "Artesanato Pernambucano",
      image:
        "/produtos/QuadroLaursa.jpg",
    },
    {
      id: 3,
      name: "Escultura de Barro",
      price: 32.5,
      quantity: 1,
      seller: "Artesanato Pernambucano",
      image:
        "/produtos/EsculturaBarro.jpg",
    },
  ];

  // Cálculos do pedido
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 9.5;
  const shippingCost = formData.shippingMethod === "express" ? 22.0 : formData.shippingMethod === "standard" ? 12.0 : 0;
  const total = subtotal - discount + shippingCost;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmitOrder = async () => {
    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsProcessing(false);
    setOrderComplete(true);
  };

  if (orderComplete) {
    return (
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Pedido realizado com sucesso!</h1>
            <p className="text-gray-600 mb-6">
              Seu pedido #PED123456 foi confirmado e você receberá um e-mail com os detalhes em breve.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-gray-800 mb-2">Resumo do pedido</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex justify-between">
                  <span>Total pago:</span>
                  <span className="font-medium">R$ {total.toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Método de pagamento:</span>
                  <span>{formData.paymentMethod === "credit" ? "Cartão de crédito" : "PIX"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Entrega:</span>
                  <span>
                    {formData.shippingMethod === "express"
                      ? "Expressa"
                      : formData.shippingMethod === "standard"
                      ? "Padrão"
                      : "Retirada"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/perfil?tab=orders"
                className="px-6 py-3 bg-[#FF5258] text-white rounded-md hover:bg-[#d1495b] transition-colors"
              >
                Acompanhar pedido
              </a>
              <a
                href="/produtos"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Continuar comprando
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
 
 
      <div className="flex items-center mb-8">
        <a
          href="/carrinho"
          className="flex items-center text-gray-600 hover:text-[#d1495b] transition-colors mr-4"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          Voltar ao carrinho
        </a>
       
      </div>



      <div className="mb-8">
         <h1 className="flex items-center justify-center text-2xl font-bold text-gray-800 mb-4">Finalizar Compra</h1>
        <div className="flex items-center justify-center">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div
              
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep ? "bg-[#d1495b] text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {step}
              </div>
              {step < 4 && (
                <div
                  className={`w-16 h-1 mx-2 ${step < currentStep ? "bg-[#d1495b]" : "bg-gray-200"}`}
                ></div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-2">
          <div className="text-sm text-gray-600">
            {currentStep === 1 && "Dados pessoais"}
            {currentStep === 2 && "Endereço de entrega"}
            {currentStep === 3 && "Forma de pagamento"}
            {currentStep === 4 && "Revisão do pedido"}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 
 
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">


            {currentStep === 1 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Dados pessoais</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d1495b] focus:border-[#d1495b]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d1495b] focus:border-[#d1495b]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d1495b] focus:border-[#d1495b]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sobrenome</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d1495b] focus:border-[#d1495b]"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
                    <input
                      type="text"
                      name="cpf"
                      value={formData.cpf}
                      onChange={handleInputChange}
                      placeholder="000.000.000-00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d1495b] focus:border-[#d1495b]"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Etapa 2: Endereço */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Endereço de entrega</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="00000-000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d1495b] focus:border-[#d1495b]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d1495b] focus:border-[#d1495b]"
                      required
                    >
                      <option value="">Selecione</option>
                      <option value="PE">Pernambuco</option>
                      <option value="SP">São Paulo</option>
                      <option value="RJ">Rio de Janeiro</option>
                      {/* Adicionar outros estados */}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rua</label>
                    <input
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d1495b] focus:border-[#d1495b]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Número</label>
                    <input
                      type="text"
                      name="number"
                      value={formData.number}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d1495b] focus:border-[#d1495b]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Complemento</label>
                    <input
                      type="text"
                      name="complement"
                      value={formData.complement}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d1495b] focus:border-[#d1495b]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bairro</label>
                    <input
                      type="text"
                      name="neighborhood"
                      value={formData.neighborhood}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d1495b] focus:border-[#d1495b]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d1495b] focus:border-[#d1495b]"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Etapa 3: Pagamento */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Forma de pagamento</h2>

                {/* Seleção do método */}
                <div className="mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex items-center p-4 border rounded-md cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="credit"
                        checked={formData.paymentMethod === "credit"}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-[#d1495b] focus:ring-[#d1495b]"
                      />
                      <CreditCard className="h-5 w-5 ml-3 mr-2 text-gray-600" />
                      <span className="font-medium">Cartão de crédito</span>
                    </label>
                    <label className="flex items-center p-4 border rounded-md cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="pix"
                        checked={formData.paymentMethod === "pix"}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-[#d1495b] focus:ring-[#d1495b]"
                      />
                      <div className="h-5 w-5 ml-3 mr-2 bg-[#d1495b] rounded text-white text-xs flex items-center justify-center font-bold">
                        P
                      </div>
                      <span className="font-medium">PIX</span>
                    </label>
                  </div>
                </div>

                {/* PIX */}
                {formData.paymentMethod === "pix" && (
                  <div className="bg-blue-50 p-4 rounded-md">
                    <h3 className="font-medium text-blue-800 mb-2">Pagamento via PIX</h3>
                    <p className="text-sm text-blue-700 mb-4">
                      Após finalizar o pedido, você receberá o código PIX para pagamento. O pedido será confirmado
                      automaticamente após a compensação.
                    </p>
                    <div>
                      <label className="block text-sm font-medium text-blue-700 mb-1">E-mail para receber o PIX</label>
                      <input
                        type="email"
                        name="pixEmail"
                        value={formData.pixEmail}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Etapa 4: Revisão */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Revisão do pedido</h2>

                <div className="space-y-6">
                  {/* Dados pessoais */}
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">Dados pessoais</h3>
                    <div className="bg-gray-50 p-3 rounded text-sm">
                      <p>
                        {formData.firstName} {formData.lastName}
                      </p>
                      <p>{formData.email}</p>
                      <p>{formData.phone}</p>
                    </div>
                  </div>

                  {/* Endereço */}
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">Endereço de entrega</h3>
                    <div className="bg-gray-50 p-3 rounded text-sm">
                      <p>
                        {formData.street}, {formData.number} {formData.complement}
                      </p>
                      <p>
                        {formData.neighborhood}, {formData.city} - {formData.state}
                      </p>
                      <p>CEP: {formData.zipCode}</p>
                    </div>
                  </div>

                  {/* Pagamento */}
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">Forma de pagamento</h3>
                    <div className="bg-gray-50 p-3 rounded text-sm">
                      {formData.paymentMethod === "credit" ? (
                        <div>
                          <p>Cartão de crédito</p>
                          <p>**** **** **** {formData.cardNumber.slice(-4)}</p>
                          <p>
                            {formData.installments}x de R${" "}
                            {(total / Number.parseInt(formData.installments)).toFixed(2).replace(".", ",")} sem juros
                          </p>
                        </div>
                      ) : (
                        <p>PIX - Pagamento à vista</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Termos */}
                <div className="mt-6 p-4 bg-yellow-50 rounded-md">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-[#d1495b] focus:ring-[#d1495b] mt-0.5 mr-3"
                      required
                    />
                    <span className="text-sm text-gray-700">
                      Eu concordo com os{" "}
                      <a href="#" className="text-[#d1495b] hover:underline">
                        Termos de Uso
                      </a>{" "}
                      e
                      <a href="#" className="text-[#d1495b] hover:underline">
                        {" "}
                        Política de Privacidade
                      </a>
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Botões de navegação */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  onClick={handlePrevStep}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Voltar
                </button>
              )}

              {currentStep < 4 ? (
                <button
                  onClick={handleNextStep}
                  className="px-6 py-3 bg-[#FF5258] text-white rounded-md hover:bg-[#d1495b] transition-colors ml-auto"
                >
                  Continuar
                </button>
              ) : (
                <button
                  onClick={handleSubmitOrder}
                  disabled={isProcessing}
                  className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 ml-auto"
                >
                  {isProcessing ? "Processando..." : "Finalizar pedido"}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Resumo do pedido */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Resumo do pedido</h3>

            {/* Produtos */}
            <div className="space-y-3 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden mr-3">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-800 line-clamp-1">{item.name}</h4>
                    <p className="text-xs text-gray-500">Qtd: {item.quantity}</p>
                  </div>
                  <span className="text-sm font-medium">
                    R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                  </span>
                </div>
              ))}
            </div>

            {/* Totais */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Desconto</span>
                <span className="text-green-600">- R$ {discount.toFixed(2).replace(".", ",")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Frete</span>
                <span>R$ {shippingCost.toFixed(2).replace(".", ",")}</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-[#d1495b]">R$ {total.toFixed(2).replace(".", ",")}</span>
                </div>
              </div>
            </div>

            {/* Segurança */}
            <div className="flex items-center text-sm text-gray-600">
              <Shield className="h-4 w-4 mr-2" />
              <span>Compra 100% segura</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;