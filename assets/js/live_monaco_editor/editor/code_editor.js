// Copied and modified from the original work available at https://github.com/livebook-dev/livebook/blob/8532bc334bdcf3c57fab9b694666e609877d279f/assets/js/hooks/cell_editor/live_editor.js
// Copyright (C) 2021 Dashbit
// Licensed under Apache 2.0 available at https://www.apache.org/licenses/LICENSE-2.0

import loader from "@monaco-editor/loader"
import { theme } from "./themes"

class CodeEditor {
  constructor(el, path, value, opts) {
    this.el = el
    this.path = path
    this.value = value
    this.opts = opts
    // https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneCodeEditor.html
    this.standalone_code_editor = null
    this._onMount = []
  }

  isMounted() {
    return !!this.standalone_code_editor
  }

  mount() {
    if (this.isMounted()) {
      throw new Error("The monaco editor is already mounted")
    }

    this._mountEditor()
  }

  onMount(callback) {
    this._onMount.push(callback)
  }

  dispose() {
    if (this.isMounted()) {
      const model = this.standalone_code_editor.getModel()

      if (model) {
        model.dispose()
      }

      this.standalone_code_editor.dispose()
    }
  }

  _mountEditor() {
    this.opts.value = this.value

    loader.config({
      paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs" },
    })

    loader.init().then((monaco) => {
      monaco.editor.defineTheme("default", theme)

      let modelUri = monaco.Uri.parse(this.path)
      let language = this.opts.language
      let model = monaco.editor.createModel(this.value, language, modelUri)

      this.opts.language = undefined
      this.opts.model = model
      this.standalone_code_editor = monaco.editor.create(this.el, this.opts)

      this._onMount.forEach((callback) => callback(monaco))
    })
  }
}

export default CodeEditor
