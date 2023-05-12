# Development Server for LiveMonacoEditor
#
# Usage:
#
#     $ iex -S mix dev
#
# Refs:
#
# https://github.com/phoenixframework/phoenix_live_dashboard/blob/e87bbe03203f67947643f0574bb272b681951fa8/dev.exs
# https://github.com/mcrumm/phoenix_profiler/blob/b882314add2d8783aac76b87c8ded3c123fc71a4/dev.exs
# https://github.com/chrismccord/single_file_phoenix_fly/blob/bd3b372a5ca94cdd77d22b4fa1818cc4b612bcf5/run.exs
# https://github.com/wojtekmach/mix_install_examples/blob/2c30c129f36206d3dfa234421ec5869e5e2e82be/phoenix_live_view.exs
# https://github.com/wojtekmach/mix_install_examples/blob/2c30c129f36206d3dfa234421ec5869e5e2e82be/ecto_sql.exs

require Logger
Logger.configure(level: :debug)

Application.put_env(:phoenix, :json_library, Jason)

Application.put_env(:sample, Sample.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  server: true,
  live_view: [signing_salt: "aaaaaaaa"],
  secret_key_base: String.duplicate("a", 64),
  debug_errors: true,
  check_origin: false,
  pubsub_server: Sample.PubSub,
  live_reload: [
    patterns: [
      ~r"priv/static/.*(js|css|png|jpeg|jpg|gif|svg)$",
      ~r"priv/static/dev/.*(js|css|png|jpeg|jpg|gif|svg)$",
      ~r"lib/.*(ex)$"
    ]
  ],
  watchers: [
    esbuild: {Esbuild, :install_and_run, [:module, ~w(--sourcemap=inline --watch)]}
  ]
)

defmodule Sample.EditorLive do
  use Phoenix.LiveView, layout: {__MODULE__, :live}

  def render("live.html", assigns) do
    ~H"""
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="csrf-token" content={Plug.CSRFProtection.get_csrf_token()} />
        <script src="https://cdn.jsdelivr.net/npm/phoenix@1.7.2/priv/static/phoenix.min.js">
        </script>
        <script
          src="https://cdn.jsdelivr.net/npm/phoenix_live_view@0.18.18/priv/static/phoenix_live_view.min.js"
        >
        </script>
        <script src="/live_monaco_editor/live_monaco_editor.js">
        </script>
        <script>
          window.addEventListener("lme:editor_mounted", (ev) => {
            const hook = ev.detail.hook
            const editor = ev.detail.editor.standalone_code_editor

            editor.onDidBlurEditorWidget(() => {
              console.log(editor.getValue())
            })
          })

          let Hooks = {CodeEditorHook: window.LiveMonacoEditor.CodeEditorHook}
          let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
          let liveSocket = new window.LiveView.LiveSocket("/live", window.Phoenix.Socket, { hooks: Hooks, params: {_csrf_token: csrfToken} })
          liveSocket.connect()
        </script>
      </head>
      <body>
        <%= @inner_content %>
      </body>
    </html>
    """
  end

  def render(assigns) do
    assigns =
      assign(assigns, :value, ~S"""
      # My Code Editor

      From LiveMonacoEditor.code_editor component
      """)

    ~H"""
    <h1>Default Options</h1>
    <button phx-click="html">HTML</button>
    <button phx-click="markdown">Markdown</button>
    <LiveMonacoEditor.code_editor value={@value} style="height: 100%; width: 100%; min-height: 100px; min-width: 200px; margin-top: 50px" />
    """
  end

  def handle_event("markdown", _params, socket) do
    {:noreply,
     socket
     |> LiveMonacoEditor.change_language("markdown")
     |> LiveMonacoEditor.set_value(~S"""
     # Title

     new content
     """)}
  end

  def handle_event("html", _params, socket) do
    {:noreply,
     socket
     |> LiveMonacoEditor.change_language("html")
     |> LiveMonacoEditor.set_value("<h1>new value</h1>")}
  end
end

defmodule Sample.Router do
  use Phoenix.Router
  import Phoenix.LiveView.Router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  scope "/", Sample do
    pipe_through :browser
    live "/", EditorLive, :index
  end
end

defmodule Sample.Endpoint do
  use Phoenix.Endpoint, otp_app: :sample

  @session_options [
    store: :cookie,
    key: "_sample_live_monaco_editor_dev_key",
    signing_salt: "pMQYsz0UKEnwxJnQrVwovkBAKvU3MiuL"
  ]

  socket "/live", Phoenix.LiveView.Socket, websocket: [connect_info: [session: @session_options]]
  socket "/phoenix/live_reload/socket", Phoenix.LiveReloader.Socket

  plug Plug.Static,
    at: "/live_monaco_editor",
    from: {:live_monaco_editor, "priv/static"}

  plug Phoenix.LiveReloader
  plug Phoenix.CodeReloader
  plug Plug.RequestId
  plug Plug.Session, @session_options
  plug Sample.Router
end

Task.start(fn ->
  children = [
    {Phoenix.PubSub, [name: Sample.PubSub]},
    Sample.Endpoint
  ]

  {:ok, _} = Supervisor.start_link(children, strategy: :one_for_one)
  Process.sleep(:infinity)
end)
