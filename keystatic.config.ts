// keystatic.config.ts
import { config, fields, collection, LocalConfig, GitHubConfig } from '@keystatic/core';

const isProd = process.env.NODE_ENV === 'production';

const localMode: LocalConfig['storage'] = {
	kind: 'local',
};

const githubMode: GitHubConfig['storage'] = {
	kind: 'github',
	repo: 'marville001/thereactivedeveloper.com',
};

export default config({
	storage: isProd ? githubMode : localMode,
	collections: {
		blogs: collection({
			label: 'Blogs',
			slugField: 'title',
			path: 'src/content/blogs/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				content: fields.document({
					label: 'Content',
					formatting: true,
					dividers: true,
					links: true,
					images: true,
				}),
			},
		}),
	},
});