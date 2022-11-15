import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID, // ID of a Compose-compatible space to be used \
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // delivery API key for the space \
});

export async function fetchEntries(pageContentType) {
  try {
    const entries = await client.getEntries({
      content_type: pageContentType,
    });

    if (entries.items) {
      return entries.items;
    }
  } catch (error) {
    console.error(error);
  }
}
