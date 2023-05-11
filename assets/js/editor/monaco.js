// https://github.com/livebook-dev/livebook/blob/8532bc334bdcf3c57fab9b694666e609877d279f/assets/js/hooks/cell_editor/live_editor/monaco.js

import * as monaco from "monaco-editor/esm/vs/editor/editor.api"
import { theme as darkTheme, lightTheme } from "./theme"

monaco.editor.defineTheme("default", darkTheme)
monaco.editor.defineTheme("light", lightTheme)

// https://microsoft.github.io/monaco-editor/docs.html
export default monaco
