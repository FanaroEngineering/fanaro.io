# fanaro.io

This is the revamp with pure HTML, CSS and TypeScript of the [fanaro.com.br][fanaro.com.br] old WordPress website.


[fanaro.com.br]: https://fanaro.com.br

<br>

<!-- TOC depthFrom:2 -->

- [1. For the developer](#1-for-the-developer)
    - [1.1. Compiling with TypeScript](#11-compiling-with-typescript)
    - [1.2. Testing with NPM](#12-testing-with-npm)
    - [1.3. Formatting](#13-formatting)

<!-- /TOC -->

## 1. For the developer

### 1.1. Compiling with TypeScript

Compile the code and watch its changes:

```cmd
tsc -w
```

Then, you can watch for changes on the `docs/index.html` file, with, for example, the [Live Server VS Code extension][live-server].


[live-server]: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

### 1.2. Testing with NPM

To test it with Jest:

```cmd
npm t -- --watch
```

### 1.3. Formatting

This project currently uses [Prettier][prettier] as its code and Markdown formatter.


[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode