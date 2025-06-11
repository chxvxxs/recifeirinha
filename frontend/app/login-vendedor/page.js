"use client";
import { useState } from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { Checkbox } from "@/components/checkbox";

export default function LoginVendedorPage() {
  // const router = useRouter(); // Removido: useRouter não está disponível neste ambiente.
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Manipula a mudança nos campos do formulário
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Lida com o envio do formulário de login
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página
    setLoading(true); // Ativa o estado de carregamento
    setError(""); // Limpa qualquer erro anterior

    try {
      // Faz a requisição POST para a API de login do vendedor
      // A URL foi corrigida para corresponder ao SellerController: /api/v1/sellers/login
      const res = await fetch("https://teste2-deploy-render.onrender.com/api/v1/sellers/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Indica que o corpo da requisição é JSON
        },
        body: JSON.stringify(formData), // Converte os dados do formulário para JSON
      });

      // Analisa a resposta JSON da API
      const data = await res.json();

      // Verifica se a resposta não foi bem-sucedida (status code diferente de 2xx)
      if (!res.ok) {
        // Trata erros específicos baseados no status da resposta
        if (res.status === 404) {
          setError("Vendedor não encontrado. Verifique seu e-mail."); // Mensagem para vendedor não encontrado
        } else if (res.status === 401) {
          setError("Senha incorreta. Tente novamente."); // Mensagem para senha incorreta
        } else {
          // Mensagem genérica para outros erros
          setError(data.message || "Erro ao fazer login. Tente novamente mais tarde.");
        }
        setLoading(false); // Desativa o estado de carregamento
        return; // Sai da função para não continuar com o fluxo de sucesso
      }

      // Se o login for bem-sucedido:
      // Salva o ID do vendedor no localStorage
      localStorage.setItem("sellerId", data.id);
      // Salva o objeto completo do vendedor no localStorage (convertido para string JSON)
      localStorage.setItem("seller", JSON.stringify(data));

      // Redireciona o usuário para a página de perfil do vendedor usando window.location para compatibilidade.
      window.location.href = "/perfil-vendedor";
    } catch (err) {
      // Captura e trata erros de conexão (ex: servidor offline, sem internet)
      setError("Erro de conexão. Verifique sua internet ou tente novamente mais tarde.");
      console.error("Erro na requisição de login:", err); // Loga o erro completo no console para depuração
    } finally {
      setLoading(false); // Garante que o estado de carregamento seja desativado, independente do resultado
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <img
                  src="/IconeCabSomb.svg" // Certifique-se de que este caminho está correto
                  alt="Recifeirinha"
                  className="h-12 mx-auto object-contain"
                />
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Área do Vendedor</h1>
                <p className="text-gray-600">Acesse sua conta para gerenciar suas vendas</p>
              </div>

              {/* Mensagem de erro condicional */}
              {error && (
                <div className="mb-6 p-3 bg-red-100 text-red-700 text-sm rounded-lg border border-red-200">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="mt-1 h-12 rounded-lg border-gray-300 focus:ring-[#FF5258] focus:border-[#FF5258]"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Senha
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    className="mt-1 h-12 rounded-lg border-gray-300 focus:ring-[#FF5258] focus:border-[#FF5258]"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" className="rounded border-gray-300 text-[#FF5258] focus:ring-[#FF5258]" />
                    <Label htmlFor="remember" className="text-sm text-gray-600">
                      Lembrar de mim
                    </Label>
                  </div>
                  {/* Link ajustado para usar <a> tag e window.location para compatibilidade */}
                  <a href="/recuperar-senha-vendedor" className="text-sm text-[#FF5258] hover:text-[#D1495B] font-medium transition-colors duration-200">
                    Esqueceu a senha?
                  </a>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-[#FF5258] hover:bg-[#D1495B] text-white text-lg font-semibold rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Entrando...
                    </div>
                  ) : (
                    "Acessar painel de vendas"
                  )}
                </Button>
              </form>

              <div className="my-8 flex items-center">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="px-4 text-sm text-gray-500">ou</span>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>

              <div className="space-y-3">
                <Button variant="outline" className="w-full h-12 border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center justify-center rounded-lg shadow-sm transition-colors duration-200">
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    {/* SVG do Google */}
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continuar com Google
                </Button>

                <Button variant="outline" className="w-full h-12 border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center justify-center rounded-lg shadow-sm transition-colors duration-200">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    {/* SVG do Facebook */}
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Continuar com Facebook
                </Button>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Não tem uma conta de vendedor?{" "}
                  {/* Link ajustado para usar <a> tag e window.location para compatibilidade */}
                  <a href="/cadastro-vendedor" className="text-[#FF5258] hover:text-[#D1495B] font-semibold transition-colors duration-200">
                    Criar conta de vendedor
                  </a>
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Quer fazer compras?{" "}
                  {/* Link ajustado para usar <a> tag e window.location para compatibilidade */}
                  <a href="/login" className="text-[#FF5258] hover:text-[#D1495B] transition-colors duration-200">
                    Login de cliente
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
