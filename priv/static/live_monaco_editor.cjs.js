var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// js/live_monaco_editor/index.js
var live_monaco_editor_exports = {};
__export(live_monaco_editor_exports, {
  CodeEditorHook: () => CodeEditorHook
});
module.exports = __toCommonJS(live_monaco_editor_exports);

// node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/state-local/lib/es/state-local.js
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread22(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(x) {
    return fns.reduceRight(function(y, f) {
      return f(y);
    }, x);
  };
}
function curry(fn) {
  return function curried() {
    var _this = this;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return args.length >= fn.length ? fn.apply(this, args) : function() {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }
      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}
function isObject(value) {
  return {}.toString.call(value).includes("Object");
}
function isEmpty(obj) {
  return !Object.keys(obj).length;
}
function isFunction(value) {
  return typeof value === "function";
}
function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}
function validateChanges(initial, changes) {
  if (!isObject(changes)) errorHandler("changeType");
  if (Object.keys(changes).some(function(field) {
    return !hasOwnProperty(initial, field);
  })) errorHandler("changeField");
  return changes;
}
function validateSelector(selector) {
  if (!isFunction(selector)) errorHandler("selectorType");
}
function validateHandler(handler) {
  if (!(isFunction(handler) || isObject(handler))) errorHandler("handlerType");
  if (isObject(handler) && Object.values(handler).some(function(_handler) {
    return !isFunction(_handler);
  })) errorHandler("handlersType");
}
function validateInitial(initial) {
  if (!initial) errorHandler("initialIsRequired");
  if (!isObject(initial)) errorHandler("initialType");
  if (isEmpty(initial)) errorHandler("initialContent");
}
function throwError(errorMessages3, type) {
  throw new Error(errorMessages3[type] || errorMessages3["default"]);
}
var errorMessages = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": "an unknown error accured in `state-local` package"
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};
function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  validators.initial(initial);
  validators.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry(didStateUpdate)(state, handler);
  var update = curry(updateState)(state);
  var validate = curry(validators.changes)(initial);
  var getChanges = curry(extractChanges)(state);
  function getState2() {
    var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(state2) {
      return state2;
    };
    validators.selector(selector);
    return selector(state.current);
  }
  function setState2(causedChanges) {
    compose(didUpdate, update, validate, getChanges)(causedChanges);
  }
  return [getState2, setState2];
}
function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}
function updateState(state, changes) {
  state.current = _objectSpread22(_objectSpread22({}, state.current), changes);
  return changes;
}
function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function(field) {
    var _handler$field;
    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}
var index = {
  create
};
var state_local_default = index;

// node_modules/@monaco-editor/loader/lib/es/config/index.js
var config = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"
  }
};
var config_default = config;

// node_modules/@monaco-editor/loader/lib/es/utils/curry.js
function curry2(fn) {
  return function curried() {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return args.length >= fn.length ? fn.apply(this, args) : function() {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }
      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}
var curry_default = curry2;

// node_modules/@monaco-editor/loader/lib/es/utils/isObject.js
function isObject2(value) {
  return {}.toString.call(value).includes("Object");
}
var isObject_default = isObject2;

// node_modules/@monaco-editor/loader/lib/es/validators/index.js
function validateConfig(config3) {
  if (!config3) errorHandler2("configIsRequired");
  if (!isObject_default(config3)) errorHandler2("configType");
  if (config3.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config3.urls.monacoBase
      }
    };
  }
  return config3;
}
function informAboutDeprecation() {
  console.warn(errorMessages2.deprecation);
}
function throwError2(errorMessages3, type) {
  throw new Error(errorMessages3[type] || errorMessages3["default"]);
}
var errorMessages2 = {
  configIsRequired: "the configuration object is required",
  configType: "the configuration object should be an object",
  "default": "an unknown error accured in `@monaco-editor/loader` package",
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var errorHandler2 = curry_default(throwError2)(errorMessages2);
var validators2 = {
  config: validateConfig
};
var validators_default = validators2;

// node_modules/@monaco-editor/loader/lib/es/utils/compose.js
var compose2 = function compose3() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(x) {
    return fns.reduceRight(function(y, f) {
      return f(y);
    }, x);
  };
};
var compose_default = compose2;

