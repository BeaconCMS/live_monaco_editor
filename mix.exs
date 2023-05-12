defmodule LiveMonacoEditor.MixProject do
  use Mix.Project

  def project do
    [
      app: :live_monaco_editor,
      version: "0.1.0",
      elixir: "~> 1.14",
      start_permanent: Mix.env() == :prod,
      aliases: aliases(),
      deps: deps()
    ]
  end

  def application do
    [
      extra_applications: [:logger]
    ]
  end

  defp deps do
    [
      {:esbuild, "~> 0.6", runtime: Mix.env() == :dev},
      {:phoenix, "~> 1.7"},
      {:phoenix_live_view, "~> 0.18"},
      {:phoenix_live_reload, "~> 1.4", only: :dev},
      {:plug_cowboy, "~> 2.6", only: :dev},
      {:jason, "~> 1.4"}
    ]
  end

  defp aliases do
    [
      dev: "run --no-halt dev.exs",
      setup: ["deps.get", "assets.setup"],
      format: ["format", "cmd npm run format --prefix ./assets"],
      "assets.setup": ["cmd --cd assets npm install"],
      "assets.build": ["esbuild module", "esbuild main", "esbuild cdn", "esbuild cdn_min"],
      "assets.watch": ["esbuild module --watch"]
    ]
  end
end
