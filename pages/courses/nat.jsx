import Head from 'next/head';
import Button from '../../components/Button.jsx';
import Achivements from '@/components/Achivements.jsx';

const LEVELS = [
  {
    name: 'N5 (5級)',
    desc: 'Most basic level — ideal for complete beginners.',
  },
  {
    name: 'N4 (4級)',
    desc: 'Elementary Japanese for familiar and everyday situations.',
  },
  {
    name: 'N3 (3級)',
    desc: 'Intermediate — daily conversations and basic workplace Japanese.',
  },
  {
    name: 'N2 (2級)',
    desc: 'Upper intermediate — used in formal and professional settings.',
  },
  {
    name: 'N1 (1級)',
    desc: 'Advanced — complex language for academic and business use.',
  },
];

const SCHEDULE = [
  {
    day: 'Monday – Friday',
    time: '6:00 AM – 8:00 AM',
    label: 'N5/N4 Morning',
  },
  {
    day: 'Monday – Friday',
    time: '3:00 PM – 5:00 PM',
    label: 'N3/N2 Afternoon',
  },
  {
    day: 'Saturday',
    time: '8:00 AM – 12:00 PM',
    label: 'N1 Saturday',
  },
];

export default function NAT() {
  return (
    <>
      <Head>
        <title>NAT-TEST Course – FUJI International Consultancy</title>

        <meta
          name="description"
          content="Prepare for the NAT-TEST (Nihongo Ability Test) at FUJI International Consultancy with expert coaching."
        />
      </Head>

      {/* Hero */}
      <section className="page-hero text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
                Language Certification
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">
                NAT-TEST
              </h1>

              <p className="text-2xl md:text-3xl text-white font-semibold mb-6">
                Nihongo Ability Test
              </p>

              <p className="text-lg text-white leading-relaxed mb-8 max-w-xl">
                The NAT-TEST is a flexible and widely accepted Japanese
                proficiency certification, held 6 times per year. With more
                test dates than JLPT, it&apos;s an excellent choice for those
                needing faster certification turnaround.
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
              <div className="text-6xl mb-8">📝</div>

              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: 'Levels', value: 'N5 → N1' },
                  { label: 'Duration', value: '2–10 Months' },
                  { label: 'Exams/Year', value: '6 Times' },
                  { label: 'Format', value: 'Offline Test' },
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
                What is NAT-TEST?
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                About the Test
              </h2>

              <p className="text-gray-700 leading-relaxed mb-5">
                The Nihongo Ability Test (NAT-TEST) is administered by the
                NAT-TEST Center in Japan. It evaluates Japanese language
                ability across five levels (N1–N5) using vocabulary,
                grammar, reading, and listening skills.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                One of NAT-TEST&apos;s biggest advantages over JLPT is its
                frequency — offered 6 times per year (every odd month),
                giving learners more opportunities to attempt and pass
                the exam quickly.
              </p>

              <p className="text-gray-700 leading-relaxed">
                It is recognized by many Japanese employers and immigration
                offices as valid proof of Japanese ability, especially
                at N3–N1 levels.
              </p>
            </div>

            {/* Right */}
            <div className="bg-gray-100 rounded-xl p-8">
              <h4 className="font-bold text-gray-900 text-xl mb-6">
                NAT-TEST Levels
              </h4>

              <div className="space-y-5 mb-6">
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

              <div className="bg-white p-4 rounded-lg text-sm text-gray-600 shadow-sm">
                📅 Test held every odd month (Jan, Mar, May, Jul, Sep, Nov).
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <span className="text-[#E60013] uppercase tracking-wider font-semibold text-sm">
            Comparison
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-12">
            NAT-TEST vs JLPT
          </h2>

          <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
            <table className="w-full">
              <tbody>
                {[
                  {
                    feature: 'Test Frequency',
                    nat: '6 times/year',
                    jlpt: '2 times/year',
                  },
                  {
                    feature: 'Levels',
                    nat: 'N1–N5',
                    jlpt: 'N1–N5',
                  },
                  {
                    feature: 'Recognition',
                    nat: 'Widely accepted',
                    jlpt: 'Globally standard',
                  },
                  {
                    feature: 'Difficulty',
                    nat: 'Slightly easier access',
                    jlpt: 'More rigorous scoring',
                  },
                  {
                    feature: 'Best For',
                    nat: 'Quick certification',
                    jlpt: 'International prestige',
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b ${
                      i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-4 font-bold text-gray-900">
                      {row.feature}
                    </td>

                    <td className="px-6 py-4 text-[#E60013] font-semibold">
                      NAT: {row.nat}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      JLPT: {row.jlpt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                week: 'Vocabulary & Kanji',
                title: 'Word Foundation',
                items: [
                  'Level-specific vocabulary sets',
                  'Kanji reading and writing',
                  'Word usage in context',
                  'Mnemonics and memory tools',
                ],
              },
              {
                week: 'Grammar & Reading',
                title: 'Language Structure',
                items: [
                  'All grammar points by level',
                  'Reading comprehension passages',
                  'Formal vs informal language',
                  'Passage analysis techniques',
                ],
              },
              {
                week: 'Listening & Mock Tests',
                title: 'Exam Readiness',
                items: [
                  'Authentic listening exercises',
                  'Speed reading practice',
                  '4 full-length mock tests',
                  'Answer strategy coaching',
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
                <div className="text-4xl mb-4">📋</div>

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
              Register for NAT-TEST Course
            </Button>
          </div>

        </div>
      </section> */}
    </>
  );
}