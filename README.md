# Wavemaker Labs

Built on [Nuxt.js docs](https://nuxtjs.org/guide)

## Development Setup

```bash
# 1. Install dependencies
$ yarn install

# 2. Serve with hot reload at localhost:3000
$ yarn dev
```

## Continuous Deployment Setup on Netlify

The generation of the static website is triggered when a new merge happens on the master branch.

Netlify will run `yarn generate` on it's end to build the `dist` directory.

## Plugins Used

[Vue-Scrollto](https://www.npmjs.com/package/vue-scrollto)
