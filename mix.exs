defmodule LiveMonacoEditor.MixProject do
  use Mix.Project

  @source_url "https://github.com/BeaconCMS/live_monaco_editor"
  @version "0.2.1"

  def project do
    [
      app: :live_monaco_editor,
      version: @version,
      elixir: "~> 1.14",
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

  def cli do
    [
      preferred_envs: [
        docs: :docs,
        "hex.publish": :docs
      ]
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
      {:jason, "~> 1.3"},
      {:phoenix, "~> 1.6"},
      {:phoenix_live_view, "~> 0.16 or ~> 1.0"},
      {:esbuild, "~> 0.5", only: :dev},
      {:phoenix_live_reload, "~> 1.4", only: :dev},
      {:plug_cowboy, "~> 2.6", only: :dev},
      {:ex_doc, ">= 0.0.0", only: :docs},
      {:makeup_elixir, "~> 1.0", only: :docs},
      {:makeup_eex, "~> 2.0", only: :docs},
      {:makeup_syntect, "~> 0.1", only: :docs}
    ]
  end

  defp aliases do
    [
      setup: ["deps.get", "assets.setup"],
      dev: ["cmd iex dev.exs"],
      "format.all": ["format", "cmd npm run format --prefix ./assets"],
      "assets.setup": ["cmd --cd assets npm install"],
      "assets.build": ["esbuild module", "esbuild main", "esbuild cdn", "esbuild cdn_min"],
      "assets.watch": ["esbuild module --watch"]
    ]
  end
end
