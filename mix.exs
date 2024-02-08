defmodule LiveMonacoEditor.MixProject do
  use Mix.Project

  @source_url "https://github.com/BeaconCMS/live_monaco_editor"
  @version "0.1.8-dev"

  def project do
    [
      app: :live_monaco_editor,
      version: @version,
      elixir: "~> 1.12",
      start_permanent: Mix.env() == :prod,
      package: package(),
      docs: docs(),
      deps: deps(),
      aliases: aliases(),
      name: "LiveMonacoEditor",
      homepage_url: "https://github.com/BeaconCMS/live_monaco_editor",
      description: "Monaco Editor component for Phoenix LiveView"
    ]
  end

  def application do
    [
      extra_applications: [:logger]
    ]
  end

  defp package do
    [
      maintainers: ["Leandro Pereira"],
      licenses: ["MIT"],
      links: %{
        Changelog: "https://hexdocs.pm/live_monaco_editor/changelog.html",
        GitHub: @source_url
      },
      files: [
        "mix.exs",
        "lib",
        "assets/package.json",
        "assets/js",
        "priv",
        "README.md",
        "LICENSE.md",
        "CHANGELOG.md"
      ]
    ]
  end

  defp docs do
    [
      main: "LiveMonacoEditor",
      assets: "assets/images",
      logo: "assets/images/live_monaco_editor_icon.png",
      source_ref: "v#{@version}",
      source_url: @source_url,
      extras: ["CHANGELOG.md"],
      skip_undefined_reference_warnings_on: ["CHANGELOG.md"]
    ]
  end

  defp deps do
    [
      {:esbuild, "~> 0.5", only: :dev},
      {:ex_doc, "~> 0.29", only: :dev},
      {:jason, "~> 1.4"},
      {:phoenix, "~> 1.7"},
      {:phoenix_live_view, "~> 0.18"},
      {:phoenix_live_reload, "~> 1.4", only: :dev},
      {:plug_cowboy, "~> 2.6", only: :dev}
    ]
  end

  defp aliases do
    [
      dev: "run --no-halt dev.exs",
      setup: ["deps.get", "assets.setup"],
      "format.all": ["format", "cmd npm run format --prefix ./assets"],
      "assets.setup": ["cmd --cd assets npm install"],
      "assets.build": ["esbuild module", "esbuild main", "esbuild cdn", "esbuild cdn_min"],
      "assets.watch": ["esbuild module --watch"]
    ]
  end
end
