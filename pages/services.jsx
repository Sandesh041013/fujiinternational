import Head from "next/head";
import Button from "../components/Button";

const services = [
  {
    icon: "🎓",
    title: "Study Visa Guidance",
    description:
      "Course selection, university application support, scholarship advice and admission counselling for study in Japan.",
  },
  {
    icon: "💼",
    title: "Working Visa Guidance",
    description:
      "Employer matching, contract review and step-by-step support through work visa applications.",
  },
  {
    icon: "🛂",
    title: "Visa Documentation & Submission",
    description:
      "Complete document preparation, certified translation, notarization and application filing with authorities.",
  },
  {
    icon: "🏠",
    title: "Pre-departure & Arrival Support",
    description:
      "Orientation, accommodation assistance, local registration and early onboarding support after arrival.",
    featured: true,
  },
  {
    icon: "📋",
    title: "Career & Job Placement Assistance",
    description:
      "Job search support, CV coaching and interview preparation with partner employers in Japan.",
  },
  {
    icon: "🧑‍🏫",
    title: "Language & Exam Prep",
    description:
      "JLPT/JFT preparation, partner tutors and study plans to meet institution or employer requirements.",
  },
  {
    icon: "🧾",
    title: "Employer & Institution Liaison",
    description:
      "We coordinate directly with universities and employers to secure offers, COEs and endorsements.",
  },
];

const industries = [
  "Agriculture & Farming",
  "Caregiving & Healthcare",
  "Manufacturing & Skilled Trades",
  "Hospitality & Service",
  "Construction & Infrastructure",
  "IT & Technical",
  "Fisheries & Marine",
  "Food Processing",
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services — FUJI International Consultancy</title>
      </Head>

      {/* HERO */}
      <section className="page-hero bg-black ">
      <div className="container ">
        <span className="text-red-500 uppercase tracking-widest text-sm">
          What We Offer
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mt-4 text-white">
          Your Gateway <br /> to Japan
        </h1>

        <p className="text-white/60 max-w-2xl mx-auto mt-6 text-start -ml-2">
          From visa support to placement and relocation assistance — we guide
          you through every step of your journey to Japan.
        </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div>
              <span className="text-red-600 uppercase tracking-widest text-sm">
                Our Services
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                Complete Support <br /> for Your Japan Journey
              </h2>

              <div className="w-16 h-1 bg-red-600 my-6" />

              <p className="text-gray-500 leading-7">
                We provide end-to-end guidance for students and professionals
                planning to study or work in Japan.
              </p>
            </div>

            
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl border transition hover:-translate-y-2 duration-300 ${
                  s.featured
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-white border-gray-200 hover:shadow-lg"
                }`}
              >
                <div className="text-4xl mb-4">{s.icon}</div>

                <h3 className="text-xl font-bold mb-3">{s.title}</h3>

                <p className={s.featured ? "text-white/80" : "text-gray-500"}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 px-6 bg-gray-50 text-center">
        <span className="text-red-600 uppercase tracking-widest text-sm">
          Career Opportunities
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Sectors Available <br /> in Japan
        </h2>

        <div className="w-16 h-1 bg-red-600 mx-auto my-6" />

        <p className="text-gray-500 max-w-2xl mx-auto mb-10">
          We help candidates explore opportunities across trusted industries in
          Japan.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((ind, i) => (
            <span
              key={i}
              className="px-5 py-2 bg-white border rounded-full text-sm hover:border-red-600 hover:text-red-600 transition"
            >
              {ind}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white" >
          Ready to Start Your Japan Journey?
        </h2>

        <p className="text-white/60 mt-4 max-w-xl mx-auto">
          Speak with our consultants and get personalized guidance today.
        </p>

        <div className="mt-8">
          <Button href="/contact" size="lg" className="bg-[#E60013] hover:bg-red-700 text-white font-bold px-10 py-4">
            Request Consultation
          </Button>
        </div>
      </section>
    </>
  );
}