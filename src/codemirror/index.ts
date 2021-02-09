import {keymap, highlightSpecialChars, drawSelection, highlightActiveLine, KeyBinding} from "@codemirror/view"
import {Extension, EditorState, Prec} from "@codemirror/state"
import {history, historyKeymap} from "@codemirror/history"
import {foldGutter, foldKeymap} from "@codemirror/fold"
import {indentOnInput, indentUnit} from "@codemirror/language"
import {lineNumbers} from "@codemirror/gutter"
import {defaultKeymap, indentLess, indentMore} from "@codemirror/commands"
import {bracketMatching} from "@codemirror/matchbrackets"
import {closeBrackets, closeBracketsKeymap} from "@codemirror/closebrackets"
import {searchKeymap, highlightSelectionMatches} from "@codemirror/search"
import {autocompletion, completionKeymap} from "@codemirror/autocomplete"
import {commentKeymap} from "@codemirror/comment"
import {rectangularSelection} from "@codemirror/rectangular-selection"
import {defaultHighlightStyle} from "@codemirror/highlight"
import {lintKeymap} from "@codemirror/lint"
import { EditorView } from "@codemirror/view";
import { python } from "@codemirror/lang-python"
import { overlay } from "./overlay"

const customTabBinding: KeyBinding =
  {key: "Tab", run: indentMore, shift: indentLess};

export const editorConfig: Extension = [
  // Experimental
  overlay(),
  // As per basic-setup module.
  lineNumbers(),
  highlightSpecialChars(),
  history(),
  foldGutter(),
  drawSelection(),
  EditorState.allowMultipleSelections.of(true),
  indentOnInput(),
  Prec.fallback(defaultHighlightStyle),
  bracketMatching(),
  closeBrackets(),
  autocompletion(),
  rectangularSelection(),
  highlightActiveLine(),
  highlightSelectionMatches(),

  keymap.of([
    // Added, but see https://codemirror.net/6/examples/tab/ for accessibility discussion.
    customTabBinding,
    ...closeBracketsKeymap,
    ...defaultKeymap,
    ...searchKeymap,
    ...historyKeymap,
    ...foldKeymap,
    ...commentKeymap,
    ...completionKeymap,
    ...lintKeymap
  ]),

  // Custom.
  EditorState.tabSize.of(4), // But hopefully not used!
  indentUnit.of("    "),
  python(), 
  EditorView.theme({
    $content: {  
      fontSize: "18px"
    }
  }),
];
