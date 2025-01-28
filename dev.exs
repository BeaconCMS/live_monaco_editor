Mix.install([{:phoenix_playground, "~> 0.1"}, {:live_monaco_editor, path: "."}])

defmodule DemoLive do
  use Phoenix.LiveView

  def mount(_params, _session, socket) do
    {:ok,
     assign(socket, :value, ~S"""
     # My Code Editor

     From LiveMonacoEditor.code_editor component
     """)}
  end

  def render(assigns) do
    ~H"""
    <h1>Default options</h1>
    <LiveMonacoEditor.code_editor value={@value} />

    <h1>Change language and value</h1>
    <button phx-click="html">HTML</button>
    <button phx-click="markdown">Markdown</button>
    <LiveMonacoEditor.code_editor id="lang" path="file_b" value="# file_b" />

    <h1>Inside form</h1>
    <form>
      <LiveMonacoEditor.code_editor id="form" path="file_c" value="# file_c" change="set_editor_value" />
    </form>

    <h1>Elixir</h1>
    <LiveMonacoEditor.code_editor
      id="elixir"
      path="elixir"
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

    <h1>HTML</h1>
    <LiveMonacoEditor.code_editor
      id="html"
      path="html"
      style="min-height: 250px; width: 100%;"
      value={~S|
      <div class="space-y-5">
        <div class="p-3 bg-white shadow rounded-lg">
          <h3 class="text-xs border-b">font-sans</h3>
          <p class="font-sans">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
      </div>
      |}
      opts={
        Map.merge(
          LiveMonacoEditor.default_opts(),
          %{"language" => "html"}
        )
      }
    />
    """
  end

  def handle_event("markdown", _params, socket) do
    {:noreply,
     socket
     |> LiveMonacoEditor.change_language("markdown", to: "file_b")
     |> LiveMonacoEditor.set_value(
       ~S"""
       # Title

       new content
       """,
       to: "file_b"
     )}
  end

  def handle_event("html", _params, socket) do
    {:noreply,
     socket
     |> LiveMonacoEditor.change_language("html", to: "file_b")
     |> LiveMonacoEditor.set_value("<h1>new value</h1>", to: "file_b")}
  end

  def handle_event("set_editor_value", %{"value" => value}, socket) do
    IO.puts(value)
    {:noreply, socket}
  end
end

defmodule DemoLayout do
  use Phoenix.Component

  @doc false
  def render(template, assigns)

  def render("root.html", assigns) do
    ~H"""
    <!DOCTYPE html>
    <html lang="en" class="h-full">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="csrf-token" content={Plug.CSRFProtection.get_csrf_token()} />
      </head>
      <body>
        <script src="/assets/phoenix/phoenix.js">
        </script>
        <script src="/assets/phoenix_live_view/phoenix_live_view.js">
        </script>
        <link rel="stylesheet" href="/assets/live_monaco_editor/live_monaco_editor.css" />
        <script src="/assets/live_monaco_editor/live_monaco_editor.js">
        </script>

        <script>
          let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")

          let liveSocket =
            new window.LiveView.LiveSocket(
              "/live",
              window.Phoenix.Socket,
              { hooks: { CodeEditorHook: window.LiveMonacoEditor.CodeEditorHook }, params: {_csrf_token: csrfToken} })
            
          liveSocket.connect()

          window.addEventListener("phx:live_reload:attached", ({detail: reloader}) => {
            reloader.enableServerLogs()
            window.liveReloader = reloader
          })
        </script>

        {@inner_content}
      </body>
    </html>
    """
  end
end

defmodule Demo.Router do
  use Phoenix.Router
  import Phoenix.LiveView.Router

  pipeline :browser do
    plug :put_root_layout, html: {DemoLayout, :root}
  end

  scope "/" do
    pipe_through :browser
    live "/", DemoLive
  end
end

defmodule Demo.Endpoint do
  use Phoenix.Endpoint, otp_app: :phoenix_playground
  plug Plug.Logger
  socket "/live", Phoenix.LiveView.Socket
  plug Plug.Static, from: {:phoenix, "priv/static"}, at: "/assets/phoenix"
  plug Plug.Static, from: {:phoenix_live_view, "priv/static"}, at: "/assets/phoenix_live_view"
  plug Plug.Static, from: {:live_monaco_editor, "priv/static"}, at: "/assets/live_monaco_editor"
  socket "/phoenix/live_reload/socket", Phoenix.LiveReloader.Socket
  plug Phoenix.LiveReloader
  plug Phoenix.CodeReloader, reloader: &PhoenixPlayground.CodeReloader.reload/2
  plug Demo.Router
end

PhoenixPlayground.start(endpoint: Demo.Endpoint, live: DemoLive, open_browser: true)
