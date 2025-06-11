

```markdown
# Recifeirinha - O E-commerce 

## Índice

1.  [Visão Geral do Projeto](#1-visão-geral-do-projeto)
2.  [Arquitetura e Stack de Tecnologia](#2-arquitetura-e-stack-de-tecnologia)
3.  [Funcionalidades Principais](#3-funcionalidades-principais)
4.  [Estrutura de Diretórios](#4-estrutura-de-diretórios)
5.  [Pré-requisitos](#5-pré-requisitos)
6.  [Guia de Instalação e Execução](#6-guia-de-instalação-e-execução)
7.  [Configuração de Ambiente](#7-configuração-de-ambiente)
8.  [Documentação da API](#8-documentação-da-api)
9.  [Como Contribuir](#9-como-contribuir)

---

### 1. Visão Geral do Projeto

O "Recifeirinha" é uma plataforma de e-commerce projetada para ser um ecossistema digital para micro, pequenos e médios comerciantes da cidade do Recife. O projeto visa democratizar o acesso ao mercado online, fortalecer a economia local e valorizar a cultura regional, tudo em alinhamento com os **Objetivos de Desenvolvimento Sustentável (ODS) 8 e 11**.

A solução adota uma arquitetura desacoplada, com um frontend moderno e reativo que consome uma API RESTful robusta e segura, garantindo escalabilidade e manutenibilidade.

### 2. Arquitetura e Stack de Tecnologia

A aplicação é dividida em dois componentes principais: um frontend responsável pela experiência do usuário e um backend que gerencia toda a lógica de negócio e dados.

#### **Backend (API)**

-   **Framework:** [**Spring Boot**](https://spring.io/projects/spring-boot) (Java) - Utilizado para construir uma API RESTful robusta, segura e performática.
-   **Acesso a Dados:** [**Spring Data JPA**](https://spring.io/projects/spring-data-jpa) (com Hibernate) - Para persistência de dados de forma simplificada e eficiente.
-   **Banco de Dados:** [**PostgreSQL**](https://www.postgresql.org/) - Sistema de gerenciamento de banco de dados relacional.
-   **Build Tool:** [**Maven**](https://maven.apache.org/) - Gerenciador de dependências e automação de build do projeto.
-   **Validações:** Bean Validation (JSR 380) para validar os dados de entrada na camada de controller.

#### **Frontend (Cliente Web)**

-   **Framework:** [**Next.js**](https://nextjs.org/) (React) - Para a construção de interfaces de usuário rápidas, com Server-Side Rendering (SSR) e Static Site Generation (SSG).
-   **Linguagem:** [**TypeScript**](https://www.typescriptlang.org/) - Para adicionar tipagem estática e robustez ao código JavaScript.
-   **Estilização:** [**Tailwind CSS**](https://tailwindcss.com/) - Framework CSS utility-first para um desenvolvimento de UI ágil e customizável.
-   **Requisições HTTP:** [**Axios**](https://axios-http.com/) - Cliente HTTP para comunicação com a API do Spring Boot.
-   **Gerenciamento de Estado:** [**Zustand**](https://zustand-demo.pmnd.rs/) / [**Context API**](https://react.dev/reference/react/useContext) - Para gerenciamento de estado global da aplicação de forma leve e eficiente.

### 3. Funcionalidades Principais

-   **Autenticação Segura:** Cadastro e Login com perfis distintos (Consumidor, Comerciante, Admin), gerenciado pelo backend Spring Boot com JWT.
-   **Dashboard do Comerciante:** Uma área exclusiva para comerciantes gerenciarem sua loja, produtos, estoque e acompanharem seus pedidos e métricas de vendas.
-   **Catálogo de Produtos:** Navegação, busca e filtros por produtos e lojas, com páginas de detalhes ricas em informações.
-   **Carrinho e Checkout:** Fluxo de compra completo, desde a adição de produtos ao carrinho até a finalização do pedido.
-   **Gestão Administrativa:** Painel para administradores aprovarem novas lojas, gerenciarem usuários e supervisionarem a plataforma.

### 4. Estrutura de Diretórios

O projeto está organizado em um monorepo com duas pastas principais, uma para o backend e outra para o frontend, promovendo uma clara separação de responsabilidades.

```

