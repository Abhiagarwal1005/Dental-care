import { FaTooth } from "react-icons/fa6";
import TestimonialCard from "./testimonial-card";

const Testimonials = () => {

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-1 py-12 sm:py-16">
      <h6 className="text-primary text-center font-normal text-xl leading-relaxed flex items-center justify-center gap-1"> <FaTooth />Testimonials</h6>
      <h2 className="text-textPrimary text-4xl sm:text-5xl font-bold leading-tight text-center">What Have We Achieved</h2>
      <p className="text-textSecondary text-base font-normal leading-relaxed text-center">
        Our achievement story is a testament to teamwork and perseverance.
      </p>

      <div className="mt-8 md:mt-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

          <ul className="space-y-5">
            <li>
              <TestimonialCard text='Diam quis enim lobortis scelerisque
                                    fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                    aliquam malesuada bibendum.'/>
            </li>
            <TestimonialCard text='Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Donec pretium' />
          </ul>
          <ul  className="space-y-5">
            <li>
              <TestimonialCard text='Diam quis enim lobortis scelerisque' />
            </li>
            <li>
              <TestimonialCard text='Diam quis enim lobortis scelerisque' />
            </li>
          </ul>
          <ul>
            <li>
              <TestimonialCard text='Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Donec pretium
                                    vulputate sapien nec sagittis aliquam malesuada bibendum.'/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Testimonials;