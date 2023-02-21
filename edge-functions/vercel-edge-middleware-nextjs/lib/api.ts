import { type Flags, EDGE_FLAGS_HOST, EDGE_FLAGS_APP } from "./constants";
import { createClient } from "@flargd/web";

export type FlagValue = boolean | string | undefined;

export type FlagResponse = { enable: boolean };

export type FlagsMatcher = {
  [x: string]:
    | {
        name: Flags;
        rewrite(value: FlagValue): string;
      }
    | undefined;
};

/**
 * Retrieves the value of the feature flag.
 *
 * @param distinctUserId A unique identifier for the user
 * @param featureName The name of the feature flag
 * @returns If the feature flag is an A/B test, then the value may be true or undefined.
 *          If the feature flag is a multvariate, then the value will be a string
 */
export async function getFeatureFlagVariant(
  featureName: Flags,
  distinctUserId: string
): Promise<FlagValue> {
  if (!distinctUserId) {
    throw new Error(`distinctUserId is required and it can't be empty`);
  }

  console.log({ EDGE_FLAGS_HOST, EDGE_FLAGS_APP });

  const client = createClient({
    host: EDGE_FLAGS_HOST,
    app: EDGE_FLAGS_APP,
    distinctId: distinctUserId,
  });

  const flag = await client.get(featureName);

  console.log("Your flag data:", JSON.stringify(flag, null, 2));

  return flag.enable;
}

export async function getFeatureFlag(
  featureName: Flags
): Promise<FlagResponse> {
  const client = createClient({ host: EDGE_FLAGS_HOST });

  const flag = await client.get(featureName);

  console.log("Your flag data:", JSON.stringify(flag, null, 2));

  return flag;
}
