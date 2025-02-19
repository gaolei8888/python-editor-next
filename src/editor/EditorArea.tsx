/**
 * (c) 2021, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { topBarHeight } from "../deployment/misc";
import ProjectNameEditable from "../project/ProjectNameEditable";
import { WorkbenchSelection } from "../workbench/use-selection";
import ActiveFileInfo from "./ActiveFileInfo";
import EditorContainer from "./EditorContainer";

interface EditorAreaProps extends BoxProps {
  selection: WorkbenchSelection;
  onSelectedFileChanged: (filename: string) => void;
}

/**
 * Wrapper for the editor that integrates it with the app settings
 * and wires it to the currently open file.
 */
const EditorArea = ({
  selection,
  onSelectedFileChanged,
  ...props
}: EditorAreaProps) => {
  const intl = useIntl();
  return (
    <Flex
      height="100%"
      flexDirection="column"
      {...props}
      backgroundColor="gray.10"
    >
      <Flex
        as="section"
        aria-label={intl.formatMessage({ id: "project-header" })}
        width="100%"
        alignItems="center"
        justifyContent="space-between"
        pl="3rem"
        pr={10}
        pt={2}
        pb={2}
        height={topBarHeight}
      >
        <ProjectNameEditable />
        <ActiveFileInfo
          filename={selection.file}
          onSelectedFileChanged={onSelectedFileChanged}
        />
      </Flex>
      {/* Just for the line */}
      <Box
        ml="6rem"
        mr="2.5rem"
        mb={5}
        width="calc(100% - 8.5rem)"
        borderBottomWidth={2}
        borderColor="gray.200"
      />
      <Box position="relative" flex="1 1 auto" height={0}>
        <EditorContainer selection={selection} />
      </Box>
    </Flex>
  );
};

export default EditorArea;
