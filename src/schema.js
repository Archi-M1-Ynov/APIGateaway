import { gql } from "apollo-server";
import productAPI from "./services/productAPI.js";
import cartAPI from "./services/cartAPI.js";
import searchAPI from "./services/searchAPI.js";
import newsletterAPI from "./services/newsletterAPI.js";

// Schema GraphQL pour l'API Gateway
const typeDefs = gql`
  type Product {
    _id: ID
    name: String
    description: String
    price: Float
    category: String
    imageUrl: String
  }
  type CartItem {
    productId: String
    quantity: Int
  }  

  type Mutation {
    addToCart(userId: String!, productId: String!, quantity: Int!): String
    removeFromCart(userId: String!, productId: String!): String
    subscribe(email: String!): String
  }


  type Query {
    products: [Product]
    searchProducts(query: String!): [Product]
    cart(userId: String!): [CartItem]
  }
`;

const resolvers = {
  Query: {
    products: async () => await productAPI.getAllProducts(),
    searchProducts: async (_, { query }) => await productAPI.search(query),
    cart: async (_, { userId }) => await cartAPI.getCart(userId),
    searchProducts: async (_, { query }) =>
      await searchAPI.search(query),
    
  },
  Mutation: {
    addToCart: async (_, { userId, productId, quantity }) =>
      await cartAPI.addToCart(userId, productId, quantity),
      
    removeFromCart: async (_, { userId, productId }) =>
      await cartAPI.removeFromCart(userId, productId),

    subscribe: async (_, { email }) => newsletterAPI.subscribe(email),
  },
};


export { typeDefs, resolvers };
