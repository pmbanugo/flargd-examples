---
marketplace: false
---

# A/B Testing with Flargd

[Flargd](https://github.com/pmbanugo/flargd) is an open-source feature flag tool that runs on the edge. This example show how to do A/B testing at the edge with Vercel Edge Middleware and Flargd.

## Demo

https://edge-functions-feature-flag-posthog.vercel.sh

### One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpmbanugo%2Fflargd-examples%2Ftree%2Fmain%2Fedge-functions%2Fvercel-edge-middleware-nextjs&env=EDGE_FLAGS_HOST,EDGE_FLAGS_APP&envDescription=URL%20to%20your%20self-hosted%20Flargd%20instance&envLink=https%3A%2F%2Fgithub.com%2Fpmbanugo%2Fflargd)

## Getting Started

You'll need to have an instance of Flargd running. See the [hosting instructions](https://github.com/pmbanugo/flargd#hosting) to set one up, or use this public demo domain - `https://flargd.pmbanugo.workers.dev`.

Once that's done, copy the `.env.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.example .env.local
```

Then open `.env.local` and update `EDGE_FLAGS_HOST` to match the host name for your _Flargd_ service. Fro example, if you're using the public demo domain, it'll be `https://flargd.pmbanugo.workers.dev`. You can optionally update the `EDGE_FLAGS_APP` variable. If you're usingthe public domain, I suggest you use a generic name for _EDGE_FLAGS_APP_ so that it doesn't conflict with other users.

Next, run Next.js in development mode:

```bash
npm install
npm run dev

# or

yarn
yarn dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=edge-middleware-eap) ([Documentation](https://nextjs.org/docs/deployment)).
