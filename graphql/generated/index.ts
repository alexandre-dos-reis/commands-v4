import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  GraphQLStringOrFloat: any;
  JSON: any;
};

export type Query = {
  __typename?: 'Query';
  command_items: Array<Command_Items>;
  command_items_aggregated: Array<Command_Items_Aggregated>;
  command_items_by_id?: Maybe<Command_Items>;
  commands: Array<Commands>;
  commands_aggregated: Array<Commands_Aggregated>;
  commands_by_id?: Maybe<Commands>;
};


export type QueryCommand_ItemsArgs = {
  filter?: InputMaybe<Command_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCommand_Items_AggregatedArgs = {
  filter?: InputMaybe<Command_Items_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCommand_Items_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryCommandsArgs = {
  filter?: InputMaybe<Commands_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCommands_AggregatedArgs = {
  filter?: InputMaybe<Commands_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCommands_By_IdArgs = {
  id: Scalars['ID'];
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Command_Items = {
  __typename?: 'command_items';
  id: Scalars['ID'];
  info: Scalars['String'];
  item: Scalars['String'];
  parent_cmd?: Maybe<Commands>;
  sign?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
};


export type Command_ItemsParent_CmdArgs = {
  filter?: InputMaybe<Commands_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Command_Items_Aggregated = {
  __typename?: 'command_items_aggregated';
  avg?: Maybe<Command_Items_Aggregated_Fields>;
  avgDistinct?: Maybe<Command_Items_Aggregated_Fields>;
  count?: Maybe<Command_Items_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Command_Items_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Command_Items_Aggregated_Fields>;
  min?: Maybe<Command_Items_Aggregated_Fields>;
  sum?: Maybe<Command_Items_Aggregated_Fields>;
  sumDistinct?: Maybe<Command_Items_Aggregated_Fields>;
};

export type Command_Items_Aggregated_Count = {
  __typename?: 'command_items_aggregated_count';
  id?: Maybe<Scalars['Int']>;
  info?: Maybe<Scalars['Int']>;
  item?: Maybe<Scalars['Int']>;
  parent_cmd?: Maybe<Scalars['Int']>;
  sign?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
};

export type Command_Items_Aggregated_Fields = {
  __typename?: 'command_items_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  parent_cmd?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Command_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Command_Items_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Command_Items_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  info?: InputMaybe<String_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  parent_cmd?: InputMaybe<Commands_Filter>;
  sign?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Commands = {
  __typename?: 'commands';
  cmd_order?: Maybe<Scalars['Int']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  net?: Maybe<Scalars['Boolean']>;
  slug: Scalars['String'];
  sub_commands?: Maybe<Array<Maybe<Command_Items>>>;
  sub_commands_func?: Maybe<Count_Functions>;
  tab: Scalars['String'];
  title: Scalars['String'];
};


export type CommandsSub_CommandsArgs = {
  filter?: InputMaybe<Command_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Commands_Aggregated = {
  __typename?: 'commands_aggregated';
  avg?: Maybe<Commands_Aggregated_Fields>;
  avgDistinct?: Maybe<Commands_Aggregated_Fields>;
  count?: Maybe<Commands_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Commands_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Commands_Aggregated_Fields>;
  min?: Maybe<Commands_Aggregated_Fields>;
  sum?: Maybe<Commands_Aggregated_Fields>;
  sumDistinct?: Maybe<Commands_Aggregated_Fields>;
};

export type Commands_Aggregated_Count = {
  __typename?: 'commands_aggregated_count';
  cmd_order?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['Int']>;
  net?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  sub_commands?: Maybe<Scalars['Int']>;
  tab?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
};

export type Commands_Aggregated_Fields = {
  __typename?: 'commands_aggregated_fields';
  cmd_order?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Commands_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Commands_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Commands_Filter>>>;
  cmd_order?: InputMaybe<Number_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<String_Filter_Operators>;
  net?: InputMaybe<Boolean_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sub_commands?: InputMaybe<Command_Items_Filter>;
  sub_commands_func?: InputMaybe<Count_Function_Filter_Operators>;
  tab?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _icontains?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['String']>;
};

export type GetAllCommandsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCommandsQuery = { __typename?: 'Query', commands: Array<{ __typename?: 'commands', id: string, slug: string, tab: string, net?: boolean | null, cmd_order?: number | null }> };

export type GetOneCommandQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetOneCommandQuery = { __typename?: 'Query', commands: Array<{ __typename?: 'commands', id: string, title: string, slug: string, tab: string, description: string, net?: boolean | null, image?: string | null, sub_commands?: Array<{ __typename?: 'command_items', id: string, info: string, sign?: string | null, item: string } | null> | null }> };


export const GetAllCommandsDocument = gql`
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
export const GetOneCommandDocument = gql`
    query getOneCommand($slug: String!) {
  commands(limit: 1, filter: {slug: {_eq: $slug}}) {
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getAllCommands(variables?: GetAllCommandsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllCommandsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllCommandsQuery>(GetAllCommandsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllCommands', 'query');
    },
    getOneCommand(variables: GetOneCommandQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetOneCommandQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOneCommandQuery>(GetOneCommandDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getOneCommand', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;