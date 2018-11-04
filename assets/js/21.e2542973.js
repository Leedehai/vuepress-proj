(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{165:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),a("p",[t._v("The object will be merged into the final webpack config using "),a("a",{attrs:{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-merge"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("If you need conditional behavior based on the environment, or want to directly mutate the config, use a function (which will be lazy evaluated after the env variables are set). The function receives the resolved config as the argument. Inside the function, you can either mutate the config directly, OR return an object which will be merged:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("The internal webpack config is maintained using "),a("a",{attrs:{href:"https://github.com/mozilla-neutrino/webpack-chain",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-chain"),a("OutboundLink")],1),t._v('. The library provides an abstraction over the raw webpack config, with the ability to define named loader rules and named plugins, and later "tap" into those rules and modify their options.')]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("For CSS related loaders, it's recommended to use "),a("router-link",{attrs:{to:"./../config/#css-loaderoptions"}},[t._v("css.loaderOptions")]),t._v(" instead of directly targeting loaders via chaining. This is because there are multiple rules for each CSS file type and "),a("code",[t._v("css.loaderOptions")]),t._v(" ensures you can affect all rules in one single place.")],1)]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("If you want to replace an existing "),a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/base.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Base Loader"),a("OutboundLink")],1),t._v(", for example using "),a("code",[t._v("vue-svg-loader")]),t._v(" to inline SVG files instead of loading the file:")]),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),a("p",[t._v("You will need to familiarize yourself with "),a("a",{attrs:{href:"https://github.com/mozilla-neutrino/webpack-chain#getting-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-chain's API"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config",target:"_blank",rel:"noopener noreferrer"}},[t._v("read some source code"),a("OutboundLink")],1),t._v(" in order to understand how to leverage the full power of this option, but it gives you a more expressive and safer way to modify the webpack config than directly mutate values.")]),t._v(" "),a("p",[t._v("For example, say you want to change the default location of "),a("code",[t._v("index.html")]),t._v(" from "),a("code",[t._v("/Users/username/proj/public/index.html")]),t._v(" to "),a("code",[t._v("/Users/username/proj/app/templates/index.html")]),t._v(". By referencing "),a("a",{attrs:{href:"https://github.com/jantimon/html-webpack-plugin#options",target:"_blank",rel:"noopener noreferrer"}},[t._v("html-webpack-plugin"),a("OutboundLink")],1),t._v(" you can see a list of options you can pass in. To change our template path we can pass in a new template path with the following config:")]),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),a("p",[t._v("The command will print the resolved webpack config to stdout, which also contains hints on how to access rules and plugins via chaining.")]),t._v(" "),a("p",[t._v("You can redirect the output into a file for easier inspection:")]),t._v(" "),t._m(22),a("p",[t._v("Note the output is not a valid webpack config file, it's a serialized format only meant for inspection.")]),t._v(" "),a("p",[t._v("You can also inspect a subset of the config by specifying a path:")]),t._v(" "),t._m(23),a("p",[t._v("Or, target a named rule or plugin:")]),t._v(" "),t._m(24),a("p",[t._v("Finally, you can list all named rules and plugins:")]),t._v(" "),t._m(25),t._m(26),t._v(" "),a("p",[t._v("Some external tools may need access to the resolved webpack config as a file, for example IDEs or command line tools that expect a webpack config path. In that case you can use the following path:")]),t._v(" "),t._m(27),t._m(28)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"working-with-webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-with-webpack","aria-hidden":"true"}},[this._v("#")]),this._v(" Working with Webpack")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"simple-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Simple Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The easiest way to tweak the webpack config is providing an object to the "),s("code",[this._v("configureWebpack")]),this._v(" option in "),s("code",[this._v("vue.config.js")]),this._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  configureWebpack"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyAwesomeWebpackPlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Some webpack options are set based on values in "),a("code",[t._v("vue.config.js")]),t._v(" and should not be mutated directly. For example, instead of modifying "),a("code",[t._v("output.path")]),t._v(", you should use the "),a("code",[t._v("outputDir")]),t._v(" option in "),a("code",[t._v("vue.config.js")]),t._v("; instead of modifying "),a("code",[t._v("output.publicPath")]),t._v(", you should use the "),a("code",[t._v("baseUrl")]),t._v(" option in "),a("code",[t._v("vue.config.js")]),t._v(". This is because the values in "),a("code",[t._v("vue.config.js")]),t._v(" will be used in multiple places inside the config to ensure everything works properly together.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  configureWebpack"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'production'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// mutate config for production...")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// mutate for development...")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"chaining-advanced"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chaining-advanced","aria-hidden":"true"}},[this._v("#")]),this._v(" Chaining (Advanced)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This allows us finer-grained control over the internal config. Below you will see some examples of common modifications done via the "),s("code",[this._v("chainWebpack")]),this._v(" option in "),s("code",[this._v("vue.config.js")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[s("a",{attrs:{href:"#inspecting-the-project-s-webpack-config"}},[this._v("vue inspect")]),this._v(" will be extremely helpful when you are trying to access specific loaders via chaining.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"modifying-options-of-a-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modifying-options-of-a-loader","aria-hidden":"true"}},[this._v("#")]),this._v(" Modifying Options of a Loader")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  chainWebpack"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("rule")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'vue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'vue-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("loader")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'vue-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("tap")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token comment"}},[t._v("// modify the options...")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" options\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"adding-a-new-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-loader","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding a New Loader")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  chainWebpack"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// GraphQL Loader")]),t._v("\n    config"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("rule")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'graphql'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/\\.graphql$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'graphql-tag/loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("loader")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'graphql-tag/loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("end")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"replacing-loaders-of-a-rule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replacing-loaders-of-a-rule","aria-hidden":"true"}},[this._v("#")]),this._v(" Replacing Loaders of a Rule")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  chainWebpack"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" svgRule "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" config"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("rule")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'svg'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// clear all existing loaders.")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// if you don't do this, the loader below will be appended to")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// existing loaders of the rule.")]),t._v("\n    svgRule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uses"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("clear")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// add replacement loader(s)")]),t._v("\n    svgRule\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'vue-svg-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("loader")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'vue-svg-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"modifying-options-of-a-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modifying-options-of-a-plugin","aria-hidden":"true"}},[this._v("#")]),this._v(" Modifying Options of a Plugin")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  chainWebpack"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("plugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'html'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("tap")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token comment"}},[t._v("/* new args to pass to html-webpack-plugin's constructor */")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  chainWebpack"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("plugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'html'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("tap")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        args"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("template "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/Users/username/proj/app/templates/index.html'")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" args\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can confirm that this change has taken place by examining the vue webpack config with the "),s("code",[this._v("vue inspect")]),this._v(" utility, which we will discuss next.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"inspecting-the-project-s-webpack-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inspecting-the-project-s-webpack-config","aria-hidden":"true"}},[this._v("#")]),this._v(" Inspecting the Project's Webpack Config")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Since "),s("code",[this._v("@vue/cli-service")]),this._v(" abstracts away the webpack config, it may be more difficult to understand what is included in the config, especially when you are trying to make tweaks yourself.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("vue-cli-service")]),t._v(" exposes the "),a("code",[t._v("inspect")]),t._v(" command for inspecting the resolved webpack config. The global "),a("code",[t._v("vue")]),t._v(" binary also provides the "),a("code",[t._v("inspect")]),t._v(" command, and it simply proxies to "),a("code",[t._v("vue-cli-service inspect")]),t._v(" in your project.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("vue inspect "),s("span",{attrs:{class:"token operator"}},[this._v(">")]),this._v(" output.js\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v("# only inspect the first rule")]),this._v("\nvue inspect module.rules.0\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("vue inspect --rule vue\nvue inspect --plugin html\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("vue inspect --rules\nvue inspect --plugins\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"using-resolved-config-as-a-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-resolved-config-as-a-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Resolved Config as a File")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("<projectRoot>/node_modules/@vue/cli-service/webpack.config.js\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This file dynamically resolves and exports the exact same webpack config used in "),s("code",[this._v("vue-cli-service")]),this._v(" commands, including those from plugins and even your custom configurations.")])}],!1,null,null,null);e.options.__file="webpack.md";s.default=e.exports}}]);