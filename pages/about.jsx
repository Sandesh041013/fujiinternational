import Head from 'next/head';
import Button from '../components/Button.jsx';
import Image from 'next/image';
import TestimonialSection from '../components/Testimonial.jsx';

const values = [
  { icon: '◈', title: 'Integrity', desc: 'We build relationships on transparency, honesty, and unwavering ethical standards in every engagement.' },
  { icon: '◉', title: 'Commitment', desc: 'We are dedicated to supporting our clients from the beginning until they achieve their goals. Our team ensures continuous guidance, timely updates, and reliable assistance throughout the entire visa process.' },
  { icon: '◇', title: 'Excellence', desc: 'We strive for the highest quality in our services. From documentation to counseling, we focus on accuracy, professionalism, and attention to detail to deliver the best possible outcomes.' },
  { icon: '◈', title: 'Client-Centered Approach', desc: 'Our clients are at the heart of everything we do. We listen, understand individual needs, and provide personalized solutions to help each person achieve their dreams of studying or working abroad.' },
];

// keep exactly two people and allow adding photo paths
const team = [
  { name: 'Pradip Gharti', role: 'Founder & CEO', region: 'Nepal', photo: '' },
  { name: 'Binod Bc', role: 'Managing Director', region: 'Nepal', photo: '' },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About — FUJI International Consultancy</title>
        <meta name="description" content="Learn about FUJI International Consultancy's history, mission, values, and the global team behind our advisory excellence." />
      </Head>

      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow animate-fadeUp">Who We Are</span>
          <h1 className="animate-fadeUp delay-1">Built on Trust.<br />Driven by Results.</h1>
          <p className="animate-fadeUp delay-2">
            For over two decades, FUJI International Consultancy has been the partner of choice 
            for organizations navigating the complexities of global business.
          </p>
        </div>
      </div>

      {/* Story Section */}
      {/* Story Section */}
<section className="section">
  <div className="container">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      
      {/* Left Side Text */}
      <div>
        <span className="eyebrow">
          Our Story
        </span>

        <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">
          From Tokyo to the World
        </h2>

        <div className="divider" />

        <p className="text-gray-700 leading-relaxed mb-5">
          Welcome to FUJI International Consultancy, your trusted
          partner for student and working visa services. We are
          dedicated to guiding individuals who aspire to build
          their future abroad, especially in countries like Japan.
          With expert knowledge and personalized support, we ensure
          a smooth and reliable process from consultation to visa
          approval. Our goal is to make your international journey
          simple, transparent, and successful.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Our name — FUJI — reflects our philosophy:
          like Mount Fuji, we stand for permanence,
          clarity, and the ability to see farther than others.
          Every engagement is guided by a commitment
          to long-term value over short-term gain.
        </p>

        <div className="mt-9">
          <Button href="/contact" size="md" arrow>
            Talk to Our Team
          </Button>
        </div>
      </div>

      {/* Right Side Images */}
      <div className="w-full">
        <div className="flex flex-col gap-5">

          {/* Top Big Image */}
          <div className="overflow-hidden rounded-[28px] shadow-xl">
            <Image
              src="/image.png"
              width={1000}
              height={650}
              alt="FUJI International"
              className="w-full h-72 md:h-80 lg:h-[360px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Bottom Two Images */}
          <div className="flex gap-5">
            
            {/* Bottom Left */}
     <div className="w-1/2 h-44 md:h-52 overflow-hidden rounded-[28px] shadow-lg relative">
  <Image
    src="/fujiimage1.jpg"
    alt="Office Scene"
    fill
    className="object-cover hover:scale-105 transition duration-500"
  />
</div>

            {/* Bottom Right */}
            <div className="w-1/2 h-44 md:h-52 overflow-hidden rounded-[28px] shadow-lg relative">
  <Image
    src="/fujiimage2.jpg"
    alt="Office Scene"
    fill
    className="object-cover hover:scale-105 transition duration-500"
  />
</div>

          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Mission & Vision - add soft tint background */}
    {/* Mission & Vision Section */}
<section className="section py-24 bg-gradient-to-b from-[#fff7f7] to-[#f8f9fc] overflow-hidden">
  <div className="container">
    
    {/* Heading */}
    <div className="text-center mb-14">
      <span className="eyebrow">
        Our Purpose
      </span>

      <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">
        Mission & Vision
      </h2>

      <div className="divider divider--center" />
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      
      {/* Mission Card */}
      <div className="relative bg-white rounded-[28px] p-8 md:p-10 shadow-lg border border-red-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden">
        
        {/* Background Shape */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
            <span className="text-3xl text-primary">
              ◎
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
            Our Mission
          </h3>

          <div className="w-14 h-1 bg-primary rounded-full mb-5" />

          <p className="text-gray-600 leading-8 text-base">
            Our mission is to empower students and professionals
            by providing accurate guidance, ethical services,
            and complete support throughout their visa journey.
            We bridge the gap between dreams and opportunities
            through trusted counseling and expert assistance.
          </p>
        </div>
      </div>

      {/* Vision Card */}
      <div className="relative bg-[#111827] rounded-[28px] p-8 md:p-10 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mb-6">
            <span className="text-3xl text-primary">
              ◈
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Our Vision
          </h3>

          <div className="w-14 h-1 bg-primary rounded-full mb-5" />

          <p className="text-gray-300 leading-8 text-base">
            Our vision is to become a leading and trusted
            consultancy in international education and employment,
            creating a future where individuals can confidently
            access global opportunities with the right guidance.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

     {/* Values Section */}
<section className="section py-20 bg-gradient-to-b from-white to-gray-50">
  <div className="container">
    
    {/* Heading */}
    <div className="text-center mb-14">
      <span className="eyebrow">
        What We Stand For
      </span>

      <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">
        Our Core Values
      </h2>

      <div className="divider divider--center" />
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {values.map(({ icon, title, desc }, i) => (
        <div
          key={title}
          className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fadeUp text-center min-h-[240px] flex flex-col justify-start"
          style={{
            animationDelay: `${(i + 1) * 0.1}s`,
          }}
        >
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl text-primary">
              {icon}
            </span>
          </div>

          {/* Title */}
          <h4 className="text-lg md:text-xl font-bold text-dark mb-3 leading-snug">
            {title}
          </h4>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-600 leading-7">
            {desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
    <section>
    <TestimonialSection/>
    </section>
       
   
      {/* Team Section - only two people and photo placeholders */}
      <section className="section bg-dark">
        <div className="container">
          <div className="text-center mb-14">
            <span className="eyebrow eyebrow--white">Leadership</span>
            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl text-black">
              The People Behind FUJI
            </h2>
            <div className="divider divider--center" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {team.map(({ name, role, region, photo }, i) => (
              <div key={name} className="text-center text-white animate-fadeUp" style={{ animationDelay: `${(i + 1) * 0.1}s` }}>
                <div className="mx-auto mb-4 w-28 h-28 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  {photo ? (
                    <Image src={photo} width={160} height={160} alt={name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-sm text-gray-500">Add photo</span>
                  )}
                </div>
                <div className="font-semibold text-lg mb-1 text-black">{name}</div>
                <div className="text-sm text-gray-mid mb-3 text-black">{role}</div>
                <div className="text-xs text-gray-mid text-black">◉ {region}</div>
              </div>
            ))}
          </div>
          
        </div>
        
      </section>
    </>
  );
}
