# LiveMonacoEditor

[Monaco Editor](https://microsoft.github.io/monaco-editor/) component for Phoenix LiveView.

## Installation

Add `:live_monaco_editor` dependency:

```elixir
def deps do
  [
    {:live_monaco_editor, github: "BeaconCMS/live_monaco_editor"}
  ]
end
```

Once installed, change your `assets/js/app.js` to load the code editor hook in the live socket:

```js
import { CodeEditorHook } from "../../deps/live_monaco_editor/priv/static/live_monaco_editor.esm"

let Hooks = {}
Hooks.CodeEditorHook = CodeEditorHook

let liveSocket = new LiveSocket("/live", Socket, { hooks: Hooks, params: { _csrf_token: csrfToken } })
```

## Usage

A new editor using the default options can be created as:

```heex
<LiveMonacoEditor.code_editor value="# My Code Editor" />
```

## Local Development

The file `dev.exs` is a self-contained Phoenix application running LiveMonacoEditor. Execute:

```sh
mix setup
iex -S mix dev
```

Visit http://localhost:4002

## Features

### Set editor options

All [monaco editor options](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneEditorConstructionOptions.html) are supported by passing a map to `opts`, for example to change the initial language and some other visual options:

```heex
<LiveMonacoEditor.code_editor
  value="<h1>My Code Editor</h1>"
  opts={
    %{
      "language" => "html",
      "fontSize" => 10,
      "minimap" => %{
        "autohide" => true,
        "showSlider" => "always"
      }
    }
  }
/>
```

### Merge with default options

The code editor is created with default options to provide a better UX out-of-the-box, which may not suit your needs, but you can keep the defaults and overwrite some options as you wish:

```heex
<LiveMonacoEditor.code_editor
  opts={
    Map.merge(
      LiveMonacoEditor.default_opts(),
      %{"wordWrap" => "on"}
    )
  }
/>
```

### Fetching the editor value

You can listen to events emitted by the code editor to fetch its current value and send it back to the parent LiveView where the component is used. Firstly, add a event listener:

```javascript
window.addEventListener("lme:editor_mounted", (ev) => {
  const hook = ev.detail.hook
  
  // https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneCodeEditor.html
  const editor = ev.detail.editor.standalone_code_editor

  // push an event to the parent liveview containing the editor current value
  // when the editor loses focus
  editor.onDidBlurEditorWidget(() => {
    hook.pushEvent("code-editor-lost-focus", { value: editor.getValue() })
  })
})
```

Then you can handle that event on the LiveView to save the editor content or perform any sort of operation you need:

```elixir
def handle_event("code-editor-lost-focus", %{"value" => value}, socket) do
  {:noreply, assign(socket, :source, value)}
end
```

### Multiple editors

Set an unique `id` and `path` for each one:

```heex
<LiveMonacoEditor.code_editor id="html" path="my_file.html" />
<LiveMonacoEditor.code_editor id="css" path="my_file.css" />
```

### Inside forms with phx-change

Monaco Editor will create a `textarea` element that will get pushed back to the server with the `path` value:

```heex
<form phx-change="validate">
  <LiveMonacoEditor.code_editor path="my_file.html" value="<h1>Title</h1>" />
</form>
```

Which you can pattern match to either ignore or process the value:

```elixir
def handle_event(
      "validate",
      %{
        "_target" => ["live_monaco_editor", "my_file.html"],
        "live_monaco_editor" => %{"my_file.html" => content}
      },
      socket
    ) do
  # do something with `content`
  # or just ignore the event
  {:noreply, socket}
end
```

_Note that only adding new content into the editor will trigger this event. For example hitting "backspace" won't trigger this event._

### Change language and value

```heex
<button phx-click="change-file">my_file.html</button>
```

```elixir
def handle_event("change-file", _params, socket) do
  {:noreply,
   socket
   |> LiveMonacoEditor.change_language("html")
   |> LiveMonacoEditor.set_value("<h1>New File</h1>")}
end
```

_More operations will be supported in new releases._

### Styling

The component does not depend on any CSS framework but its parent container has to be large enough to be visible. The default style can be changed and/or classes can be applied:

```heex
<LiveMonacoEditor.code_editor
  style="height: 100%; width: 100%; min-height: 1000px; min-width: 600px;"
  class="my-2"
/>
```

## Status

Experimental. You can expect incomplete features and breaking changes before a stable v0.1.0 is released.

## Acknowledgements

[Jonatan Kłosko](https://github.com/jonatanklosko) for his amazing work with [Livebook Editor](https://github.com/livebook-dev/livebook/blob/main/assets/js/hooks/cell_editor.js)
