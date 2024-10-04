# Sweet Download page
This is the download page for sweet. It can be found at [sweet-org.github.io](https://sweet-org.github.io/).

# Building
Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more about Nuxt and for more build options.

The deploy workflow can be found at [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
Refer to the Nuxt [documentation](https://nuxt.com/deploy/github-pages) for more information about deploying to github pages.

## Setup
Install the dependencies:
```bash
npm install
```

## Development Server
Start the development server on `http://localhost:3000`:
```bash
npm run dev
```

## Production
This is designed for static hosting (e.g. Github Pages). Use this command to build all required files for page
```bash
nuxi generate
```

It will generate the `.output/public` folder, containing everything that is required to host the page.
To preview the build locally, run
```bash
npx serve .output/public
```
