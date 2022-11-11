import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID, // ID of a Compose-compatible space to be used \
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // delivery API key for the space \
});

export async function fetchEntries({ pageContentType, locale, limit }, query) {
  try {
    const entries = await client.getEntries({
      content_type: pageContentType,
      locale,
      ...query,
      limit,
    });

    if (entries.items) {
      return entries.items;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function fetchHome(locale) {
  const entries = await fetchEntries({
    contentType: "home",
    locale,
  });

  const docs = entries?.map((entry) => ({ ...entry.fields })) || [];

  return docs;
}
