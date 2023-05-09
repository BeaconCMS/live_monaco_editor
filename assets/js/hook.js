import Editor from "./editor"

const LiveMonacoEditor = {
  mounted() {
    // TODO: validate dataset
    const opts = JSON.parse(this.el.dataset.opts)
    this.liveEditor = new Editor(this.el, this.el.dataset.source, opts)

    this.liveEditor.onMount(() => {
      this.el.removeAttribute("data-source")
      this.el.removeAttribute("data-opts")
    })

    if (!this.liveEditor.isMounted()) {
      this.liveEditor.mount()
    }
  },

  destroyed() {
    if (this.liveEditor) {
      this.liveEditor.dispose()
    }
  },
}

export { LiveMonacoEditor }
