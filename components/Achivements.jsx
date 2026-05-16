"use client";

// ============================================================
// VISA SUCCESS SLIDER
// Easy to modify: just update the `VISA_STUDENTS` array below
// with your own students' data.
// ============================================================

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const VISA_STUDENTS = [
  {
    name: "Priya Sharma",
    country: "India",
    flag: "🇮🇳",
    university: "University of Melbourne",
    universityCountry: "Australia",
    universityFlag: "🇦🇺",
    visaType: "Student Visa 500",
    year: "2024",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    course: "Master of Data Science",
    color: "#4F46E5", // accent color per card — change freely
  },
  {
    name: "Ahmed Al-Rashid",
    country: "Nepal",
    flag: "🇳🇵",
    university: "University of Toronto",
    universityCountry: "Canada",
    universityFlag: "🇨🇦",
    visaType: "Study Permit",
    year: "2024",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    course: "MBA – Finance",
    color: "#0EA5E9",
  },
  {
    name: "Li Wei",
    country: "China",
    flag: "🇨🇳",
    university: "University College London",
    universityCountry: "UK",
    universityFlag: "🇬🇧",
    visaType: "Student Visa",
    year: "2025",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    course: "BSc Computer Science",
    color: "#10B981",
  },
  {
    name: "Fatima Malik",
    country: "Pakistan",
    flag: "🇵🇰",
    university: "TU Munich",
    universityCountry: "Germany",
    universityFlag: "🇩🇪",
    visaType: "National Visa (D)",
    year: "2025",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    course: "MSc Mechanical Eng.",
    color: "#F59E0B",
  },
  {
    name: "Carlos Rivera",
    country: "Colombia",
    flag: "🇨🇴",
    university: "NYU – New York",
    universityCountry: "USA",
    universityFlag: "🇺🇸",
    visaType: "F-1 Student Visa",
    year: "2024",
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
    course: "MFA Fine Arts",
    color: "#EC4899",
  },
  {
    name: "Amara Osei",
    country: "Ghana",
    flag: "🇬🇭",
    university: "University of Auckland",
    universityCountry: "New Zealand",
    universityFlag: "🇳🇿",
    visaType: "Student Visa",
    year: "2025",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
    course: "PhD – Public Health",
    color: "#8B5CF6",
  },
];

export default function Achivements() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const active = VISA_STUDENTS[activeIndex];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-16 px-4"
      // style={{ background: "linear-gradient(135deg,#0d0d1a 0%,#0f172a 60%,#0d0d1a 100%)" }}
      style={{background:"black"}}
    >
      {/* Ambient glow that follows active accent */}
      {/* <div
        className="pointer-events-none absolute inset-0 opacity-20 transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 40%, ${active.color}55 0%, transparent 70%)`,
        }}
      /> */}

      {/* Decorative grid */}
      {/* <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      /> */}

      {/* Header */}
      <div className="relative z-10 mb-10 text-center">
        <span
          className="inline-block text-xs font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full mb-4 border"
          style={{ color: active.color, borderColor: active.color + "55", background: active.color + "18" }}
        >
          ✦ Success Stories
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
          Visa{" "}
          <span
            className="italic"
            style={{ color: active.color, textShadow: `0 0 40px ${active.color}88` }}
          >
            Approved
          </span>{" "}
          Students
        </h2>
        <p className="mt-2 text-slate-400 text-sm tracking-wide">
          Real people. Real dreams. Real approvals.
        </p>
      </div>

      {/* Swiper — always shows exactly 3 cards */}
      <div className="relative z-10 w-full max-w-6xl px-4">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={16}
          centeredSlides
          grabCursor
          loop
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full !overflow-visible"
          style={{ padding: "20px 0 40px" }}
        >
          {VISA_STUDENTS.map((student, i) => (
            <SwiperSlide
              key={i}
              className="transition-all duration-500"
              style={{ height: "auto" }}
            >
              {({ isActive }) => (
                <div
                  className="transition-all duration-500"
                  style={{
                    transform: isActive ? "scale(1)" : "scale(0.88)",
                    opacity: isActive ? 1 : 0.6,
                    filter: isActive ? "none" : "blur(0.5px)",
                  }}
                >
                  <StudentCard student={student} isActive={isActive} />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom pagination dots */}
      <div className="custom-pagination relative z-10 mt-6 flex gap-2 justify-center [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-white/30 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet-active]:w-6 [&_.swiper-pagination-bullet-active]:bg-white" />

      {/* Nav buttons */}
      <div className="relative z-10 mt-6 flex gap-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all hover:scale-110"
        >
          ←
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all hover:scale-110"
        >
          →
        </button>
      </div>

    

      {/* Marquee keyframes injected inline */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .swiper-slide { border-radius: 20px; overflow: visible !important; }
        .swiper { overflow: visible !important; }
      `}</style>
    </section>
  );
}

// ── Individual Card ──────────────────────────────────────────
function StudentCard({ student, isActive }) {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-2xl select-none"
      style={{
        background: `linear-gradient(160deg, #12192e 0%, #0a0f1e 100%)`,
        border: `1px solid ${isActive ? student.color + "88" : student.color + "22"}`,
        minHeight: 460,
        boxShadow: isActive ? `0 0 40px ${student.color}33` : "none",
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, ${student.color}, transparent)` }}
      />

      {/* Glow blob behind photo */}
      <div
        className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-3xl opacity-30"
        style={{ background: student.color }}
      />

      {/* Stamp badge */}
      <div
        className="absolute top-4 right-4 w-14 h-14 rounded-full flex flex-col items-center justify-center border-2 rotate-12 text-center"
        style={{ borderColor: student.color, color: student.color }}
      >
        <span className="text-[9px] font-black leading-none uppercase tracking-tight">VISA</span>
        <span className="text-[8px] font-bold leading-none uppercase">OK</span>
        <span className="text-lg leading-none">✓</span>
      </div>

      {/* Photo */}
      <div className="relative z-10 flex flex-col items-center pt-10 pb-6 px-6">
        <div
          className="w-28 h-28 rounded-full overflow-hidden mb-4 ring-4"
          style={{ ringColor: student.color, boxShadow: `0 0 0 4px ${student.color}55` }}
        >
          <img
            src={student.photo}
            alt={student.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=1e293b&color=fff&size=120`;
            }}
          />
        </div>

        {/* Name & origin */}
        <h3 className="text-2xl font-black text-white tracking-tight">{student.name}</h3>
        <p className="text-sm text-slate-400 mt-0.5">
          {student.flag} {student.country}
        </p>

        {/* Divider */}
        <div
          className="my-4 w-16 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${student.color}, transparent)` }}
        />

        {/* University */}
        <div
          className="w-full rounded-xl px-4 py-3 text-center"
          style={{ background: student.color + "18", border: `1px solid ${student.color}33` }}
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
            {student.universityFlag} Admitted to
          </p>
          <p className="text-base font-black text-white leading-tight">{student.university}</p>
          <p className="text-xs text-slate-400 mt-0.5">{student.course}</p>
        </div>

        {/* Tags */}
        <div className="flex gap-2 mt-4 flex-wrap justify-center">
          <span
            className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
            style={{ background: student.color + "22", color: student.color }}
          >
            {student.visaType}
          </span>
          <span className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-white/5 text-white/50">
            Class of {student.year}
          </span>
        </div>
      </div>
    </div>
  );
}
