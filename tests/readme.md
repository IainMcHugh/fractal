# Testing

This folder contains all of the tests for our application. It is broken into two separate folders:

- functional
- UI

_functional_ tests refer to any unit or integration tests. These will typically be jest tests.
_UI_ tests refer to e2e user flow testing. These will typically be cypress tests.

The _functional_ folder will map structurally to the overall project structure. So for example, for a file in:

```
/components/core/Button/Button.tsx
```

the corresponding test will be in:

```
/tests/functional/components/core/Button/Button.spec.tsx
```

All tests should use `describe` and `test` keywords. Test descriptions should be verbose and written impersonally.

Any mocks should be contained within the `/mocks` directory. These mocks can and should be shared between functional and UI tests.
