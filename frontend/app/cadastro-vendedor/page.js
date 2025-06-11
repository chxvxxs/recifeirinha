'use client';

import { useEffect, useState } from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { Checkbox } from "@/components/checkbox";
import { useSellerStore } from '@/app/store/sellerStore';
import { useRouter } from 'next/navigation';

export default function CadastroVendedorPage() {
  const API_URL = "https://teste2-deploy-render.onrender.com/api/v1/";
  const { setSeller } = useSellerStore();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: '',
    businessName: '',
    email: '',
    phone: '',
    cnpj: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const {
      firstName, businessName, email, phone, cnpj,
      password, confirmPassword, termsAccepted, commissionAccepted
    } = formData;

    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem.');
      return;
    }

    if (!termsAccepted || !commissionAccepted) {
      setErrorMessage('Você deve aceitar os Termos de Uso e as Comissões.');
      return;
    }

    const sellerData = {
      name: firstName,
      storeName: businessName,
      email,
      phone,
      cnpj,
      password,
    };

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}sellers/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sellerData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 409) {
          setErrorMessage("E-mail ou CNPJ já cadastrado.");
        } else {
          setErrorMessage(data.message || "Erro ao criar conta.");
        }
        return;
      }

      setSeller(data);
      alert("Cadastro realizado com sucesso!");
      router.push('/perfil-vendedor');

    } catch (err) {
      console.error(err);
      setErrorMessage("Erro de conexão. Verifique sua internet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <img src="/IconeCabSomb.svg" alt="Recifeirinha" className="h-12 mx-auto object-contain" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Cadastro de Vendedor</h1>
              <p className="text-gray-600">Comece a vender na Recifeirinha</p>
            </div>

            {errorMessage && (
              <div className="mb-6 p-3 bg-red-100 text-red-700 text-sm rounded-lg border border-red-200">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="firstName">Nome Completo</Label>
                <Input id="firstName" name="firstName" type="text" required onChange={handleChange} />
              </div>

              <div>
                <Label htmlFor="businessName">Nome da Loja/Empresa</Label>
                <Input id="businessName" name="businessName" type="text" required onChange={handleChange} />
              </div>

              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" name="email" type="email" required onChange={handleChange} />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" name="phone" type="tel" required onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="cnpj">CNPJ</Label>
                  <Input id="cnpj" name="cnpj" type="text" required onChange={handleChange} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="password">Senha</Label>
                  <Input id="password" name="password" type="password" required onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirmar senha</Label>
                  <Input id="confirmPassword" name="confirmPassword" type="password" required onChange={handleChange} />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox id="termsAccepted" name="termsAccepted" onChange={handleChange} />
                  <Label htmlFor="termsAccepted">
                    Eu aceito os <a href="#" className="text-[#FF5258]">Termos</a> e a <a href="#" className="text-[#FF5258]">Política de Privacidade</a>
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox id="commissionAccepted" name="commissionAccepted" onChange={handleChange} />
                  <Label htmlFor="commissionAccepted">Estou ciente das taxas</Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox id="newsletter" name="newsletter" onChange={handleChange} />
                  <Label htmlFor="newsletter">Quero receber dicas por e-mail</Label>
                </div>
              </div>

              <Button type="submit" className="w-full h-12 bg-[#FF5258] text-white">
                {loading ? "Criando conta..." : "Criar conta de vendedor"}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Já tem uma conta? <a href="/login-vendedor" className="text-[#FF5258] font-semibold">Fazer login</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
