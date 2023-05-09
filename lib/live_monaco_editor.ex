defmodule LiveMonacoEditor do
  use Phoenix.Component

  attr :source, :string, default: "", doc: "TODO"

  @default_opts %{
    "language" => "markdown",
    "fontSize" => 14,
    "automaticLayout" => true,
    "scrollbar" => %{
      "vertical" => "hidden",
      "alwaysConsumeMouseWheel" => false
    },
    "minimap" => %{
      "enabled" => false
    },
    "wordWrap" => "on",
    "scrollBeyondLastLine" => false,
    "occurrencesHighlight" => false,
    "renderLineHighlight" => "none",
    "tabSize" => 2,
    "autoIndent" => true,
    "formatOnType" => true,
    "formatOnPaste" => true,
    "tabCompletion" => "on",
    "suggestSelection" => "first"
  }

  attr :opts,
       :map,
       default: @default_opts,
       doc: """
       https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneEditorConstructionOptions.html
       """

  attr :style, :string, default: "height: 100%; width: 100%; min-height: 100px; min-width: 200px;"
  attr :rest, :global, doc: "the arbitrary HTML attributes to add to the editor container element"

  def create(assigns) do
    opts =
      assigns
      |> Map.get(:opts, %{})
      |> Jason.encode!()

    assigns = assign(assigns, :opts, opts)

    ~H"""
    <div
      id="live-monaco-editor-1"
      style={@style}
      phx-update="ignore"
      phx-hook="LiveMonacoEditor"
      data-source={@source}
      data-opts={@opts}
      {@rest}
    >
    </div>
    """
  end

  def default_opts, do: @default_opts
end
