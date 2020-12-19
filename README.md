<p align="center">
  <a href="https://fanaro.io"><img src="assets/favicon.svg" height="100px" alt="Logo" /></a>
</p>

<p align="center">
  <a href="https://github.com/FanaroEngineering/fanaro.io/actions"><img src="https://github.com/FanaroEngineering/fanaro.io/workflows/TS%20Tests/badge.svg" alt="Github CI" /></a>
  <a href="https://gitter.im/fanaroio/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"><img src="https://badges.gitter.im/fanaroio/community.svg" alt="Gitter" /></a>
  <a href="https://www.buymeacoffee.com/psygo"><img src="assets/buy_me_a_coffee_shield.svg" alt="Buy Me A Coffee" /></a>
</p>

---

# fanaro.io

> **Access the website here: [fanaro.io][fanaro.io]**

This is the revamp with pure HTML, CSS and TypeScript of the [fanaro.com.br][fanaro.com.br] old WordPress website.

It was meant to be a [single-page application (SPA)][spa] &mdash; Angular style &mdash; but with no framework at all. However this demands too much work without a server and with only [Gihub Pages][gh_pages], which I don't want to meet right now.


[fanaro.com.br]: https://fanaro.com.br
[fanaro.io]: https://fanaro.io
[gh_pages]: https://pages.github.com/
[spa]: https://developer.mozilla.org/en-US/docs/Glossary/SPA

---

**Table of Contents**

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

For more specifics on this, check out the [`.prettierrc`][prettierrc] file.

If you wish to format the whole project, you can then:

```cmd
npx prettier -w .
```


[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[prettierrc]: .prettierrc
