"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => setActive((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => handleNext(), 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="mx-auto max-w-4xl px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Image */}
        <div className="relative w-full md:w-1/2 h-72 md:h-96">
          <AnimatePresence mode="wait">
            <motion.img
              key={testimonials[active].src}
              src={testimonials[active].src}
              alt={testimonials[active].name}
              loading="lazy"
              className="h-full w-full object-cover rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
        </div>

        {/* Text */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-textPrimary">{testimonials[active].name}</h3>
              <p className="text-sm text-textSecondary mb-2">{testimonials[active].designation}</p>
              <p className="text-base text-textSecondary">{testimonials[active].quote}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4 mt-6">
            <button onClick={handlePrev} className="bg-primary p-2 rounded-full">
              <IconArrowLeft className="text-textPrimary w-5 h-5" />
            </button>
            <button onClick={handleNext} className="bg-primary p-2 rounded-full">
              <IconArrowRight className="text-textPrimary w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
