import "./globals.css"

export const metadata = {
  title: "Recifeirinha - Produtos Artesanais de Pernambuco",
  description: "Conectando artesãos pernambucanos ao mundo. Descubra produtos autênticos e tradicionais.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  )
}
