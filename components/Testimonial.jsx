"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sandesh Acharya",
    country: "Butwal",
    text: "I was unsure at first, but now I'm confidently working at a specialty coffee shop—thanks to this amazing program!",
    avatar: "/sandesh.jpeg",
  },
  {
    id: 2,
    name: "Prateek Aryal",
    country: "Gulmi",
    text: "The hands-on training gave me the confidence I needed. It's the best learning experience I've ever had!",
    avatar: "/bean2.png",
  },
  {
    id: 3,
    name: "Michael Chen",
    country: "Kathmandu",
    text: "I went to Japan after completing the course. Couldn't have done it without Fuji International Consultancy!",
    avatar: "/bean1.png",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const t = testimonials[index];

  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#E60013] via-[#b30010] to-[#7a000b]">

      {/* Background Glow Elements */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-[220px] h-[220px] bg-yellow-300/10 rounded-full blur-2xl"></div>

      {/* Radial Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-y-12 md:gap-x-16">

        {/* Left Column */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            What Our <br /> Students Say
          </h2>

          <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Our students share their journeys of learning, growth, and hands-on
            experience across our barista, bakery, bartending, and sushi-making programs.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex-1 w-full max-w-xl">
          <Card className="border-none bg-white/10 backdrop-blur-md shadow-2xl rounded-3xl">
            <CardContent className="p-6">
              <div className="relative min-h-[280px]">

                <AnimatePresence mode="wait">
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute w-full"
                  >

                    {/* Quote */}
                    <div className="bg-white rounded-tr-full rounded-l-full px-6 py-5 shadow-md text-center mb-6">
                      <p className="text-base sm:text-lg md:text-xl italic text-[#5D4037] leading-relaxed">
                        “{t.text}”
                      </p>
                    </div>

                    {/* Avatar + Info */}
                    <div className="flex flex-col items-end space-y-3">

                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={64}
                        height={64}
                        className="rounded-full object-cover h-16 w-16 border-2 border-white shadow-md"
                      />

                      {/* Stars */}
                      <div className="flex text-[#FFA726]">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              fill="currentColor"
                              stroke="none"
                            />
                          ))}
                      </div>

                      <p className="text-base sm:text-lg font-semibold text-white">
                        {t.name}, {t.country}
                      </p>

                    </div>

                  </motion.div>
                </AnimatePresence>

              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}