import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '7c9f39fbfc7259d181b7b7bfdfef0249327a26a5', queries });
export default client;
  