defmodule LiveMonacoEditor do
  use Phoenix.Component
  import Phoenix.LiveView, only: [push_event: 3]

  @default_path "file"

  @default_opts %{
    "language" => "markdown",
    "fontSize" => 14,
    "automaticLayout" => true,
    "minimap" => %{
      "enabled" => false
    },
    "scrollBeyondLastLine" => false,
    "occurrencesHighlight" => false,
    "renderLineHighlight" => "none",
    "tabSize" => 2,
    "formatOnType" => true,
    "formatOnPaste" => true,
    "tabCompletion" => "on",
    "suggestSelection" => "first"
  }

  attr :path, :string,
    default: @default_path,
    doc: "file identifier, define unique names to create multiple editors"

  attr :value, :string, default: "", doc: "initial content"

  attr :opts, :map,
    default: @default_opts,
    doc: """
    options for the monaco editor instance. Defaults to LiveMonacoEditor.default_opts()

    ## Example

        %{
          "language" => "markdown",
          "fontSize" => 12,
          "wordWrap" => "on"
        }

    See all available options at https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneEditorConstructionOptions.html
    """

  attr :style, :string, default: "min-height: 100px; width: 100%;"
  attr :rest, :global, doc: "the arbitrary HTML attributes to add to the editor container element"

  def code_editor(assigns) do
    opts =
      assigns
      |> Map.get(:opts, %{})
      |> Jason.encode!()

    assigns = assign(assigns, :opts, opts)

    ~H"""
    <div id={"lme-parent-#{random_id()}"} phx-update="ignore">
      <div
        id={"lme-hook-#{random_id()}"}
        style={@style}
        phx-hook="CodeEditorHook"
        data-path={@path}
        data-value={@value}
        data-opts={@opts}
        {@rest}
      >
      </div>
    </div>
    """
  end

  @doc """
  Default Monacto Editor options:

    #{inspect(@default_opts)}

  """
  def default_opts, do: @default_opts

  # https://github.com/phoenixframework/phoenix_live_view/blob/c3c21d6de55315adea04e28f7a461a91e46497bb/lib/phoenix_live_view/utils.ex#L176-L183
  defp random_encoded_bytes do
    binary = <<
      System.system_time(:nanosecond)::64,
      :erlang.phash2({node(), self()})::16,
      :erlang.unique_integer()::16
    >>

    Base.url_encode64(binary)
  end

  defp random_id do
    String.replace(random_encoded_bytes(), ["/", "+"], "-")
  end

  @doc """
  https://microsoft.github.io/monaco-editor/docs.html#functions/editor.setModelLanguage.html
  """
  def change_language(socket, mime_type_or_language_id, opts \\ [])
      when is_binary(mime_type_or_language_id) do
    to = Keyword.get(opts, :to, @default_path)

    push_event(socket, "lme:change_language:#{to}", %{
      "mimeTypeOrLanguageId" => mime_type_or_language_id
    })
  end

  @doc """
  https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneCodeEditor.html#setValue
  """
  def set_value(socket, value, opts \\ []) when is_binary(value) do
    to = Keyword.get(opts, :to, @default_path)
    push_event(socket, "lme:set_value:#{to}", %{"value" => value})
  end
end
