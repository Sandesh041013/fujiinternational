import Head from 'next/head';
import Button from '../../components/Button.jsx';

const LEVELS = [
  {
    name: 'Section A',
    desc: 'Listening comprehension — understanding everyday conversations and announcements.',
  },
  {
    name: 'Section B',
    desc: 'Reading comprehension — understanding notices, signs, instructions, and short texts.',
  },
];

const SCHEDULE = [
  {
    day: 'Monday – Friday',
    time: '6:00 AM – 8:00 AM',
    label: 'Morning Batch',
  },
  {
    day: 'Monday – Friday',
    time: '4:00 PM – 6:00 PM',
    label: 'Evening Batch',
  },
  {
    day: 'Saturday',
    time: '9:00 AM – 1:00 PM',
    label: 'Weekend Intensive',
  },
];

export default function JFT() {
  return (
    <>
      <Head>
        <title>JFT-Basic Course – FUJI International Consultancy</title>
        <meta
          name="description"
          content="Prepare for the JFT-Basic (Japan Foundation Test) with expert coaching at FUJI International Consultancy."
        />
      </Head>

      {/* Hero Section */}
      <section className="page-hero text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
                Language Certification
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">
                JFT – Basic
              </h1>

              <p className="text-2xl md:text-3xl text-white font-semibold mb-6">
                Japan Foundation Test for Basic Japanese
              </p>

              <p className="text-lg text-white leading-relaxed mb-8 max-w-xl">
                The JFT-Basic is the primary Japanese language requirement
                for the Specified Skilled Worker (SSW) visa. Our structured
                program ensures you&apos;re fully prepared — from basics to
                test-day confidence.
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
              <div className="text-6xl mb-8">🎌</div>

              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: 'Duration', value: '3 Months' },
                  { label: 'Level', value: 'Beginner–A2' },
                  { label: 'Format', value: 'Online + Offline' },
                  { label: 'Next Batch', value: 'June 2025' },
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

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left */}
            <div>
              <span className="text-[#E60013] font-semibold uppercase tracking-wider text-sm">
                What is JFT-Basic?
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                About the Test
              </h2>

              <p className="text-gray-700 leading-relaxed mb-5">
                The Japan Foundation Test for Basic Japanese (JFT-Basic)
                is a Computer-Based Test (CBT) administered by the Japan
                Foundation. It evaluates whether candidates have the Japanese
                language skills needed to live and work in Japan as a
                Specified Skilled Worker.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The test is taken on a computer and assesses reading and
                listening abilities. Passing is mandatory for many
                Specified Skilled Worker categories.
              </p>
            </div>

            {/* Right */}
            <div className="bg-gray-100 rounded-xl p-8">
              <h4 className="font-bold text-gray-900 text-xl mb-6">
                Test Sections
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
                 No passing score for individual sections — overall score
                determines pass/fail.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 page-hero text-white">
        <div className="max-w-7xl mx-auto px-6">

          <span className="text-[#E60013] uppercase tracking-wider font-semibold text-sm">
            Curriculum
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-12 text-white">
            What You&apos;ll Learn
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                week: 'Month 1',
                title: 'Foundations',
                items: [
                  'Hiragana & Katakana',
                  'Basic vocabulary (500 words)',
                  'Greetings and daily phrases',
                  'Numbers, dates, and time',
                ],
              },
              {
                week: 'Month 2',
                title: 'Core Skills',
                items: [
                  'Workplace communication',
                  'Reading signs and notices',
                  'Listening exercises (A1–A2)',
                  'Grammar: particles, verbs, adjectives',
                ],
              },
              {
                week: 'Month 3',
                title: 'Test Preparation',
                items: [
                  'Full mock exams (CBT style)',
                  'Section-specific drills',
                  'Speed and accuracy training',
                  'Exam strategy and time management',
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
                      <span className="mt-1"></span>
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

          <span className="text-blue-700 uppercase tracking-wider font-semibold text-sm">
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
                <div className="text-4xl mb-4">🕐</div>

                <div className="font-bold text-gray-900 text-lg mb-3">
                  {s.label}
                </div>

                <div className="text-gray-600 text-sm font-semibold mb-2">
                  {s.day}
                </div>

                <div className="text-blue-700 font-bold text-base">
                  {s.time}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/contact" size="lg">
              Register for JFT Course
            </Button>
          </div>
        </div>
      </section> */}
    </>
  );
}