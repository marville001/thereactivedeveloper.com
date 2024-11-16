// keystatic.config.ts
import { config, fields, collection, LocalConfig, GitHubConfig, singleton } from '@keystatic/core';

const isProd = process.env.NODE_ENV === 'production';

const localMode: LocalConfig['storage'] = {
	kind: 'local',
};

const githubMode: GitHubConfig['storage'] = {
	kind: 'github',
	repo: 'marville001/thereactivedeveloper.com',
};
console.log({ isProd });

export default config({
	// storage: localMode,
	storage: isProd ? githubMode : localMode,
	ui: {
		brand: {
			name: 'The Reactive Developer',
			mark: () => <img className="rounded-lg" src="/favicon-32x32.png" height={20} alt="TRD" />,
		},
		navigation: {
			writing: [
				"settings",
				'blogs',
				 'projects', 'work'
			],
		}
	},
	collections: {
		blogs: collection({
			label: 'Blogs',
			slugField: 'title',
			path: 'src/content/blogs/*',
			format: { contentField: 'summary' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				order: fields.number({ label: 'Order' }),
				link: fields.text({ label: 'External Link', validation: { isRequired: false } }),
				tags: fields.array(fields.text({ label: 'Tag' }),
					{ label: 'Tags', itemLabel: props => props.value || `Tag` }
				),
				coverImage: fields.image({
					label: 'Cover Image',
					directory: 'public/blogs/cover',
					publicPath: '/blogs/cover/',
					validation: { isRequired: true }
				}),
				summary: fields.markdoc({ label: 'Summary', extension: 'md', }),
			},
		}),
		projects: collection({
			label: 'Projects',
			slugField: 'name',
			path: 'src/content/projects/*',
			format: { contentField: 'content' },
			schema: {
				name: fields.slug({ name: { label: 'Project name' } }),
				order: fields.number({ label: 'Order' }),
				status: fields.select({
					label: 'Project Status',
					options: [
						{ label: 'In Development', value: 'in-development' },
						{ label: 'Completed', value: 'completed' },
						{ label: 'Archived', value: 'archived' },
						{ label: 'On Hold', value: 'on-hold' }
					],
					defaultValue: 'completed'
				}),
				featured: fields.checkbox({
					label: 'Featured Project',
					description: 'Show this project prominently in the portfolio'
				}),
				summary: fields.text({
					label: 'Summary',
					multiline: true,
					validation: { length: { min: 10, max: 200 } }
				}),
				github: fields.text({
					label: 'GitHub Repository',
					validation: { isRequired: false }
				}),
				website: fields.text({
					label: 'Website URL',
					validation: { isRequired: true }
				}),
				duration: fields.object({
					startDate: fields.date({ label: 'Start Date', validation: { isRequired: true } }),
					endDate: fields.date({
						label: 'End Date',
						validation: { isRequired: false }
					})
				}, {
					label: 'Project Duration',
					description: 'The start and end date of the project',
				}),
				mainImage: fields.image({
					label: 'Main Image',
					directory: 'public/projects/featured',
					publicPath: '/projects/featured/',
					validation: { isRequired: true }
				}),
				images: fields.array(
					fields.image({
						label: 'Project Image',
						directory: 'public/projects/gallery',
						publicPath: '/projects/gallery/',
					}),
					{
						label: 'Gallery Images',
						itemLabel: (props) => props.value?.filename || "Image",
					}
				),
				tags: fields.array(
					fields.text({ label: 'Tag' }),
					{
						label: 'Tags',
						itemLabel: props => props.value || `Tag`,
					}
				),
				techStack: fields.array(
					fields.object({

						category: fields.select({
							label: 'Category',
							options: [
								{ label: '', value: '' },
								{ label: 'Frontend', value: 'frontend' },
								{ label: 'Backend', value: 'backend' },
								{ label: 'Database', value: 'database' },
								{ label: 'DevOps', value: 'devops' },
								{ label: 'Testing', value: 'testing' },
								{ label: 'Other', value: 'other' }
							],
							defaultValue: ''
						}),
						name: fields.text({ label: 'Technology Name' }),
						version: fields.text({
							label: 'Version',
							validation: { isRequired: true }
						})
					},
						{
							label: 'Technology',
						}),
					{
						label: 'Tech Stack',
						itemLabel: props => props.fields.name.value || 'Technology'
					}
				),
				languages: fields.array(
					fields.select({
						label: 'Programming Language',
						description: 'Select the programming languages used in the project',
						options: [
							{ label: 'JavaScript', value: 'javascript' },
							{ label: 'TypeScript', value: 'typescript' },
							{ label: 'Python', value: 'python' },
							{ label: 'Java', value: 'java' },
							{ label: 'C++', value: 'cpp' },
							{ label: 'Ruby', value: 'ruby' },
							{ label: 'Go', value: 'go' },
							{ label: 'Rust', value: 'rust' },
						],
						defaultValue: 'typescript',
					}),
					{
						label: 'Programming Languages',
						itemLabel: props => props.value || `Language`,
					}
				),
				content: fields.markdoc({
					label: 'Content',
					extension: 'md',
					description: 'The content of the project',
				}),
			}
		}),
		work: collection({
			label: 'Work Experience',
			slugField: 'title',
			path: 'src/content/work/*',
			schema: {
				title: fields.slug({ name: { label: 'Title', validation: { isRequired: true } } }),
				order: fields.number({ label: 'Order' }),
				company: fields.text({ label: 'Company', validation: { isRequired: true } }),
				position: fields.text({ label: 'Position', validation: { isRequired: true } }),
				startDate: fields.date({ label: 'Start Date', validation: { isRequired: true } }),
				endDate: fields.date({ label: 'End Date' }),
				summary: fields.text({ label: 'Summary', multiline: true }),
				website: fields.text({ label: 'Company Website' }),
				logo: fields.image({
					label: 'Company Logo',
					directory: 'public/work/logos',
					publicPath: '/work/logos/',
				}),
				achievements: fields.array(
					fields.text({ label: 'Achievement' }),
					{
						label: 'Achievements',
						itemLabel: props => props.value || 'Achievement',
					}
				),

			}
		}),
	},
	singletons: {
		settings: singleton({
			label: 'Settings',
			path: 'src/content/settings',
			schema: {
				headline: fields.text({ label: 'Hero Headline' }),
				summary: fields.text({ label: 'Hero Summary' }),
				about: fields.markdoc({ label: 'About Me', extension: 'md' }),
				hireMeLink: fields.text({ label: 'Hire Me Link' }),
				contact: fields.object({
					email: fields.text({ label: 'Email' }),
					phone: fields.text({ label: 'Phone' }),
					address: fields.text({ label: 'Address' }),
				}, {
					label: 'Contact Information',
				}),
				social: fields.object({
					github: fields.text({ label: 'GitHub' }),
					linkedin: fields.text({ label: 'LinkedIn' }),
					twitter: fields.text({ label: 'Twitter' }),
					instagram: fields.text({ label: 'Instagram' }),
					facebook: fields.text({ label: 'Facebook' }),
				}, {
					label: 'Social Links',
				}),
				profileImage: fields.image({
					label: 'Profile Image',
					directory: 'public/profile',
					publicPath: '/profile/',
				}),
				resume: fields.file({
					label: 'Resume',
					directory: 'public/resume',
					publicPath: '/resume/',
				}),
			}
		}),
	}
});