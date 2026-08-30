// Copied and modified from the original work available at https://github.com/livebook-dev/livebook/blob/23e58ac604de92ce54472f36fe3e28dc27576d6c/assets/js/hooks/cell_editor/live_editor/theme.js
// Copyright (C) 2021 Dashbit
// Licensed under Apache 2.0 available at https://www.apache.org/licenses/LICENSE-2.0

// This is a port of the One Dark theme to the Monaco editor.
// We color graded the comment so it has AA accessibility and
// then similarly scaled the default font.
const colors = {
  background: "#282c34",
  default: "#c4cad6",
  lightRed: "#e06c75",
  blue: "#61afef",
  gray: "#8c92a3",
  green: "#98c379",
  purple: "#c678dd",
  red: "#be5046",
  teal: "#56b6c2",
  peach: "#d19a66",
}

const rules = (palette) => [
  { token: "", foreground: palette.default },
  { token: "variable", foreground: palette.lightRed },
  { token: "constant", foreground: palette.blue },
  { token: "constant.character.escape", foreground: palette.blue },
  { token: "comment", foreground: palette.gray },
  { token: "number", foreground: palette.blue },
  { token: "regexp", foreground: palette.lightRed },
  { token: "type", foreground: palette.lightRed },
  { token: "string", foreground: palette.green },
  { token: "keyword", foreground: palette.purple },
  { token: "operator", foreground: palette.peach },
  { token: "delimiter.bracket.embed", foreground: palette.red },
  { token: "sigil", foreground: palette.teal },
  { token: "function", foreground: palette.blue },
  { token: "function.call", foreground: palette.default },

  // Markdown specific
  { token: "emphasis", fontStyle: "italic" },
  { token: "strong", fontStyle: "bold" },
  { token: "keyword.md", foreground: palette.lightRed },
  { token: "keyword.table", foreground: palette.lightRed },
  { token: "string.link.md", foreground: palette.blue },
  { token: "variable.md", foreground: palette.teal },
  { token: "string.md", foreground: palette.default },
  { token: "variable.source.md", foreground: palette.default },

  // XML specific
  { token: "tag", foreground: palette.lightRed },
  { token: "metatag", foreground: palette.lightRed },
  { token: "attribute.name", foreground: palette.peach },
  { token: "attribute.value", foreground: palette.green },

  // JSON specific
  { token: "string.key", foreground: palette.lightRed },
  { token: "keyword.json", foreground: palette.blue },

  // SQL specific
  { token: "operator.sql", foreground: palette.purple },
]

const theme = {
  base: "vs-dark",
  inherit: false,
  rules: rules(colors),
  colors: {
    "editor.background": colors.background,
    "editor.foreground": colors.default,
    "editorLineNumber.foreground": "#636d83",
    "editorCursor.foreground": "#636d83",
    "editor.selectionBackground": "#3e4451",
    "editor.findMatchHighlightBackground": "#528bff3d",
    "editorSuggestWidget.background": "#21252b",
    "editorSuggestWidget.border": "#181a1f",
    "editorSuggestWidget.selectedBackground": "#2c313a",
    "input.background": "#1b1d23",
    "input.border": "#181a1f",
    "editorBracketMatch.border": "#282c34",
    "editorBracketMatch.background": "#3e4451",
  },
}

export { theme }
