import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blogEntries = await getCollection('blog', ({ data }) => {
    return data.draft !== true;
  });
  
  const posts = blogEntries.sort((a, b) => 
    new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
  );

  return rss({
    title: 'RelayCraft Blog',
    description: 'Development updates, technical deep-dives, and insights from the RelayCraft team.',
    site: context.site ?? 'https://relaycraft.io',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}`,
      categories: post.data.tags,
      author: post.data.author,
    })),
    customData: `<language>en-us</language>
<copyright>© ${new Date().getFullYear()} RelayCraft</copyright>
<managingEditor>team@relaycraft.io (RelayCraft Team)</managingEditor>
<webMaster>team@relaycraft.io (RelayCraft Team)</webMaster>`,
  });
}
