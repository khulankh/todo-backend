import { gql } from "graphql-tag";

export const typeDefs = gql`
  type ListItem {
    _id: ID!
    title: String
    statusType: String
  }
  input ListItemInput {
    title: String
    statusType: String
  }
  type Query {
    getListQuery: [ListItem]
  }
  type Mutation {
    createList(item: ListItemInput): ListItem
    updateList(id: ID!, item: ListItemInput): ListItem
    deleteList(id: ID!): ListItem
  }
`;
