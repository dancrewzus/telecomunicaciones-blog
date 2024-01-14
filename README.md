<a name="top"></a>

<p align="center">
  <img src="./public/placeholder-social.jpg" style="width: 100%">
</p>
<hr>
<p align="center">
  UNIVERSIDAD NACIONAL EXPERIMENTAL DE GUAYANA<br>
  Virrectorado Académico<br>
  Coordinación General de Pregrado<br>
  Ingeniería Informática<br>
  Telecomunicaciones
</p>

# INDEX

* [¿WHAT IS TELECOMBlog?](#what-is)
* [REQUIREMENTS](#requirements)
* [STEPS TO DOWNLOAD, CONFIGURE AND USE THE APPLICATION](#main-steps)
  * [Download](#download)
  * [Install dependencies](#install-dependencies)
  * [Start application in your local machine](#start-app)
* [PROJECT STRUCTURE](#structure)
* [TECHNOLOGIES THAT I USED](#technologies)
* [CONTRIBUTIONS](#contributions)
* [LICENSE](#license)

<a name="what-is"></a>

# ¿WHAT IS TELECOMBlog?

¡Explore the fascinating world of telecommunications with TelecomBlog! A blog designed to keep you updated on the latest trends, news, and advances in the exciting field of telecommunications. Whether you are an industry professional, a tech enthusiast, or simply interested in how telecommunications are transforming the world, you will find all the articles you need here.

<a name="requirements"></a>

# REQUIREMENTS

- [Git](https://gitforwindows.org/) installed in your machine.
- [npm](https://nodejs.org/es/download/) installed and configured in your machine.
- [node](https://nodejs.org/es/download/) installed and configured in your machine.
- Text editor like [VS Code](https://code.visualstudio.com/).

<a name="main-steps"></a>

# STEPS TO DOWNLOAD, CONFIGURE AND USE THE APPLICATION

<p align="center">
  <img src="https://res.cloudinary.com/idepixel/image/upload/c_scale,h_260,w_360/v1651348337/Landing/service-image.webp" alt="Download and configure">
</p>

<a name="download"></a>

## > Download

You can download the application by copying its link, either by ssh or https. The git command you need to run is as follows:

```sh
# HTTPS =====================================================!

# Clone repository
$ git clone https://github.com/dancrewzus/telecomunicaciones-blog.git
$ cd fx11_api

# If you want to download it with another folder name, example your-folder-name
$ git clone https://github.com/dancrewzus/telecomunicaciones-blog.git your-folder-name
$ cd your-folder-name

# SSH =======================================================!

# Clone repository
$ git clone git@github.com:dancrewzus/telecomunicaciones-blog.git
$ cd fx11_api

# If you want to download it with another folder name, example your-folder-name
$ git clone git@github.com:dancrewzus/telecomunicaciones-blog.git your-folder-name
$ cd your-folder-name
```

<a name="install-dependencies"></a>

## > Install dependencies

In the application root folder, type this command in the command line terminal:

```sh
# Install dependencies with npm
$ npm install

# Install dependencies with Yarn
$ yarn install
```

<a name="start-app"></a>

## > Start application in your local machine

To start the applicatioN, we must execute the following command:

```sh
# development (use watch mode)
$ npm run dev
```

All available commands:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

> If you want to stop the execution press (ctrl + c) / (cmd + c) in the command line terminal.

<a name="structure"></a>

# PROJECT STRUCTURE

Inside of project, you'll see the following folders and files:

```
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema.

Any static assets, like images, can be placed in the `public/` directory.

<a name="technologies"></a>

# TECHNOLOGIES THAT I USED

This is the list of technologies that i use in the development of this api.
<br>
<br>
<p align="center">
  <a target="_blank" href="https://www.javascript.com">
    <img title="JavaScript" src="https://res.cloudinary.com/idepixel/image/upload/c_scale,h_60,w_60/v1600633849/Landing/javascript.webp"/>
  </a>&nbsp; &nbsp;
  <a target="_blank" href="https://www.typescriptlang.org/">
    <img title="TypeScript" src="https://res.cloudinary.com/idepixel/image/upload/c_scale,h_60,w_60/v1600633849/Landing/typescript.png"/>
  </a>&nbsp; &nbsp;
  <a target="_blank" href="https://astro.build/">
    <img title="Astro" src="https://astro.build/assets/press/astro-icon-light-gradient.svg"/>
  </a>
  <br><br>
  <a target="_blank" href="https://www.solidjs.com/">
    <img width="160" height="60" title="Solid.JS" src="https://www.solidjs.com/assets/logo-123b04bc.svg"/>
  </a>&nbsp; &nbsp;
  <a target="_blank" href="https://tailwindcss.com/">
    <img width="160" height="60" title="Solid.JS" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"/>
  </a>&nbsp; &nbsp;
</p>

### Learn more about Astro

Check out [the documentation](https://docs.astro.build) or jump into the [Discord server](https://astro.build/chat).


<a name="contributions"></a>

# CONTRIBUTIONS

Contributions are welcome. Please create an issue to discuss your ideas before submitting a Pull Request.


<a name="license"></a>

# LICENSE

This project is licensed under the [MIT licensed](LICENSE).


