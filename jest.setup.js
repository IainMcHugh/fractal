import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
require('next/config').setConfig({
  publicRuntimeConfig: {
    APP_VERSION: '',
    BASE_CDN_URL: '/public',
    CDN_URL_STATIC_DIRECTORY: 'http://localhost:3000/static',
    DFP_NETWORK_ID: '0000',
    BASE_URL: 'http://localhost:3000',
    CDN_URL_ASSET_PREFIX: 'http://localhost:3000',
  },
  serverRuntimeConfig: {},
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

window.alert = () => {};
