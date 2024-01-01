"use client"

import { experiences } from "@/constants";
import { Workflow } from "lucide-react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const ExperienceTimeline = () => {
  return (
	  <div className='py-12 flex'>
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
						  background:"#3386B1",
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
  )
}

export default ExperienceTimeline