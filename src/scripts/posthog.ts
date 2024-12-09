import { posthog } from "posthog-js";

const isProduction = import.meta.env.PROD;

if (!isProduction) {
  posthog.opt_out_capturing();
}

posthog.init("phc_qCIxfUt5occaoOVqXsKqoI5q939uvFdXiUVje0RKyBD", {
  api_host: "https://us.i.posthog.com",
  person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
});
