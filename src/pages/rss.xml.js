import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	// FIX: Changed 'blog' to 'releases' to fetch the correct collection
	const posts = await getCollection('releases');
	
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			// We explicitly map the fields to ensure the RSS feed is correct
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			// FIX: Changed link from '/blog/' to '/releases/'
			link: `/releases/${post.slug}/`,
		})),
	});
}
