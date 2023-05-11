import { CodeEditor, monaco } from "../editor/code_editor"

const CodeEditorHook = {
  mounted() {
    // TODO: validate dataset
    const opts = JSON.parse(this.el.dataset.opts)
    this.editor = new CodeEditor(this.el, this.el.dataset.value, opts)

    this.editor.onMount(() => {
      this.el.dispatchEvent(
        new CustomEvent("lme:editor_mounted", {
          detail: { id: this.el.id, hook: this, editor: this.editor },
          bubbles: true,
        })
      )

      this.el.removeAttribute("data-value")
      this.el.removeAttribute("data-opts")
    })

    if (!this.editor.isMounted()) {
      this.editor.mount()
    }

    this.handleEvent("lme:change_language:" + this.el.id, (data) => {
      const model = this.editor.standalone_code_editor.getModel()
      if (model.getLanguageId() !== data.mimeTypeOrLanguageId) {
        monaco.editor.setModelLanguage(model, data.mimeTypeOrLanguageId)
      }
    })

    this.handleEvent("lme:set_value:" + this.el.id, (data) => {
      this.editor.standalone_code_editor.setValue(data.value)
    })
  },

  destroyed() {
    if (this.editor) {
      this.editor.dispose()
    }
  },
}

export { CodeEditorHook }
