# dtone-nuxt

## Summary
This is a public repo for the technical assessment for DT One. This will allow reviewers to access the codebase and analyse the development methodology. The assessment was given on the 29 December 2022 and the deadline to be given on the 2 January 2022. (Roughly 4 days to complete)


The technical assessment is built on Nuxt.js (2.xx) and Ant Design. The reason of behind choosing Nuxt.js is mainly because nuxtjs has all the neccessary tools to deploy rapidly and efficiently to production. Nuxt.js (2.xx) also is currently in Vue 2.x as this is the current Vue version DT One is currently adopting. Ant Design (Vue) is chosen mainly because I wanted to try ANTD in Vue and it has all the UI components required for this assessment without focusing too much in building from scratch. I've used AntD previously on react.  



## Challenges along the way 
- Localhost:3000 couldn't access the API endpoint due to Cors policy error. Used a nuxt/proxy-module to create an API proxy for the API endpoint. 
- ANTD Grid layout didn't follow the conventional 12 grid. (they are using 24 grid instead).
- ANTD has very limited utility classes/components. For example, on MUI, they have spacing and margin classes to add granular spacing on UI based on a scale factor of 8. 
- ANTD more technical detail are in chinese. yikes.
- Needed to reset the muscle memory of writing in JSX(React). Had to refer to vue's documentation.
- Needed to refresh the development methodology of vue. It doesn't work like react.
- Missing information on API documentation. For example, on the API:/products, it didn't show that the result actually returns a RESPONSE HEADERS for the total number of pages, total number of counts etc. Initially, i thought it wasn't available on the response. Only found out when I was viewing the API:/countries


# Nuxt setup for development


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
