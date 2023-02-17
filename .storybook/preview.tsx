import React from "react"
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from "styled-components"
import {theme} from "../src/theme"
import { GlobalStyle } from "../src/theme/global-style"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const ThemeDecorator = storyFn => (
  <>
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
    <GlobalStyle/>
  </>
)

addDecorator(ThemeDecorator)
