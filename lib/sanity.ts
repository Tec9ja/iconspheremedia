// lib/sanity.ts

import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = "2023-05-03";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

// Helper for generating image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}