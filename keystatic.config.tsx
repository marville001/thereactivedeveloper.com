// keystatic.config.ts
import { config, fields, collection, LocalConfig, GitHubConfig } from '@keystatic/core';
import { ReactElement } from "react";

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
	ui: {
		brand: {
			name: 'The Reactive Developer',
			mark: () => <img className="rounded-lg" src="/favicon-32x32.png" height={20} alt="TRD"/>,
		},
		navigation: {
			writing: ['blogs']
		}
	},
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