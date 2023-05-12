import CodeEditor from "../editor/code_editor"

const CodeEditorHook = {
  mounted() {
    // TODO: validate dataset
    const opts = JSON.parse(this.el.dataset.opts)
    this.codeEditor = new CodeEditor(this.el, this.el.dataset.value, opts)

    this.codeEditor.onMount((monaco) => {
      this.el.dispatchEvent(
        new CustomEvent("lme:editor_mounted", {
          detail: { id: this.el.id, hook: this, editor: this.codeEditor },
          bubbles: true,
        })
      )

      this.handleEvent("lme:change_language:" + this.el.id, (data) => {
        const model = this.codeEditor.standalone_code_editor.getModel()

        if (model.getLanguageId() !== data.mimeTypeOrLanguageId) {
          monaco.editor.setModelLanguage(model, data.mimeTypeOrLanguageId)
        }
      })

      this.handleEvent("lme:set_value:" + this.el.id, (data) => {
        this.codeEditor.standalone_code_editor.setValue(data.value)
      })

      this.el.removeAttribute("data-value")
      this.el.removeAttribute("data-opts")
    })

    if (!this.codeEditor.isMounted()) {
      this.codeEditor.mount(this.el.id, this)
    }
  },

  destroyed() {
    if (this.codeEditor) {
      this.codeEditor.dispose()
    }
  },
}

export { CodeEditorHook }
