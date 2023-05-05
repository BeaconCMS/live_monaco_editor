defmodule LiveMonacoEditor.MixProject do
  use Mix.Project

  def project do
    [
      app: :live_monaco_editor,
      version: "0.1.0",
      elixir: "~> 1.14",
      start_permanent: Mix.env() == :prod,
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
      {:phoenix_live_view, "~> 0.18.18"}
    ]
  end
end
