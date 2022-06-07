This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Styling

This project uses [styled-components](#) as the styling library. For configuration, default styling and theme can be found in the `styles` directory and configured in `pages/_app.tsx` and `pages/_document.tsx`. Structurally, styles should live alongside components, in a styles folder and match the component name. For example, it should look like:

```
/Button
  -> Button.tsx
  /styles
    -> Button.styles.tsx

```

Styles should be imported and used as:

```tsx
import * as Style from './styles';

<Style.Button>...</Style.Button>;
```

## Testing

All tests live in the `/tests` directory. End-to-end (UI) tests are written using cypress, with the primary focus of testing user flows throughout the application. The majority of code coverage should reside in unit & integration (functional) tests. These tests are written using jest. More information can be found in the testing readme.

## Pipelines

By default there are two YAML files defined in the `.github` directory, that should run all existing tests.
