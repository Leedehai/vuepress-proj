/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e4caf76ae205e2c8e5d19ff35482cad2"
  },
  {
    "url": "assets/css/1.styles.404b6757.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/3.styles.58f6ddc8.css",
    "revision": "b8867da3b8f57780bc3f06f9149e8ca7"
  },
  {
    "url": "assets/css/styles.efe46ffe.css",
    "revision": "039d9b5f979b32b3264c18458b76cd0c"
  },
  {
    "url": "assets/img/cli-new-project2.ef027706.png",
    "revision": "ef02770687fd47302bf49226f9b5a2b9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.404b6757.js",
    "revision": "2f2997c58e73054934ae1d93e6cc716b"
  },
  {
    "url": "assets/js/10.a9a22a87.js",
    "revision": "11ddb4a4ec3ea9b10973710fc0faa92c"
  },
  {
    "url": "assets/js/11.cd1f07b9.js",
    "revision": "c4408f3643ac49bd022d915c6f9a9cfc"
  },
  {
    "url": "assets/js/12.e4a6405a.js",
    "revision": "9faaf3c38515d65b2509534633a5072e"
  },
  {
    "url": "assets/js/13.cb95d33e.js",
    "revision": "22dc19b6ce70996693fc453ceeba74e7"
  },
  {
    "url": "assets/js/14.5cbb75e8.js",
    "revision": "08c41aef0e01dfedb7b1dc5c89bd9976"
  },
  {
    "url": "assets/js/15.e980824b.js",
    "revision": "7607959d1d9cec9bc97a86eaa33a6ae0"
  },
  {
    "url": "assets/js/16.6de65794.js",
    "revision": "22f242a8ec93dd876923c454f5936637"
  },
  {
    "url": "assets/js/17.06429d38.js",
    "revision": "c2e92b149e709596f42c9c48b35907f0"
  },
  {
    "url": "assets/js/18.64b3061d.js",
    "revision": "c27c23f5a22f86ab49bc31efd7eab67c"
  },
  {
    "url": "assets/js/19.9e327734.js",
    "revision": "0cb2b655516a29a754d1c9a9a7bed837"
  },
  {
    "url": "assets/js/2.774508bf.js",
    "revision": "f446207150dfddd1d43226b7c4940de8"
  },
  {
    "url": "assets/js/20.611fb158.js",
    "revision": "b25bef8a830d0f74305f245dd81f738a"
  },
  {
    "url": "assets/js/21.e2542973.js",
    "revision": "9e81550676b9b43060617d32b20389ed"
  },
  {
    "url": "assets/js/3.58f6ddc8.js",
    "revision": "006d8e409bf7c8122cb9726df769be3e"
  },
  {
    "url": "assets/js/4.d6170899.js",
    "revision": "d9001f0fe8d1560d178aac52306a7954"
  },
  {
    "url": "assets/js/5.615aff2c.js",
    "revision": "8345bc7818c9f930914f3c4fa01aad5e"
  },
  {
    "url": "assets/js/6.b98e0cc0.js",
    "revision": "ae261b2ef845fc5797edd11e591dca46"
  },
  {
    "url": "assets/js/7.9b029dfd.js",
    "revision": "aada10a732d3eec05a59429737581157"
  },
  {
    "url": "assets/js/8.6548341b.js",
    "revision": "a2f262db9ac1c8e11125b0c4798a0762"
  },
  {
    "url": "assets/js/9.34331698.js",
    "revision": "dad558f6895c05d6d0f5ec59f54ced06"
  },
  {
    "url": "assets/js/app.efe46ffe.js",
    "revision": "1fc9794a2f47e7a2301ac68c28362432"
  },
  {
    "url": "cli-new-project.png",
    "revision": "ef02770687fd47302bf49226f9b5a2b9"
  },
  {
    "url": "cli-select-features.png",
    "revision": "74dd279f47cd3d432d0aa288dfa0e170"
  },
  {
    "url": "config-ui.png",
    "revision": "e97a682034659cfcfa7e3803cd2b5f22"
  },
  {
    "url": "config/index.html",
    "revision": "1765353c3f4fd78f50a0a0b1acd7d456"
  },
  {
    "url": "custom-view.png",
    "revision": "623e2f13ffff457bddb06b0ed62216cd"
  },
  {
    "url": "dev-guide/plugin-dev.html",
    "revision": "1aa4cafd366dd557e32457215f750e0a"
  },
  {
    "url": "dev-guide/ui-api.html",
    "revision": "f2af2aa3e3ddcff3e631da0d5be81729"
  },
  {
    "url": "dev-guide/ui-info.html",
    "revision": "6c6e717b1685d9b29cf1a68c8e965dce"
  },
  {
    "url": "dev-guide/ui-localization.html",
    "revision": "11540b38cea78c99a17ba3612a4005db"
  },
  {
    "url": "favicon.png",
    "revision": "01e1f19769aa39a37b0fa41732ced01b"
  },
  {
    "url": "guide/browser-compatibility.html",
    "revision": "3188e3eff9df35c8182b33c5e196d021"
  },
  {
    "url": "guide/build-targets.html",
    "revision": "c38bea304a486c78c629e69066d45bcd"
  },
  {
    "url": "guide/cli-service.html",
    "revision": "c76e82daa0c00c5a2ae909d57e3d0df5"
  },
  {
    "url": "guide/creating-a-project.html",
    "revision": "9ca28b090fd0c1dfa2814000e334bc79"
  },
  {
    "url": "guide/css.html",
    "revision": "3dea32d940314c871098116818da391f"
  },
  {
    "url": "guide/deployment.html",
    "revision": "dcf7f3bae4d12cf44c93440ab2c8eef3"
  },
  {
    "url": "guide/html-and-static-assets.html",
    "revision": "d49a81f1d26658825e4896de7cf743bf"
  },
  {
    "url": "guide/index.html",
    "revision": "bf117e372ff0424e46a95be03fe4234e"
  },
  {
    "url": "guide/installation.html",
    "revision": "0ce2bbf7551c319425612e7661b1c18d"
  },
  {
    "url": "guide/mode-and-env.html",
    "revision": "f804dcaae36e0f3b4cfe5bba23be8119"
  },
  {
    "url": "guide/plugins-and-presets.html",
    "revision": "2be50096b06391984c9439849ecaca5f"
  },
  {
    "url": "guide/prototyping.html",
    "revision": "a98c44b25b5a386ef55231baa98242f1"
  },
  {
    "url": "guide/webpack.html",
    "revision": "0770ed42f57db3b3b447d10c0f296d84"
  },
  {
    "url": "index.html",
    "revision": "5e19f4b7b64f006b0b9b9419a04fed59"
  },
  {
    "url": "plugin-search-item.png",
    "revision": "6f65b4e8ae9bd1afa8f0c9cfe64f769c"
  },
  {
    "url": "plugins.png",
    "revision": "ce8ce5bfc34d3ef709895d66fff8396a"
  },
  {
    "url": "screenshot.png",
    "revision": "b09e5bcd945dadfff7e8116d1c46a44d"
  },
  {
    "url": "suggestion.png",
    "revision": "dbac5be64fdb516e564fde02974eb833"
  },
  {
    "url": "task-view.png",
    "revision": "3efc61b1c61f79381daec24ec060b3e3"
  },
  {
    "url": "tasks-ui.png",
    "revision": "4b271c3a1df05f3ba9cec18829ab3fd9"
  },
  {
    "url": "ui-analyzer.png",
    "revision": "89f829eb201f268fc8ef5698ef2f5d9a"
  },
  {
    "url": "ui-new-project.png",
    "revision": "b445678f1a79c36cb74b54971e2959f9"
  },
  {
    "url": "vue-cli-ui-schema.png",
    "revision": "08266803bd50c4ba141a52c81f8e1b0c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
