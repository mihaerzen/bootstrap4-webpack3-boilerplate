<div style="text-align:center">

<h1>Bootstrap 4 Webpack 3 Boilerplate</h1>

<table style="border: none;margin:0 auto;">
  <tr style="border: none;">
    <td style="border: none;">
      <img src="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="bootstrap logo" width=80/>
    </td>
    <td style="border: none;">
      <img src="https://github.com/webpack/media/blob/master/logo/icon-square-big.png?raw=true" alt="webpack logo" width=100/>
    </td>
  </tr>
</table>

</div>

## Prerequisites
- [nodejs](https://nodejs.org/)

If you don't yet have nodejs installed and you are running mac os, I suggest using [nvm](https://github.com/creationix/nvm) (node version manger), which makes managing different node versions a breeze.

## Usage

Clone the repo:

```bash
git clone git@github.com:mihaerzen/bootstrap4-webpack3-boilerplate.git
```

Cd into the project folder

```bash
cd bootstrap4-webpack3-boilerplate
```

Install node modules

```bash
npm install
```

Build production

```bash
npm run build:prod
```

Build version is available in `dist` folder.

## Development

### Server

For development you can use `webpack-dev-server` by running:

```bash
npm run serve
```

This brings up demo website on [http://localhost:8080](http://localhost:8080).

For demo purposes I've copied the [bootstrap 4 album example](https://v4-alpha.getbootstrap.com/examples/album).

### Overriding bootstrap defaults

If you want to override bootstrap default variables you can do that by editing the file `_override-bootstrap-defaults.scss` located in `styles` folder.

## Folder structure

<pre>
bootstrap4-webpack3-boilerplate/
├── app/
│   ├── images
│   │   └── nyan.gif
│   ├── styles
│   │   ├── _override-bootstrap-defaults.scss
│   │   └── index.scss
│   ├── index.html
│   └── index.js  # main webpack entry file
├── .eslintrc
├── .gitignore
├── package.json
├── README.md
└── webpack.config.js
</pre>