"use client"

import { useState } from "react"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { Textarea } from "@/components/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/radio-group"
import { X, Upload, Plus } from 'lucide-react'

export default function CriarProdutoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nome: '',
    categoria: '',
    preco: '',
    descricao: '',
    estoque: '',
    peso: '',
    dimensoes: {
      altura: '',
      largura: '',
      profundidade: ''
    },
    tags: [],
    disponivel: 'sim'
  })

  const [newTag, setNewTag] = useState('')
  const [images, setImages] = useState([])

  // Categorias disponíveis
  const categorias = [
    'Artesanato',
    'Alimentação',
    'Roupas e Acessórios',
    'Decoração',
    'Beleza e Cuidados',
    'Casa e Jardim',
    'Outros'
  ]

  // Função para adicionar tag
  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, newTag.trim()]
      })
      setNewTag('')
    }
  }

  // Função para remover tag
  const removeTag = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    })
  }

  // Função para simular upload de imagem
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    files.forEach(file => {
      if (images.length < 5) { // Máximo 5 imagens
        setImages(prev => [...prev, {
          id: Date.now() + Math.random(),
          name: file.name,
          url: URL.createObjectURL(file)
        }])
      }
    })
  }

  // Função para remover imagem
  const removeImage = (imageId) => {
    setImages(images.filter(img => img.id !== imageId))
  }

  // Função para salvar produto
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Dados do produto:', formData)
    console.log('Imagens:', images)
    // Aqui você implementaria a lógica para salvar o produto
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        
        {/* Header do Modal */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Criar Novo Produto</h2>
          <Button
            type="button"
            onClick={onClose}
            className="p-2 bg-transparent hover:bg-gray-100 text-gray-600 rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          
          {/* Informações Básicas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Informações Básicas</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nome">Nome do Produto *</Label>
                <Input
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  placeholder="Ex: Vaso de Barro Decorativo"
                  className="mt-1 h-12"
                  required
                />
              </div>

              <div>
                <Label htmlFor="categoria">Categoria *</Label>
                <select
                  id="categoria"
                  value={formData.categoria}
                  onChange={(e) => setFormData({...formData, categoria: e.target.value})}
                  className="mt-1 w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5258] focus:border-transparent"
                  required
                >
                  <option value="">Selecione uma categoria</option>
                  {categorias.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="descricao">Descrição do Produto *</Label>
              <Textarea
                id="descricao"
                value={formData.descricao}
                onChange={(e) => setFormData({...formData, descricao: e.target.value})}
                placeholder="Descreva seu produto, materiais utilizados, processo de fabricação..."
                className="mt-1 min-h-[100px]"
                required
              />
            </div>
          </div>

          {/* Preço e Estoque */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Preço e Estoque</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="preco">Preço (R$) *</Label>
                <Input
                  id="preco"
                  type="number"
                  step="0.01"
                  value={formData.preco}
                  onChange={(e) => setFormData({...formData, preco: e.target.value})}
                  placeholder="0,00"
                  className="mt-1 h-12"
                  required
                />
              </div>

              <div>
                <Label htmlFor="estoque">Quantidade em Estoque *</Label>
                <Input
                  id="estoque"
                  type="number"
                  value={formData.estoque}
                  onChange={(e) => setFormData({...formData, estoque: e.target.value})}
                  placeholder="0"
                  className="mt-1 h-12"
                  required
                />
              </div>
            </div>
          </div>

          {/* Dimensões e Peso */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Dimensões e Peso</h3>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="altura">Altura (cm)</Label>
                <Input
                  id="altura"
                  type="number"
                  value={formData.dimensoes.altura}
                  onChange={(e) => setFormData({
                    ...formData, 
                    dimensoes: {...formData.dimensoes, altura: e.target.value}
                  })}
                  placeholder="0"
                  className="mt-1 h-12"
                />
              </div>

              <div>
                <Label htmlFor="largura">Largura (cm)</Label>
                <Input
                  id="largura"
                  type="number"
                  value={formData.dimensoes.largura}
                  onChange={(e) => setFormData({
                    ...formData, 
                    dimensoes: {...formData.dimensoes, largura: e.target.value}
                  })}
                  placeholder="0"
                  className="mt-1 h-12"
                />
              </div>

              <div>
                <Label htmlFor="profundidade">Profundidade (cm)</Label>
                <Input
                  id="profundidade"
                  type="number"
                  value={formData.dimensoes.profundidade}
                  onChange={(e) => setFormData({
                    ...formData, 
                    dimensoes: {...formData.dimensoes, profundidade: e.target.value}
                  })}
                  placeholder="0"
                  className="mt-1 h-12"
                />
              </div>

              <div>
                <Label htmlFor="peso">Peso (g)</Label>
                <Input
                  id="peso"
                  type="number"
                  value={formData.peso}
                  onChange={(e) => setFormData({...formData, peso: e.target.value})}
                  placeholder="0"
                  className="mt-1 h-12"
                />
              </div>
            </div>
          </div>

          {/* Upload de Imagens */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Imagens do Produto</h3>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Clique para adicionar imagens ou arraste aqui</p>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="imageUpload"
              />
              <Button
                type="button"
                onClick={() => document.getElementById('imageUpload').click()}
                className="bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Selecionar Imagens
              </Button>
              <p className="text-sm text-gray-500 mt-2">Máximo 5 imagens • JPG, PNG até 5MB cada</p>
            </div>

            {/* Preview das Imagens */}
            {images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {images.map((image) => (
                  <div key={image.id} className="relative">
                    <img
                      src={image.url || "/placeholder.svg"}
                      alt={image.name}
                      className="w-full h-24 object-cover rounded-lg border"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(image.id)}
                      className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Tags</h3>
            
            <div className="flex space-x-2">
              <Input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Ex: feito à mão, tradicional, decorativo"
                className="flex-1 h-12"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              />
              <Button 
                type="button" 
                onClick={addTag} 
                className="bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 h-12 px-4"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {/* Tags Adicionadas */}
            {formData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center space-x-1"
                  >
                    <span>{tag}</span>
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Disponibilidade */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Disponibilidade</h3>
            
            <RadioGroup
              value={formData.disponivel}
              onValueChange={(value) => setFormData({...formData, disponivel: value})}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sim" id="disponivel-sim" />
                <Label htmlFor="disponivel-sim">Produto disponível para venda</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nao" id="disponivel-nao" />
                <Label htmlFor="disponivel-nao">Salvar como rascunho (não visível para clientes)</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Botões de Ação */}
          <div className="flex justify-end space-x-4 pt-6 border-t">
            <Button
              type="button"
              onClick={onClose}
              className="bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-[#FF5258] hover:bg-[#D1495B] text-white"
            >
              Criar Produto
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

