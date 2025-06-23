# APIGateaway

# 🛡️ Gateway GraphQL – Architecture eShop

Cette API Gateway centralise tous les microservices de l’application e-commerce. Elle expose une interface unique en GraphQL pour les opérations sur les produits, le panier, la recherche, et l'inscription newsletter.

---

## 🚀 Microservices connectés

| Service         | Port   | Description                                         |
|-----------------|--------|-----------------------------------------------------|
| Product Service | `4001` | CRUD produits, recherche, détails                   |
| Cart Service    | `4002` | Gestion du panier utilisateur via Redis            |
| Search Service  | `4003` | Recherche produits avec cache (ou sans)            |
| Newsletter      | `4004` | Inscription d’un email à la newsletter (PostgreSQL) |

---

## 🔧 Lancer la Gateway

```bash
bun install
bun run dev



.env à configurer

PRODUCT_SERVICE_URL=http://localhost:4001/products/search
CART_SERVICE_URL=http://localhost:4002/cart
SEARCH_SERVICE_URL=http://localhost:4003/search
NEWSLETTER_SERVICE_URL=http://localhost:4004/subscribe



🔍 Rechercher un produit
graphql
Copier
Modifier
query {
  searchProducts(query: "Nutella") {
    _id
    name
    description
    price
  }
}


🛒 Ajouter au panier
graphql
Copier
Modifier
mutation {
  addToCart(userId: "user123", productId: "685914173e5be960feabad6b", quantity: 2)
}


📩 Inscription newsletter
graphql
Copier
Modifier
mutation {
  subscribe(email: "client@exemple.com")
}


🧱 Stack technique
Bun

Apollo Server

GraphQL

Axios


