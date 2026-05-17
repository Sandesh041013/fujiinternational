import Head from 'next/head';
import Image from 'next/image';

const universities = {
  higherRanked: [
    {
      name: 'University of Tokyo',
      url: 'https://www.u-tokyo.ac.jp',
      img: '/tokiyo.png',
      location: 'Tokyo',
    },
    {
      name: 'Kyoto University',
      url: 'https://www.kyoto-u.ac.jp',
      img: '/kyoto.png',
      location: 'Kyoto',
    },
    {
      name: 'Osaka University',
      url: 'https://www.osaka-u.ac.jp',
      img: '/osaja.png',
      location: 'Osaka',
    },
    {
      name: 'Tohoku University',
      url: 'https://www.tohoku.ac.jp',
      img: '/tohoku.png',
      location: 'Sendai',
    },
    {
      name: 'Nagoya University',
      url: 'https://www.nagoya-u.ac.jp',
      img: '/nagoya.png',
      location: 'Nagoya',
    },
  ],

  higherMid: [
    {
      name: 'Hokkaido University',
      url: 'https://www.hokudai.ac.jp',
      img: '/hokaido.png',
      location: 'Sapporo',
    },
    {
      name: 'Kyushu University',
      url: 'https://www.kyushu-u.ac.jp',
      img: '/kyushu.png',
      location: 'Fukuoka',
    },
    {
      name: 'Waseda University',
      url: 'https://www.waseda.jp',
      img: '/waseda.png',
      location: 'Tokyo',
    },
    {
      name: 'Keio University',
      url: 'https://www.keio.ac.jp',
      img: '/keio.png',
      location: 'Tokyo',
    },
  ],

  regional: [
    {
      name: 'Kobe University',
      url: 'https://www.kobe-u.ac.jp',
      img: '/kobe.png',
      location: 'Kobe',
    },
    {
      name: 'Tokyo Institute of Technology',
      url: 'https://www.titech.ac.jp',
      img: '/tokiyoinstitute.svg',
      location: 'Tokyo',
    },
    {
      name: 'University of the Ryukyus',
      url: 'https://www.u-ryukyu.ac.jp',
      img: '/ryukus.png',
      location: 'Okinawa',
    },
  ],

  schools: [
    {
      name: 'Tokyo International School',
      url: 'https://www.tisjapan.org',
      img: '/tokiyoschool.jpeg',
      location: 'Tokyo',
    },
    {
      name: 'K. International School Tokyo',
      url: 'https://www.kist.ed.jp',
      img: '/k.jpg',
      location: 'Tokyo',
    },
    {
      name: 'British School in Tokyo',
      url: 'https://www.bst.ac.jp',
      img: '/british.png',
      location: 'Tokyo',
    },
    {
      name: 'Canadian International School Tokyo',
      url: 'https://www.cistokyo.jp',
      img: '/canada.jpeg',
      location: 'Tokyo',
    },
    {
      name: 'American School in Japan',
      url: 'https://www.asij.ac.jp',
      img: '/america.avif',
      location: 'Chiba',
    },
  ],
};

const Card = ({ item }) => {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative w-full h-52 bg-white overflow-hidden">
        <Image
          src={item.img}
          alt={item.name}
          fill
          className="object-contain p-5 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg text-dark mb-1 group-hover:text-primary transition-colors">
          {item.name}
        </h3>

        <p className="text-sm text-gray-500">{item.location}</p>
      </div>
    </a>
  );
};

export default function Universities() {
  return (
    <>
      <Head className="bg-black ">
        <title className="">
          Universities & Schools-FUJI International Consultancy
        </title>
      </Head>

      {/* Universities Section */}
      <section className="section py-20 page-hero ">
        <div className="container">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4 mt-10">
              Universities in Japan
            </h1>

            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Higher-ranked institutions appear first. Click any card to visit
              the official university website.
            </p>
          </div>

          {/* Higher Ranked */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Higher Ranked Universities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {universities.higherRanked.map((u) => (
                <Card key={u.name} item={u} />
              ))}
            </div>
          </div>

          {/* Higher Mid */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Higher–Mid Ranked Universities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {universities.higherMid.map((u) => (
                <Card key={u.name} item={u} />
              ))}
            </div>
          </div>

          {/* Regional */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Regional & Specialist Universities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {universities.regional.map((u) => (
                <Card key={u.name} item={u} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="section bg-gray-50 py-20 page-hero">
        <div className="container">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              International Schools
            </h1>

            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A curated list of international schools in Japan. Click any school
              card to visit the official website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {universities.schools.map((s) => (
              <Card key={s.name} item={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}