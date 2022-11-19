import { gql } from "graphql-request";
import { sdk } from "./sdk";

gql`
  query getAllCommands {
    commands(filter: {sub_commands_func: {count: {_gt: 0}}}) {
      id
      slug
      tab
      net
      cmd_order
    }
  }
`;

export const getAllCommandsQuery = async () => {
  return (await sdk.getAllCommands()).commands;
};

gql`
  query getOneCommand($slug: String!) {
    commands(limit: 1, filter: { slug: { _eq: $slug } }) {
      id
      title
      slug
      tab
      description
      net
      image
      sub_commands {
        id
        info
        sign
        item
      }
    }
  }
`;
export const getOneCommandQuery = async (slug: string) => {
  return (await sdk.getOneCommand({ slug })).commands[0];
};