// node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js
function merge(target, source) {
  Object.keys(source).forEach(function(key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return _objectSpread2(_objectSpread2({}, target), source);
}
var deepMerge_default = merge;

// node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js
var CANCELATION_MESSAGE = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function(resolve, reject) {
    promise.then(function(val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function() {
    return hasCanceled_ = true;
  }, wrappedPromise;
}
var makeCancelable_default = makeCancelable;

// node_modules/@monaco-editor/loader/lib/es/loader/index.js
var _state$create = state_local_default.create({
  config: config_default,
  isInitialized: false,
  resolve: null,
  reject: null,
  monaco: null
});
var _state$create2 = _slicedToArray(_state$create, 2);
var getState = _state$create2[0];
var setState = _state$create2[1];
function config2(globalConfig) {
  var _validators$config = validators_default.config(globalConfig), monaco = _validators$config.monaco, config3 = _objectWithoutProperties(_validators$config, ["monaco"]);
  setState(function(state) {
    return {
      config: deepMerge_default(state.config, config3),
      monaco
    };
  });
}
function init() {
  var state = getState(function(_ref) {
    var monaco = _ref.monaco, isInitialized = _ref.isInitialized, resolve = _ref.resolve;
    return {
      monaco,
      isInitialized,
      resolve
    };
  });
  if (!state.isInitialized) {
    setState({
      isInitialized: true
    });
    if (state.monaco) {
      state.resolve(state.monaco);
      return makeCancelable_default(wrapperPromise);
    }
    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      state.resolve(window.monaco);
      return makeCancelable_default(wrapperPromise);
    }
    compose_default(injectScripts, getMonacoLoaderScript)(configureLoader);
  }
  return makeCancelable_default(wrapperPromise);
}
function injectScripts(script) {
  return document.body.appendChild(script);
}
function createScript(src) {
  var script = document.createElement("script");
  return src && (script.src = src), script;
}
function getMonacoLoaderScript(configureLoader2) {
  var state = getState(function(_ref2) {
    var config3 = _ref2.config, reject = _ref2.reject;
    return {
      config: config3,
      reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));
  loaderScript.onload = function() {
    return configureLoader2();
  };
  loaderScript.onerror = state.reject;
  return loaderScript;
}
function configureLoader() {
  var state = getState(function(_ref3) {
    var config3 = _ref3.config, resolve = _ref3.resolve, reject = _ref3.reject;
    return {
      config: config3,
      resolve,
      reject
    };
  });
  var require2 = window.require;
  require2.config(state.config);
  require2(["vs/editor/editor.main"], function(monaco) {
    storeMonacoInstance(monaco);
    state.resolve(monaco);
  }, function(error) {
    state.reject(error);
  });
}
function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco
    });
  }
}
function __getMonacoInstance() {
  return getState(function(_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}
var wrapperPromise = new Promise(function(resolve, reject) {
  return setState({
    resolve,
    reject
  });
});
var loader = {
  config: config2,
  init,
  __getMonacoInstance
};
var loader_default = loader;

// js/live_monaco_editor/editor/themes.js
var colors = {
  background: "#282c34",
  default: "#c4cad6",
  lightRed: "#e06c75",
  blue: "#61afef",
  gray: "#8c92a3",
  green: "#98c379",
  purple: "#c678dd",
  red: "#be5046",
  teal: "#56b6c2",
  peach: "#d19a66"
};
var rules = (colors2) => [
  { token: "", foreground: colors2.default },
  { token: "variable", foreground: colors2.lightRed },
  { token: "constant", foreground: colors2.blue },
  { token: "constant.character.escape", foreground: colors2.blue },
  { token: "comment", foreground: colors2.gray },
  { token: "number", foreground: colors2.blue },
  { token: "regexp", foreground: colors2.lightRed },
  { token: "type", foreground: colors2.lightRed },
  { token: "string", foreground: colors2.green },
  { token: "keyword", foreground: colors2.purple },
  { token: "operator", foreground: colors2.peach },
  { token: "delimiter.bracket.embed", foreground: colors2.red },
  { token: "sigil", foreground: colors2.teal },
  { token: "function", foreground: colors2.blue },
  { token: "function.call", foreground: colors2.default },
  // Markdown specific
  { token: "emphasis", fontStyle: "italic" },
  { token: "strong", fontStyle: "bold" },
  { token: "keyword.md", foreground: colors2.lightRed },
  { token: "keyword.table", foreground: colors2.lightRed },
  { token: "string.link.md", foreground: colors2.blue },
  { token: "variable.md", foreground: colors2.teal },
  { token: "string.md", foreground: colors2.default },
  { token: "variable.source.md", foreground: colors2.default },
  // XML specific
  { token: "tag", foreground: colors2.lightRed },
  { token: "metatag", foreground: colors2.lightRed },
  { token: "attribute.name", foreground: colors2.peach },
  { token: "attribute.value", foreground: colors2.green },
  // JSON specific
  { token: "string.key", foreground: colors2.lightRed },
  { token: "keyword.json", foreground: colors2.blue },
  // SQL specific
  { token: "operator.sql", foreground: colors2.purple }
];
var theme = {
  base: "vs-dark",
  inherit: false,
  rules: rules(colors),
  colors: {
    "editor.background": colors.background,
    "editor.foreground": colors.default,
    "editorLineNumber.foreground": "#636d83",
    "editorCursor.foreground": "#636d83",
    "editor.selectionBackground": "#3e4451",
    "editor.findMatchHighlightBackground": "#528bff3d",
    "editorSuggestWidget.background": "#21252b",
    "editorSuggestWidget.border": "#181a1f",
    "editorSuggestWidget.selectedBackground": "#2c313a",
    "input.background": "#1b1d23",
    "input.border": "#181a1f",
    "editorBracketMatch.border": "#282c34",
    "editorBracketMatch.background": "#3e4451"
  }
};

// js/live_monaco_editor/editor/code_editor.js
var CodeEditor = class {
  constructor(el, path, value, opts) {
    this.el = el;
    this.path = path;
    this.value = value;
    this.opts = opts;
    this.standalone_code_editor = null;
    this._onMount = [];
  }
  isMounted() {
    return !!this.standalone_code_editor;
  }
  mount() {
    if (this.isMounted()) {
      throw new Error("The monaco editor is already mounted");
    }
    this._mountEditor();
  }
  onMount(callback) {
    this._onMount.push(callback);
  }
  dispose() {
    if (this.isMounted()) {
      const model = this.standalone_code_editor.getModel();
      if (model) {
        model.dispose();
      }
      this.standalone_code_editor.dispose();
    }
  }
  _mountEditor() {
    this.opts.value = this.value;
    loader_default.config({
      paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs" }
    });
    loader_default.init().then((monaco) => {
      monaco.editor.defineTheme("default", theme);
      let modelUri = monaco.Uri.parse(this.path);
      let language = this.opts.language;
      let model = monaco.editor.createModel(this.value, language, modelUri);
      this.opts.language = void 0;
      this.opts.model = model;
      this.standalone_code_editor = monaco.editor.create(this.el, this.opts);
      this._onMount.forEach((callback) => callback(monaco));
      this._setScreenDependantEditorOptions();
      this.standalone_code_editor.addAction({
        contextMenuGroupId: "word-wrapping",
        id: "enable-word-wrapping",
        label: "Enable word wrapping",
        precondition: "config.editor.wordWrap == off",
        keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.KeyZ],
        run: (editor) => editor.updateOptions({ wordWrap: "on" })
      });
      this.standalone_code_editor.addAction({
        contextMenuGroupId: "word-wrapping",
        id: "disable-word-wrapping",
        label: "Disable word wrapping",
        precondition: "config.editor.wordWrap == on",
        keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.KeyZ],
        run: (editor) => editor.updateOptions({ wordWrap: "off" })
      });
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach(() => {
          if (this.el.offsetHeight > 0) {
            this._setScreenDependantEditorOptions();
            this.standalone_code_editor.layout();
          }
        });
      });
      resizeObserver.observe(this.el);
      this.standalone_code_editor.onDidContentSizeChange(() => {
        const contentHeight = this.standalone_code_editor.getContentHeight();
        this.el.style.height = `${contentHeight}px`;
      });
    });
  }
  _setScreenDependantEditorOptions() {
    if (window.screen.width < 768) {
      this.standalone_code_editor.updateOptions({
        folding: false,
        lineDecorationsWidth: 16,
        lineNumbersMinChars: Math.floor(
          Math.log10(this.standalone_code_editor.getModel().getLineCount())
        ) + 3
      });
    } else {
      this.standalone_code_editor.updateOptions({
        folding: true,
        lineDecorationsWidth: 10,
        lineNumbersMinChars: 5
      });
    }
  }
};
var code_editor_default = CodeEditor;

