defmodule LiveMonacoEditor do
  use Phoenix.Component
  import Phoenix.LiveView, only: [push_event: 3]

  @default_id "live-monaco-editor"

  @default_opts %{
    "language" => "markdown",
    "fontSize" => 14,
    "automaticLayout" => true,
    "scrollbar" => %{
      "vertical" => "hidden",
      "alwaysConsumeMouseWheel" => true
    },
    "minimap" => %{
      "enabled" => false
    },
    "wordWrap" => "off",
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

  attr :id, :string, default: "live-monaco-editor"
  attr :value, :string, default: "", doc: "initial content"

  attr :opts, :map,
    default: @default_opts,
    doc: """
    options for the monaco editor instance.


    ## Example

        %{
          "language" => "markdown",
          "fontSize" => 14,
          "wordWrap" => "off"
        }

    See all available options at https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneEditorConstructionOptions.html
    """

  attr :style, :string, default: "height: 100%; width: 100%; min-height: 100px; min-width: 200px;"
  attr :rest, :global, doc: "the arbitrary HTML attributes to add to the editor container element"

  def code_editor(assigns) do
    opts =
      assigns
      |> Map.get(:opts, %{})
      |> Jason.encode!()

    assigns = assign(assigns, :opts, opts)

    ~H"""
    <div
      id={@id}
      style={@style}
      phx-update="ignore"
      phx-hook="CodeEditorHook"
      data-value={@value}
      data-opts={@opts}
      {@rest}
    >
    </div>
    """
  end

  @doc """
  Default Monacto Editor options:

    #{inspect(@default_opts)}

  """
  def default_opts, do: @default_opts

  @doc """
  https://microsoft.github.io/monaco-editor/docs.html#functions/editor.setModelLanguage.html
  """
  def change_language(socket, mime_type_or_language_id, opts \\ [])
      when is_binary(mime_type_or_language_id) do
    to = Keyword.get(opts, :to, @default_id)

    dbg("lme:change_language:#{to}")

    push_event(socket, "lme:change_language:#{to}", %{
      "mimeTypeOrLanguageId" => mime_type_or_language_id
    })
  end

  @doc """
  https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneCodeEditor.html#setValue
  """
  def set_value(socket, value, opts \\ []) when is_binary(value) do
    to = Keyword.get(opts, :to, @default_id)
    push_event(socket, "lme:set_value:#{to}", %{"value" => value})
  end
end
