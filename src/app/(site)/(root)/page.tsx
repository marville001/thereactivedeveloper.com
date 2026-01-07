import { keystaticReader } from '@/lib/keystatic';
import { HeroSection, ServicesSection, TechStackSection, CTASection } from '@/components/home';

const Home = async () => {
	const settings = await keystaticReader.singletons.settings.read();

	return (
		<main>
			<HeroSection
				headline={settings?.headline}
				summary={settings?.summary}
				profileImage={settings?.profileImage || undefined}
			/>

			<ServicesSection />

			<TechStackSection />

			<CTASection />
		</main>
	);
};

export default Home;