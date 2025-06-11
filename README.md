# Recifeirinha 🛍️🌿

O **Recifeirinha** é uma plataforma de e-commerce inclusiva e sustentável voltada para **micro e pequenos comerciantes** da cidade do Recife. O projeto promove o comércio local, incentiva o empreendedorismo e valoriza a cultura regional. Tudo isso alinhado aos **ODS 8 (Trabalho Decente e Crescimento Econômico)** e **ODS 11 (Cidades e Comunidades Sustentáveis)** 🌍

---

## 🌐 Visão Geral

O sistema permite a criação de contas de **clientes** e **vendedores**, garantindo rotas de acesso protegidas para cada tipo de usuário. Os vendedores podem cadastrar seus produtos, enquanto os clientes podem navegar, favoritar e comprar.

---

## 🚀 Tecnologias Utilizadas

### 🖙 Backend — Spring Boot

* **Linguagem:** Java 17+
* **Framework:** Spring Boot (REST API)
* **Banco de Dados:** PostgreSQL (via Docker) 
* **JPA:** Spring Data JPA (Hibernate)
* **Validações:** Bean Validation (JSR 380)
* **Documentação:** Swagger/OpenAPI
* **Build Tool:** Maven

> A API é responsável por autenticação, autorização, lógica de negócios, e persistência dos dados.

### 🌐 Frontend — Next.js + Tailwind

* **Framework:** Next.js (App Router)
* **Linguagem:** JavaScript
* **Estilização:** Tailwind CSS
* **Gerenciamento de Estado:** Zustand + Context API
* **Componentização:** Componentes React reutilizáveis

> A interface web é acessível, responsiva, intuitiva e pensada para ser inclusiva. O layout é construído com foco em acessibilidade e usabilidade.

---

## 🧹 Estrutura do Projeto (Monorepo)

```
recifeirinha/
├── backend/                  # API Spring Boot
│   ├── src/main/java/com/recifeirinha/
│   │   ├── config/             # Configurações (JWT, CORS etc.)
│   │   ├── controller/         # Endpoints REST
│   │   ├── dto/                # Data Transfer Objects
│   │   ├── model/              # Entidades JPA
│   │   ├── repository/         # Interfaces do JPA
│   │   └── service/            # Regras de negócio
│   ├── src/main/resources/
│   │   └── application.properties # Configs do Spring
│   └── pom.xml                 # Build do Maven
│
├── frontend/                 # Next.js + Tailwind
│   ├── src/
│   │   ├── app/                # App Router Pages
│   │   ├── components/         # Componentes React reutilizáveis
│   │   ├── lib/                # Funções utilitárias e hooks
│   │   └── services/           # Axios e chamadas à API
│   ├── .env.local.example      # Exemplo de env
│   └── package.json            # Dependências do Node.js
└── README.md
```

---

## 🛠️ Funcionalidades em Destaque

* 👤 **Autenticação**: Login com perfis distintos: Cliente e Comerciante.
* 🛒 **Catálogo de Produtos**: Lista de itens por loja, com busca e filtros dinâmicos.
* 🧾 **Carrinho & Checkout**: Compra simplificada com controle de estoque.
* 🔒 **Rotas Protegidas**: Acesso controlado por perfil de usuário, tanto no frontend quanto no backend.

---

## 🧪 Como Rodar Localmente

### 1️⃣ Suba o Banco de Dados com Docker

```bash
docker-compose up -d
```

---

### 2️⃣ Inicie o Backend (Spring Boot)

```bash
cd backend
./mvnw clean install
./mvnw spring-boot:run
```

> A API estará disponível em: [http://localhost:8080](http://localhost:8080)

---

### 3️⃣ Inicie o Frontend (Next.js)

```bash
cd frontend
npm install --legacy-peer-deps
npm run dev
```

> A interface estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Configuração de Ambiente

* 🔧 **Backend**: `application.properties` contém a URL, usuário e senha do banco PostgreSQL.

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

---

## 📁 Documentação da API

A documentação Swagger estará disponível após subir o backend
