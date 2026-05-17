"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const VISA_STUDENTS = [
  {
    name: "Priya Sharma",
    country: "India",
    flag: "🇮🇳",
    university: "University of Melbourne",
    universityFlag: "🇦🇺",
    visaType: "Student Visa 500",
    year: "2024",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    course: "Master of Data Science",
  },
  {
    name: "Ahmed Al-Rashid",
    country: "Nepal",
    flag: "🇳🇵",
    university: "University of Toronto",
    universityFlag: "🇨🇦",
    visaType: "Study Permit",
    year: "2024",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    course: "MBA – Finance",
  },
  {
    name: "Li Wei",
    country: "China",
    flag: "🇨🇳",
    university: "University College London",
    universityFlag: "🇬🇧",
    visaType: "Student Visa",
    year: "2025",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    course: "BSc Computer Science",
  },
  {
    name: "Fatima Malik",
    country: "Pakistan",
    flag: "🇵🇰",
    university: "TU Munich",
    universityFlag: "🇩🇪",
    visaType: "National Visa (D)",
    year: "2025",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    course: "MSc Mechanical Engineering",
  },
  {
    name: "Carlos Rivera",
    country: "Colombia",
    flag: "🇨🇴",
    university: "New York University",
    universityFlag: "🇺🇸",
    visaType: "F-1 Student Visa",
    year: "2024",
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
    course: "MFA Fine Arts",
  },
];

export default function Achivements() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#E60013] uppercase tracking-wider font-semibold text-sm">
            Success Stories
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Visa Approved Students
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Real students who successfully received their visas and started
            their academic journey abroad.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="!overflow-visible"
        >
          {VISA_STUDENTS.map((student, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <div
                  className={`transition-all duration-300 h-full ${
                    isActive
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-80"
                  }`}
                >
                  <StudentCard student={student} />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="custom-pagination mt-10 flex justify-center gap-2 [&_.swiper-pagination-bullet]:bg-gray-300 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet-active]:bg-[#E60013] [&_.swiper-pagination-bullet-active]:w-6" />

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#E60013] hover:text-white hover:border-[#E60013] transition-all duration-300"
          >
            ←
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#E60013] hover:text-white hover:border-[#E60013] transition-all duration-300"
          >
            →
          </button>
        </div>
      </div>

      <style>{`
        .swiper-slide {
          height: auto;
        }

        .swiper-wrapper {
          align-items: stretch;
        }
      `}</style>
    </section>
  );
}

// ============================================================
// CARD
// ============================================================

function StudentCard({ student }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full">

      {/* Top Border */}
      <div className="h-1 bg-[#E60013]" />

      <div className="p-8 flex flex-col h-full">

        {/* Photo */}
        <div className="flex justify-center mb-6">
          <img
            src={student.photo}
            alt={student.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-[#E60013]/10"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                student.name
              )}&background=E60013&color=fff`;
            }}
          />
        </div>

        {/* Name */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">
            {student.name}
          </h3>

          <p className="text-gray-600 mt-1 text-sm">
            {student.flag} {student.country}
          </p>
        </div>

        {/* University */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center mb-5 flex-1">
          <p className="text-xs uppercase tracking-wider text-[#E60013] font-semibold mb-2">
            {student.universityFlag} Admitted To
          </p>

          <h4 className="text-lg font-bold text-gray-900 leading-tight">
            {student.university}
          </h4>

          <p className="text-sm text-gray-600 mt-2">
            {student.course}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E60013]/10 text-[#E60013]">
            {student.visaType}
          </span>

          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
            Class of {student.year}
          </span>
        </div>
      </div>
    </div>
  );
}