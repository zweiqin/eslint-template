module.exports = {
	root: true, // 停止在父级目录中寻找（配置文件）
	parserOptions: {
		ecmaVersion: 10, // 可以使用 6、7、8、9 或 10 来指定你想要使用的 ECMAScript 版本
		sourceType: 'module', // "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
		// 表示你想使用的额外的语言特性
		ecmaFeatures: {
			globalReturn: false, // 允许在全局作用域下使用 return 语句
			impliedStrict: false, // 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
			jsx: true, // 启用 JSX
			experimentalObjectRestSpread: false // 启用实验性的 object rest/spread properties 支持
		},
		// parser: 'esprima' // 建议在项目为uniapp项目时使用
		parser: 'babel-eslint' // ESLint 默认使用"espree"（Espree）作为其解析器，你也可以在配置文件中指定一个不同的解析器，"esprima"，Babel-ESLint（'babel-eslint'是一款用于 ESLint 的语法分析器，它支持使用 ESLint 分析所有 babel 兼容的代码）或@typescript-eslint/parser。
	},
	// 在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。插件是相对于 ESLint 进程的当前工作目录解析的
	// plugins: ['a-plugin'],
	// processor: 'a-plugin/a-processor', // 插件可以提供处理器，指定处理器使用由插件名和处理器名组成的串接字符串加上斜杠
	// 可以为特定类型的文件指定处理器
	// overrides: [
	// 	{
	// 		files: ['*.md'],
	// 		processor: 'a-plugin/markdown'
	// 	}
	// ],
	// 可以禁用一组文件的配置文件中的规则
	// overrides: [
	// 	{
	// 		files: ['*-test.js', '*.spec.js'],
	// 		rules: {
	// 			'no-unused-expressions': 'off'
	// 		}
	// 	}
	// ],
	// ESLint 支持在配置文件添加共享设置。可以添加 settings 对象到配置文件，它将提供给每一个将被执行的规则。
	// settings: {
	// 	sharedData: 'Hello'
	// },
	env: {
		browser: true, // 浏览器环境中的全局变量
		node: true, // Node.js 全局变量和 Node.js 作用域
		es6: true // 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
		// commonjs: true, // CommonJS 全局变量和 CommonJS 作用域 (用于 Browserify/WebPack 打包的只在浏览器中运行的代码)
		// 'shared-node-browser': true, // Node.js 和 Browser 通用全局变量
		// worker: true, // Web Workers 全局变量
		// amd: true, // 将 require() 和 define() 定义为像 amd 一样的全局变量
		// mocha: true, // 添加所有的 Mocha 测试全局变量
		// jasmine: true, // 添加所有的 Jasmine 版本 1.3 和 2.0 的测试全局变量
		// jest: true, // Jest 全局变量
		// phantomjs: true, // PhantomJS 全局变量
		// protractor: true, // Protractor 全局变量
		// qunit: true, // QUnit 全局变量
		// jquery: true, // jQuery 全局变量
		// prototypejs: true, // Prototype.js 全局变量
		// shelljs: true, // ShellJS 全局变量
		// meteor: true, // Meteor 全局变量
		// mongo: true, // MongoDB 全局变量
		// applescript: true, // AppleScript 全局变量
		// nashorn: true, // Java 8 Nashorn 全局变量
		// serviceworker: true, // Service Worker 全局变量
		// atomtest: true, // Atom 测试全局变量
		// embertest: true, // Ember 测试全局变量
		// webextensions: true, // WebExtensions 全局变量
		// greasemonkey: true // GreaseMonkey 全局变量
	},
	// 要在配置文件中配置全局变量，请将 globals 配置属性设置为一个对象，该对象包含以你希望使用的每个全局变量
	globals: {
		// var1: 'writable', // "writable" 允许重写变量，等价于旧值：布尔值 true 和字符串值 "writeable"
		// var2: 'readonly', // "readonly" 不允许重写变量，等价于旧值：布尔值 false 和字符串值 "readable"
		// Promise: 'off', // "off" 禁用全局变量
		uni: 'writable',
		UniApp: 'writable'
	},
	// extends 属性值可以是：指定配置的字符串(配置文件的路径、可共享配置的名称、eslint:recommended 或 eslint:all)；字符串数组：每个配置继承它前面的配置。extends 属性值可以省略包名的前缀 eslint-config-。
	// extends 属性值可以由以下组成：①plugin:②包名 (省略了前缀，比如，react)③/④配置名称 (比如 recommended)。"plugin:react/recommended"
	extends: [
		'plugin:vue/recommended', // 如果是特殊情况（被检验的文件的目录下没有eslint-plugin-vue包），则又由于node加载不到该配置文件目录下的eslint-plugin-vue包的原因，故这里应该去掉
		'eslint:recommended'
	],
	// add your custom rules here
	// it is base on https://github.com/vuejs/eslint-config-vue；http://eslint.cn/docs/rules/；https://eslint.vuejs.org/rules/。
	rules: {
		// 配置定义在插件中的一个规则的时候，你必须使用 插件名/规则ID 的形式
		// 关于'plugin:vue/recommended'的扩展：
		// // Base Rules
		// 'vue/comment-directive': 'off',
		// 'vue/jsx-uses-var': 'error',

		// // Priority A: Essential
		// 'vue/multi-word-component-names': 'off', // 这个规则要求组件名总是由多个单词组成，除了根App组件，以及Vue提供的内置组件
		// 'vue/no-arrow-functions-in-watch': 'error', // 该规则不允许在定义观察器时使用箭头函数。箭头函数绑定到它们的父上下文，这意味着它们不能通过this
		// 'vue/no-async-in-computed-properties': 'error', // 在computed properties中禁用异步actions
		// 'vue/no-child-content': 'error', // 不允许元素的子内容被指令覆盖，如v-html或者v-text.（对象）选项有"additionalDirectives"要检查的附加指令的数组，没有v-前缀。默认为空；v-html和v-text总是被检查。
		// 'vue/no-computed-properties-in-data': 'error', // This rule disallow accessing computed properties in data(). The computed property cannot be accessed in data() because is before initialization.
		// 'vue/no-dupe-keys': 'error', // 不允许重复的keys，该规则旨在防止重复的属性名称。（对象）选项有"groups" (string[]) Array of additional groups to search for duplicates. Default is empty.
		// 'vue/no-dupe-v-else-if': 'error', // This rule disallows duplicate conditions in the same v-if / v-else-if chain.
		// 'vue/no-duplicate-attributes': ['error', {
		// 	'allowCoexistClass': true,
		// 	'allowCoexistStyle': true
		// }], // allowCoexistClass (boolean)，allowCoexistStyle (boolean) ... Enables v-bind:class/v-bind:style (opens new window)directive can coexist with the plain class/style attribute. Default is true.
		// 'vue/no-export-in-script-setup': 'error', // Disallow export in <script setup>
		// 'vue/no-mutating-props': 'error', // Disallow mutation of component props
		// 'vue/no-parsing-error': ['error', {
		// 	'abrupt-closing-of-empty-comment': true,
		// 	'absence-of-digits-in-numeric-character-reference': true,
		// 	'cdata-in-html-content': true,
		// 	'character-reference-outside-unicode-range': true,
		// 	'control-character-in-input-stream': true,
		// 	'control-character-reference': true,
		// 	'eof-before-tag-name': true,
		// 	'eof-in-cdata': true,
		// 	'eof-in-comment': true,
		// 	'eof-in-tag': true,
		// 	'incorrectly-closed-comment': true,
		// 	'incorrectly-opened-comment': true,
		// 	'invalid-first-character-of-tag-name': true,
		// 	'missing-attribute-value': true,
		// 	'missing-end-tag-name': true,
		// 	'missing-semicolon-after-character-reference': true,
		// 	'missing-whitespace-between-attributes': true,
		// 	'nested-comment': true,
		// 	'noncharacter-character-reference': true,
		// 	'noncharacter-in-input-stream': true,
		// 	'null-character-reference': true,
		// 	'surrogate-character-reference': true,
		// 	'surrogate-in-input-stream': true,
		// 	'unexpected-character-in-attribute-name': true,
		// 	'unexpected-character-in-unquoted-attribute-value': true,
		// 	'unexpected-equals-sign-before-attribute-name': true,
		// 	'unexpected-null-character': true,
		// 	'unexpected-question-mark-instead-of-tag-name': true,
		// 	'unexpected-solidus-in-tag': true,
		// 	'unknown-named-character-reference': true,
		// 	'end-tag-with-attributes': true,
		// 	'duplicate-attribute': true,
		// 	'end-tag-with-trailing-solidus': true,
		// 	'non-void-html-element-start-tag-with-trailing-solidus': false, // 默认情况下是禁用的，因为Vue.js支持自结束标记。
		// 	'x-invalid-end-tag': true, // 启用关于尚未打开的元素的结束标记的错误。
		// 	'x-invalid-namespace': true// 启用关于无效的错误xmlns属性。
		// }], // 在 <template> 标签下不允许解析错误
		// 'vue/no-ref-as-operand': 'error', // This rule reports cases where a ref is used incorrectly as an operand. You must use .value to access the Ref value.
		// 'vue/no-reserved-component-names': 'error', // disallowVueBuiltInComponents/disallowVue3BuiltInComponents (boolean)...如果true，不允许Vue.js 2/3.x内置组件名。默认值为false.
		// 'vue/no-reserved-keys': 'error', // 这条规则禁止使用保留名称 (打开新窗口)以避免冲突和意外行为，不允许覆盖保留关键字。（对象）选项有reserved (string[])内部附加受限属性的数组groups。默认值为空。groups (string[])要在其中搜索重复项的附加组名数组。默认值为空。
		// 'vue/no-reserved-props': ['error', {
		// 	'vueVersion': 3
		// }], // vueVersion (2 | 3)...指定您正在使用的Vue版本。默认值为3
		// 'vue/no-setup-props-destructure': 'error', // This rule reports the destructuring of props passed to setup causing the value to lose reactivity.析构props传递给setup会导致数值失去反应性。此外，在根范围内析构setup()应该出错，但在嵌套回调或返回的呈现函数中正常:
		// 'vue/no-shared-component-data': 'error', // 将组件的data数据属性强制为函数（除了new Vue），即强制data必须是一个带返回值的函数。因为如果当data的值是一个对象，那它由组件的所有实例共享。
		// 'vue/no-side-effects-in-computed-properties': 'warn', // 该规则旨在防止代码在计算属性和函数中产生副作用。不允许在computed properties中出现副作用。
		// 'vue/no-template-key': 'error', // <template>不允许key属性。Vue.js disallows key attribute on <template> elements.This rule does not report keys placed on <template v-for>. It's valid for Vue.js 3.x（即在vue3中是合法的）.
		// 'vue/no-textarea-mustache': 'error', // Interpolation on textareas (<textarea>{{text}}</textarea>) won't work. Use v-model instead.
		// 'vue/no-unused-components': 'warn', // 不允许注册模板中未使用的组件
		// 'vue/no-unused-vars': 'warn', // 不允许在v-for或者范围内的属性出现未使用的变量定义。Disallow unused variable definitions of v-for directives or scope attributes。（对象）选项有ignorePattern当v-for指令或范围属性的定义与ignorePattern正则表达式匹配时，禁用报告。系统默认值null
		// 'vue/no-use-computed-property-like-method': 'off', // Disallow use computed property like method
		// 'vue/no-use-v-if-with-v-for': ['warn', {
		// 	'allowUsingIterationVar': false
		// }], // 该规则旨在防止使用v-for指令连同v-if指令。（对象）选项有allowUsingIterationVar (boolean) Enables The v-if directive use the reference which is to the variables which are defined by the v-for directives. Default is false.
		// 'vue/no-v-text-v-html-on-component': 'off', // 不允许组件上的v-text / v-html
		// 'vue/require-component-is': 'error', // <component>标签需要v-bind:is属性。Require v-bind:is of <component> elements。可以使用同一个挂载点，并使用保留的<component>元素并动态绑定到其is属性。
		// 'vue/require-prop-type-constructor': 'error', // Require prop type to be a constructor。它将捕捉最常犯的错误，即使用字符串而不是构造函数。
		// 'vue/require-render-return': 'error', // render 函数必须有一个返回值。Enforce render function to always return value
		// 'vue/require-v-for-key': 'error', // 保证 v-bind:key 和 v-for 指令成对出现。Require v-bind:key with v-for directives
		// 'vue/require-valid-default-prop': 'error', // 检查默认的prop值是否有效。Enforce props default values to be valid。 It should report an error when default value for type Array or Object is not returned using function.
		// 'vue/return-in-computed-property': ['error', {
		// 	'treatUndefinedAsUnspecified': true
		// }], // 保证computed属性中有return语句。This rule enforces that a return statement is present in computed properties and functions.（对象）选项有"treatUndefinedAsUnspecified": true(默认值)不允许使用隐式返回未定义的return声明。
		// 'vue/return-in-emits-validator': 'error', // 该规则强制要求return语句存在于emits验证器。
		// 'vue/use-v-on-exact': 'error', // 当有另一个v-on时，此规则强制要求使用exact修饰语。
		// 'vue/valid-attribute-name': 'error', // Require valid attribute names。This rule detects invalid HTML attributes.
		// 'vue/valid-define-emits': 'error', // This rule checks whether defineEmits compiler macro is valid.
		// 'vue/valid-define-props': 'error', // This rule checks whether defineProps compiler macro is valid.
		// 'vue/valid-next-tick': 'error', // Enforce valid nextTick function calls。Calling Vue.nextTick or vm.$nextTick without passing a callback and without awaiting the returned Promise is likely a mistake (probably a missing await).
		// 'vue/valid-template-root': 'error', // 强制校验 template 根节点。Enforce valid template root。This rule checks whether every template root is valid.
		// 'vue/valid-v-bind': 'error', // 强制校验 v-bind 指令。Enforce valid v-bind directives
		// 'vue/valid-v-cloak': 'error', // 强制校验 v-cloak 指令。强制校验 v-bind 指令。Enforce valid v-bind directives
		// 'vue/valid-v-else-if': 'error', // 强制校验 v-else-if 指令。Enforce valid v-else-if directives
		// 'vue/valid-v-else': 'error', // 强制校验 v-else 指令。Enforce valid v-else directives
		// 'vue/valid-v-for': 'error', // 强制校验 v-for 指令。Enforce valid v-for directives
		// 'vue/valid-v-html': 'error', // 强制校验 v-html 指令。Enforce valid v-html directives
		// 'vue/valid-v-if': 'error', // 强制校验 v-if 指令。Enforce valid v-if directives
		// 'vue/valid-v-model': 'error', // 强制校验 v-model 指令。Enforce valid v-model directives
		// 'vue/valid-v-on': 'error', // 强制校验 v-on 指令。Enforce valid v-on directives
		// 'vue/valid-v-once': 'error', // 强制校验 v-once 指令。Enforce valid v-once directives
		// 'vue/valid-v-pre': 'error', // 强制校验 v-pre 指令。Enforce valid v-pre directives
		// 'vue/valid-v-show': 'error', // 强制校验 v-show 指令。Enforce valid v-show directives
		// 'vue/valid-v-slot': 'error', // 强制校验 v-slot 指令。Enforce valid v-slot directives。allowModifiers (boolean)允许在的参数中使用修饰符v-slot指令。紧随其后的修饰符v-slot仍然不被允许，默认值false.
		// 'vue/valid-v-text': 'error', // 强制校验 v-text 指令。Enforce valid v-text directives

		// // Priority A: Essential for Vue.js 3.x
		// 'vue/no-deprecated-data-object-declaration': 'error', // 不允许对data使用不推荐使用的对象声明，例如不推荐对象的形式
		// 'vue/no-deprecated-destroyed-lifecycle': 'error', // Disallow using deprecated destroyed and beforeDestroy lifecycle hooks。而是使用beforeUnmount，unmounted
		// 'vue/no-deprecated-dollar-listeners-api': 'error', // 不允许使用已弃用$listeners
		// 'vue/no-deprecated-dollar-scopedslots-api': 'error', // 不允许使用已弃用$scopedSlots
		// 'vue/no-deprecated-events-api': 'error', // Disallow using deprecated events api。This rule reports use of deprecated $on, $off $once api.(in Vue.js 3.0.0+).
		// 'vue/no-deprecated-filter': 'error', // 不允许使用不推荐使用的过滤器语法
		// 'vue/no-deprecated-functional-template': 'error', // 不允许使用已弃用的functional模板
		// 'vue/no-deprecated-html-element-is': 'error', // Disallow using deprecated the is attribute on HTML elements
		// 'vue/no-deprecated-inline-template': 'error', // 不允许使用已弃用inline-template属性
		// 'vue/no-deprecated-props-default-this': 'error', // Disallow deprecated this access in props default function
		// 'vue/no-deprecated-router-link-tag-prop': 'error', // Disallow using deprecated tag property on RouterLink
		// 'vue/no-deprecated-scope-attribute': 'error', // Disallow deprecated scope attribute(in Vue.js 2.5.0+)
		// 'vue/no-deprecated-slot-attribute': 'error', // Disallow deprecated slot attribute
		// 'vue/no-deprecated-slot-scope-attribute': 'error', // Disallow deprecated slot-scope attribute
		// 'vue/no-deprecated-v-bind-sync': 'off', // Disallow use of deprecated .sync modifier on v-bind directive。考虑到elementui的vue2.x版本的组件上使用.sync的情况
		// 'vue/no-deprecated-v-is': 'off', // Disallow deprecated v-is directive
		// 'vue/no-deprecated-v-on-native-modifier': 'off', // Disallow using deprecated .native modifiers
		// 'vue/no-deprecated-v-on-number-modifiers': 'off', // Disallow using deprecated number (keycode) modifiers
		// 'vue/no-deprecated-vue-config-keycodes': 'error', // Disallow using deprecated Vue.config.keyCodes
		// 'vue/no-expose-after-await': 'error', // Disallow asynchronously registered expose。This rule reports usages of expose() and defineExpose() after an await expression.In the 'setup() function'/'<script setup>', expose()/defineExpose() should be registered synchronously.
		// 'vue/no-lifecycle-after-await': 'error', // 不允许异步注册的生命周期挂钩。In setup() function, onXXX lifecycle hooks should be registered synchronously.
		// 'vue/no-v-for-template-key-on-child': 'off', // Disallow key of <template v-for> placed on child elements。此规则针对Vue.js 3.x。如果您使用的是Vue.js 2.x，请启用vue/no-v-for-template-key。不要同时启用两个规则；它们是相互冲突的。
		// 'vue/no-watch-after-await': 'error', // 不允许异步注册watch。In setup() function, watch() should be registered synchronously.但是，This rule is not reported when using the stop handle.
		// 'vue/prefer-import-from-vue': 'error', // Enforce import from 'vue' instead of import from '@vue/*'
		// 'vue/require-slots-as-functions': 'error', // Enforce properties of $slots to be used as a function。this.$slots.default在Vue.js 2.x中是一个VNode数组，但在Vue.js 3.x中更改为一个返回VNode数组的函数。
		// 'vue/require-toggle-inside-transition': 'error', // Require control the display of the content inside <transition>。The element inside `<transition>` is expected to have a `v-if` or `v-show` directive.
		// 'vue/valid-v-is': 'error', // Enforce valid v-is directives。
		// 'vue/valid-v-memo': 'error', // Enforce valid v-memo directives。

		// // Priority A: Essential for Vue.js 2.x
		// 'vue/no-custom-modifiers-on-v-model': 'error', // 不允许在组件上使用v-model上的自定义的修饰符，如<MyComponent v-model.aaa="foo" />
		// 'vue/no-multiple-template-root': 'error', // 不允许向模板添加多个根节点
		// 'vue/no-v-for-template-key': 'error', // Disallow key attribute on <template v-for>。在Vue.js 2.x中，不允许key属性在<template>元素上。此规则针对Vue.js 2.x。如果您使用的是Vue.js 3.x，请启用vue/no-v-for-template-key-on-child。不要同时启用两个规则；它们是相互冲突的。
		// 'vue/no-v-model-argument': 'off', // 不允许向自定义组件的v-model上添加参数
		// 'vue/valid-model-definition': 'error', // Require valid keys in model option
		// 'vue/valid-v-bind-sync': 'error', // Enforce valid .sync modifier on v-bind directives

		// // Priority B: Strongly Recommended
		// 'vue/attribute-hyphenation': ['error', 'always', {
		// 	'ignore': []
		// }], // 该规则强制在Vue模板中的自定义组件上使用带连字符的属性名称（短横线命名）。（字符串）选项"always"(默认)使用连字符名称，"never"除了被忽略的名字外，不要使用连字符的名字。（对象）选项"ignore"被忽略名称的数组
		// 'vue/component-definition-name-casing': ['error', 'PascalCase'], // 对组件定义名称（name）强制使用特定的大小写。（字符串）选项有"PascalCase" (default)enforce component definition names to pascal case，"kebab-case" enforce component definition names to kebab case。旧版的是'vue/name-property-casing': 'off'。
		// 'vue/first-attribute-linebreak': ['error', {
		// 	'singleline': 'ignore',
		// 	'multiline': 'below'
		// }], // 该规则旨在为第一个属性强制执行一致的位置。（对象）选项有singleline当属性在单行上时，第一个属性的位置，默认值为"ignore"，其它"below"在第一个属性前需要换行符，"beside"不允许在第一个属性前换行；multiline当属性跨多行时，第一个属性的位置，默认值为"below".
		// 'vue/html-closing-bracket-newline': ['error', {
		// 	'singleline': 'never',
		// 	'multiline': 'always'
		// }], // 此规则在标签的右括号前强制换行(或不换行)。（对象）选项有singleline，"never"(默认)/"always"，单行元素的配置，如果元素没有属性或者最后一个属性与左括号在同一行，那么它就是一个单行元素。multiline多行元素的配置，"never"/"always"(默认)，如果最后一个属性不在左括号的同一行，它就是一个多行元素。
		// 'vue/html-closing-bracket-spacing': ['error', {
		// 	'startTag': 'never',
		// 	'endTag': 'never',
		// 	'selfClosingTag': 'always'
		// }], // 这条规则的目的是在标签结束括号之前强制执行一致的间距样式>。（对象）选项有startTag ("always" | "never")的设置>开始标签(例如<div>).默认值为"never"，endTag ("always" | "never")的设置>结束标签(例如</div>).默认值为"never"，selfClosingTag ("always" | "never")的设置/>自关闭标签(例如<div/>).默认值为"always".
		// 'vue/html-end-tags': 'error', // Enforce end tag style
		// 'vue/html-indent': ['error', 'tab', {
		// 	// 2对象attribute (integer)属性缩进的乘数，默认值为1；baseIndent (integer)顶级语句的缩进倍数，默认值为1，"const"；closeBracket (integer | object)右括号缩进的倍数，默认值为0；alignAttributesVertically (boolean)多行情况下，属性是否应与第一个属性垂直对齐的条件，默认值为true；ignores (string[])忽略节点的选择器。
		// 	'attribute': 1,
		// 	'baseIndent': 1,
		// 	'closeBracket': 0,
		// 	'alignAttributesVertically': true,
		// 	'ignores': []
		// }], // 此规则强制在标签中使用一致的缩进样式，默认样式是两个空格。选项：1数字或字符串type (number | "tab")缩进的类型，默认值为2，如果这是一个数字，那就是一次缩进的空格数，如果这是"tab"，它使用一个制表符对应一个缩进。
		// 'vue/html-quotes': ['error', 'double', {
		// 	'avoidEscape': false
		// }], // 强制HTML属性的引号样式。1字符串选项:"double"(默认)...需要双引号。"single"...需要单引号。 2对象选项:avoidEscape如果true，允许字符串使用单引号或双引号，只要字符串包含否则必须转义的引号。
		// 'vue/html-self-closing': ['error', {
		// 	'html': {
		// 		'void': 'any',
		// 		'normal': 'any',
		// 		'component': 'any'
		// 	},
		// 	'svg': 'always',
		// 	'math': 'always'
		// }], // 为没有内容的标签Enforce self-closing style。（对象）选项html.void ("never" by default)如<img>，html.normal ("always" by default)如<div />，html.component ("always" by default)，svg("always" by default)，math("always" by default)。每个选项都可以设置为下列值之一:"always"，"never"，"any"。
		// 'vue/max-attributes-per-line': [
		// 	'error',
		// 	{
		// 		singleline: {
		// 			max: 8
		// 		},
		// 		multiline: {
		// 			max: 4
		// 		}
		// 	}
		// ], // 限制每行的最大属性数以提高可读性。（对象）选项singleline.max (number)当开始标记在单行中时，每行的最大属性数。默认值为1.这可以是{ singleline: 1 }代替{ singleline: { max: 1 }}；multiline.max (number)当开始标记在多行中时，每行的最大属性数。默认值为1.这可以是{ multiline: 1 }代替{ multiline: { max: 1 }}。
		// 'vue/multiline-html-element-content-newline': ['error', {
		// 	'ignoreWhenEmpty': true,
		// 	'ignores': ['pre', 'textarea'],
		// 	'allowEmptyLines': true
		// }], // 在多行元素的内容前后需要换行符。（对象）选项ignoreWhenEmpty当元素没有内容时禁用报告，系统默认值true；ignores元素名称忽略换行符样式的配置。系统默认值["pre", "textarea", ...INLINE_ELEMENTS]；allowEmptyLines如果true，它允许内容周围有空行。系统默认值false。
		// 'vue/mustache-interpolation-spacing': ['error', 'always'], // Enforce unified spacing in mustache interpolations。字符串选项"always"(默认)表达式和花括号之间应该有一个空格。"never"...表达式和花括号之间不要有空格。
		// 'vue/no-multi-spaces': ['error', {
		// 	'ignoreProperties': false
		// }], // Disallow multiple spaces。（对象）选项有ignoreProperties，whether or not objects' properties should be ignored，default false。
		// 'vue/no-spaces-around-equal-signs-in-attribute': 'error', // Disallow spaces around equal signs in attribute。HTML5 allows spaces around equal signs. But space-less is easier to read, and groups entities better together.
		// 'vue/no-template-shadow': 'warn', // Disallow variable declarations from shadowing variables declared in the outer scope。no-template-shadow should report variable definitions of v-for directives or scope attributes if they shadow the variables in parent scopes.
		// 'vue/one-component-per-file': 'off', // Enforce that each component should be in its own file。This rule checks if there is only one component per file。
		// 'vue/prop-name-casing': ['error', 'camelCase'], // 对Vue组件中的props的属性名称强制使用特定的大小写。字符串选项有"camelCase" (default)，"snake_case"。
		// 'vue/require-default-prop': 'off', // Require default value for props。This rule requires default value to be set for each props that are not marked as required (except Boolean props).
		// 'vue/require-prop-types': 'error', // Require type definitions in props。该规则强制要求props语句包含类型定义。
		// 'vue/singleline-html-element-content-newline': 'off', // Require a line break before and after the contents of a singleline element。（对象）选项有ignoreWhenNoAttributes当给定元素没有属性时，允许在一行中包含内容，系统默认值true。ignoreWhenEmpty当元素没有内容时禁用报告，系统默认值true。ignores元素名称忽略换行符样式的配置，系统默认值["pre", "textarea", ...INLINE_ELEMENTS]。
		// 'vue/v-bind-style': ['error', 'shorthand'], // This rule enforces v-bind directive style which you should use shorthand or long form。字符串选项有"shorthand" (default)，"longform"。
		// 'vue/v-on-style': ['error', 'shorthand'], // This rule enforces v-on directive style which you should use shorthand or long form。字符串选项有"shorthand" (default)，"longform"。
		// 'vue/v-slot-style': ['error', {
		// 	'atComponent': 'v-slot',
		// 	'default': 'shorthand',
		// 	'named': 'shorthand'
		// }], // This rule enforces v-slot directive style which you should use shorthand or long form。1字符串选项:"longform"，"shorthand"。 2对象选项:atComponent，default，named。可选值有"shorthand" use # shorthand，"longform" use v-slot: directive notation，"v-slot" use v-slot without that argument。

		// // Priority B: Strongly Recommended for Vue.js 3.x
		// 'vue/require-explicit-emits': ['error', {
		// 	'allowProps': false
		// }], // This rule reports event triggers not declared with the emits option。（对象）选项有"allowProps"If true, allow event names defined in props，default false。
		// 'vue/v-on-event-hyphenation': ['warn', 'always', {
		// 	'autofix': false,
		// 	'ignore': []
		// }], // This rule enforces using hyphenated v-on event names on custom components in Vue templates。1字符串选项:"always"(default)，"never"。 2对象选项:autofix，If true, enable autofix。ignore，Array of ignored names。

		// // Priority C: Recommended
		// 'vue/attributes-order': ['error', {
		// 	'order': [
		// 		'DEFINITION',
		// 		'LIST_RENDERING',
		// 		'CONDITIONALS',
		// 		'RENDER_MODIFIERS',
		// 		'GLOBAL',
		// 		['UNIQUE', 'SLOT'],
		// 		'TWO_WAY_BINDING',
		// 		'OTHER_DIRECTIVES',
		// 		'OTHER_ATTR',
		// 		'EVENTS',
		// 		'CONTENT'
		// 	],
		// 	'alphabetical': false
		// }], // 该规则旨在强制组件属性的排序。1对象选项。2字符串选项。标签里的各类属性的排序顺序，不符合规则则报错（原先默认的为警告）
		// 'vue/component-tags-order': ['error', {
		// 	'order': [['script', 'template'], 'style']
		// }], // order ((string|string[])[])顶级元素名称的顺序。系统默认值[ [ "script", "template" ], "style" ]。也可以是CSS选择器，比如script[setup]和i18n:not([locale=en])。
		// 'vue/no-lone-template': ['error', {
		// 	'ignoreAccessible': false
		// }], // 这条规则旨在消除不必要的和潜在的混乱<template>。在Vue.js 2.x中，没有特定指令的<template>元素会没有效果。在Vue.js 3.x中，没有特定指令的<template>元素虽能呈现<template>元素，但在大多数情况下，这可能不是您想要的。（对象）选项ignoreAccessibleIf true, ignore accessible <template> elements，default false，this option is useless if you are using Vue.js 2.x.
		// 'vue/no-multiple-slot-args': 'error', // This rule disallows to pass multiple arguments to scoped slots。
		// 'vue/no-v-html': 'off', // 禁止使用v-html，以防止XSS攻击，即降低将潜在的不安全/非转义html注入浏览器导致跨站点脚本(XSS)攻击的风险。
		// 'vue/order-in-components': ['error', {
		// 	'order': [
		// 		'el',
		// 		'name',
		// 		'key',
		// 		'parent',
		// 		'functional',
		// 		['delimiters', 'comments'],
		// 		['components', 'directives', 'filters'],
		// 		'extends',
		// 		'mixins',
		// 		['provide', 'inject'],
		// 		'ROUTER_GUARDS',
		// 		'layout',
		// 		'middleware',
		// 		'validate',
		// 		'scrollToTop',
		// 		'transition',
		// 		'loading',
		// 		'inheritAttrs',
		// 		'model',
		// 		['props', 'propsData'],
		// 		'emits',
		// 		'setup',
		// 		'asyncData',
		// 		'data',
		// 		'fetch',
		// 		'head',
		// 		'computed',
		// 		'watch',
		// 		'watchQuery',
		// 		'LIFECYCLE_HOOKS',
		// 		'methods',
		// 		['template', 'render'],
		// 		'renderError'
		// 	]
		// }], // Enforce order of properties in components。（对象）选项有order ((string | string[])[])属性的顺序。元素是属性名或下列组之一:LIFECYCLE_HOOKS，Vue生命周期事件，按照它们被调用的顺序。ROUTER_GUARDS: Vue路由器导航防护装置，按照它们被调用的顺序。
		// 'vue/this-in-template': ['error', 'never'], // Disallow usage of this in template。字符串选项"always"，"never" (default)

		// // Uncategorized
		// 'vue/block-lang': ['error', {
		// 	script: {
		// 		lang: ['ts', 'js'],
		// 		allowNoLang: true
		// 	},
		// 	style: {
		// 		lang: ['less', 'sass', 'scss', 'css'],
		// 		allowNoLang: true
		// 	}
		// }], // This rule disallows the use of languages other than those available in the your application for the lang attribute of block elements。（对象）选项。值有lang指定的可用值lang块的属性，如果有多种语言可用，请将它们指定为一个数组，如果不指定，将不允许任何语言、allowNoLang如果true，允许lang未指定属性(允许使用块的默认语言)。
		// 'vue/block-tag-newline': ['error', {
		// 	'singleline': 'consistent',
		// 	'multiline': 'consistent',
		// 	'maxEmptyLines': 1
		// }], // 在'打开块级标记'之后和'关闭块级标记'之前强制换行。（对象）选项有singleline单线块的配置；multiline多线块的配置；maxEmptyLines指定允许的最大空行数，默认为0；blocks为每个块名指定。可选值有"always" | "never" | "consistent" | "ignore"。
		// 'vue/component-api-style': ['error',
		// 	['script-setup', 'composition', 'composition-vue2', 'options']], // 强制组件API样式。（数组）选项有"script-setup", "composition", "composition-vue2","options"
		// 'vue/component-name-in-template-casing': ['error', 'PascalCase', {
		// 	'registeredComponentsOnly': true,
		// 	'ignores': []
		// }], // 出于一致性目的，在模板中定义所使用的组件名的样式。1字符串选项"PascalCase"(默认)强制标签名使用pascal大小写，"kebab-case"。2对象选项registeredComponentsOnly如果true，只检查注册的组件(在PascalCase中)。ignores (string[])要忽略的元素名称。globals (string[]) ...要检查的全局注册的组件名。
		// 'vue/component-options-name-casing': ['error', 'PascalCase'], // 此规则旨在在components选项里强制组件名称（左边的）。字符串选项有"PascalCase" (default)，"kebab-case"（can only use kebab case in template），"camelCase"（can't use pascal case in template）。
		// 'vue/custom-event-name-casing': ['error', 'kebab-case', {
		// 	'ignores': []
		// }], // Enforce specific casing for custom event name。1字符串选项。Vue 2推荐使用kebab-case作为自定义事件名称，如this.$emit('myEvent')。在Vue 3中，使用camelCase或kebab-case作为您的自定义事件名称不会限制它在v-on中的使用，然而，遵循JavaScript约定，camelCase（默认）更加自然。2对象选项
		// 'vue/define-emits-declaration': ['error', 'type-based'], // 字符串选项，type-based(默认)强制基于类型的声明，runtime强制运行时声明。此规则仅适用于setup script和lang="ts"。
		// 'vue/define-macros-order': ['error', {
		// 	'order': ['defineProps', 'defineEmits']
		// }], // This rule reports the defineProps and defineEmits compiler macros when they are not the first statements in <script setup> (after any potential import statements or type definitions) or when they are not in the correct order。（对象）选项有order (string[])The order of defineEmits and defineProps macros。
		// 'vue/define-props-declaration': ['error', 'type-based'], // 字符串选项，type-based(默认)强制基于类型的声明，runtime强制运行时声明。此规则仅适用于setup script和lang="ts"。
		// 'vue/html-button-has-type': ['error', {
		// 	'button': true,
		// 	'submit': true,
		// 	'reset': true
		// }], // Disallow usage of button without an explicit type attribute。This rule aims to warn if no type or an invalid type is used on a button type attribute。（对象）选项有button，submit，reset。
		// 'vue/html-comment-content-newline': ['error', {
		// 	'singleline': 'never',
		// 	'multiline': 'never'
		// }, {
		// 	'exceptions': []
		// }], // This rule will enforce consistency of line break after the <!-- and before the --> of comment. It also provides several exceptions for various documentation styles。1对象选项singleline（"never" (default)，"always"），multiline （"never"，"always" (default)）。2对象选项"exceptions" exceptions to the rule。
		// 'vue/html-comment-content-spacing': ['error', 'always', {
		// 	'exceptions': []
		// }], // This rule will enforce consistency of spacing after the <!-- and before the --> of comment. It also provides several exceptions for various documentation styles。1字符串选项"always" (default)，"never"。2对象选项"exceptions" exceptions to the rule。
		// 'vue/html-comment-indent': ['error', 'tab'], // 在HTML注释中强制一致的缩进。选项有type (number | "tab")缩进的类型，默认值为2。如果这是一个数字，那就是一次缩进的空格数，如果这是"tab"，它使用一个制表符对应一个缩进。
		// 'vue/match-component-file-name': ['error', {
		// 	'extensions': ['jsx', 'vue'],
		// 	'shouldMatchCase': false
		// }], // 您可以定义一组文件扩展名，该规则应该验证组件名称。（对象）选项有，"extensions": []要验证的文件扩展名数组（可以使用以下任意组合：".js", ".jsx", ".ts", ".tsx"，以及".vue"扩展），默认值设置为["jsx"]。"shouldMatchCase": false布尔值，指示组件名是否也应与其文件名大小写匹配，默认值设置为false。
		// 'vue/match-component-import-name': 'warn', // 要求注册的组件名与导入的组件名匹配（右边的和导入的）。“匹配”意味着导入的名称与组件对象属性标识符的PascalCase或kebab-case版本相匹配。
		// 'vue/new-line-between-multi-line-property': 'off', // 这条规则的目的是在Vue组件的多行属性之间强制换行，以提高可读性。（对象）选项有minLineOfMultilineProperty，定义多行属性的最小行数，默认值2。
		// 'vue/next-tick-style': ['warn', 'callback'], // This rule enforces whether the callback version or Promise version (which was introduced in Vue v2.1.0) should be used in Vue.nextTick and this.$nextTick。字符串选项，"promise"(默认)需要使用promise版本，"callback"需要使用回调版本（如果您使用低于v2.1.0的Vue版本，请使用此选项。）
		// 'vue/no-bare-strings-in-template': 'off', // 为了能够国际化您的应用程序，您需要避免在模板中使用普通字符串（bare strings）。（对象）选项有allowlist允许的字符串数组。attributes一个对象的关键字是标记名或模式和值，它是一个属性数组，用于检查标记名。directives用于检查文字值的指令名数组。
		// 'vue/no-boolean-default': 'off', // Boolean时，不传的情况下，不写'default: true'就是默认为false，写了就强制是true。与强制执行总是将布尔属性默认为false的HTML标准有关。此规则有争议。字符串选项有'no-default' (default)，'default-false'。
		// 'vue/no-duplicate-attr-inheritance': 'error', // Enforce inheritAttrs to be set to false when using v-bind="$attrs"。该规则旨在防止重复的属性继承。
		// 'vue/no-empty-component-block': 'off', // This rule disallows the <template> <script> <style> block to be empty。除非有src值。valid-template-root验了template就够了。
		// 'vue/no-multiple-objects-in-class': 'error', // Disallow to pass multiple objects into array to class。
		// 'vue/no-potential-component-option-typo': ['error', {
		// 	'presets': [ 'all' ],
		// 	'custom': [],
		// 	'threshold': 1
		// }], // 不允许组件属性中出现潜在的输入错误。（对象）选项有presets，enum type，包含几个常见的vue组件选项集，["all"]与["vue", "vue-router", "nuxt"]相同，系统默认值 ["vue"]。custom，array type，一个存储您自定义组件选项要检测的列表，系统默认值 []。threshold，number type，一个用于控制报告编辑距离上限的数字，系统默认值。
		// 'vue/no-ref-object-destructure': 'warn', // Disallow destructuring of ref objects that can lead to loss of reactivity。
		// 'vue/no-required-prop-with-default': ['error', {
		// 	'autofix': true
		// }], // Enforce props with default values to be optional。
		// 'vue/no-restricted-block': 'off', // 不允许指定的块（根标签）。字符串列表选项。对象列表选项，element指定块元素名称或模式，message指定可选的自定义消息。
		// 'vue/no-restricted-call-after-await': 'off', // 不允许异步调用受限方法。对象列表选项，module指定模块名称，path指定导入的名称或指向该方法的路径，message指定可选的自定义消息。
		// 'vue/no-restricted-class': 'off', // 不允许使用在标签中使用的指定类。字符串列表选项。This rule will only detect classes that are used as strings in your templates。
		// 'vue/no-restricted-component-options': 'off', // 不允许指定的组件的选项。字符串列表选项。数组。对象列表选项，name通过字符串指定组件选项名称或模式，或者通过数组指定路径，message指定可选的自定义消息。
		// 'vue/no-restricted-custom-event': 'off', // 不允许使用指定的自定义事件。字符串列表选项。对象列表选项，event指定事件名称或模式，message指定可选的自定义消息，suggest指定一个可选名称来建议更改。
		// 'vue/no-restricted-html-elements': 'off', // 不允许使用指定的HTML elements。字符串列表选项。对象列表选项，element指定html元素，message指定可选的自定义消息。
		// 'vue/no-restricted-props': 'off', // 不允许使用指定的props。字符串列表选项。对象列表选项，name指定属性的名称或模式，message指定可选的自定义消息，suggest指定一个可选名称来建议更改。
		// 'vue/no-restricted-static-attribute': 'off', // 不允许使用指定的attribute。字符串列表选项。对象列表选项，key指定属性的名称或模式，value指定值文本或模式或true（如果指定，则只有在使用指定值时才会报告，如果true，只有在没有值或者值和键相同的情况下才会报告），element指定元素名称或模式（如果指定，则只有在指定元素上使用时才会报告），message指定可选的自定义消息。
		// 'vue/no-restricted-v-bind': 'off', // 不允许使用指定的argument in v-bind（:的属性）。字符串列表选项。对象列表选项，argument指定参数名称或模式或者null（如果null则它匹配v-bind=），modifiers指定修饰符名称的数组（如果指定，则只有在使用指定的修饰符时才会报告），element指定元素名称或模式（如果指定，则只有在指定元素上使用时才会报告），message指定可选的自定义消息。
		// 'vue/no-static-inline-styles': 'off', // Disallow static inline style attributes（但允许动态:绑定数据变量值的情况），建议将它们分为<style>标签。对象选项有allowBinding，如果true，允许所有的:动态绑定数据的情况，但依然不允许静态绑定（字符串）的情况，默认值false。
		// 'vue/no-template-target-blank': ['error', {
		// 	'allowReferrer': true,
		// 	'enforceDynamicLinks': 'always'
		// }], // Disallow target="_blank" attribute without rel="noopener noreferrer"（为了避免安全漏洞）。（对象）选项有allowReferrer，如果true，则不需要noreferrer，默认false。enforceDynamicLinks ("always" | "never")如果always，则对于href是动态链接，也实施该规则，默认值always.
		// 'vue/no-this-in-before-route-enter': 'error', // 不允许在beforeRouteEnter方法使用this。Because lack of this in the beforeRouteEnter。
		// 'vue/no-undef-components': 'off', // 禁止在<template>里使用未定义的组件。该规则不能检查全局注册的组件和mixins中注册的组件，除非您将它们添加为被忽略模式的一部分。（对象）选项有ignorePatterns，如果组件名与一个或多个模式匹配则不报错。
		// 'vue/no-undef-properties': ['warn', {
		// 	'ignores': [ '/^\\$/' ]
		// }], // 不允许出现未在data中定义的属性。此规则无法检测在其他文件或组件中定义的属性，且如果使用mixins，会有许多误报。（对象）选项有ignores (string[])已经定义的属性名称或模式的数组，或者要从检查中忽略的属性，默认值为["/^\\$/"]。
		// 'vue/no-unsupported-features': 'off', // 此规则不能使用指定版本上不支持的Vue.js语法。（对象）选项有version接受的有效版本范围，ignores可以用这个ignores忽略给定特征的选项。原先的是{'version': '^2.6.10','ignores': []}。
		// 'vue/no-unused-properties': 'off', // 不允许出现未使用的属性。此规则不能在其他组件中使用(例如mixins，或通过$refs属性访问而无法确定的地方)。（对象）选项有groups (string[])用于搜索属性的组数组，默认值为["props"]，数组的值是下列字符串中的一些:"props""data""computed""methods""setup"。deepData (boolean)如果true，则data中定义的属性的对象将被深入搜索，默认值为false。ignorePublicMembers (boolean)默认值为false。
		// 'vue/no-unused-refs': 'off', // 不允许出现未使用的ref。此规则不能在其他组件中使用(例如mixins，或通过$refs.x.$refs方式访问的情况)。
		// 'vue/no-useless-mustaches': ['error', {
		// 	'ignoreIncludesComment': true,
		// 	'ignoreStringEscape': true
		// }], // 不允许不必要的插值表达式。此规则报告带有字符串文字值的插值。（对象）选项有ignoreIncludesComment如果true，则不要报告包含注释的表达式，系统默认值false。ignoreStringEscape如果true，则不要报告带有有用转义的字符串文字，系统默认值false。
		// 'vue/no-useless-v-bind': ['error', {
		// 	'ignoreIncludesComment': true,
		// 	'ignoreStringEscape': true
		// }], // 不允许不必要的v-bind指令。此规则报告v-bind带有一个字符串值。（对象）选项有ignoreIncludesComment如果true，则不要报告包含注释的表达式，系统默认值false。ignoreStringEscape如果true，则不要报告带有有用转义的字符串文字，系统默认值false。
		// 'vue/no-v-text': 'off', // Disallow use of v-text。
		// 'vue/padding-line-between-blocks': ['error', 'always'], // 要求或不允许在块之间填充空行。字符串选项有"always" (default) Requires one or more blank lines。"never" Disallows blank lines。
		// 'vue/padding-line-between-tags': 'off', // Require or disallow newlines between sibling tags in template。数组选项，值是对象：blankLine，always never consistent；prev任何不带括号的标记名；next任何不带括号的标记名。
		// 'vue/prefer-prop-type-boolean-first': 'error', // Enforce Boolean comes first in component prop types。因为考虑到（在父组件）用简写形式使用它时，想为true，也考虑到想为''（但考虑到默认人一般会认为是true）。也考虑到当不使用时，需求为字符串的default（设置default就行）。反正用简写方式传了就需要是true。
		// 'vue/prefer-separate-static-class': 'error', // Require static class names in template to be in a separate class attribute。
		// 'vue/prefer-true-attribute-shorthand': ['error', 'always'], // Require shorthand form attribute when v-bind value is true。（对象）选项有"always" (default)，"never"。反正用简写方式传了就需要是true。
		// 'vue/require-direct-export': 'error', // 该规则旨在要求直接导出组件对象。（对象）选项有"disallowFunctionalComponentFunction" If true, disallow functional component functions, available in Vue 3.x，default false。
		// 'vue/require-emit-validator': 'off', // Require type definitions in emits。
		// 'vue/require-expose': 'off', // Require declare public properties using expose。此规则强制要组件使用显式声明组件的公开属性，即expose。
		// 'vue/require-name-property': 'error', // 此规则需要在组件上设置一个name的属性。
		// 'vue/require-prop-comment': 'off', // This rule enforces that every prop has a comment that documents it。（对象）选项有type，可选值"JSDoc" "line" "block" "any"。
		// 'vue/script-indent': ['error', 'tab', {
		// 	'baseIndent': 0,
		// 	'switchCase': 1,
		// 	'ignores': []
		// }], // 在<script>中强制一致的缩进。字符串选项，TYPE (number | "tab")缩进的类型，默认值为2。对象选项baseIndent (integer)顶级语句的缩进倍数，默认值为0；switchCase (integer)缩进的倍数为case/default条款，默认值为0；ignores (string[])忽略节点的选择器。
		// 'vue/sort-keys': 'off', // Enforce sort-keys in a manner that is compatible with order-in-components。字符串选项，"asc" "desc"。对象选项，caseSensitive，ignoreChildrenOf，ignoreGrandchildrenOf，minKeys，natural。
		// 'vue/static-class-names-order': 'off', // Enforce static class names order。
		// 'vue/v-for-delimiter-style': ['error', 'in'], // 此规则强制在v-for指令应该使用哪个分隔符(in或of)。
		// 'vue/v-on-handler-style': ['warn', 'inline', {
		// 	'ignoreIncludesComment': false
		// }], // 在强制处理v-on指令程序的写作风格。字符串/数组选项有["method", "inline-function"] | ["method", "inline"] | "inline-function" | "inline"。对象选项有ignoreIncludesComment，如果true，则不报告包含注释的inline(inline handlers)或inline-functions（即使首选样式是"method"），但如果仅仅是method的方式则依然会报错，默认值为false。

		// // Extension Rules
		// 'vue/array-bracket-newline': [2, 'consistent'], // Enforce linebreaks after opening and before closing array brackets in <template>
		// 'vue/array-bracket-spacing': [
		// 	2,
		// 	'never',
		// 	{
		// 		singleValue: true,
		// 		objectsInArrays: false,
		// 		arraysInArrays: false
		// 	}
		// ], // Enforce linebreaks after opening and before closing array brackets in <template>
		// 'vue/arrow-spacing': [
		// 	2,
		// 	{
		// 		before: true,
		// 		after: true
		// 	}
		// ], // Enforce consistent spacing before and after the arrow in arrow functions in <template>
		// 'vue/block-spacing': [2, 'always'], // Disallow or enforce spaces inside of blocks after opening block and before closing block in <template>
		// 'vue/brace-style': [
		// 	2,
		// 	'1tbs',
		// 	{
		// 		allowSingleLine: true
		// 	}
		// ], // Enforce consistent brace style for blocks in <template>
		// 'vue/camelcase': 0, // Enforce camelcase naming convention in <template>
		// 'vue/comma-dangle': [2, 'never'], // Enforce consistent spacing before and after commas in <template>
		// 'vue/comma-spacing': [
		// 	2,
		// 	{
		// 		before: false,
		// 		after: true
		// 	}
		// ], // Enforce consistent spacing before and after commas in <template>
		// 'vue/comma-style': [2, 'last'], // Enforce consistent newlines before and after dots in <template>
		// 'vue/dot-location': [2, 'property'], // Enforce consistent newlines before and after dots in <template>
		// 'vue/dot-notation': [
		// 	2,
		// 	{
		// 		allowKeywords: true
		// 	}
		// ], // Enforce dot notation whenever possible in <template>
		// 'vue/eqeqeq': [2, 'always'], // Require the use of === and !== in <template>
		// 'vue/func-call-spacing': 2, // Require or disallow spacing between function identifiers and their invocations in <template>
		// 'vue/key-spacing': [
		// 	2,
		// 	{
		// 		beforeColon: false,
		// 		afterColon: true
		// 	}
		// ], // Enforce consistent spacing between keys and values in object literal properties in <template>
		// 'vue/keyword-spacing': [
		// 	// -强制在关键字前后使用一致的空格。（对象）选项："before": true (默认) "after": true (默认) "overrides"（允许覆盖指定的关键字的空格风格）
		// 	2,
		// 	{
		// 		before: true,
		// 		after: true
		// 	}
		// ], // Enforce consistent spacing before and after keywords in <template>
		// 'vue/max-len': [
		// 	2,
		// 	{
		// 		code: 180,
		// 		tabWidth: 2,
		// 		comments: 180,
		// 		ignoreComments: true,
		// 		ignoreTrailingComments: false,
		// 		ignoreUrls: false,
		// 		ignoreStrings: false,
		// 		ignoreTemplateLiterals: false,
		// 		ignoreRegExpLiterals: false,
		// 		ignoreHTMLAttributeValues: false, // 额外的
		// 		ignoreHTMLTextContents: false // 额外的
		// 	}
		// ], // Enforce a maximum line length in .vue files
		// 'vue/multiline-ternary': [2, 'always-multiline'], // Enforce newlines between operands of ternary expressions in <template>
		// 'vue/no-constant-condition': 2, // Disallow constant expressions in conditions in <template>
		// 'vue/no-empty-pattern': 2, // Disallow empty destructuring patterns in <template>
		// 'vue/no-extra-parens': [
		// 	2,
		// 	'all',
		// 	{
		// 		conditionalAssign: false,
		// 		returnAssign: false,
		// 		nestedBinaryExpressions: false,
		// 		ignoreJSX: 'all',
		// 		enforceForArrowConditionals: false
		// 	}
		// ], // Disallow unnecessary parentheses in <template>
		// 'vue/no-irregular-whitespace': 2, // Disallow irregular whitespace in .vue files
		// 'vue/no-loss-of-precision': 1, // Disallow literal numbers that lose precision in <template> // 额外的
		// 'vue/no-restricted-syntax': 0, // Disallow specified syntax in <template>
		// 'vue/no-sparse-arrays': 2, // Disallow sparse arrays in <template>
		// 'vue/no-useless-concat': 2, // Disallow unnecessary concatenation of literals or template literals in <template>
		// 'vue/object-curly-newline': [
		// 	2,
		// 	{
		// 		consistent: true
		// 	}
		// ], // Enforce consistent line breaks after opening and before closing braces in <template>
		// 'vue/object-curly-spacing': [
		// 	2,
		// 	'always',
		// 	{
		// 		arraysInObjects: true,
		// 		objectsInObjects: true
		// 	}
		// ], // Enforce consistent spacing inside braces in <template>
		// 'vue/object-property-newline': [
		// 	2,
		// 	{
		// 		'allowAllPropertiesOnSameLine': true
		// 	}
		// ], // Enforce placing object properties on separate lines in <template>
		// 'vue/object-shorthand': [2, 'always'], // Require or disallow method and property shorthand syntax for object literals in <template>
		// 'vue/operator-linebreak': [
		// 	2,
		// 	'after',
		// 	{
		// 		overrides: {
		// 			'?': 'before',
		// 			':': 'before'
		// 		}
		// 	}
		// ], // Enforce consistent linebreak style for operators in <template>
		// 'vue/prefer-template': 0, // Require template literals instead of string concatenation in <template>
		// 'vue/quote-props': [2, 'consistent'], // Require quotes around object literal property names in <template>
		// 'vue/space-in-parens': [2, 'never'], // Enforce consistent spacing inside parentheses in <template>
		// 'vue/space-infix-ops': 2, // Require spacing around infix operators in <template>
		// 'vue/space-unary-ops': 2, // Enforce consistent spacing before or after unary operators in <template>
		// 'vue/template-curly-spacing': [2, 'never'], // Require or disallow spacing around embedded expressions of template strings in <template>

		// // Deprecated
		// /*
    //   vue/no-invalid-model-keys
    //   vue/script-setup-uses-vars
    //   vue/v-on-function-call
    // */

		// 官网：http://eslint.cn/docs/rules/
		// 注释的第一句的前面的“-”表示fixable，第一句为权威注释
		// 选项：1字符串："aaa"解，"bbb"解 2对象："ccc": CCC，"ddd": DDD；对象："eee": EEE，"fff": FFF
		// Possible Errors：这些规则与 JavaScript 代码中可能的错误或逻辑错误有关：
		'for-direction': 2, // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
		'getter-return': 2, // 强制 getter 函数中出现 return 语句
		'no-async-promise-executor': 0, // 禁止使用异步函数作为 Promise executor。Promise的函数参数不能有async
		'no-await-in-loop': 0, // 禁止在循环中出现 await
		'no-compare-neg-zero': 2, // 禁止与 -0 进行比较
		'no-cond-assign': 2, // 禁止条件表达式中出现赋值操作符
		'no-console': 1, // 禁用 console
		'no-constant-condition': 2, // 禁止在条件中使用常量表达式 if(true) if(1)
		'no-control-regex': 2, // 禁止在正则表达式中使用控制字符
		'no-debugger': 1, // 禁止使用debugger
		'no-dupe-args': 2, // 禁止 function 定义中出现重名参数。函数参数不能重复
		'no-dupe-keys': 2, // 禁止对象字面量中出现重复的 key。在创建对象字面量时不允许键重复 {a:1,a:1}
		'no-duplicate-case': 2, // 禁止出现重复的 case 标签。switch中的case标签不能重复
		'no-empty': 1, // 禁止出现空语句块。块语句中的内容不能为空
		'no-empty-character-class': 2, // 禁止在正则表达式中使用空字符集。正则表达式中的[]内容不能为空
		'no-ex-assign': 2, // 禁止对 catch 子句的参数重新赋值。禁止给catch语句中的异常参数赋值
		'no-extra-boolean-cast': 2, // -禁止不必要的布尔转换
		'no-extra-parens': [
			// -禁止非必要的括号
			2,
			'all',
			{
				conditionalAssign: false, // 允许在条件语句的测试表达式中的赋值语句周围出现额外的圆括号
				returnAssign: false, // 允许在 return 语句中的赋值语句周围出现额外的圆括号
				nestedBinaryExpressions: false, // 允许在嵌套的二元表达式中出现额外的圆括号
				ignoreJSX: 'all', // 允许在 none/所有/多行/单行的JSX 组件周围出现额外的圆括号,默认为none
				enforceForArrowConditionals: false // 允许在箭头函数体中的三元表达式周围出现额外的圆括号
			}
		],
		'no-extra-semi': 2, // -禁止不必要的分号
		'no-func-assign': 2, // 禁止对 function 声明重新赋值。禁止重复的函数声明
		'no-inner-declarations': 1, // 禁止在嵌套的块中出现变量声明或 function 声明。禁止在块语句中使用声明（变量或函数）。"functions" (默认) 禁止 function 声明出现在嵌套的语句块中；"both" 禁止 function 和 var 声明出现在嵌套的语句块中
		'no-invalid-regexp': 2, // 禁止 RegExp 构造函数中存在无效的正则表达式字符串。禁止无效的正则表达式
		'no-irregular-whitespace': 2, // 禁止不规则的空白。不能有不规则的空格
		'no-misleading-character-class': 2, // 不允许在字符类语法中出现由多个代码点组成的字符
		'no-obj-calls': 1, // 禁止把全局对象作为函数调用。不能调用内置的全局对象，比如Math() JSON()
		'no-prototype-builtins': 1, // 禁止直接调用 Object.prototypes 的内置属性
		'no-regex-spaces': 2, // -禁止正则表达式字面量中出现多个空格。禁止在正则表达式字面量中使用多个空格 /foo bar/
		'no-sparse-arrays': 2, // 禁用稀疏数组， [1,,2]
		'no-template-curly-in-string': 0, // 禁止在常规字符串中出现模板字面量占位符语法
		'no-unexpected-multiline': 2, // 禁止出现令人困惑的多行表达式
		'no-unreachable': 2, // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码。不能有无法执行的代码
		'no-unsafe-finally': 2, // 禁止在 finally 语句块中出现控制流语句
		'no-unsafe-negation': 2, // -禁止对关系运算符的左操作数使用否定操作符
		'require-atomic-updates': 2, // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
		'use-isnan': 2, // 要求使用 isNaN() 检查 NaN。禁止比较时使用NaN，只能用isNaN()
		'valid-typeof': 2, // 强制 typeof 表达式与有效的字符串进行比较。必须使用合法的typeof的值

		// Best Practices：这些规则是关于最佳实践的，帮助你避免一些问题
		'accessor-pairs': 0, // 强制 getter 和 setter 在对象中成对出现。在对象中使用getter/setter
		'array-callback-return': 2, // 强制数组（的特定）方法的回调函数中有 return 语句。from，every，filter，find，findIndex，map，reduce，reduceRight，some，sort。
		'block-scoped-var': 0, // 强制把变量的使用限制在其定义的作用域范围内。块语句中使用var
		'class-methods-use-this': 0, // 强制类（里面的）方法使用 this
		'complexity': [2,
			11], // 指定程序中允许的最大环路复杂度。此规则目的在于通过在项目中设置一个圈复杂度阈值来控制代码的复杂度，因此，它将会在圈复杂度超过配置的阈值时发出警告 (默认是 20)。循环复杂度
		'consistent-return': 0, // 要求 return 语句要么总是指定返回的值，要么不指定。return 后面是否允许省略
		'curly': [2,
			'multi-line'], // -强制所有控制语句使用一致的括号风格。必须使用 if(){} 中的{}。默认选项 "all"，其它multi，multi-line，multi-or-nest，consistent。
		'default-case': 0, // 要求 switch 语句中有 default 分支。switch语句最后必须有default
		'dot-location': [2, 'property'], // -强制在点号之前和之后一致的换行。"object" (默认)，"property"。对象访问符的位置，换行的时候在行首还是行尾
		'dot-notation': [
			2,
			{
				allowKeywords: true
			}
		], // -强制尽可能地使用点号（而不是xx["xxx"]）。设置 allowKeywords 为 false（默认为true），避免对是保留字的属性使用点号，也可以设置为一个正则表达式
		'eqeqeq': [2,
			'always'], // -要求使用 === 和 !==。always（可以有第二个参数，是个对象"null"：always (默认)，never，ignore），smart（除了比较两个字面量的值，比较 typeof 的值，与 null 进行比较 这些情况外）。
		'guard-for-in': 0, // 要求 for-in 循环中有一个 if 语句。for in循环要用if语句过滤
		'max-classes-per-file': [2, 11], // 强制每个文件中包含的的类的最大数量。默认为1
		'no-alert': 1, // 禁止使用alert confirm prompt
		'no-caller': 2, // 禁止使用arguments.caller或arguments.callee
		'no-case-declarations': 2, // 不允许在 case 子句中使用词法声明。该规则禁止词法声明 (let、const、function 和 class) 出现在 case或default 子句中（但var可以），为了保证词法声明语句只在当前 case 语句中有效，要将有词法声明子句包裹在块中。
		'eslint no-div-regex': 0, // -禁止除法操作符显式的出现在正则表达式开始的位置。禁止使用看起来像除法的正则表达式
		'no-else-return': 2, // -禁止 if 语句中 return 语句之后有 else 块。禁止在 else 前有 return。如果if语句里面有return,后面不能跟else语句。allowElseIf: true (默认) ，false
		'no-empty-function': 1, // 禁止出现空函数
		'no-empty-pattern': 2, // 禁止使用空解构模式。如禁止var {} = foo;var {a: []} = foo;function foo({a: {}}) {}等等
		'no-eq-null': 2, // 禁止在没有类型检查操作符的情况下与 null 进行比较。禁止对null使用==或!=运算符。关联eqeqeq这个规则。该规则旨在通过确保与 null 比较时只等于 null，而不同时等于 undefined
		'no-eval': 2, // 禁用 eval()
		'no-extend-native': 2, // 禁止扩展原生类型。禁止扩展native对象。如禁止Object.prototype.extra = 55;
		'no-extra-bind': 2, // -禁止不必要的 .bind() 调用。禁止不必要的函数绑定
		'no-extra-label': 2, // -禁用不必要的标签。如果一个循环中不包含嵌套循环或 switch 语句，对这样的循环使用标签是不必要的。
		'no-fallthrough': 2, // 禁止 case 语句落空。禁止switch穿透
		'no-floating-decimal': 2, // -禁止数字字面量中使用前导和末尾小数点。禁止省略浮点数中的0。如禁止.5，3.
		'no-global-assign': 2, // 禁止对原生对象或只读的全局对象进行赋值
		'no-implicit-coercion': 0, // -禁止使用短符号进行类型转换。禁止隐式转换。有三个主要选项和一个覆盖选项："boolean"(默认是 true)，"number"(默认是 true)，"string"(默认是 true)，"allow" (默认是 empty)如{ "allow": ["!!", "~"] } 。
		'no-implicit-globals': 1, // 禁止在全局范围内使用变量声明和 function 声明
		'no-implied-eval': 2, // 禁止使用类似 eval() 的方法。禁止使用隐式eval
		'no-invalid-this': 2, // 禁止 this 关键字出现在类和类对象之外。禁止无效的this，只能用在构造器，类，对象字面量。该规则 只 在严格模式下生效。如果在 ESLint 配置中设置了 "parserOptions": { "sourceType": "module" }，你的代码即使没有使用 "use strict"指令，也是处于严格模式下的。
		'no-iterator': 0, // 禁止使用__iterator__ 属性
		'no-labels': [
			// 禁用标签语句。禁止标签声明
			2,
			{
				allowLoop: false, // 默认是 false)如果这个选项被设置为 true，该规则忽略循环语句中的标签。
				allowSwitch: true // 默认是 false)如果这个选项被设置为 true，该规则忽略 switch 语句中的标签。
			}
		],
		'no-lone-blocks': 2, // 禁止不必要的嵌套块
		'no-loop-func': 0, // 禁止在循环语句中出现包含不安全引用的函数声明。禁止循环中存在函数。禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
		'no-magic-numbers': 0, // 禁用魔术数字。该规则旨在确保将具体的数字声明为意义明确的常量，从而使代码更加可读并且易于重构。（对象）选项有"ignore","ignoreArrayIndexes","enforceConst","detectObjects"。
		'no-multi-spaces': [
			2,
			{
				ignoreEOLComments: true
			}
		], // -禁止使用多个空格。选项："ignoreEOLComments": true (默认 false) 忽略行尾注释前的多个空格；"exceptions": { "Property": true } ("Property" 是为一个默认指定的节点) 指定要忽略的节点
		'no-multi-str': 2, // 禁止使用多行字符串。字符串不能用\换行
		'no-new': 0, // 禁止使用 new 以避免产生副作用。禁止在使用new构造一个实例后不赋值
		'no-new-func': 2, // 禁止对 Function 对象使用 new 操作符。禁止使用new Function
		'no-new-wrappers': 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符。禁止使用new创建包装实例，new String new Boolean new Number
		'no-octal': 2, // 禁用八进制字面量。禁止使用八进制数字
		'no-octal-escape': 0, // 禁止在字符串中使用八进制转义序列。禁止使用八进制转义序列
		'no-param-reassign': 1, // 禁止对 function 的参数进行重新赋值。（对象）选项："props"（布尔值），"ignorePropertyModificationsFor"（数组）
		'no-proto': 2, // 禁用 __proto__ 属性。
		'no-redeclare': 2, // 禁止重复声明变量。此规则目旨在消除同一作用域中多次声明同一变量。
		'no-restricted-properties': 0, // 禁止使用对象的某些属性。该规则接受一个对象列表，用来指定对象名和属性名。
		'no-return-assign': [2,
			'except-parens'], // 禁止在 return 语句中使用赋值语句。return 语句中不能有赋值表达式。（字符串）选项：except-parens（默认），always
		'no-return-await': 0, // 禁用不必要的 return await。唯一有效是，如果 try/catch 语句中使用 return await 捕获到另一个基于 Promise 的函数的错误，则会出现异常。
		'no-script-url': 0, // 禁止使用 javascript: url。禁止使用javascript:void(0)
		'no-self-assign': 2, // 禁止自我赋值
		'no-self-compare': 2, // 禁止自身比较。唯一肯能会对变量自身做比较时候是当你在测试变量是否是 NaN。
		'no-sequences': 2, // 禁止使用逗号运算符。以下情况除外：在初始化或者更新部分 for 语句时，如果表达式序列被明确包裹在括号中。
		'no-throw-literal': 2, // 禁止抛出异常字面量。禁止抛出字面量错误 throw "error";throw 0;throw undefined;等等
		'no-unmodified-loop-condition': 0, // 禁用一成不变的循环条件
		'no-unused-expressions': 0, // 禁止出现未使用过的表达式。禁止无用的表达式。（对象）选项：allowShortCircuit，allowTernary，allowTaggedTemplates。
		'no-unused-labels': 2, // -禁用出现未使用过的标
		'no-useless-call': 0, // 禁止不必要的 .call() 和 .apply()。
		'no-useless-catch': 2, // 禁止不必要的 catch 子句。只重新抛出原始错误的 catch 子句是冗余的，所以最好不要使用这些不必要的 catch 子句。
		'no-useless-concat': 2, // 禁止不必要的字符串字面量或模板字面量的连接
		'no-useless-escape': 2, // 禁用不必要的转义字符
		'no-useless-return': 2, // -禁止多余的 return 语句

		'no-void': 2, // 禁用 void 操作符
		'no-warning-comments': 0, // 禁止在注释中使用特定的警告术语。不能有警告备注。（对象）选项："terms"数组，"location"字符串。
		'no-with': 2, // 禁用 with 语句
		'prefer-named-capture-group': 0, // 建议在正则表达式中使用命名捕获组
		'prefer-promise-reject-errors': 0, // 要求使用 Error 对象作为 Promise 拒绝的原因
		'radix': 1, // 强制在 parseInt() 使用基数参数。parseInt必须指定第二个参数。（字符串）选项："always"强制提供一个基数（默认的），"as-needed"禁止提供基数10
		'require-await': 2, // 禁止使用不带 await 表达式的 async 函数
		'require-unicode-regexp': 0, // 强制在 RegExp 上使用 u 标志
		'vars-on-top': 0, // 要求所有的 var 声明出现在它们所在的作用域顶部。var必须放在作用域顶部
		'wrap-iife': [2,
			'any'], // -立即执行函数表达式的小括号风格。选项：字符串（"outside" "inside" "any"），对象{"functionPrototypeMethods": true}默认为false
		'yoda': [2, 'never'], // -要求或禁止 “Yoda” 条件。（字符串）选项："never"，"always"

		// Strict Mode：该规则与使用严格模式和严格模式指令有关
		'strict': [2, 'never'], // -要求或禁止使用严格模式指令。（字符串）选项：默认"safe"，"global"，"function"，"never"

		// Variables：这些规则与变量声明有关
		'init-declarations': 0, // 要求或禁止 var 声明中的初始化。声明时必须赋初值。选项：字符串（默认"always"，"never"），对象如"never", { "ignoreForLoopInit": true }用来表明在设置了 "never" 之后，是否允许在 for 循环中变量声明时进行初始化
		'no-delete-var': 1, // 禁止删除变量。不能对var声明的变量使用delete操作符
		'no-label-var': 1, // 不允许标签与变量同名。label名不能与var声明的变量名相同
		'no-restricted-globals': 0, // 禁用特定的全局变量。选项：包含一个字符串列表，每个字符串都是全局受限的。
		'no-shadow': 0, // 禁止变量声明与外层作用域的变量同名。外部作用域中的变量不能与它所包含的作用域中的变量或参数同名。（对象）选项："builtinGlobals" "hoist" "allow"
		'no-shadow-restricted-names': 2, // 禁止将标识符定义为受限的名字。关键字不能被遮蔽。严格模式中规定的限制标识符不能作为声明时的变量名使用
		'no-undef': 2, // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到。不能有未定义的变量。（对象）选项：{ "typeof": false }默认false
		'no-undef-init': 2, // -禁止将变量初始化为 undefined。变量初始化时不能直接给它赋值为undefined
		'no-undefined': 2, // 禁止将 undefined 作为标识符。不允许使用undefined变量
		'no-unused-vars': [
			// 禁止出现未使用过的变量。不能有声明后未被使用的变量或参数
			1,
			// 其它选项：varsIgnorePattern，ignoreRestSiblings，argsIgnorePattern，caughtErrors，caughtErrorsIgnorePattern
			{
				vars: 'all', // all 检测所有变量，包括全局环境中的变量，这是默认值。local 仅仅检测本作用域中声明的变量是否使用，允许不使用全局环境中的变量。
				args: 'none' // after-used - 不检查最后一个使用的参数之前出现的未使用的位置参数，但是检查最后一个使用的参数之后的所有命名参数和所有位置参数。all - 所有命名参数必须使用。none - 不检查参数。
			}
		],
		'no-use-before-define': 2, // 禁止在变量定义之前使用它们。未定义前不能使用。（对象）选项：functions (boolean)，classes (boolean)，variables (boolean)默认都是true

		// Node.js and CommonJS：这些规则是关于Node.js 或 在浏览器中使用CommonJS 的
		'callback-return': 0, // 强制数组方法的回调函数中有 return 语句。强制返回callback函数。允许多次调用回调什么的。选项：数组，包含可能的回调函数名称，默认["callback", "cb", "next"]
		'global-require': 0, // 要求 require() 出现在顶层模块作用域中。强制在模块顶部调用 require()。因为 require() 是同步加载的，在其它地方使用时，会导致性能问题。
		'handle-callback-err': [1,
			'^.*(e|E)rr'], // 要求回调函数中有容错处理。nodejs 处理错误。这个模式期望一个 Error 对象或 null 作为回调的第一个参数。（字符串）选项：默认'err'
		'no-buffer-constructor': 2, // 禁用 Buffer() 构造函数
		'no-mixed-requires': 0, // 声明时不能混用声明类型。（对象）选项：默认{ "grouping": false, "allowCall": false }
		'no-new-require': 2, // 禁止调用 require 时使用 new 操作符。禁止使用new require
		'no-path-concat': 0, // 禁止对 __dirname 和 __filename 进行字符串连接。node中不能使用__dirname或__filename做路径拼接
		'no-process-env': 0, // 禁止使用process.env
		'no-process-exit': 0, // 禁止使用process.exit()
		'no-restricted-modules': 0, // 禁用通过 require 加载的指定模块。如果使用了禁用的指定模块就会报错。选项：该规则有一个或多个字符串作为选项，受限制的模块名称。
		'no-sync': 0, // nodejs 禁止同步方法。选项：该规则有一个对象选项 { allowAtRootLevel: <boolean> }，用来决定同步方法是否允许放置在文件顶层，在任何函数之外，默认为 false。

		// Stylistic Issues：这些规则是关于风格指南的，而且是非常主观的
		'array-bracket-newline': [2,
			'consistent'], // -在数组开括号后和闭括号前强制换行。选项："always"，"never"，"consistent" 对每个括号要求使用一致的换行符，"multiline": true (默认) 如果数组元素内或元素间有换行则要求换行，"minItems": null (默认) 如果数组元素的个数大于等于给定的整数则要求换行。
		'array-bracket-spacing': [
			// -强制数组方括号中使用一致的空格。是否允许非空数组里面有多余的空格。选项："never" (默认)，"always"，有例外情况，用一个对象表示，如{ "singleValue": true, "objectsInArrays": true, "arraysInArrays": true }
			2,
			'never',
			{
				singleValue: true,
				objectsInArrays: false,
				arraysInArrays: false
			}
		],
		'array-element-newline': [2,
			'consistent'], // -强制数组元素间出现换行。选项："always" (默认) ，"never" ，"consistent"，"multiline": <boolean>，"minItems": <number>
		'block-spacing': [2, 'always'], // -禁止或强制在代码块中的同一行的开括号前和闭括号后有空格。选项："always"，"never"
		'brace-style': [
			// -强制在代码块中使用一致的大括号风格。选项："1tbs" (默认) "stroustrup" "allman"
			2,
			'1tbs',
			{
				allowSingleLine: true // 有例外情况，用对象表示，"allowSingleLine"(默认 false) 是否允许块的开括号和闭括号在同一行
			}
		],
		'camelcase': 0, // 强制使用骆驼拼写法命名约定。（对象）选项："properties": "always" (默认)，"properties": "never"，"ignoreDestructuring": false (默认) ，"ignoreDestructuring": true，allow (string[])
		'capitalized-comments': 0, // -强制或禁止对注释的第一个字母大写。选项："always"（默认，小写），"never"。其它（对象）选项：ignorePattern，ignoreInlineComments，ignoreConsecutiveComments。
		'comma-dangle': [2,
			'never'], // -要求或禁止末尾逗号。对象字面量项尾不能有逗号。选项："never" (默认)，"always"，"always-multiline"，"only-multiline"，或对象{ arrays: 'never', objects: 'never', imports: 'never', exports: 'never', functions: 'never' }
		'comma-spacing': [
			// -强制在逗号前后使用一致的空格。（对象）选项：默认{ "before": false, "after": true }
			2,
			{
				before: false,
				after: true
			}
		],
		'comma-style': [2,
			'last'], // -强制使用一致的逗号风格。换行时在行首还是行尾。选项："last"（默认，要求逗号放在数组元素、对象属性或变量声明之后，且在同一行），"first"，（对象）选项"exceptions"
		'computed-property-spacing': [2, 'never'], // -强制在计算的属性的方括号中使用一致的空格。选项："never" (默认) "always"
		'consistent-this': 0, // 当获取当前执行环境的上下文时，强制使用一致的命名。this别名。选项：默认 "that"
		'eol-last': 2, // -要求或禁止文件末尾存在空行。文件以单一的换行符结束。选项："always" (默认) 强制使用换行 (LF) "never"
		'func-call-spacing': 2, // -要求或禁止在函数标识符和其调用之间有空格。选项："never" (默认) 禁止在函数名和开括号之间有空格，"always"
		'func-name-matching': 0, // 选项："always"（默认）或 "never"和一个对象选项，其只有一个 includeCommonJSModuleExports 属性，值为布尔类型，默认为 false，表示该规则会忽略 module.exports 和 module["exports"]
		'func-names': 0, // 要求或禁止使用命名的 function 表达式。函数表达式必须有名字。选项"always" (默认) "as-needed" "never"，和对象选项"generators"
		'func-style': 0, // 强制一致地使用 function 声明或表达式。函数风格，规定只能使用函数声明/函数表达式。选项："expression" (默认) 要求使用函数表达式而不是函数声明，"declaration"，其它（对象）选项"allowArrowFunctions": true (默认为 false) 允许使用箭头函数 (仅在使用 declaration 时启用)
		'function-paren-newline': [2,
			'multiline'], // -强制在函数括号内使用一致的换行。选项："always" "never" "multiline" "multiline-arguments" "consistent" { "minItems": value }
		'id-blacklist': 0, // 禁用指定的标识符。选项：该规则有一个或多个字符串选项，受限制的标识符的名称。
		'id-length': [
			2,
			{
				min: 1,
				max: 36
			}
		], // 强制标识符的最小和最大长度。变量名长度。（对象）选项："min" (默认为 2) "max" (默认无穷大) "properties": always (默认) "properties": never "exceptions"（所允许的特定的标识符名称数组）
		'id-match': 0, // 要求标识符匹配一个指定的正则表达式。命名检测。字符串选项：特定的正则表达式，其它对象选项："properties": true "onlyDeclarations": true "onlyDeclarations": false "ignoreDestructuring": false (默认) "ignoreDestructuring": true
		'implicit-arrow-linebreak': [2,
			'beside'], // -强制隐式返回的箭头函数体的位置。选项："beside" (默认) 禁止在箭头函数体之前出现换行，"below" 要求在箭头函数体之前出现换行。
		'indent': [
			// -强制使用一致的缩进（风格）。选项：空格缩进默认4，tab 缩进"tab"，其它对象选项"SwitchCase"(默认：0)等等
			2,
			'tab',
			{
				SwitchCase: 1
			}
		],
		'jsx-quotes': [2, 'prefer-double'], // -强制在 JSX 属性中一致地使用双引号或单引号。选项："prefer-double" (默认)，"prefer-single"
		'key-spacing': [
			// -强制在对象字面量的属性中键和值之间使用一致的间距。（对象）选项："beforeColon": false (默认) | true，"afterColon": true (默认) | false，"mode": "strict" (默认) | "minimum"，"align": "value" | "colon"，"align"，"singleLine"，"multiLine"
			2,
			{
				// 对象字面量中冒号的前后空格
				beforeColon: false,
				afterColon: true
			}
		],
		'keyword-spacing': [
			// -强制在关键字前后使用一致的空格。（对象）选项："before": true (默认) "after": true (默认) "overrides"（允许覆盖指定的关键字的空格风格）
			2,
			{
				before: true,
				after: true
			}
		],
		'line-comment-position': 0, // 强制行注释的位置。（字符串或对象）选项："position"：above (默认) 强制行注释只在代码上方单独成行，beside 强制行注释只在代码行后面。
		'linebreak-style': [2, 'unix'], // -强制使用一致的换行风格。选项："unix" (默认)，"windows"
		'lines-around-comment': [
			// -要求在注释周围有空行。行前和行后备注
			2,
			{
				beforeBlockComment: true,
				afterBlockComment: true,
				beforeLineComment: false,
				afterLineComment: false,
				allowBlockStart: true,
				allowBlockEnd: true,
				allowObjectStart: true,
				allowObjectEnd: true,
				allowArrayStart: true,
				allowArrayEnd: true,
				allowClassStart: true,
				allowClassEnd: true
			}
		],
		'lines-between-class-members': [
			2,
			'always',
			{
				exceptAfterSingleLine: false
			}
		], // -要求或禁止类成员之间出现空行。选项："always"(默认) "never"，其它（对象）选项"exceptAfterSingleLine": false(默认)不要跳过对单行类成员之后的空行的检查
		'max-depth': [2, 5], // 强制可嵌套的块的最大深度。嵌套块深度。选项：数字或对象，"max" (默认 4) 强制块语句的最大可嵌套深度
		'max-len': [
			// 强制一行的最大长度。选项：数字或对象
			2,
			{
				code: 180,
				tabWidth: 2,
				comments: 180,
				ignoreComments: true,
				ignoreTrailingComments: false,
				ignoreUrls: false,
				ignoreStrings: false,
				ignoreTemplateLiterals: false,
				ignoreRegExpLiterals: false
			}
		],
		'max-lines': [
			2,
			{
				max: 999,
				skipBlankLines: true,
				skipComments: true
			}
		], // 强制最大行数。选项："max" (默认 300) 强制一个文件的最大行数，"skipBlankLines": true 忽略空白行，"skipComments": true 忽略只包含注释的行
		'max-lines-per-function': [
			2,
			{
				max: 250,
				skipBlankLines: true,
				skipComments: true,
				IIFEs: true
			}
		], // 强制函数最大代码行数。选项："max" (默认 50) 强制在函数中的最大行数，"skipBlankLines" (默认 false) 忽略纯粹由空格组成的行，"skipComments" (默认 false) 忽略只包含注释的行，"IIFEs" (默认 false) 包括 IIFE 中包含的任何代码。
		'max-nested-callbacks': [2, 5], // 强制回调函数最大嵌套深度。选项：数字或对象，"max" (默认 10) 强制回调函数最大可嵌套深度
		'max-params': [2, 6], // 强制函数定义中最多允许的参数数量。函数最多只能有5个参数。选项：数字或对象，"max" (默认 3) 强制函数定义中最大参数个数
		'max-statements': [2,
			250], // 强制函数块最多允许的的语句数量。函数内最多有几个声明。选项：数字或对象，max 属性，"ignoreTopLevelFunctions": true 忽略顶级函数
		'max-statements-per-line': [
			2,
			{
				max: 3
			}
		], // 强制每一行中所允许的最大语句数量。选项："max" 属性是可选的（默认为 1)
		'multiline-comment-style': 0, // -强制对多行注释使用特定风格。（字符串）选项："starred-block" (默认): 禁止使用连续的行注释来表示块注释，另外要求块注释的每行之前有一个 *，"bare-block": 禁止使用连续的行注释来表示块注释，并且禁止块注释每行前有一个"*"，"separate-lines": 禁用块注释，使用连续的行注释。
		'multiline-ternary': [2,
			'always-multiline'], // 要求或禁止在三元操作数中间换行。选项："always" (默认) 强制三元操作数之间有换行，"always-multiline" 如果表达式跨越多个行，则在三元表达式的操作数之间强制换行，"never" 禁止三元操作数之间有换行 (强制整个三元表达式在同一行)
		'new-cap': [
			// 要求构造函数首字母大写。函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用。（对象）选项："newIsCap": true (默认) "newIsCap": false "capIsNew": true(默认)  "newIsCapExceptions" "newIsCapExceptionPattern" "capIsNewExceptions" "capIsNewExceptionPattern" "properties": true (默认) 。
			2,
			{
				newIsCap: true,
				capIsNew: false
			}
		],
		'new-parens': [2,
			'always'], // -强制或禁止调用无参构造函数时有圆括号。new时必须加小括号。选项："always" 强制括号后的新构造函数没有参数（默认），"never" 强制在没有参数的新构造函数后不出现任何圆括号。
		'newline-per-chained-call': [
			2,
			{
				ignoreChainWithDepth: 2
			}
		], // -要求方法链中每个调用都有一个换行符。选项："ignoreChainWithDepth" (默认为 2) 允许在同一行成链的深度
		'no-array-constructor': 0, // 禁用 Array 构造函数。禁止使用数组构造器
		'no-bitwise': 2, // 禁止使用按位运算符
		'no-continue': 0, // 禁止使用continue
		'no-inline-comments': 0, // 禁止使用内联注释。禁止行内备注
		'no-lonely-if': 2, // -禁止 if 作为唯一的语句出现在 else 语句中。禁止else语句内只有if语句
		'no-mixed-operators': 0, // 禁止混合使用不同的操作符。选项：groups (string[][]) - 指定要检查的操作符分组，allowSamePrecedence (boolean) - 指定是否允许混合运算符具有相同的优先级，默认为 true
		'no-mixed-spaces-and-tabs': 2, // 禁止空格和 tab 的混合缩进。禁止混用tab和空格
		'no-multi-assign': 0, // 禁止连续赋值
		'no-multiple-empty-lines': [
			2,
			{
				max: 1,
				maxEOF: 1,
				maxBOF: 0
			}
		], // -禁止出现多行空行。空行最多不能超过2行。（对象）选项："max" (默认为 2) 强制最大连续空行数，"maxEOF" 强制文件末尾的最大连续空行数，"maxBOF" 强制文件开始的最大连续空行数
		'no-negated-condition': 0, // 禁用否定的表达式。在含有 else 分支的 if 语句和三元表达式的情况使用
		'no-nested-ternary': 0, // 禁用嵌套的三元表达式。禁止使用嵌套的三目运算
		'no-new-object': 0, // 禁用 Object 的构造函数。禁止使用new Object()
		'no-plusplus': 0, // 	禁用一元操作符 ++ 和 --。（对象）选项："allowForLoopAfterthoughts": true
		'no-restricted-syntax': 0, // 禁用特定的语法。选项：是个字符串列表，列表中的每个字符串都是一个 AST 选择器
		'no-tabs': 0, // 禁用 tab。选项：allowIndentationTabs (默认: false)
		'no-ternary': 0, // 禁用三元操作符。禁止使用三目运算符
		'no-trailing-spaces': 2, // -禁用行尾空格。一行结束后面不要有空格。（对象）选项："skipBlankLines": false (默认)禁止在空行使用空白符，"ignoreComments": false (默认) 禁止在注释块中使用空白符
		'no-underscore-dangle': 0, // 禁止标识符中有悬空下划线。标识符不能以_开头或结尾。（对象）选项："allow" 允许指定标识符使用悬空下划线，"allowAfterThis": false (默认)，"allowAfterSuper": false (默认)，"enforceInMethodNames": false (默认)
		'no-unneeded-ternary': [
			2,
			{
				defaultAssignment: false
			}
		], // -禁止可以在有更简单的可替代的表达式（更简单结构）时使用三元操作符。（对象）选项："defaultAssignment": true (默认) 允许条件表达式作为默认的赋值模式
		'no-whitespace-before-property': 2, // -禁止属性前有空白
		'nonblock-statement-body-position': [2,
			'beside'], // -强制单个语句的位置。（字符串）选项："beside" (默认) 禁止单行语句之前有换行，"below" 要求单行语句之前有换行，"any" 不强制单行语句的位置，其它（对象）选项："overrides"（对象）。联接curly
		'object-curly-newline': [
			2,
			{
				consistent: true
			}
		], // -强制大括号内换行符的一致性。选项：1字符串"always"，"never" 2对象"multiline": true，"minProperties"，"consistent": true，"ObjectExpression"，"ObjectPattern"，"ImportDeclaration"，"ExportDeclaration"
		'object-curly-spacing': [
			// -强制在大括号中使用一致的空格。大括号内是否允许不必要的空格。选项：字符串"never" (默认)，"always"；对象："arraysInObjects": false，"objectsInObjects": false(当第一个选项为 always 时生效)
			2,
			'always',
			{
				arraysInObjects: true,
				objectsInObjects: true
			}
		],
		'object-property-newline': [
			2,
			{
				'allowAllPropertiesOnSameLine': true
			}
		], // -强制将对象的属性放在不同的行上。选项：对象allowAllPropertiesOnSameLine:true所有属性都在同一行上将被允许
		'one-var': [
			2,
			{
				initialized: 'never'
			}
		], // -强制函数中的变量要么一起声明要么分开声明。连续声明。选项：1字符串"always" (默认)，"never"，"consecutive" 2对象"var"，"let"，"const"，"separateRequires" 3对象"initialized"，"uninitialized"
		'one-var-declaration-per-line': 2, // -要求或禁止在变量声明周围换行。选项：字符串"initializations" (默认) 强制每个变量初始化语句换行，"always" 强制每个变量声明都换行
		'operator-assignment': [0,
			'always'], // -要求或禁止在可能的情况下使用简化的赋值操作符。赋值运算符 += -=什么的。选项：字符串"always" (默认) 要求尽可能地简化赋值操作，"never" 禁止简化赋值操作
		'operator-linebreak': [
			2,
			'after',
			{
				overrides: {
					'?': 'before',
					':': 'before'
				}
			}
		], // -强制操作符使用一致的换行符。换行时运算符在行尾还是行首。选项：字符串"after"，"before"，"none"；对象默认"after", { "overrides": { "?": "before", ":": "before" } }
		'padded-blocks': [2,
			'never'], // -要求或禁止块内填充。块语句内行首行尾是否要空行。选项：1字符串"always" (默认)，"never" 2对象"blocks"，"classes"，"switches"；对象"allowSingleLineBlocks": true 允许单行块
		'padding-line-between-statements': 0, // -要求或禁止在语句间填充空行。选项：对象blankLine，prev，next
		'prefer-object-spread': 0, // -禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展。
		'quote-props': [2,
			'consistent'], // -要求对象字面量属性名称用引号括起来。对象字面量中的属性名是否强制引号。选项：字符串"always" (默认)，"as-needed"，"consistent"，"consistent-as-needed"；对象"keywords": true，"unnecessary": true (默认)，"unnecessary": false，"numbers": true
		'quotes': [
			2,
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		], // -强制使用一致的反勾号、双引号或单引号。引号类型 `` "" ''。选项：字符串"double" (默认)，"single"，"backtick"；对象"avoidEscape": true，"allowTemplateLiterals": true。
		'semi': [
			2,
			'never',
			{
				beforeStatementContinuationChars: 'always'
			}
		], // -要求或禁止使用分号代替 ASI。语句强制分号结尾。选项：字符串"always" (默认)，"never"；对象"omitLastInOneLineBlock": true，"beforeStatementContinuationChars": "any" (默认) "always" "never"
		'semi-spacing': [
			2,
			{
				before: false,
				after: true
			}
		], // -强制分号之前和之后使用一致的空格。分号前后空格。选项：对象默认{"before": false, "after": true}
		'semi-style': [2, 'last'], //	-强制分号的位置。选项：字符串"last" (默认)，"first"
		'sort-keys': 0, // 要求对象属性按序排列。选项：字符串"asc" (默认)，"desc"；对象caseSensitive默认为 true，minKeys默认值为 2，natural默认为 false
		'sort-vars': 0, // -要求同一个声明块中的变量按顺序排列。变量声明时排序。
		'space-before-blocks': [2, 'always'], // -强制在块之前使用一致的空格。不以新行开始的块{前面要不要有空格。选项：字符串"always"默认，"never"；对象
		'space-before-function-paren': [
			// -强制在 function的左括号之前使用一致的空格。函数定义时括号前面要不要有空格。选项：1字符串always (默认)，never 2对象anonymous，named，asyncArrow
			2,
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'space-in-parens': [2, 'never'], // -强制在圆括号内使用一致的空格。小括号里面要不要有空格。选项：字符串"never" (默认)，"always"；对象"exceptions"
		'space-infix-ops': 2, // -要求操作符周围有空格。中缀操作符周围要不要有空格。选项：对象默认{"words": true, "nonwords": false}
		'space-unary-ops': 2, // -强制在一元操作符前后使用一致的空格。一元运算符的前或后要不要加空格。选项：对象默认{"words": true, "nonwords": false}
		'spaced-comment': [
			// -强制在注释中 // 或 /* 使用一致的空格。注释风格要要有空格什么的。选项：字符串："always"，"never"；对象"exceptions"，"markers"
			2,
			'always',
			{
				markers: [
					'global',
					'globals',
					'eslint',
					'eslint-disable',
					'*package',
					'!',
					',',
					'/',
					'*'
				]
			}
		],
		'switch-colon-spacing': [
			2,
			{
				after: true,
				before: false
			}
		], // -强制在 switch 的冒号左右有空格。选项：对象默认{"after": true, "before": false}
		'template-tag-spacing': [2, 'never'], // -要求或禁止在模板标记和它们的字面量之间有空格。选项：字符串"never" (默认)，"always"
		'unicode-bom': [2, 'never'], // -要求或禁止 Unicode 字节顺序标记 (BOM)。选项：字符串"never" (默认)，"always"
		'wrap-regex': 0, // 正则表达式字面量用小括号包起来

		// ECMAScript 6：这些规则只与 ES6 有关, 即通常所说的 ES2015
		'arrow-body-style': [2,
			'as-needed'], // -要求箭头函数体使用大括号。选项：字符串"always"，"as-needed"(默认)，"never"；对象requireReturnForObjectLiteral默认为false
		'arrow-parens': [2, 'always'], // -箭头函数用小括号括起来。选项：字符串"always" (默认)，"as-needed"；对象"requireForBlockBody": true
		'arrow-spacing': [
			2,
			{
				before: true,
				after: true
			}
		], // -强制箭头函数的箭头前后使用一致的空格。=>的前后括号。选项：对象默认{ "before": true, "after": true }
		'constructor-super': 2, // 要求在构造函数中有 super() 的调用。非派生类不能调用super，派生类必须调用super。
		'generator-star-spacing': [
			2,
			{
				before: true,
				after: true
			}
		], // -强制 generator 函数中 * 号周围使用一致的空格。生成器函数*的前后空格。选项：1字符串 2对象默认{"before": true, "after": false}
		'no-class-assign': 2, // 禁止修改类声明的变量。禁止给类赋值。
		'no-confusing-arrow': 0, // -禁止在可能与比较操作符相混淆的地方使用箭头函数。
		'no-const-assign': 2, // 禁止修改const声明的变量。
		'no-dupe-class-members': 2, // 禁止类成员中出现重复的名称。
		'no-duplicate-imports': 2, // 禁止重复模块导入。
		'no-new-symbol': 2, // 禁止 Symbolnew 操作符和 new 一起使用。
		'no-restricted-imports': 0, // 禁止使用指定的 import 加载的模块。选项：字符串；对象。
		'no-this-before-super': 2, // 在调用super()之前不能使用this或super。
		'no-useless-computed-key': 2, // -禁止在对象中使用不必要的计算属性。
		'no-useless-constructor': 2, // 禁用不必要的构造函数。
		'no-useless-rename': 2, // -禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字。选项：对象ignoreImport，ignoreExport，ignoreDestructuring默认都为false
		'no-var': 0, // -要求使用 let 或 const 而不是 var。禁用var，用let和const代替
		'object-shorthand': [2,
			'always'], // -要求或禁止对象字面量中方法和属性使用简写语法。强制对象字面量缩写语法。选项：字符串"always" (默认)，"methods"，"properties"，"never"，"consistent"，"consistent-as-needed"；对象"avoidQuotes"，"ignoreConstructors"，"avoidExplicitReturnArrows"
		'prefer-arrow-callback': 0, // -要求回调函数使用箭头函数。选项：对象默认{ allowNamedFunctions: false, allowUnboundThis: true }
		'prefer-const': 2, // -要求使用 const 声明那些声明后不再被修改的变量。首选const。
		'prefer-destructuring': 0, // -优先使用数组和对象解构。选项：对象
		'prefer-numeric-literals': 1, // -禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量。
		'prefer-rest-params': 0, // 要求使用剩余参数而不是 arguments。因为arguments 没有 Array.prototype 方法，有点不方便。
		'prefer-spread': 0, // 要求使用扩展运算符而非 .apply()。首选展开运算。
		'prefer-template': 0, // -要求使用模板字面量而非字符串连接。
		'require-yield': 2, // 要求 generator 函数内有 yield。生成器函数必须有yield
		'rest-spread-spacing': [2, 'never'], // -强制剩余和扩展运算符及其表达式之间有空格。选项：字符串"never"（默认），"always"
		'sort-imports': 0, // -强制模块内的 import 排序。选项：对象ignoreCase (默认：false)，ignoreDeclarationSort (默认: false)，ignoreMemberSort (默认：false)，memberSyntaxSortOrder (默认：["none", "all", "multiple", "single"])
		'symbol-description': 0, // 要求 symbol 描述。
		'template-curly-spacing': [2, 'never'], // -要求或禁止模板字符串中的嵌入表达式周围空格的使用。选项：字符串"never" (默认)，"always"。
		'yield-star-spacing': [
			2,
			{
				before: true,
				after: true
			}
		] // -强制在 yield* 表达式中 * 周围使用空格。选项：1字符串 2对象默认{"before": false, "after": true}

		// Deprecated：
		/*
		  Deprecated rule，Replaced by
		  indent-legacy，indent
		  lines-around-directive，padding-line-between-statements
		  newline-after-var，adding-line-between-statements
		  newline-before-return，padding-line-between-statements
		  no-catch-shadow，no-shadow
		  no-native-reassign，no-global-assign
		  no-negated-in-lhs，no-unsafe-negation
		  no-spaced-func，func-call-spacing
		  prefer-reflect，(no replacement)
		  require-jsdoc，(no replacement)
		  valid-jsdoc，(no replacement)
		*/

		// Removed：These rules from older versions of ESLint (before the deprecation policy existed) have been replaced by newer rules
		/*
		  Removed rule，Replaced by
		  generator-star，generator-star-spacing
		  global-strict，strict
		  no-arrow-condition，no-confusing-arrowno-constant-condition
		  no-comma-dangle，comma-dangle
		  no-empty-class，no-empty-character-class
		  no-empty-label，no-labels
		  no-extra-strict，strict
		  no-reserved-keys，quote-props
		  no-space-before-semi，semi-spacing
		  no-wrap-func，no-extra-parens
		  space-after-function-name，space-before-function-paren
		  space-after-keywords，keyword-spacing
		  space-before-function-parentheses，space-before-function-paren
		  space-before-keywords，keyword-spacing
		  space-in-brackets，object-curly-spacingarray-bracket-spacing
		  space-return-throw-case，keyword-spacing
		  space-unary-word-ops，space-unary-ops
		  spaced-line-comment，spaced-comment
		*/
	}
}

/*

在VSCode中使用ESLint：
安装VSCode插件：Prettier ESLint（prettier-eslint），ESLint，Prettier，Vetur（这个没用）。
保存时，（ide）编辑器（如VSCode）执行顺序：（注意在HBuilderX中②③的顺序相反）
①ide的ESLint插件对不符合配置规则的地方进行实时标红（保存之前）
②读取配置文件.eslintrc.js，ide的ESLint插件进行修改。（相当于编辑器帮你执行了eslint --fix）
③编辑器用选择好的（默认的）格式化程序（如Prettier或Prettier ESLint来）进行格式化（不用Vetur，主要是因为其只针对vue文件且有缺陷）：
如果是Prettier，则对js文件和vue文件都是不能细化到ESLint里面的规则进行修正（例如数组应该换行的却不换行，该有空格的却没有空格，且可能对vue的html模板有其它影响）。
如果是prettier-eslint，则对js文件和vue文件能够细化到ESLint里面的规则进行修正，因为Prettier ESLint首先会检查根路径有没有eslint的配置文件，有则根据里面的规则进行格式化，再根据自己本身的默认规则（包）进行格式化且会去掉和eslint冲突的部分。
(如果是Prettier ESLint，则会读取项目目录下的eslint包和prettier包进行修复，如果只是ESLint，则会读取项目目录下的eslint包或全局的eslint包)
Prettier ESLint完全没用
如果是Vetur，则不能对js文件进行格式化，对vue文件即使对里面的js模板使用prettier-eslint也依然不能细化到ESLint里面的规则进行修正，因为Vetur使用的prettier-eslint（完全没用，还是会变回prettier），是根据Prettier ESLint插件本身的默认规则（包）来进行格式化的，不会读取到eslint的配置文件。
④（重新运行项目）对于vue项目，脚手架内部会使用eslint进行代码规范检查（不符合规范则在终端里报错）（相当于vue项目帮执行了eslint的检查文件命令）

VSCode的settings.json文件配置：
{
	"editor.tabSize": 2,
	"editor.detectIndentation": false,
	"security.workspace.trust.untrustedFiles": "open",
	"workbench.editorAssociations": {
		"*.backup": "default"
	},
	"files.associations": {
		"*.cjson": "jsonc",
		"*.wxss": "css",
		"*.wxs": "javascript"
	},
	"emmet.includeLanguages": {
		"wxml": "html"
	},
	"minapp-vscode.disableAutoConfig": true,
	"diffEditor.ignoreTrimWhitespace": false,
	"editor.minimap.maxColumn": 50,
	"explorer.confirmDelete": false,
	"[html]": {
		"editor.defaultFormatter": "vscode.html-language-features"
	},
	"[vue]": {
		// "editor.defaultFormatter": "octref.vetur"
		"editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
	},
	"[javascript]": {
		// "editor.defaultFormatter": "esbenp.prettier-vscode"
		"editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
	},
	"[json]": {
		"editor.defaultFormatter": "vscode.json-language-features"
	},
	//编辑器配置： //或者在UI界面里面设置
	"files.eol": "\n",
	"editor.tabCompletion": "on",
	"editor.insertSpaces": false,
	"editor.formatOnSave": true,
	"editor.formatOnPaste": true,
	"editor.defaultFormatter": "rvest.vs-code-prettier-eslint",
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	},
	//Vetur
	"vetur.format.defaultFormatter.js": "prettier-eslint",
	"vetur.format.options.useTabs": true,
	//ESLint：
	"eslint.alwaysShowStatus": true,
	"eslint.format.enable": true,
	"eslint.run": "onType",
	"eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact", "html", "vue"],
	// "eslint.nodePath": "d:\\node_modules",
	// "eslint.nodePath": "d:\\wang\\nvm\\nvm\\v14.19.0\\node_modules\\eslint-plugin-vue\\node_modules",
	// "eslint.options": {
	// 	"plugins": ["html"],
	// 	"extensions": [".js", ".vue", ".jsx", ".tsx"]
	// },
	//Prettier 用来替代lint中的一些场景，如分号、tab缩进、空格、引号等（这些问题lint工具不能自动修复）
	"prettier.printWidth": 180,
	"prettier.quoteProps": "consistent",
	"prettier.semi": false,
	"prettier.singleQuote": true,
	"prettier.trailingComma": "none",
	"prettier.useTabs": true,
	"prettier.bracketSpacing": true,
	"prettier.proseWrap": "preserve"
}

.prettierrc文件配置：
{
	"printWidth": 180,
	"semi": false,
	"tabWidth": 2,
	"useTabs": true,
	"singleQuote": true,
	"trailingComma": "none",
	"bracketSpacing": true,
	"htmlWhitespaceSensitivity": "css",
	"arrowParens": "always",
	"quoteProps": "consistent",
	"jsxSingleQuote": false,
	"bracketSameLine": true,
	"proseWrap": "preserve",
	"vueIndentScriptAndStyle": false,
	"endOfLine": "lf",
	"embeddedLanguageFormatting": "auto",
	"singleAttributePerLine": false
}

在HBuilderX中的Prettier插件的prettier.config文件配置：
module.exports = {
	printWidth: 180,
	semi: false,
	tabWidth: 2,
	useTabs: true,
	singleQuote: true,
	trailingComma: "none",
	bracketSpacing: true,
	htmlWhitespaceSensitivity: "css",
	arrowParens: "always",
	quoteProps: "consistent",
	jsxSingleQuote: false,
	bracketSameLine: true,
	proseWrap: "preserve",
	vueIndentScriptAndStyle: false,
	endOfLine: "lf",
	embeddedLanguageFormatting: "auto",
	singleAttributePerLine: false,
	parsers: {
		".jsx": "flow",
		".scss": "scss",
		".ts": "typescript",
		".less": "css",
		".vue": "vue",
		".nvue": "vue",
		".ux": "vue",
		".yml": "yaml",
	}
}

注意：
①在项目里面：
1如果项目里面有eslint配置文件：
则会调用配置文件所在目录下的eslint包。所以需要用到eslint（npm包），需要安装对应的npm包npm i eslint@6.8.0 -D，注意这里安装的是6.8.0或以下的版本
在该配置文件里，parser使用了'babel-eslint'（即Babel-ESLint解析器），则需要安装对应的npm包npm i babel-eslint -D。（若不是在项目里面，则不需要安装）
在该配置文件里，extends里含有'plugin:vue/recommended'，则需要安装对应的npm包npm i eslint-plugin-vue -D。（若就算不是在项目里面，也需要安装，安装在配置文件的目录下）
2如果项目里面没有eslint配置文件：
则编辑器的ESLint插件，会从该文件同层级目录中寻找，依次到父目录，直到盘符根目录，直到读取到eslint配置文件。
然后调用项目里的node_modules目录下的eslint包和babel-eslint包和eslint-plugin-vue包来执行，如果项目里面没有node_modules目录（没有这些包），则
调用全局的eslint包和babel-eslint包进行解析，再调用项目目录下的node_modules目录下的eslint-plugin-vue包（如果没有则调用配置文件所在目录下的eslint-plugin-vue包,但可能会报错，报错则建议去掉配置文件里写上的引用的插件，因为node的原因找不到对应的包）。然后对文件进行实时标红和修复（用ESLint插件进行修复--fix，而不是Prettier ESLint）。
②如果不在项目（目录）里面：（如单独的一个文件在盘符下的任意地方，而配置文件在盘符根目录）：
则需要在该目录下或父级目录下有配置文件，且需要安装全局的eslint，npm i eslint -g，不限版本。
然后调用全局的eslint包和babel-eslint包进行解析，再调用文件目录下的node_modules目录下的eslint-plugin-vue包（如果没有则调用配置文件所在目录下的eslint-plugin-vue包）。然后对文件进行实时标红和修复（用ESLint插件进行修复--fix，而不是Prettier ESLint）。

其它插件介绍：
eslint-plugin-prettier 将 Prettier 的规则设置到 ESLint 的规则中。eslint-config-prettier 关闭 ESLint 中与 Prettier 中会发生冲突的规则。
然后可以npm i eslint-plugin-prettier eslint-config-prettier -D
配置：
{
  "extends": ["plugin:prettier/recommended"]
}
相当于：
{
  "extends": ["prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  }
}

另外：
关于报错：
报错1
TypeScript intellisense is disabled on template. To enable, configure `"jsx": "preserve"` in the `"compilerOptions"` property of tsconfig or jsconfig. To disable this prompt instead, configure `"experimentalDisableTemplateSupport": true` in `"vueCompilerOptions"` property.
解决方法：
要在jsconfig.json文件里重新写入：
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "baseUrl": "./",
    "jsx": "preserve",	//在这里添加"jsx": "preserve",
    "moduleResolution": "node",
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  "exclude": ["node_modules", "dist"]
}
报错2
Parsing error: require() of ES Module D:\。。。\node_modules\eslint-scope\lib\definition.js from D:\。。。\node_modules\babel-eslint\lib\require-from-eslint.js not supported.
Instead change the require of definition.js in D:\。。。\node_modules\babel-eslint\lib\require-from-eslint.js to a dynamic import() which is available in all CommonJS modules.
是因为当前的eslint版本（例如，如果下载的是最新版8.22.0等等）过高，这些版本不支持在CommonJS模块中使用。
解决方法：
方法1，将node版本升级到xx以上，根据官网（https://eslint.org/docs/user-guide/getting-started）介绍，node版本需要^12.22.0, ^14.17.0, or >=16.0.0才行。
方法2，将 eslint 降级到版本6.8.0（7.0.0 之前的最后一个版本）。此版本仍包含createRequire（可以读取CommonJS模块）这里用的是"devDependencies": {"babel-eslint": "^10.1.0","eslint": "^6.8.0","eslint-plugin-vue": "^9.3.0"}。（但是如果用的是最新的全局的eslint包，也不会报此错误）

*/
