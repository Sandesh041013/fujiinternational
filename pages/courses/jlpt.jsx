import Head from 'next/head';
import Button from '../../components/Button.jsx';

const LEVELS = [
  {
    name: 'N5',
    desc: 'Beginner — Basic understanding of Japanese used in everyday situations.',
  },
  {
    name: 'N4',
    desc: 'Elementary — Understanding basic Japanese in familiar situations.',
  },
  {
    name: 'N3',
    desc: 'Intermediate — Understanding Japanese used in everyday situations to a certain degree.',
  },
  {
    name: 'N2',
    desc: 'Upper Intermediate — Understanding Japanese in a broad range of topics.',
  },
  {
    name: 'N1',
    desc: 'Advanced — Ability to understand Japanese in a wide range of demanding situations.',
  },
];

const SCHEDULE = [
  {
    day: 'Sunday – Thursday',
    time: '7:00 AM – 9:00 AM',
    label: 'N5 / N4 Batch',
  },
  {
    day: 'Monday – Friday',
    time: '5:00 PM – 7:00 PM',
    label: 'N3 / N2 Batch',
  },
  {
    day: 'Saturday – Sunday',
    time: '10:00 AM – 2:00 PM',
    label: 'N1 Weekend Batch',
  },
];

export default function JLPT() {
  return (
    <>
      <Head>
        <title>JLPT Course – FUJI International Consultancy</title>

        <meta
          name="description"
          content="Master the Japanese Language Proficiency Test (JLPT) from N5 to N1 with FUJI International Consultancy."
        />
      </Head>

      {/* Hero Section */}
      <section className="page-hero text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
                Language Certification
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">
                JLPT
              </h1>

              <p className="text-2xl md:text-3xl text-white font-semibold mb-6">
                Japanese Language Proficiency Test
              </p>

              <p className="text-lg text-white leading-relaxed mb-8 max-w-xl">
                The JLPT is the world&apos;s most recognized Japanese proficiency
                test. Whether you&apos;re aiming for N5 basics or the prestige
                of N1, our expert instructors guide you through every level
                with proven methods.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg" variant="secondary">
                  Enroll Now
                </Button>

                <Button href="/contact" variant="ghost" size="lg">
                  Ask a Question
                </Button>
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-10 backdrop-blur-sm">
              <div className="text-6xl mb-8">📚</div>

              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: 'Levels', value: 'N5 → N1' },
                  { label: 'Duration', value: '3–12 Months' },
                  { label: 'Format', value: 'Online + Offline' },
                  { label: 'Exam', value: 'Dec & July' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-xs uppercase tracking-wider text-white/70 font-semibold mb-2">
                      {item.label}
                    </div>

                    <div className="text-xl font-bold text-white">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <Button
                href="/contact"
                size="md"
                className="w-full mt-10 justify-center"
                variant="secondary"
              >
                Reserve Your Spot
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left */}
            <div>
              <span className="text-[#E60013] font-semibold uppercase tracking-wider text-sm">
                What is JLPT?
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                About the Test
              </h2>

              <p className="text-gray-700 leading-relaxed mb-5">
                The Japanese Language Proficiency Test (JLPT) is conducted
                jointly by the Japan Foundation and Japan Educational Exchanges
                and Services.
              </p>

              <p className="text-gray-700 leading-relaxed">
                It is the most widely accepted proof of Japanese language
                ability, recognized by universities, companies, and immigration
                authorities worldwide. Tests are held twice a year (July and
                December).
              </p>
            </div>

            {/* Right */}
            <div className="bg-gray-100 rounded-xl p-8">
              <h4 className="font-bold text-gray-900 text-xl mb-6">
                JLPT Levels
              </h4>

              <div className="space-y-5">
                {LEVELS.map((l, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#E60013] mt-2 flex-shrink-0" />

                    <div>
                      <strong className="text-gray-900 block mb-1">
                        {l.name}
                      </strong>

                      <p className="text-sm text-gray-600">
                        {l.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 page-hero text-white">
        <div className="max-w-7xl mx-auto px-6">

          <span className="text-[#E60013] uppercase tracking-wider font-semibold text-sm">
            What We Cover
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-12 text-white">
            Course Curriculum
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                week: 'Vocabulary',
                title: 'Word Power',
                items: [
                  'N5–N1 core vocabulary lists',
                  'Kanji by level (103 to 2000+)',
                  'Contextual usage practice',
                  'Flashcard & spaced repetition system',
                ],
              },
              {
                week: 'Grammar',
                title: 'Structure Mastery',
                items: [
                  'All grammar patterns by level',
                  'Particle usage deep dive',
                  'Complex sentence structures (N2–N1)',
                  'Error correction exercises',
                ],
              },
              {
                week: 'Skills',
                title: 'Test Skills',
                items: [
                  'Reading comprehension by section',
                  'Listening with authentic JLPT audio',
                  'Full-length mock exams',
                  'Time management strategies',
                ],
              },
            ].map((m, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/20 text-white rounded-xl p-8"
              >
                <div className="text-xs uppercase tracking-wider text-[#E60013] font-semibold mb-2">
                  {m.week}
                </div>

                <h4 className="text-2xl font-bold text-white mb-6">
                  {m.title}
                </h4>

                <ul className="space-y-3">
                  {m.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-white/90 text-sm"
                    >

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <span className="text-[#E60013] uppercase tracking-wider font-semibold text-sm">
            Batches
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-12">
            Class Schedule
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {SCHEDULE.map((s, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-xl p-8 text-center shadow-sm"
              >
                <div className="text-4xl mb-4">📅</div>

                <div className="font-bold text-gray-900 text-lg mb-3">
                  {s.label}
                </div>

                <div className="text-gray-600 text-sm font-semibold mb-2">
                  {s.day}
                </div>

                <div className="text-[#E60013] font-bold text-base">
                  {s.time}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/contact" size="lg">
              Register for JLPT Course
            </Button>
          </div>
        </div>
      </section> */}
    </>
  );
}