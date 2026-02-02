import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
	return rss({
		title: "My Astro Blog",
		description: "A blog about Astro and web development.",
		site: context.site.href,
		items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
		customData: `<language>en-us</language>`,
	});
}
