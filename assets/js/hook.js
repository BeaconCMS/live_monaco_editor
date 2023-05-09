import Editor from "./editor"

/**
 * LiveMonacoEditor
 *
 * ## Configuration
 *
 *   * `data-source` - todo
 *
 *   * `data-opts` - https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneEditorConstructionOptions.html
 */

const LiveMonacoEditor = {
  mounted() {
    // TODO: validate dataset
    const opts = JSON.parse(this.el.dataset.opts)
    this.editor = new Editor(this.el, this.el.dataset.source, opts)

    this.editor.onMount(() => {
      this.el.dispatchEvent(
        new CustomEvent("lme:editor_mounted", {
          detail: { hook: this, editor: this.editor },
          bubbles: true,
        })
      )

      this.el.removeAttribute("data-source")
      this.el.removeAttribute("data-opts")
    })

    if (!this.editor.isMounted()) {
      this.editor.mount()
    }
  },

  destroyed() {
    if (this.editor) {
      this.editor.dispose()
    }
  },
}

export { LiveMonacoEditor }
