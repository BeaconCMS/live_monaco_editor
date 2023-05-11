// https://github.com/livebook-dev/livebook/blob/8532bc334bdcf3c57fab9b694666e609877d279f/assets/js/hooks/cell_editor/live_editor.js

import monaco from "./monaco"

class CodeEditor {
  constructor(el, value, opts) {
    this.el = el
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

    this._onMount.forEach((callback) => callback())
  }

  onMount(callback) {
    this._onMount.push(callback)
  }

  dispose() {
    if (this.isMounted()) {
      this.standalone_code_editor.dispose()

      const model = this.standalone_code_editor.getModel()

      if (model) {
        model.dispose()
      }
    }
  }

  _mountEditor() {
    this.opts.value = this.value
    this.standalone_code_editor = monaco.editor.create(this.el, this.opts)
  }
}

export { CodeEditor, monaco }
