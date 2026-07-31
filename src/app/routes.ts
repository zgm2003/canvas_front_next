export const PRODUCT_ROUTES = Object.freeze({
  root: '/',
  login: '/login',
  projects: '/projects',
  canvas: '/canvas/:projectId',
  assets: '/assets',
  prompts: '/prompts',
})

export type ProductRoute = (typeof PRODUCT_ROUTES)[keyof typeof PRODUCT_ROUTES]
