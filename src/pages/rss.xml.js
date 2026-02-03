import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const posts = await getCollection("blog");
	return rss({
		title: "My Astro Blog",
		description: "A blog about Astro and web development.",
		site: context.site.href,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/posts/${post.id}/`,
		})),
		customData: `<language>en-us</language>`,
	});
}
