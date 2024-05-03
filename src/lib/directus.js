import { createDirectus, rest } from "@directus/sdk";

const directus = createDirectus("https://max-portfolio.directus.app").with(
  rest()
);

export default directus;
