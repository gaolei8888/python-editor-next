/**
 * (c) 2021, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import { theme } from "@chakra-ui/theme";

const gray = {
  10: "#fcfcfc",
  ...theme.colors.gray,
};

const colors = {
  brand: gray,
  gray,
  code: {
    blockBorder: theme.colors.gray[400],
    blockBackground: "rgba(185, 185, 185, 0.1)",
    blockBackgroundActive: "lightyellow",
    blockBorderActive: theme.colors.blue[400],

    comment: "gray",
    default: "black",
    keyword: "darkblue",
    literal: "darkgreen",
    string: "green",
    activeLine: theme.colors.gray[100],

    error: theme.colors.red[500], // Match default error toast
  },
};

export default colors;
