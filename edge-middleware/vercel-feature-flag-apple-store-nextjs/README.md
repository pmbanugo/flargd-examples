# Feature Flag Apple Store - Flargd

This template uses [Flargd's](https://github.com/pmbanugo/flargd) edge feature flag as a means to control whether the store is open or closed.

## Demo

[Add URL](#)

## How to Use

You can choose from one of the following two methods to use this repository:

### One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=flargd-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpmbanugo%2Fflargd-examples%2Ftree%2Fmain%2Fedge-middleware%2Fvercel-feature-flag-apple-store-nextjs&env=EDGE_FLAGS_HOST,EDGE_FLAGS_APP&envDescription=The%20URL%20to%20Flargd%20server&redirect-url=https%3A%2F%2Fgithub.com%2Fpmbanugo%2Fflargd)

### Clone and Deploy

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/vercel/examples/tree/main/edge-middleware/feature-flag-apple-store
# or
yarn create next-app --example https://github.com/vercel/examples/tree/main/edge-middleware/feature-flag-apple-store
```

#### Set up environment variables

Copy the `.env.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.example .env.local
```

This example requires you to set up a feature flag named `apple-store-closed` on Flargd. Create that flag and give it a percentage of your choice.

Next, run Next.js in development mode:

```bash
npm install
npm run dev

# or

yarn
yarn dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=flargd-edge-middleware-example).

## Opening / Closing the Store using the Dashboard

You can control whether the store is open or not by changing the configuration of the feature flag. You can make it available to users in a particular continent or country using Flargd's _Contidion_.
