"use client";

import { experiences } from "@/constants";
import { Workflow } from "lucide-react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const ExperienceTimeline = () => {
	return (
		<div className='py-12'>
			<div className="flex justify-center items-center flex-col mb-10">
				<h2 className="font-bold text-center text-[28px] leading-[32px] tracking-[0.05em]">My Work Experience</h2>

				<p className="mt-5 text-[16px] text-center max-w-[500px]">I&apos;ve worked with all sorts of companies, leveling up my skills and teaming up with smart people. Here&apos;s the rundown:</p>
			</div>
			<VerticalTimeline>
				{experiences.map((experience, index) => (
					<VerticalTimelineElement
						visible={true}
						key={experience.company_name}
						date={experience.date}
						iconStyle={{ background: experience.iconBg }}
						icon={
							<Workflow />
						}
						contentStyle={{
							boxShadow: "none",
							background: "rgba(255,255,255,0.1)",
						}}
					>
						<div>
							<h3 className='text-white text-xl font-poppins font-semibold'>
								{experience.title}
							</h3>
							<p
								className='text-black-500 font-medium text-base'
								style={{ margin: 0 }}
							>
								{experience.company_name}
							</p>
						</div>

						<ul className='my-5 list-disc ml-5 space-y-2'>
							{experience.points.map((point, index) => (
								<li
									key={`experience-point-${index}`}
									className='text-slate-100 font-normal pl-1 text-sm'
								>
									{point}
								</li>
							))}
						</ul>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</div>
	);
};

export default ExperienceTimeline;