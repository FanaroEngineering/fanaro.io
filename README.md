# fanaro.io

This is the revamp with pure HTML, CSS and TypeScript of the [fanaro.com.br][fanaro.com.br] old WordPress website. It's meant to be a single-page website, Angular style, but with no framework at all.


[fanaro.com.br]: https://fanaro.com.br

<br>

<!-- TOC depthFrom:2 -->

- [1. For the developer](#1-for-the-developer)
    - [1.1. The Full Development Workflow](#11-the-full-development-workflow)
        - [1.1.1. Compiling with TypeScript](#111-compiling-with-typescript)
        - [1.1.2. Testing with NPM](#112-testing-with-npm)
        - [1.1.3. Bundling everything together with Webpack](#113-bundling-everything-together-with-webpack)
    - [1.2. Formatting](#12-formatting)

<!-- /TOC -->

## 1. For the developer

### 1.1. The Full Development Workflow

I typically use VS Code for development, and to have everything running smoothily, I open 4 parallel integrated terminals running:

- `npm t -- --watch`
- `npx webpack --watch`
    - In the future I might try to get something going with [WebAssembly][wasm].
- `tsc -w`
- Mostly my Git commits.

Then I use the [Live Server VS Code extension][live-server] to run the [`index.html`][index] top file under watch mode.


[index]: index.html
[wasm]: https://webassembly.org/

#### 1.1.1. Compiling with TypeScript

Compile the code and watch its changes:

```cmd
tsc -w
```

Then, you can watch for changes on the `docs/index.html` file, with, for example, the [Live Server VS Code extension][live-server].


[live-server]: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

#### 1.1.2. Testing with NPM

To test it with Jest:

```cmd
npm t -- --watch
```

#### 1.1.3. Bundling everything together with Webpack

[Webpack][webpack] helps us bundle all of the codebase into a single JS file and also minify it. The resulting code will look like gibberish, but the browser can read the `sourceMap`, so it can decipher what's what.

At any rate, on one of the terminals, keep this going:

```cmd
npx webpack --watch
```


[webpack]: https://webpack.js.org/

### 1.2. Formatting

This project currently uses [Prettier][prettier] as its code and Markdown formatter.


[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode