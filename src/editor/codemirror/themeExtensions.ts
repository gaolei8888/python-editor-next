/**
 * (c) 2021, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import { EditorView } from "@codemirror/view";

export const themeExtensions = (fontSize: string) => {
  const fontFamily = "var(--chakra-fonts-code)";
  return EditorView.theme({
    ".cm-content": {
      fontSize,
      fontFamily,
      padding: 0,
    },
    ".cm-gutters": {
      // Make it easier to copy code dragging from the left without line numbers.
      userSelect: "none",
      // Must be opaque for horizontal scrolling to work.
      backgroundColor: "var(--chakra-colors-gray-10)",
      fontSize,
      fontFamily,
      paddingRight: "1rem",
      border: "unset",
      color: "var(--chakra-colors-gray-600)",
    },
    ".cm-gutter": {
      width: "5rem",
    },
    ".cm-activeLine": {
      // Can't use background colour for conflicting purposes.
      backgroundColor: "unset",
      outline: "1px solid var(--chakra-colors-gray-100)",
    },
    ".cm-activeLineGutter": {
      backgroundColor: "unset",
      color: "var(--chakra-colors-gray-800)",
    },
    // $wrap can't be styled here, see App.css.

    // This block restyles autocomplete and aims for a rectangular arrangement
    // rather than the default where the docs are positioned just offset from
    // the item in the completion list.
    ".cm-completionIcon": {
      // Seems broken by default
      width: "auto",
      // But they're also cryptic, so hide until we can improve.
      display: "none",
    },
    ".cm-completionLabel": {
      fontSize,
      fontFamily,
    },
    ".cm-tooltip": {
      backgroundColor: "var(--chakra-colors-gray-50) !important",
      border: "1px solid var(--chakra-colors-gray-400)",
    },
    ".cm-tooltip-autocomplete.cm-tooltip": {
      border: "none",
    },
    ".cm-tooltip-autocomplete.cm-tooltip > *": {
      border: "1px solid var(--chakra-colors-gray-400)",
    },
    ".cm-tooltip.cm-tooltip-autocomplete > ul > li[aria-selected]": {
      // Matches the text selection colour from the default CM theme.
      // We might like to change both if we add a lighter brand color.
      background: "#d7d4f0",
    },
    ".cm-tooltip.cm-completionInfo.cm-completionInfo-right": {
      borderLeft: "none",
    },
    ".cm-tooltip.cm-completionInfo.cm-completionInfo-left": {
      borderRight: "none",
    },
    ".cm-tooltip.cm-completionInfo": {
      width: "20rem",
      height: "10rem",
      top: "0 !important",
      overflowY: "auto",
    },
    ".cm-tooltip.cm-tooltip-autocomplete > ul": {
      height: "10rem",
      maxHeight: "10rem",
    },
  });
};

export default themeExtensions;
