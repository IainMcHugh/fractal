# Components

Components directory is divided into three subdirectories:

- `/page`: These are parent components that will be direct children within a corresponding next page route.
- `/layout`: These are components that wrap the page content in a way that provides stylstic structure and reusability.
- `/core`: This is where all React components live. This folder is further divided into `macro` and `micro` components. Components that exist in the `micro` folder are the smallest reusable components that collectively make up the app. `macro` components are reusable components that comprise of micro components.

**NB** All Components that live in the `core` folder should be **STATELESS**.
