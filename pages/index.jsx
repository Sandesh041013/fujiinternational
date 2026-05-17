import Achivements from "@/components/Achivements";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: "20+", label: "Years of Guidance" },
  { value: "100+", label: "Successful Visa Assistance" },
  { value: "50+", label: "Partner Institutions" },
  { value: "95%", label: "Client Satisfaction" },
];

const services = [
  {
    icon: "🧭",
    title: "Clear Step-by-Step Process",
    description:
      "We simplify complex visa and admission processes into clear, guided steps so you always know what comes next.",
  },
  {
    icon: "🤝",
    title: "Personal Mentor Support",
    description:
      "Each applicant receives personalized guidance from experienced consultants throughout their journey.",
    featured: true,
  },
  {
    icon: "📈",
    title: "Proven Success Outcomes",
    description:
      "Our structured approach has helped many students successfully secure admissions and visa approvals in Japan.",
  },
];

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    document.body.classList.add("bg-black");

    return () => document.body.classList.remove("bg-black");
  }, []);

  return (
    <>
      <Head>
        <title>FUJI International Consultancy</title>
      </Head>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-6 py-28">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Background Image */}
          {/* Animated Background Image */}
<div
  className="absolute inset-0 bg-cover bg-center animate-[zoomHero_8s_ease-in-out_infinite]"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.75)), url('/fuji bg.jpg')",
  }}
/>

<style jsx>{`
  @keyframes zoomHero {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.08);
    }
    100% {
      transform: scale(1);
    }
  }
`}</style>

          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-red-600/10 blur-3xl" />

        <div className="relative z-10 max-w-5xl text-center">
          

          {/* Title */}
          <h1 className="text-white font-bold leading-tight text-5xl md:text-7xl mb-8">
            Your Journey
            <br />
            <span className="text-[#E60013]">To Study & Work</span>
            <br />
            In Japan
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-white/60 text-lg leading-8 mb-10">
            FUJI International Consultancy helps students and professionals
            achieve their dream of studying and working in Japan through trusted
            guidance, visa support, and complete relocation assistance.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-5 mb-14">
            <Link
              href="/services"
              className="bg-[#E60013] hover:bg-red-700 transition px-12 py-5 text-white font-semibold"
            >
              Explore Services →
            </Link>

            <Link
              href="/about"
              className="border border-white/20 hover:bg-white hover:text-black transition px-12 py-5 text-white font-semibold"
            >
              Why Choose Us
            </Link>
          </div>

          {/* Trust */}
          <div className="flex flex-col items-center gap-2 text-white/50 text-sm text-center">
  <span>
    Trusted consultancy guiding your journey to study & work abroad
  </span>

  <div className="flex flex-wrap justify-center gap-2 font-semibold text-white/70">
    <span>Verified Guidance</span>
    <span>•</span>
    <span>Visa Support</span>
    <span>•</span>
    <span>Career Abroad</span>
  </div>
</div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-[2px] h-14 bg-gradient-to-b from-white/50 to-transparent animate-bounce" />
        </div>
      </section>

      {/* STATS */}
      <section
        ref={ref}
        className="bg-[#0f0f0f] py-24 px-6 relative overflow-hidden"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-red-600/10 blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((item) => {
              const number = parseInt(item.value);

              return (
                <div
                  key={item.label}
                  className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[28px] p-10 hover:border-red-600/40 hover:-translate-y-2 transition duration-300"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-[#E60013] mb-4">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={number}
                        duration={2.5}
                      />
                    ) : (
                      0
                    )}

                    {item.value.includes("+")
                      ? "+"
                      : item.value.includes("%")
                      ? "%"
                      : ""}
                  </h2>

                  <p className="uppercase tracking-[3px] text-white/60 text-sm">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-16">
            <span className="uppercase tracking-widest text-[#E60013] text-sm font-semibold">
              Why Students Trust FUJI
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mt-4">
              Built on Guidance,
              <br />
              Trust & Results
            </h2>

            <div className="w-16 h-1 bg-[#E60013] rounded-full my-6" />

            <p className="text-gray-500 leading-8">
              We are more than a consultancy — we are a support system for
              students and professionals who want to build their future in Japan
              with confidence.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 border transition duration-300 hover:-translate-y-2 ${
                  service.featured
                    ? "bg-[#E60013] text-white border-[#E60013] shadow-2xl"
                    : "bg-white border-gray-200 hover:shadow-xl"
                }`}
              >
                <div className="text-5xl mb-6">{service.icon}</div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                <p
                  className={`leading-7 ${
                    service.featured ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4  hover:bg-red-600 transition"
            >
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <span className="uppercase tracking-widest text-white/60 text-sm font-semibold">
              About FUJI
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mt-4 mb-6">
              Your Trusted Partner
              <br />
              <span className="text-[#E60013]">
                for Japan Opportunities
              </span>
            </h2>

            <div className="w-14 h-1 bg-[#E60013] rounded-full mb-8" />

            <p className="text-white/60 leading-8 mb-10 max-w-xl">
              FUJI International Consultancy is committed to helping students
              and professionals build successful futures in Japan. We provide
              expert support for study opportunities, employment pathways, visa
              processing, and relocation guidance every step of the way.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-white/20 hover:bg-white hover:text-black transition px-8 py-4 rounded-full text-white font-semibold"
            >
              Learn More About Us →
            </Link>
          </div>

          {/* Right */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="w-[280px] h-[380px] rounded-[32px] border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-14">
              <img
                src="/fujibigbg.png"
                alt="FUJI Logo"
                className="w-40 object-contain"
              />

              <div className="space-y-3 w-32">
                <div className="h-[2px] bg-white/20 rounded-full" />
                <div className="h-[2px] w-3/4 bg-white/20 rounded-full" />
                <div className="h-[2px] w-1/2 bg-white/20 rounded-full" />
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -bottom-5 right-10 bg-[#E60013] rounded-2xl px-6 py-4 shadow-2xl">
              <h3 className="text-3xl font-bold text-white">100+</h3>

              <p className="text-white/70 uppercase text-xs tracking-widest">
                Success Stories
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
  <Achivements/>
</section>

      {/* CTA */}
      <section className="bg-[#E60013] py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-10 justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-3">
              Ready to Start Your Japan Journey?
            </h2>

            <p className="text-white/80 text-lg">
              Speak with our consultants and get professional guidance today.
            </p>
          </div>

          <Link
            href="/contact"
            className="border border-white text-white hover:bg-white hover:text-red-600 transition px-8 py-4 font-semibold"
          >
            Book a Consultation →
          </Link>
        </div>
      </section>
    </>
  );
}