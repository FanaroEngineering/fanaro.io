# fanaro.io

This is the revamp with pure HTML, CSS and TypeScript of the [fanaro.com.br][fanaro.com.br] old WordPress website. 

It was meant to be a [single-page application (SPA)][spa] &mdash; Angular style &mdash; but with no framework at all, however this demands too much work without a server and with only [Gihub Pages][gh_pages], which I don't want to do since it's too much of a workload for me anyway.


[fanaro.com.br]: https://fanaro.com.br
[gh_pages]: https://pages.github.com/
[spa]: https://developer.mozilla.org/en-US/docs/Glossary/SPA

<br>

<!-- TOC depthFrom:2 -->

- [1. For the developer](#1-for-the-developer)
    - [1.2. The Full Development Workflow](#12-the-full-development-workflow)
        - [1.2.1. Compiling with TypeScript](#121-compiling-with-typescript)
        - [1.2.2. Testing with NPM](#122-testing-with-npm)
        - [1.2.3. Bundling everything together with Webpack](#123-bundling-everything-together-with-webpack)
    - [1.3. Formatting](#13-formatting)

<!-- /TOC -->

## 1. For the developer

### 1.2. The Full Development Workflow

I typically use VS Code for development, and to have everything running smoothily, I open 4 parallel integrated terminals running:

- `npm t -- --watch`
- `npx webpack --watch`
    - In the future I might try to get something going with [WebAssembly][wasm].
- `tsc -w`
- Mostly my Git commits.

Then I use the [Live Server VS Code extension][live-server] to run the [`index.html`][index] top file under watch mode.


[index]: index.html
[wasm]: https://webassembly.org/

#### 1.2.1. Compiling with TypeScript

Compile the code and watch its changes:

```cmd
tsc -w
```

Then, you can watch for changes on the `docs/index.html` file, with, for example, the [Live Server VS Code extension][live-server].


[live-server]: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

#### 1.2.2. Testing with NPM

To test it with Jest:

```cmd
npm t -- --watch
```

#### 1.2.3. Bundling everything together with Webpack

[Webpack][webpack] helps us bundle all of the codebase into a single JS file and also minify it. The resulting code will look like gibberish, but the browser can read the `sourceMap`, so it can decipher what's what.

At any rate, on one of the terminals, keep this going:

```cmd
npx webpack --watch
```


[webpack]: https://webpack.js.org/

### 1.3. Formatting

This project currently uses [Prettier][prettier] as its code and Markdown formatter.


[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode