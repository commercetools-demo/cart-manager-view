/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomView}
 */
const config = {
  name: 'Cart Preview',
  cloudIdentifier: 'gcp-au',
  env: {
    development: {
      initialProjectKey: 'composable-demo',
      hostUriPath: '/composable-demo/customers/8e3ff427-30b3-4c00-81a6-91ae450bfd7e/general'
    },
    production: {
      customViewId: 'cltb6z38p0001kdlkve52rzok',
      url: 'https://my-custom-view.com',
    },
  },
  oAuthScopes: {
    view: ['view_products','view_orders','view_customers'],
    manage: ['manage_products','manage_orders'],
  },
  type: 'CustomPanel',
  typeSettings: {
    size: 'LARGE',
  },
  locators: ['customers.customer_details.general'],
};

export default config;
