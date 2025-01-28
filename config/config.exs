import Config

config :phoenix, :json_library, Jason
config :phoenix, :trim_on_html_eex_engine, false
config :logger, :level, :debug
config :logger, :backends, []

if Mix.env() == :dev do
  esbuild = fn args ->
    [
      args:
        ~w(
        ./js/live_monaco_editor
        --bundle
        --loader:.ttf=dataurl
        --loader:.woff=dataurl
        --loader:.woff2=dataurl
        --sourcemap
      ) ++
          args,
      cd: Path.expand("../assets", __DIR__),
      env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
    ]
  end

  config :esbuild,
    version: "0.24.2",
    module: esbuild.(~w(--format=esm --outfile=../priv/static/live_monaco_editor.esm.js)),
    main: esbuild.(~w(--format=cjs --outfile=../priv/static/live_monaco_editor.cjs.js)),
    cdn:
      esbuild.(
        ~w(--format=iife --target=es2016 --global-name=LiveMonacoEditor --outfile=../priv/static/live_monaco_editor.js)
      ),
    cdn_min:
      esbuild.(
        ~w(--format=iife --target=es2016 --global-name=LiveMonacoEditor --minify --outfile=../priv/static/live_monaco_editor.min.js)
      )
end
