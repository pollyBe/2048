// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gbXMy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addRandomTile", ()=>addRandomTile);
parcelHelpers.export(exports, "addTileToPage", ()=>addTileToPage);
parcelHelpers.export(exports, "startNewGame", ()=>startNewGame);
parcelHelpers.export(exports, "createBoard", ()=>createBoard);
parcelHelpers.export(exports, "score", ()=>score);
parcelHelpers.export(exports, "wonGame", ()=>wonGame);
parcelHelpers.export(exports, "container", ()=>container);
parcelHelpers.export(exports, "tileWrap", ()=>tileWrap);
parcelHelpers.export(exports, "board", ()=>board);
parcelHelpers.export(exports, "scoreElement", ()=>scoreElement);
parcelHelpers.export(exports, "raitingsBtn", ()=>raitingsBtn);
parcelHelpers.export(exports, "body", ()=>body);
var _arrowListener = require("./js/arrowListener");
var _modal = require("./js/modal");
var _raitings = require("./js/raitings");
var _sounds = require("./js/sounds");
const body = document.querySelector("body");
// creating html structure
const container = document.createElement("div");
container.className = "container";
// raiting
const raitingsBtn = document.createElement("button");
raitingsBtn.className = "raitings-btn";
raitingsBtn.type = "button";
raitingsBtn.textContent = "Raitings";
raitingsBtn.addEventListener("click", (0, _raitings.showRaitings));
// crating game field
const gameField = document.createElement("div");
gameField.className = "game-field";
gameField.id = "game-field";
const tileWrap = document.createElement("div");
tileWrap.className = "tile-wrap";
addSquares();
// creating side info section
const infoWrap = document.createElement("div");
infoWrap.className = "info-wrap";
//title
const titleWrap = document.createElement("div");
titleWrap.className = "title-wrap";
const title = document.createElement("h1");
title.textContent = "2048";
titleWrap.append(title);
//score
const scoreWrap = document.createElement("div");
scoreWrap.className = "score-wrap";
const scoreLabel = document.createElement("div");
scoreLabel.id = "score-label";
scoreLabel.textContent = "Score";
const scoreElement = document.createElement("div");
scoreElement.id = "score-element";
scoreElement.textContent = "0";
scoreWrap.append(scoreLabel, scoreElement);
//new game
const btnWrap = document.createElement("div");
btnWrap.className = "btn-wrap";
const newGameBtn = document.createElement("button");
newGameBtn.className = "new-game-btn";
newGameBtn.textContent = "New Game";
btnWrap.addEventListener("click", startNewGame);
btnWrap.append(newGameBtn);
infoWrap.append(titleWrap, scoreWrap, btnWrap, raitingsBtn);
gameField.append(tileWrap, infoWrap);
body.append((0, _sounds.bgAudioWrap));
container.append((0, _sounds.controlButtons), gameField);
body.prepend(container);
container.after((0, _modal.modal));
// adding squares in the game field
function addSquares() {
    for(let i = 1; i <= 16; i++){
        const square = document.createElement("div");
        square.className = "square";
        tileWrap.append(square);
    }
}
//functionality
let board = [];
let wonGame = false;
window.addEventListener("keydown", (0, _arrowListener.onDirectionKeyPress));
function createBoard() {
    board = [];
    for(let i = 0; i < 4; i++){
        let row = [];
        for(let j = 0; j < 4; j++)row.push(0);
        board.push(row);
    }
}
createBoard();
addRandomTile();
addRandomTile();
function startNewGame() {
    (0, _modal.modal).style.display = "none";
    tileWrap.innerHTML = "";
    addSquares();
    scoreElement.innerHTML = 0;
    board = [];
    score = 0;
    wonGame = false;
    window.addEventListener("keydown", (0, _arrowListener.onDirectionKeyPress));
    createBoard();
    addRandomTile();
    addRandomTile();
}
function addRandomTile() {
    let emptyTiles = [];
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++)if (board[i][j] === 0) emptyTiles.push([
            i,
            j
        ]);
    }
    let [randomI, randomJ] = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    board[randomI][randomJ] = Math.random() < 0.8 ? 2 : 4;
    addTileToPage(randomI, randomJ, board[randomI][randomJ]);
}
function addTileToPage(row, column, value) {
    let tile = document.createElement("div");
    tile.classList.add("tile", "row" + (row + 1), "column" + (column + 1), "value" + value);
    tile.innerHTML = value;
    tileWrap.append(tile);
    tile.classList.add("merged");
    tile.addEventListener("animationend", ()=>{
        tile.classList.remove("merged");
    });
}

},{"./js/arrowListener":"iS2oh","./js/modal":"aHHgN","./js/raitings":"eaA47","./js/sounds":"fGO93","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iS2oh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onDirectionKeyPress", ()=>onDirectionKeyPress);
parcelHelpers.export(exports, "raitings", ()=>raitings);
parcelHelpers.export(exports, "currentTime", ()=>currentTime);
var _gameStatusCheck = require("./gameStatusCheck");
var _app = require("../app");
var _modal = require("./modal");
var _tilesMove = require("./tilesMove");
var _raitings = require("./raitings");
const now = new Date();
const currentTime = formatDateTime(now);
let raitings = [];
function onDirectionKeyPress(e) {
    let movePossible;
    switch(e.key){
        case "ArrowUp":
            playClick();
            movePossible = (0, _tilesMove.moveTiles)(1, 0);
            break;
        case "ArrowDown":
            playClick();
            movePossible = (0, _tilesMove.moveTiles)(-1, 0);
            break;
        case "ArrowLeft":
            playClick();
            movePossible = (0, _tilesMove.moveTiles)(0, -1);
            break;
        case "ArrowRight":
            playClick();
            movePossible = (0, _tilesMove.moveTiles)(0, 1);
            break;
    }
    if (movePossible) {
        (0, _app.addRandomTile)();
        let gameOver = (0, _gameStatusCheck.isGameOver)();
        console.log("is gameover", gameOver.gameOver);
        if (gameOver.gameOver) {
            let raitItem = {
                score: (0, _tilesMove.score),
                currentTime: currentTime
            };
            raitings.push(raitItem);
            (0, _raitings.setItemsInStorage)(raitings);
            (0, _modal.showModal)(gameOver.message);
        }
    }
}
function playClick() {
    const clickSound = document.createElement("audio");
    const clickSource = document.createElement("source");
    clickSource.src = "./src/assets/sounds/157776__hiddenpersuader__click-sound-from-a-ps9-circuit-bent-machine.wav";
    clickSound.append(clickSource);
    (0, _app.body).append(clickSound);
    clickSound.play();
}
function formatDateTime(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

},{"./gameStatusCheck":"17Qsx","../app":"bNKaB","./modal":"aHHgN","./tilesMove":"c8gGo","./raitings":"eaA47","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"17Qsx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isGameOver", ()=>isGameOver);
parcelHelpers.export(exports, "continuePlaying", ()=>continuePlaying);
var _arrowListener = require("./arrowListener");
var _app = require("../app");
var _modal = require("./modal");
var _tilesMove = require("./tilesMove");
function continuePlaying() {
    (0, _modal.modal).style.display = "none";
    window.addEventListener("keydown", (0, _arrowListener.onDirectionKeyPress));
}
function isGameOver() {
    let emptySquare = false;
    for(let i = 0; i < (0, _app.board).length; i++)for(let j = 0; j < (0, _app.board)[i].length; j++){
        if ((0, _app.board)[i][j] === 0) emptySquare = true;
        if ((0, _app.board)[i][j] === 2048 && !wonGame) return {
            gameOver: true,
            message: "You won!",
            finalScore: (0, _tilesMove.score)
        };
        if (j != 3 && (0, _app.board)[i][j] === (0, _app.board)[i][j + 1]) emptySquare = true;
        if (i != 3 && (0, _app.board)[i][j] === (0, _app.board)[i + 1][j]) emptySquare = true;
    }
    if (emptySquare) return {
        gameOver: false,
        message: ""
    };
    return {
        gameOver: true,
        message: "Game over!",
        finalScore: (0, _tilesMove.score)
    };
}

},{"./arrowListener":"iS2oh","../app":"bNKaB","./modal":"aHHgN","./tilesMove":"c8gGo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aHHgN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showModal", ()=>showModal);
parcelHelpers.export(exports, "modal", ()=>modal);
parcelHelpers.export(exports, "modalContext", ()=>modalContext);
var _arrowListener = require("./arrowListener");
var _gameStatusCheck = require("./gameStatusCheck");
var _app = require("../app");
var _tilesMove = require("./tilesMove");
// modal window
const modal = document.createElement("div");
modal.id = "modal";
const modalClose = document.createElement("button");
modalClose.type = "button";
modalClose.id = "close-modal";
modalClose.addEventListener("click", ()=>{
    modal.style.display = "none";
});
const modalContext = document.createElement("div");
modalContext.id = "modal-context";
modal.append(modalClose, modalContext);
function showModal(message) {
    modalContext.innerHTML = "";
    if (message == "Game over!") {
        modal.style.display = "flex";
        modalGameOverContext();
    }
    if (message == "You won!") {
        wonGame = true;
        modalYouWonContext();
        window.removeEventListener("keydown", (0, _arrowListener.onDirectionKeyPress));
    }
}
function modalGameOverContext() {
    const gameOverWrap = document.createElement("div");
    gameOverWrap.className = "game-over-wrap";
    const gameOverTitle = document.createElement("h2");
    gameOverTitle.className = "game-over-title";
    gameOverTitle.textContent = "Game Over!";
    const totalScore = document.createElement("div");
    totalScore.id = "total-score";
    totalScore.textContent = (0, _tilesMove.score);
    const gameOverBtn = document.createElement("button");
    gameOverBtn.type = "button";
    gameOverBtn.id = "game-over";
    gameOverBtn.textContent = "Try Again";
    gameOverBtn.addEventListener("click", (0, _app.startNewGame));
    gameOverWrap.append(gameOverTitle, totalScore, gameOverBtn);
    modalContext.append(gameOverWrap);
}
function modalYouWonContext() {
    const youWonWrap = document.createElement("div");
    youWonWrap.className = "you-won-wrap";
    const youWonTitle = document.createElement("h2");
    youWonTitle.className = "you-won-title";
    youWonTitle.textContent = "You Won!!";
    const totalScore = document.createElement("div");
    totalScore.id = "total-score";
    totalScore.textContent = (0, _tilesMove.score);
    const youWonBtn = document.createElement("button");
    youWonBtn.type = "button";
    youWonBtn.id = "you-won";
    youWonBtn.textContent = "New Game";
    youWonBtn.addEventListener("click", (0, _app.startNewGame));
    const continueBtn = document.createElement("button");
    continueBtn.type = "button";
    continueBtn.id = "continue";
    continueBtn.textContent = "Do You Want To Continue Playing?";
    continueBtn.addEventListener("click", (0, _gameStatusCheck.continuePlaying));
    youWonWrap.append(youWonTitle, totalScore, youWonBtn, continueBtn);
    modalContext.append(youWonWrap);
}

},{"./arrowListener":"iS2oh","./gameStatusCheck":"17Qsx","../app":"bNKaB","./tilesMove":"c8gGo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c8gGo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "moveTiles", ()=>moveTiles);
parcelHelpers.export(exports, "score", ()=>score);
parcelHelpers.export(exports, "moveTileOnPage", ()=>moveTileOnPage);
var _app = require("../app");
// realizing tile movements in the board
let score = 0;
function moveTiles(y, x) {
    let movePossible = false;
    let mergedRecently = false;
    if (x != 0) {
        let startX = x === 1 ? 3 : 0;
        let stepX = x === 1 ? -1 : 1;
        for(let i = 0; i < 4; i++){
            let j = startX;
            while(j <= 3 && stepX === 1 || j >= 0 && stepX === -1){
                if ((0, _app.board)[i][j] === 0) {
                    j += stepX;
                    continue;
                }
                let destination = getDestinationSquare(i, j, 0, x);
                let tileClass = ".row" + (i + 1) + ".column" + (j + 1);
                let tile = document.querySelector(tileClass);
                if (!destination.merge || destination.merge && mergedRecently) {
                    mergedRecently = false;
                    destination.destinationX += destination.merge ? stepX : 0;
                    (0, _app.board)[i][destination.destinationX] = (0, _app.board)[i][j];
                    if (destination.destinationX !== j) {
                        movePossible = true;
                        (0, _app.board)[i][j] = 0;
                    }
                    moveTileOnPage(i, destination.destinationX, tile, false);
                    j += stepX;
                    continue;
                }
                mergedRecently = true;
                (0, _app.board)[i][destination.destinationX] = (0, _app.board)[i][j] * 2;
                console.log("after merge", (0, _app.board)[i][destination.destinationX]);
                score += (0, _app.board)[i][destination.destinationX];
                (0, _app.scoreElement).innerHTML = score;
                movePossible = true;
                (0, _app.board)[i][j] = 0;
                moveTileOnPage(i, destination.destinationX, tile, destination.merge);
                j += stepX;
            }
        }
    } else if (y != 0) {
        let startY = y === 1 ? 3 : 0;
        let stepY = y === 1 ? -1 : 1;
        console.log("row", startY, "col", x);
        for(let j = 0; j < 4; j++){
            let i = startY;
            console.log("row", i, "col", x);
            while(i <= 3 && stepY === 1 || i >= 0 && stepY === -1){
                if ((0, _app.board)[i][j] === 0) {
                    i += stepY;
                    continue;
                }
                let destination = getDestinationSquare(i, j, y, 0);
                let tileClass = ".row" + (i + 1) + ".column" + (j + 1);
                let tile = document.querySelector(tileClass);
                if (!destination.merge || destination.merge && mergedRecently) {
                    mergedRecently = false;
                    destination.destinationY += destination.merge ? stepY : 0;
                    (0, _app.board)[destination.destinationY][j] = (0, _app.board)[i][j];
                    if (destination.destinationY !== i) {
                        movePossible = true;
                        (0, _app.board)[i][j] = 0;
                    }
                    moveTileOnPage(destination.destinationY, j, tile, false);
                    i += stepY;
                    continue;
                }
                mergedRecently = true;
                (0, _app.board)[destination.destinationY][j] = (0, _app.board)[i][j] * 2;
                score += (0, _app.board)[destination.destinationY][j];
                (0, _app.scoreElement).innerHTML = score;
                movePossible = true;
                (0, _app.board)[i][j] = 0;
                moveTileOnPage(destination.destinationY, j, tile, destination.merge);
                i += stepY;
            }
        }
    }
    return movePossible;
}
function getDestinationSquare(i, j, y, x) {
    let destinationY = i;
    let destinationX = j;
    let merge = false;
    while(destinationY < 3 && y === 1 || destinationY > 0 && y === -1 || destinationX < 3 && x === 1 || destinationX > 0 && x === -1){
        console.log("y", y, "x", x);
        let nextY = destinationY + y;
        let nextX = destinationX + x;
        let nextCell = (0, _app.board)[nextY][nextX];
        let currentCell = (0, _app.board)[i][j];
        if (nextCell === 0 || nextCell === currentCell) {
            destinationY = nextY;
            destinationX = nextX;
            merge = nextCell === currentCell;
        }
        if (nextCell === 0 || nextCell === currentCell) {
            destinationY = nextY;
            destinationX = nextX;
            merge = nextCell === currentCell;
        }
        if (nextCell !== 0 && nextCell !== currentCell) break;
        if (merge) break;
    }
    return {
        merge: merge,
        destinationY: destinationY,
        destinationX: destinationX
    };
}
// refreshing tiles on page
function moveTileOnPage(row, column, tile, merge) {
    let classes = Array.from(tile.classList);
    classes.forEach((className)=>{
        if (className.startsWith("row") || className.startsWith("column")) tile.classList.remove(className);
    });
    tile.classList.add("row" + (row + 1), "column" + (column + 1));
    if (merge) {
        let elements = (0, _app.tileWrap).querySelectorAll(".row" + (row + 1) + ".column" + (column + 1));
        while(elements.length > 1){
            (0, _app.tileWrap).removeChild(elements[0]);
            elements = (0, _app.tileWrap).querySelectorAll(".row" + (row + 1) + ".column" + (column + 1));
        }
        elements[0].className = "tile row" + (row + 1) + " column" + (column + 1) + " " + "value" + (0, _app.board)[row][column];
        elements[0].innerHTML = (0, _app.board)[row][column];
        elements[0].classList.add("merged");
        elements[0].addEventListener("animationend", ()=>{
            elements[0].classList.remove("merged");
        });
    }
}

},{"../app":"bNKaB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eaA47":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setItemsInStorage", ()=>setItemsInStorage);
parcelHelpers.export(exports, "getItemFromStorage", ()=>getItemFromStorage);
parcelHelpers.export(exports, "ratingsWrap", ()=>ratingsWrap);
parcelHelpers.export(exports, "showRaitings", ()=>showRaitings);
var _modal = require("./modal");
const ratingsWrap = document.createElement("div");
ratingsWrap.className = "raitings-wrap";
const raitingsTitle = document.createElement("h3");
raitingsTitle.className = "raitings-title";
raitingsTitle.textContent = "Raitings";
const raitingsList = document.createElement("ul");
raitingsList.id = "raitings";
ratingsWrap.append(raitingsTitle, raitingsList);
function setItemsInStorage(raitings) {
    localStorage.setItem("scoreItem", JSON.stringify(raitings));
}
function getItemFromStorage() {
    const items = localStorage.getItem("scoreItem");
    return items ? JSON.parse(items) : [];
}
function showRaitings() {
    const raitings = getItemFromStorage();
    (0, _modal.modalContext).innerHTML = "";
    if (raitings.length === 0) {
        (0, _modal.modal).style.display = "flex";
        (0, _modal.modalContext).innerHTML = `<p class = 'empty-raitings'>No Games Played Yet</p>`;
    } else {
        (0, _modal.modal).style.display = "flex";
        console.log(raitings);
        raitings.forEach((item)=>{
            let counter = 1;
            const raitingItem = document.createElement("li");
            raitingItem.className = "raiting-list_item";
            raitingItem.textContent = `${counter++}.  ${item.currentTime} - Score: ${item.score}`;
            raitingsList.append(raitingItem);
            (0, _modal.modalContext).append(ratingsWrap);
        });
    }
}

},{"./modal":"aHHgN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fGO93":[function(require,module,exports) {
// add background audio
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "controlButtons", ()=>controlButtons);
parcelHelpers.export(exports, "bgAudioWrap", ()=>bgAudioWrap);
parcelHelpers.export(exports, "bgAudio", ()=>bgAudio);
const bgAudioWrap = document.createElement("div");
bgAudioWrap.className = "audio-wrap";
const bgAudio = document.createElement("audio");
bgAudio.id = "bg-music";
bgAudio.loop = "true";
const bgSource = document.createElement("source");
bgSource.type = "audio/mpeg";
bgSource.src = "./src/assets/sounds/eco-sounds_assets_audio_Hope-Emotional-Soundtrack(chosic.com).mp3";
bgAudio.append(bgSource);
bgAudioWrap.append(bgAudio);
const controlButtons = document.createElement("div");
controlButtons.className = "controls";
const audioLabel = document.createElement("h3");
audioLabel.textContent = "Music";
const soundStopPlay = document.createElement("div");
soundStopPlay.className = "stop-play-wrap";
const soundCircle = document.createElement("button");
soundCircle.id = "change";
soundStopPlay.append(soundCircle);
soundStopPlay.classList.add("stop");
const volumeWrap = document.createElement("div");
volumeWrap.className = "volume-wrap";
const volumeRange = document.createElement("input");
volumeRange.setAttribute("min", "0");
volumeRange.setAttribute("max", "1");
volumeRange.setAttribute("step", "0.1");
volumeRange.value = "1";
volumeRange.type = "range";
volumeRange.id = "volume-range";
volumeWrap.append(volumeRange);
const volumeLabel = document.createElement("h3");
volumeLabel.textContent = "Volume";
controlButtons.append(audioLabel, soundStopPlay, volumeLabel, volumeWrap);
soundStopPlay.addEventListener("click", clickAction);
async function playMusic() {
    try {
        bgAudio.play();
        soundStopPlay.classList.remove("stop");
        soundStopPlay.classList.add("play");
        console.log(bgAudio.paused);
        bgAudio.volume = 1;
    } catch  {
        console.log("error", error);
    }
}
async function pauseMusic() {
    try {
        bgAudio.pause();
        soundStopPlay.classList.remove("play");
        soundStopPlay.classList.add("stop");
        console.log(bgAudio.paused);
    } catch  {
        console.log("error", error);
    }
}
function clickAction() {
    bgAudio.currentTime = 0;
    if (soundStopPlay.classList.contains("play")) {
        pauseMusic();
        soundStopPlay.classList.add("off");
        console.log(bgAudio.paused);
    } else if (soundStopPlay.classList.contains("stop")) {
        playMusic();
        soundStopPlay.classList.remove("off");
        console.log(bgAudio.paused);
    }
// soundStopPlay.removeEventListener("click", clickAction);
}
volumeRange.addEventListener("input", function() {
    bgAudio.volume = volumeRange.value;
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gbXMy","bNKaB"], "bNKaB", "parcelRequire186e")

//# sourceMappingURL=index.0641b553.js.map
