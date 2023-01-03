# dtone-nuxt

## Summary
This is a public repo for the technical assessment for DT One. This will allow reviewers to access the codebase and analyse the development methodology. The assessment was given on the 29 December 2022 and the deadline to be given on the 2 January 2022. (Roughly 4 days to complete)


The technical assessment is built on Nuxt.js (2.xx) and Ant Design. The reason of behind choosing Nuxt.js is mainly because nuxtjs has all the neccessary tools to deploy rapidly and efficiently to production. Nuxt.js (2.xx) also is currently in Vue 2.x as this is the current Vue version DT One is currently adopting. Ant Design (Vue) is chosen mainly because it will provide me an opportunity to learn this framework in Vue and it has all the UI components required for this assessment without focusing too much in building from scratch. I've used AntD previously on react.  

The objective of this assignment is to also access my own capability of working on a project completed in silo without any help from anyone in the company.



## Challenges along the way 
- Localhost:3000 couldn't access the API endpoint due to Cors policy error. So I had to use a nuxt/proxy-module to create an API proxy for the API endpoint. This would disable SSG strategy for nuxt.js (middleware and proxy requires server mode, not static mode).
- ANTD Grid layout didn't follow the conventional 12 grid (they are using 24 grid instead). So I needed to keep recalculating the grid spacing.
- ANTD has no utility classes/components. For example, on MUI, they have spacing and margin classes to add granular spacing on UI based on a scale factor of 8. To have a top padding of 8px, we can simply use class="pt-1". 
- ANTD more technical and indepth detail are in chinese. yikes.
- ANTD is didn't prioritize on PWA. Example: There isn't a utility class or API for the table and menu component to make it responsive. If I have to make it mobile friendly, I have to write LESS css to include in the build. This would unfortunately increase my time spent on this.
- Needed to reset the muscle memory of writing in JSX(React). Had to refer to vue's documentation.
- Needed to refresh the development methodology of vue. It doesn't work like react.


## Pages tree

This is the heirachy order of the url path. 

- / 
- /admin (auth)
- /benefits 
  - / :benefits
-  /products 
   -  /:id
- /promotions
  - /:promotion 
- /services 
   -  /:service 
- /transaction-status
  - /:transactionId
- /login

  
## Admin credentials 

The middleware is not connected to any live database or auth providers but to demonstrate the private pages, I have set a static user email and password for login: 

email: admin@admin.com
password: 123456


## How to run the application 

### Running locally

```bash
  # clone the dtone-repo
  $ git clone https://github.com/issyah/dtone-ta.git

  # install dependencies 
  $ npm install

  # serve for development purposes at localhost:3000 
  $ npm run dev 

  # to build for production and launch server 
  $ npm run build 
  $ npm run start 

```

### Running via docker 
To run using docker, you need to have docker installed on your machine.
```bash
  # run docker 
  docker run -p 3000:3000 issyah/dtone-nuxt:v1
```


## How to deploy for production 

### AWS
There various ways to deploy to AWS. One of the easiest and quickest solution is to deploy via AWS amplify. __Note: For this to work, we need to configure our deployment to static hosting.__

One of the method is to use AWS Amplify. On AWS dashboard, search for AWS Amplify. Select Amplify hosting. Connect to a github account and select the repo. Select a branch for CI/CD and start deploy. It will take a few minutes to deploy the amp via amplify. 


### Heroku 

Heroku is another personal favourite Salesforce platform to deploy apps quickly. 
- To start, on your dashboard, click on 'New'.
- select new app.
- Define your app name.
- Click on create app.
- Add in the .env environments in Settings -> Config vars.
- Add new config var -> HOST -> 0.0.0.0 
- Once completed, connect via github, select repo dtone-ta.
- Click on deploy branch.








## Nuxt folder references 

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
