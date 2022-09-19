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
})({"jQVXF":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1SICI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _sliderMain = require("./modules/slider/slider-main");
var _sliderMainDefault = parcelHelpers.interopDefault(_sliderMain);
var _sliderMini = require("./modules/slider/slider-mini");
var _sliderMiniDefault = parcelHelpers.interopDefault(_sliderMini);
var _videoplayer = require("./modules/videoplayer");
var _videoplayerDefault = parcelHelpers.interopDefault(_videoplayer);
var _difference = require("./modules/difference");
var _differenceDefault = parcelHelpers.interopDefault(_difference);
var _form = require("./modules/form");
var _formDefault = parcelHelpers.interopDefault(_form);
window.addEventListener("DOMContentLoaded", ()=>{
    new (0, _videoplayerDefault.default)(".showup .play", ".overlay").init();
    new (0, _videoplayerDefault.default)(".module__video-item .play", ".overlay").init();
    const slider = new (0, _sliderMainDefault.default)({
        page: ".page",
        btns: ".next"
    });
    const showUpSlider = new (0, _sliderMiniDefault.default)({
        page: ".showup__content-slider",
        prev: ".showup__prev",
        next: ".showup__next",
        activeClass: "card-active",
        animate: true
    });
    const modulePageSlider = new (0, _sliderMiniDefault.default)({
        page: ".modules__content-slider",
        prev: ".modules__info-btns .slick-prev",
        next: ".modules__info-btns .slick-next",
        activeClass: "card-active",
        animate: true,
        autolay: true
    });
    const feedSlider = new (0, _sliderMiniDefault.default)({
        page: ".feed__slider",
        prev: ".feed__slider .slick-prev",
        next: ".feed__slider .slick-next",
        activeClass: "feed__item-active"
    });
    const moduleSlider = new (0, _sliderMainDefault.default)({
        page: ".moduleapp",
        btns: ".next"
    });
    slider.render();
    showUpSlider.init();
    modulePageSlider.init();
    feedSlider.init();
    moduleSlider.render();
    new (0, _differenceDefault.default)(".officerold", ".officernew", ".officer__card-item").init();
    new (0, _formDefault.default)(".form").init();
});

},{"./modules/slider/slider-main":"6i5fQ","./modules/slider/slider-mini":"hlUl8","./modules/videoplayer":"lQYUm","./modules/difference":"lv4ll","./modules/form":"gyZuc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6i5fQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slider = require("./slider");
var _sliderDefault = parcelHelpers.interopDefault(_slider);
class MainSlider extends (0, _sliderDefault.default) {
    constructor(page, btns){
        super(page, btns);
    }
    showSlides(n) {
        if (n > this.slides.length) this.slideIndex = 1;
        if (n < 1) this.slideIndex = this.slides.length;
        try {
            this.form.style.opacity = "0";
            if (n === 3) {
                this.form.classList.add("animated");
                setTimeout(()=>{
                    this.form.style.opacity = "1";
                    this.form.classList.add("slideInUp");
                }, 3000);
            } else this.form.classList.remove("slideInUp");
        } catch (e) {}
        for (let elem of this.slides)elem.style.display = "none";
        this.slides[this.slideIndex - 1].style.display = "block";
    }
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }
    bindTrigger() {
        this.btns.forEach((elem)=>{
            elem.addEventListener("click", ()=>{
                this.plusSlides(1);
            });
            if (this.slideIndex === 3) setTimeout(()=>{
                this.form.style.display = "block";
            }, 3000);
            elem.parentNode.previousElementSibling.addEventListener("click", (e)=>{
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });
        document.querySelectorAll(".prevmodule").forEach((item)=>{
            item.addEventListener("click", (e)=>{
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(-1);
            });
        });
        document.querySelectorAll(".nextmodule").forEach((item)=>{
            item.addEventListener("click", (e)=>{
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(1);
            });
        });
    }
    render() {
        if (this.page) {
            try {
                this.form = document.querySelector(".hanson");
            } catch (e) {}
            this.showSlides(this.slideIndex);
            this.bindTrigger();
        }
    }
}
exports.default = MainSlider;

},{"./slider":"eKpBR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eKpBR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Slider {
    constructor({ page =null , btns =null , next =null , prev =null , activeClass ="" , autolay , animate ,  } = {}){
        this.page = document.querySelector(page);
        try {
            this.slides = this.page.children;
        } catch (e) {}
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.autolay = autolay;
        this.animate = animate;
        this.slideIndex = 1;
    }
}
exports.default = Slider;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"hlUl8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slider = require("./slider");
var _sliderDefault = parcelHelpers.interopDefault(_slider);
class MiniSlider extends (0, _sliderDefault.default) {
    constructor(page, next, prev, activeClass, autolay, animate){
        super(page, next, prev, autolay, animate, activeClass);
    }
    decorizeSlides() {
        [
            ...this.slides
        ].forEach((elem)=>{
            elem.classList.remove(this.activeClass);
            if (this.animate) {
                elem.querySelector(".card__title").style.opacity = "0.4";
                elem.querySelector(".card__controls-arrow").style.opacity = "0";
            }
        });
        if (!this.slides[0].closest("button")) this.slides[0].classList.add(this.activeClass);
        if (this.animate) {
            this.slides[0].querySelector(".card__title").style.opacity = "1";
            this.slides[0].querySelector(".card__controls-arrow").style.opacity = "1";
        }
    }
    nextSlides() {
        if (this.slides[1].tagName == "BUTTON" && this.slides[2].tagName == "BUTTON") {
            console.log(this.slides);
            this.page.appendChild(this.slides[0]);
            this.page.appendChild(this.slides[1]);
            this.page.appendChild(this.slides[2]);
            this.decorizeSlides();
        } else if (this.slides[1].tagName == "BUTTON") {
            this.page.appendChild(this.slides[0]);
            this.page.appendChild(this.slides[1]);
            this.decorizeSlides();
        } else {
            this.page.appendChild(this.slides[0]);
            this.decorizeSlides();
        }
    }
    bindTriggers() {
        this.next.addEventListener("click", ()=>this.nextSlides());
        this.prev.addEventListener("click", ()=>{
            for(let i = this.slides.length - 1; i > 0; i--)if (this.slides[i].tagName != "BUTTON") {
                let active = this.slides[i];
                this.page.insertBefore(active, this.slides[0]);
                this.decorizeSlides();
                break;
            }
        });
    }
    init() {
        try {
            this.page.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-item: flex-start;
        `;
            this.bindTriggers();
            this.decorizeSlides();
            if (this.autolay) setInterval(()=>this.nextSlides(), 5000);
        } catch (e) {}
    }
}
exports.default = MiniSlider;

},{"./slider":"eKpBR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lQYUm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class VideoPlayer {
    constructor(triggers, overlay){
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector(".close");
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }
    bindTriggers() {
        this.btns.forEach((btn, i)=>{
            try {
                const blockedElem = btn.closest(".module__video-item").nextElementSibling;
                if (i % 2 == 0) blockedElem.setAttribute("data-disabled", "true");
            } catch (e) {}
            btn.addEventListener("click", ()=>{
                if (!btn.closest(".module__video-item") || btn.closest(".module__video-item").getAttribute("data-disabled") !== "true") {
                    this.activeBtn = btn;
                    if (document.querySelector("iframe#frame")) {
                        this.overlay.style.display = "flex";
                        if (this.path !== btn.getAttribute("data-url")) {
                            this.path = btn.getAttribute("data-url");
                            this.player.loadVideoById({
                                videoId: this.path
                            });
                        }
                    } else {
                        this.path = btn.getAttribute("data-url");
                        this.createPlayer(this.path);
                    }
                }
            });
        });
    }
    bindCloseBtn() {
        this.close.addEventListener("click", ()=>{
            this.overlay.style.display = "none";
            this.player.stopVideo();
        });
    }
    createPlayer(url) {
        this.player = new YT.Player("frame", {
            height: "100%",
            width: "100%",
            videoId: `${url}`,
            events: {
                "onStateChange": this.onPlayerStateChange
            }
        });
        this.overlay.style.display = "flex";
    }
    onPlayerStateChange(state) {
        try {
            const blockedElem = this.activeBtn.closest(".module__video-item").nextElementSibling;
            const playBtn = this.activeBtn.querySelector("svg").cloneNode(true);
            if (state.data === 0) {
                if (blockedElem.querySelector(".play__circle").classList.contains("closed")) {
                    blockedElem.querySelector(".play__circle").classList.remove("closed");
                    blockedElem.querySelector("svg").remove();
                    blockedElem.querySelector(".play__circle").appendChild(playBtn);
                    blockedElem.querySelector(".play__text").textContent = "play video";
                    blockedElem.querySelector(".play__text").classList.remove("attention");
                    blockedElem.style.opacity = 1;
                    blockedElem.style.filter = "none";
                    blockedElem.setAttribute("data-disabled", "false");
                }
            }
        } catch (e) {}
    }
    init() {
        if (this.btns.length > 0) {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            this.bindTriggers();
            this.bindCloseBtn();
        }
    }
}
exports.default = VideoPlayer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lv4ll":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Difference {
    constructor(oldOfficer, newOfficer, item){
        try {
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.oldItem = this.oldOfficer.querySelectorAll(item);
            this.newItem = this.newOfficer.querySelectorAll(item);
            this.oldCounter = 0;
            this.newCounter = 0;
        } catch (e) {}
    }
    showCards(wraper, count, item) {
        wraper.querySelector(".plus").addEventListener("click", ()=>{
            if (count !== item.length - 2) {
                item[count].style.display = "flex";
                count++;
            } else {
                item[count].style.display = "flex";
                item[this.oldItem.length - 1].remove();
            }
        });
    }
    hideSlide(arg) {
        arg.forEach((el, i, arr)=>{
            if (i !== arr.length - 1) el.style.display = "none";
        });
    }
    bindTrigger() {
        this.showCards(this.oldOfficer, this.oldCounter, this.oldItem);
        this.showCards(this.newOfficer, this.newCounter, this.newItem);
    }
    init() {
        try {
            this.hideSlide(this.oldItem);
            this.hideSlide(this.newItem);
            this.bindTrigger();
        } catch (e) {}
    }
}
exports.default = Difference;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gyZuc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Form {
    constructor(forms){
        this.forms = document.querySelectorAll(forms);
        this.inputs = document.querySelectorAll("input");
        this.message = {
            load: "Загрузка...",
            done: "Данные отправленны!",
            fail: "Ошибка..."
        };
        this.path = "assets/question.php";
    }
    cleareInput() {
        this.inputs.forEach((el)=>{
            el.value = "";
        });
    }
    checkMailInputs() {
        const mailInputs = document.querySelectorAll('[type="email"]');
        mailInputs.forEach((input)=>{
            input.addEventListener("keypress", function(e) {
                if (e.key.match(/[^a-z 0-9 @ \.]/ig)) e.preventDefault();
            });
        });
    }
    initMask() {
        let setCursorPosition = (pos, elem)=>{
            elem.focus();
            if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
            else if (elem.createTextRange) {
                let range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd("character", pos);
                range.moveStart("character", pos);
                range.select();
            }
        };
        function createMask(event) {
            let matrix = "+_ (___) ___-__-__", i = 0, def = matrix.replace(/\D/g, ""), val = this.value.replace(/\D/g, "");
            if (def.length >= val.length) val = def;
            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
            });
            if (event.type === "blur") {
                if (this.value.length == 2) this.value = "";
            } else setCursorPosition(this.value.length, this);
        }
        let inputs = document.querySelectorAll('[name="phone"]');
        inputs.forEach((input)=>{
            input.addEventListener("input", createMask);
            input.addEventListener("focus", createMask);
            input.addEventListener("blur", createMask);
        });
    }
    async postData(url, data) {
        let result = await fetch(url, {
            method: "POST",
            body: data
        });
        return await result.text();
    }
    init() {
        this.checkMailInputs();
        this.initMask();
        this.forms.forEach((el)=>{
            el.addEventListener("submit", (e)=>{
                e.preventDefault();
                let statusMessage = document.createElement("div");
                statusMessage.style.cssText = `
                    margin-top: 12px;
                    font-size: 18px;
                    color: red;
                `;
                el.appendChild(statusMessage);
                statusMessage.innerHTML = this.message.load;
                const formData = new FormData(el);
                setTimeout(()=>{
                    this.postData(this.path, formData).then((response)=>{
                        console.log(response);
                        statusMessage.innerHTML = this.message.done;
                    }).catch((error)=>{
                        console.error(error);
                        statusMessage.innerHTML = this.message.fail;
                    }).finally(()=>{
                        setTimeout(()=>{
                            this.cleareInput();
                            statusMessage.remove();
                        }, 4000);
                    });
                }, 2000);
            });
        });
    }
}
exports.default = Form;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["jQVXF","1SICI"], "1SICI", "parcelRequire181e")

//# sourceMappingURL=modules.18dbc454.js.map