// js/live_monaco_editor/hooks/code_editor.js
var CodeEditorHook = {
  mounted() {
    const opts = JSON.parse(this.el.dataset.opts);
    this.codeEditor = new code_editor_default(
      this.el,
      this.el.dataset.path,
      this.el.dataset.value,
      opts
    );
    this.codeEditor.onMount((monaco) => {
      if (this.el.dataset.changeEvent && this.el.dataset.changeEvent !== "") {
        this.codeEditor.standalone_code_editor.onDidChangeModelContent(() => {
          if (this.el.dataset.target && this.el.dataset.target !== "") {
            this.pushEventTo(
              this.el.dataset.target,
              this.el.dataset.changeEvent,
              {
                value: this.codeEditor.standalone_code_editor.getValue()
              }
            );
          } else {
            this.pushEvent(this.el.dataset.changeEvent, {
              value: this.codeEditor.standalone_code_editor.getValue()
            });
          }
        });
      }
      this.handleEvent(
        "lme:change_language:" + this.el.dataset.path,
        (data) => {
          const model = this.codeEditor.standalone_code_editor.getModel();
          if (model.getLanguageId() !== data.mimeTypeOrLanguageId) {
            monaco.editor.setModelLanguage(model, data.mimeTypeOrLanguageId);
          }
        }
      );
      this.handleEvent("lme:set_value:" + this.el.dataset.path, (data) => {
        this.codeEditor.standalone_code_editor.setValue(data.value);
      });
      this.el.querySelectorAll("textarea").forEach((textarea) => {
        textarea.setAttribute(
          "name",
          "live_monaco_editor[" + this.el.dataset.path + "]"
        );
      });
      this.el.removeAttribute("data-value");
      this.el.removeAttribute("data-opts");
      this.el.dispatchEvent(
        new CustomEvent("lme:editor_mounted", {
          detail: { hook: this, editor: this.codeEditor },
          bubbles: true
        })
      );
    });
    if (!this.codeEditor.isMounted()) {
      this.codeEditor.mount();
    }
  },
  destroyed() {
    if (this.codeEditor) {
      this.codeEditor.dispose();
    }
  }
};
//# sourceMappingURL=live_monaco_editor.cjs.js.map
