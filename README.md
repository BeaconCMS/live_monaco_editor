# LiveMonacoEditor

<!-- MDOC -->

<p align="center">
  <img src="https://raw.githubusercontent.com/BeaconCMS/live_monaco_editor/main/assets/images/live_monaco_editor_logo.png" width="512" alt="LiveMonacoEditor logo">
</p>

<p align="center">
  <a href="https://microsoft.github.io/monaco-editor">Monaco Editor</a> component for Phoenix LiveView.
</p>

<p align="center">
  <a href="https://hex.pm/packages/live_monaco_editor">
    <img alt="Hex Version" src="https://img.shields.io/hexpm/v/live_monaco_editor">
  </a>

  <a href="https://hexdocs.pm/live_monaco_editor">
    <img alt="Hex Docs" src="http://img.shields.io/badge/hex.pm-docs-green.svg?style=flat">
  </a>

  <a href="https://opensource.org/licenses/MIT">
    <img alt="MIT" src="https://img.shields.io/hexpm/l/live_monaco_editor">
  </a>
</p>

## Features

- [Lazy load](https://github.com/suren-atoyan/monaco-loader) assets
- Easily instantiate [single](https://github.com/BeaconCMS/live_monaco_editor#usage) or [multpiple](https://github.com/BeaconCMS/live_monaco_editor#multiple-editors) editors
- Pass any [option available](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneEditorConstructionOptions.html) to the editor
- [Interoperability](https://github.com/BeaconCMS/live_monaco_editor#interface) with the underlying editor

## Installation

Add `:live_monaco_editor` dependency:

```elixir
def deps do
  [
    {:live_monaco_editor, "~> 0.1"}
  ]
end
```

Once installed, change your `assets/js/app.js` file to load the code editor hook in the live socket:

```javascript
import { CodeEditorHook } from "../../deps/live_monaco_editor/priv/static/live_monaco_editor.esm"

let Hooks = {}
Hooks.CodeEditorHook = CodeEditorHook

let liveSocket = new LiveSocket("/live", Socket, { hooks: Hooks, params: { _csrf_token: csrfToken } })
```

And change your `assets/css/app.css` file to load styling:

```css
@import "../../deps/live_monaco_editor/priv/static/live_monaco_editor.min.css";
```

## Usage

A new editor using the default options can be created as:

```heex
<LiveMonacoEditor.code_editor value="# My Code Editor" />
```

Or you can customize it as:

```heex
<LiveMonacoEditor.code_editor
  style="min-height: 250px; width: 100%;"
  value={~S{
  defmodule Math do
    def sum_list([head | tail], accumulator) do
      sum_list(tail, head + accumulator)
    end

    def sum_list([], accumulator) do
      accumulator
    end
  end

  IO.puts Math.sum_list([1, 2, 3], 0)
  }}
  opts={
    Map.merge(
      LiveMonacoEditor.default_opts(),
      %{"language" => "elixir"}
    )
  }
/>
```

![Elixir](https://raw.github.com/BeaconCMS/live_monaco_editor/main/assets/elixir.png)

## Interface

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
<button phx-click="create-file">my_file.html</button>
```

```elixir
def handle_event("create-file", _params, socket) do
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

Early-stage, you can expect incomplete features and breaking changes.

## Contributing

You can use the file `dev.exs` which is a self-contained Phoenix application running LiveMonacoEditor. Execute:

```sh
mix setup
iex -S mix dev
```

Visit http://localhost:4002

## Looking for help with your Elixir project?

<img src="https://raw.githubusercontent.com/BeaconCMS/live_monaco_editor/main/assets/images/dockyard_logo.png" width="256" alt="DockYard logo">

At DockYard we are [ready to help you build your next Elixir project](https://dockyard.com/phoenix-consulting).
We have a unique expertise in Elixir and Phoenix development that is unmatched and we love to [write about Elixir](https://dockyard.com/blog/categories/elixir).

Have a project in mind? [Get in touch](https://dockyard.com/contact/hire-us)!

## Acknowledgements

* [Jonatan Kłosko](https://github.com/jonatanklosko) for his amazing work with [Livebook Editor](https://github.com/livebook-dev/livebook/blob/main/assets/js/hooks/cell_editor.js)
* [Logo](https://www.flaticon.com/free-icons/script) created by kerismaker - Flaticon
* [Logo font](https://fonts.google.com/specimen/Source+Code+Pro) designed by Paul D. hunt

