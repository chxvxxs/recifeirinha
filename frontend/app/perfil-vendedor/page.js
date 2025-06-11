'use client';

import { useState, useEffect } from "react";
import Header from "@/components/header-vendedor";
import Footer from "@/components/footer";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { useSellerStore } from "@/app/store/sellerStore";
import { useRouter } from "next/navigation";
import { User, Store, Package, LogOut, Eye, Edit, Trash2, } from "lucide-react";

export default function PerfilVendedorPage() {
  const [activeTab, setActiveTab] = useState("informacoes");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ seller, setSeller] = useState(useSellerStore());
  const [ sellerId, setSellerId ] = useState(null);
  const router = useRouter();
  const API_URL = "https://teste2-deploy-render.onrender.com/api/v1/";

  useEffect(() => {
    const sellerIdLocalStorage = localStorage.getItem("sellerId");
    setSellerId(sellerIdLocalStorage);

    if (!sellerIdLocalStorage) {
      setError("ID do vendedor não encontrado. Faça login novamente.");
      setLoading(false);
      router.push("/login-vendedor");
      return;
    }

    console.log(sellerIdLocalStorage)

    const fetchSellerData = async () => {
      try {
        const res = await fetch(`${API_URL}sellers/getId/${sellerIdLocalStorage}`);
        if (!res.ok) {
          if (res.status === 404) throw new Error("Vendedor não encontrado.");
          throw new Error("Erro ao buscar dados do vendedor.");
        }
        const data = await res.json();
        setSeller(data);

        // Simulação de produtos
        setProducts([
          { name: "Produto 1", category: "Artesanato", stock: 10, price: 49.9 },
          { name: "Produto 2", category: "Moda", stock: 5, price: 89.9 },
        ]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSellerData();
  }, []);

  const menuItems = [
    { id: "informacoes", label: "Informações do Negócio", icon: User },
    { id: "loja", label: "Minha Loja", icon: Store },
    { id: "produtos", label: "Meus Produtos", icon: Package },
  ];

  const handleLogout = () => {
    setSeller(null); // limpa Zustand
    router.push("/login-vendedor");
  };

  if (loading) return <div className="text-center py-16 text-lg text-gray-700">Carregando perfil...</div>;
  if (error) return <div className="text-center py-16 text-red-500 text-lg">Erro: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[#FF5258] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
                    {seller?.name?.charAt(0) || "M"}{seller?.name?.split(" ")[1]?.charAt(0) || ""}
                  </div>
                  <h3 className="font-semibold text-gray-900">{seller?.name}</h3>
                  <p className="text-sm text-gray-500">{seller?.email}</p>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mt-2">
                    Vendedor desde {new Date(seller?.createdAt || new Date()).getFullYear()}
                  </span>
                  <div className="mt-2">
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                      ⭐ 4.8 (127 avaliações)
                    </span>
                  </div>
                </div>
                <nav className="space-y-2">
                  {menuItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                          activeTab === item.id
                            ? "bg-red-50 text-[#FF5258] border-l-4 border-[#FF5258]"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="text-sm">{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center text-red-600 hover:text-red-700 hover:bg-red-50 p-2 rounded transition-colors duration-200"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sair da conta
                  </button>
                </div>
              </div>
            </div>

            {/* Conteúdo principal */}
            <div className="lg:col-span-3">
              {activeTab === "informacoes" && (
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Informações do Negócio</h2>
                    <Button variant="outline">Editar</Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label>Nome completo</Label>
                      <Input value={seller?.name || ""} readOnly className="mt-1" />
                    </div>
                    <div>
                      <Label>Nome da Loja</Label>
                      <Input value={seller?.storeName || ""} readOnly className="mt-1" />
                    </div>
                    <div>
                      <Label>E-mail</Label>
                      <Input value={seller?.email || ""} readOnly className="mt-1" />
                    </div>
                    <div>
                      <Label>Telefone</Label>
                      <Input value={seller?.phone || ""} readOnly className="mt-1" />
                    </div>
                    <div>
                      <Label>CNPJ</Label>
                      <Input value={seller?.cnpj || ""} readOnly className="mt-1" />
                    </div>
                    <div>
                      <Label>Categoria</Label>
                      <Input value={seller?.category || "Artesanato"} readOnly className="mt-1" />
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Segurança</h3>
                    <Button variant="outline">Alterar senha</Button>
                  </div>
                </div>
              )}

              {activeTab === "loja" && (
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Minha Loja</h2>
                    <Button className="bg-[#FF5258] hover:bg-[#D1495B]">Personalizar Loja</Button>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <h3 className="text-2xl font-bold text-blue-600">{products.length}</h3>
                      <p className="text-sm text-gray-600">Produtos Ativos</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <h3 className="text-2xl font-bold text-green-600">234</h3>
                      <p className="text-sm text-gray-600">Vendas Totais</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg text-center">
                      <h3 className="text-2xl font-bold text-yellow-600">4.8</h3>
                      <p className="text-sm text-gray-600">Avaliação Média</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <h3 className="text-2xl font-bold text-purple-600">1.2k</h3>
                      <p className="text-sm text-gray-600">Visualizações</p>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Endereço da Loja</h3>
                    <p className="text-gray-600">{seller?.address || "Rua do Artesanato, Recife - PE"}</p>
                    <Button variant="outline" size="sm" className="mt-3 text-gray-700">Editar Endereço</Button>
                  </div>
                </div>
              )}

              {activeTab === "produtos" && (
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Meus Produtos</h2>
                    <Button className="bg-[#FF5258] hover:bg-[#D1495B]">Adicionar Produto</Button>
                  </div>
                  <div className="space-y-4">
                    {products.length > 0 ? (
                      products.map((produto, idx) => (
                        <div key={idx} className="border rounded-lg p-4 flex items-center space-x-4 shadow-sm">
                          <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">
                            Sem Imagem
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{produto.name}</h3>
                            <p className="text-sm text-gray-500">Categoria: {produto.category} • Estoque: {produto.stock}</p>
                            <p className="font-bold text-[#FF5258] mt-1">R$ {produto.price.toFixed(2)}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm"><Eye className="w-4 h-4 mr-1" /> Ver</Button>
                            <Button variant="outline" size="sm"><Edit className="w-4 h-4 mr-1" /> Editar</Button>
                            <Button variant="outline" size="sm" className="text-red-600"><Trash2 className="w-4 h-4" /></Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-600 text-center py-4">Nenhum produto encontrado.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
