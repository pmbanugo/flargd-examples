import { type Flags, EDGE_FLAGS_HOST, EDGE_FLAGS_APP } from "./constants";

export type FlagValue = boolean | string | undefined;

export type FlagResponse = {
  identifier: number;
  evaluation: { enable: boolean };
};

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

  const url = `${EDGE_FLAGS_HOST}/apps/${EDGE_FLAGS_APP}/flags/${featureName}/evaluation/${distinctUserId}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(
      `Fetch request to retrieve the ${featureName} flag status failed with: (${res.status}) ${res.statusText}`
    );
  }

  const data = (await res.json()) as {
    identifier: number;
    evaluation: { enable: boolean };
  };

  console.log("Your flag data:", JSON.stringify(data, null, 2));

  return data.evaluation.enable;
}

export async function getFeatureFlag(
  featureName: Flags
): Promise<FlagResponse> {
  const url = `${EDGE_FLAGS_HOST}/apps/${EDGE_FLAGS_APP}/flags/${featureName}/evaluation`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(
      `Fetch request to retrieve the ${featureName} flag status failed with: (${res.status}) ${res.statusText}`
    );
  }

  const data = await res.json();

  console.log("Your flag data:", JSON.stringify(data, null, 2));

  return data;
}
