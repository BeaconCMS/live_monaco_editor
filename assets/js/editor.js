// https://github.com/livebook-dev/livebook/blob/8532bc334bdcf3c57fab9b694666e609877d279f/assets/js/hooks/cell_editor/live_editor.js

import monaco from "./monaco"

class Editor {
  constructor(el, source, opts) {
    this.el = el
    this.source = source
    this.opts = opts
    this._onMount = []
  }

  isMounted() {
    return !!this.editor
  }

  mount() {
    if (this.isMounted()) {
      throw new Error("The editor is already mounted")
    }

    this._mountEditor()

    this._onMount.forEach((callback) => callback())
  }

  onMount(callback) {
    this._onMount.push(callback)
  }

  dispose() {
    if (this.isMounted()) {
      this.editor.dispose()

      const model = this.editor.getModel()

      if (model) {
        model.dispose()
      }
    }
  }

  _mountEditor() {
    this.opts.value = this.source
    this.editor = monaco.editor.create(this.el, this.opts)
  }
}

export default Editor
