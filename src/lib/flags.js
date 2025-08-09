import { flag } from '@vercel/flags/next';

export const showEcommerce = flag({
  key: "ecommerce-enabled",
  decide: () => false, // Start with disabled
});
