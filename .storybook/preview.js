import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';

const GlobalStyleAdded = (StoryFunction) => (
  <RouterContext.Provider
    value={{
      push: () => Promise.resolve(),
      replace: () => Promise.resolve(),
      prefetch: () => Promise.resolve(),
    }}
  >
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {StoryFunction()}
    </ThemeProvider>
  </RouterContext.Provider>
);

/* Added to render components in iframe and prevent modal
 components from blocking controls on docs tab. See:
 https://github.com/storybookjs/storybook/blob/next/addons/docs/react/README.md#inline-stories */
export const parameters = {
  docs: {
    inlineStories: false,
  },
  layout: 'fullscreen',

  backgrounds: {
    default: 'Body',
    values: [{ name: 'Body', value: '#fafafa' }],
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

addDecorator(GlobalStyleAdded);
