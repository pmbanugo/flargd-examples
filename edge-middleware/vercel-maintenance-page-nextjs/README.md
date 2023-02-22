# maintenance-page example

This example shows how to implement a maintenance page on the edge

## Demo

https://flargd-maintenance-page-nextjs.vercel.app/

## How to Use

You can choose from one of the following two methods to use this repository:

### One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=flargd-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpmbanugo%2Fflargd-examples%2Ftree%2Fmain%2Fedge-middleware%2Fvercel-maintenance-page-nextjs&env=EDGE_FLAGS_HOST,EDGE_FLAGS_APP&envDescription=The%20URL%20to%20Flargd%20server&redirect-url=https%3A%2F%2Fgithub.com%2Fpmbanugo%2Fflargd)

### Clone and Deploy

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/vercel/examples/tree/main/edge-middleware/maintenance-page
# or
yarn create next-app --example https://github.com/vercel/examples/tree/main/edge-middleware/maintenance-page
```

#### Set up environment variables

Copy the `.env.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.example .env.local
```

This example requires you to set up a feature flag named `maintenance-mode` on Flargd. Create that flag and give it a percentage of your choice.

Next, run Next.js in development mode:

```bash
npm install
npm run dev

# or

yarn
yarn dev
```
