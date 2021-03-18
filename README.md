<p align="center">
  <a href="https://fanaro.io"><img src="assets/logo_400.png" height="100px" alt="Logo" /></a>
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

<div id="user-content-toc">
  <ul>
    <li><a href="#1-for-the-developer">1. For the developer</a>
      <ul>
        <li><a href="#11-the-full-development-workflow">1.1. The Full Development Workflow</a>
          <ul>
            <li><a href="#111-compiling-with-typescript">1.1.1. Compiling with TypeScript</a></li>
            <li><a href="#112-testing-with-npm">1.1.2. Testing with NPM</a></li>
            <li><a href="#113-bundling-everything-together-with-webpack">1.1.3. Bundling everything together with Webpack</a></li>
            <li><a href="#114-running-a-live-server">1.1.4. Running a Live Server</a></li>
          </ul>
        </li>
        <li><a href="#12-formatting">1.2. Formatting</a></li>
        <li><a href="#13-snippets">1.3. Snippets</a></li>
        <li><a href="#14-go-sgf-viewers">1.3. Go SGF Viewers</a></li>
      </ul>
    </li>
  </ul>
</div>

---

## 1. For the developer

### 1.1. The Full Development Workflow

I typically use VS Code for development, and to have everything running smoothily, I open 4 parallel integrated terminals running:

- `npm t -- --watch`
- `npx webpack --watch`
    - In the future I might try to get something going with [WebAssembly][wasm].
- `tsc -w`
- Mostly my Git commits.

Then I use the [Live Server VS Code extension][live-server] to run the [`index.html`][index] top file under watch mode &mdash; you could also run the live server from the command line with `live-server .` once you've installed it with `npm`.

If you wish for a streamlined experience, you might find the shell script [tools/build_watch.sh][build_watch] useful.


[build_watch]: tools/build_watch.sh
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

#### 1.1.4 Running a Live Server

After having installed the `live-server` package with `npm i`, you can run it with

```sh
live-server .
```

### 1.2. Formatting

This project currently uses [Prettier][prettier] as its code and Markdown formatter.

For more specifics on this, check out the [`.prettierrc`][prettierrc] file.

If you wish to format the whole project, you can then:

```cmd
npx prettier -w .
```


[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[prettierrc]: .prettierrc

### 1.3. Snippets

The [snippets][snippets] file contains all of the extremely useful code snippets for this project. They will not only speed you up but guarantee everything is standardized as it should.


[snippets]: .vscode/snippets.code-snippets

### 1.4. Go SGF Viewers

There are mainly 2 ways of including embedded SGF viewers in an HTML file:

1. [Glift][glift]
    - Initially, this is the one I was using.
    - Also used by the now defunct [GoGameGuru][gogameguru] website.
    - However, it started to present bugs when I added more complex behavior with Webpack.
1. [WGo.js][wgo.js]
    - Offers much more customizability.
    - Is part of the Waltheri ecosystem ([Waltheri Pattern Search][waltheri_ps]).

Both platforms have been included in the [assets/][assets] folder and are featured in the [snippets][snippets] file.


[glift]: https://github.com/Kashomon/glift
[gogameguru]: http://gogameguru.com/
[waltheri_ps]: http://ps.waltheri.net/
[wgo.js]: https://github.com/waltheri/wgo.js

#### 1.4.1. Glift

> **Prefer using [WGo.js][wgo.js].**

Anyway, if you really want to use it:

```html
<div id="SGF" style="height: 500px; width: 100%"></div>
<script>
  glift.create({
    divId: "SGF",
    sgf: "game-name.sgf",
  });
</script>```


The import is typically done with:

```html
<script src="/assets/glift_1_1_2.min.js"></script>
```

#### 1.4.2. WGo.js

The imports to this package are quite cumbersome if you want all the perks, do check it out in the [snippets][snippets] file.

The typical embedding goes like this:

```html
<div
  data-wgo="game-name.sgf"
  data-wgo-board="stoneHandler: WGo.Board.drawHandlers.NORMAL,
                  background: '../../assets/wgo/textures/wood2.jpg'"
  class="SGF"
>
  <p>
    Your browser doesn't support the WGo.js Player. Please use a more
    modern browser, like Brave, Chrome, Firefox or Edge.
  </p>
</div>
```