recifeirinha/
├── backend/                  \# Aplicação Backend (Spring Boot)
│   ├── src/main/java/com/recifeirinha/
│   │   ├── config/             \# Configurações (Security, CORS)
│   │   ├── controller/         \# Camada de API (Endpoints REST)
│   │   ├── dto/                \# Data Transfer Objects
│   │   ├── model/              \# Entidades JPA
│   │   ├── repository/         \# Interfaces do Spring Data JPA
│   │   └── service/            \# Lógica de negócio
│   ├── src/main/resources/
│   │   └── application.properties \# Configurações da aplicação
│   └── pom.xml                 \# Dependências e build do Maven
│
├── frontend/                 \# Aplicação Frontend (Next.js)
│   ├── src/
│   │   ├── app/                \# Estrutura do App Router
│   │   ├── components/         \# Componentes React reutilizáveis
│   │   ├── lib/                \# Funções utilitárias, hooks
│   │   └── services/           \# Configuração do Axios e chamadas de API
│   ├── .env.local.example      \# Exemplo de variáveis de ambiente
│   └── package.json            \# Dependências do Node.js
│
└── README.md

````

### 5. Pré-requisitos

Certifique-se de que possui as ferramentas necessárias instaladas:

-   **Para o Backend:**
    -   [**JDK (Java Development Kit)**](https://www.oracle.com/java/technologies/downloads/) - Versão 17 ou superior.
    -   [**Apache Maven**](https://maven.apache.org/download.cgi) - Versão 3.8 ou superior.
-   **Para o Frontend:**
    -   [**Node.js**](https://nodejs.org/en/) - Versão 18 ou superior.
    -   [**pnpm**](https://pnpm.io/installation) (recomendado), `npm` ou `yarn`.
-   **Geral:**
    -   [**Docker**](https://www.docker.com/get-started) - Para executar o banco de dados PostgreSQL.

### 6. Guia de Instalação e Execução

Siga os passos abaixo para executar a aplicação completa localmente. **Execute o backend e o frontend em terminais separados.**

#### **Passo 1: Iniciar o Banco de Dados**

```bash
# Na raiz do projeto
docker-compose up -d
````

#### **Passo 2: Executar o Backend (Spring Boot)**

```bash
# Navegue até a pasta do backend
cd backend

# (Opcional) Limpe e instale as dependências com Maven
./mvnw clean install

# Inicie a aplicação Spring Boot
./mvnw spring-boot:run
```

O servidor backend estará rodando em `http://localhost:8080`.

#### **Passo 3: Executar o Frontend (Next.js)**

```bash
# Em um NOVO terminal, navegue até a pasta do frontend
cd frontend

# Instale as dependências
pnpm install

# Copie o arquivo de exemplo para as variáveis de ambiente
cp .env.local.example .env.local

# Inicie o servidor de desenvolvimento do Next.js
pnpm dev
```

A aplicação frontend estará acessível em `http://localhost:3000`.

### 7\. Configuração de Ambiente

  - **Backend:** As configurações do banco de dados (URL, usuário, senha) estão no arquivo `backend/src/main/resources/application.properties`. Ajuste-as se não estiver usando o Docker Compose padrão.
  - **Frontend:** Crie um arquivo `.env.local` na pasta `frontend` e defina a URL da API para que o cliente saiba onde encontrar o backend:
    ```
    NEXT_PUBLIC_API_URL=http://localhost:8080
    ```

### 8\. Documentação da API

A API do Spring Boot segue o padrão RESTful. Para facilitar o desenvolvimento e os testes, a documentação dos endpoints está disponível via Swagger/OpenAPI.

Após iniciar o backend, acesse a documentação interativa no seu navegador:

  - **Swagger UI:** [http://localhost:8080/swagger-ui.html](https://www.google.com/search?q=http://localhost:8080/swagger-ui.html)

### 9\. Como Contribuir

Sua contribuição é fundamental para o sucesso do Recifeirinha\!

1.  **Faça um Fork** deste repositório.
2.  Crie uma nova branch para sua feature: `git checkout -b feature/sua-feature`.
3.  Desenvolva sua contribuição em sua branch.
4.  Faça o commit de suas alterações: `git commit -m 'feat: Descreve sua nova feature'`.
5.  Envie para o seu repositório: `git push origin feature/sua-feature`.
6.  Abra um **Pull Request** para o repositório original.

<!-- end list -->

```
```
