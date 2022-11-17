import { getAllCommandsQuery } from "graphql/queries";

export const getGlobalProps = async () => ({
  commands: (await getAllCommandsQuery()),
});

export type GlobalPropsType = Awaited<ReturnType<typeof getGlobalProps>>;
