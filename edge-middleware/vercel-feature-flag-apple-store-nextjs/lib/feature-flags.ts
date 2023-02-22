import { createClient } from "@flargd/web";
import { EDGE_FLAGS_APP, EDGE_FLAGS_HOST } from "./constants";

export async function get(featureName: string) {
  const client = createClient({ host: EDGE_FLAGS_HOST, app: EDGE_FLAGS_APP });
  const flag = await client.get(featureName);

  return flag.enable;
}
