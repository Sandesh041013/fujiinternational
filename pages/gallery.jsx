import React from "react";
import Image from "next/image";

export default function Gallery() {
  const galleryImages = [
    { id: 1, src: "/fujiimage3.jpg", alt: "Student Success Ceremony" },
    { id: 2, src: "/fujiimage4.jpg", alt: "Japan Study Orientation" },
    { id: 3, src: "/fujiimage5.jpg", alt: "Visa Approval Celebration" },
    { id: 4, src: "/fujiimage6.jpg", alt: "Consultation Session" },
    { id: 5, src: "/fujiimage7.jpg", alt: "Training Class" },
    { id: 6, src: "/fujiimage8.jpg", alt: "Pre-Departure Briefing" },
    { id: 7, src: "/fujiimage9.jpg", alt: "Student Farewell Program" },
    { id: 8, src: "/fujiimage10.jpg", alt: "Language Preparation Class" },
    { id: 9, src: "/image.png", alt: "Certificate Handover" },
    { id: 10, src: "/fujiimage11.jpg", alt: "Graduation & Achievement" },
  ];

  const vLayout = [
    [0, 5],
    [1, 6],
    [2, 7],
    [3, 8],
    [4, 9],
  ];

  const renderImage = (image) => (
    <div
      key={image.id}
      className="w-56 h-64 b rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer relative"
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={224}
        height={160}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
  );

  return (
    <section className="py-20 px-4 lg:px-12 page-hero">
      <div className=" mt-10">

        {/* Header */}
        <div className="text-center mb-16">
          

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Moments of <span className="text-[#E60013]">Success & Growth</span>
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-lg">
            Explore real journeys of students who achieved their dreams of
            studying, working, and building their future abroad with our guidance.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block mb-12">
          <div className="flex justify-center">
            <div className="grid grid-cols-5 gap-10 max-w-6xl">
              {vLayout.map((column, colIndex) => (
                <div
                  key={colIndex}
                  className={`flex flex-col items-center space-y-4 ${
                    colIndex === 2
                      ? "mt-16"
                      : colIndex === 1 || colIndex === 3
                      ? "mt-8"
                      : ""
                  }`}
                >
                  {column.map((index) =>
                    renderImage(galleryImages[index])
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden mb-12">
          <div className="grid grid-cols-2 gap-6">
            {galleryImages.slice(0, 8).map(renderImage)}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden mb-12">
          <div className="flex flex-col items-center space-y-6">

            <div className="flex w-full justify-between gap-4 px-2">
              {galleryImages.slice(0, 2).map(renderImage)}
            </div>

            <div className="flex w-full justify-center px-4">
              {renderImage(galleryImages[2])}
            </div>

            <div className="flex w-full justify-between gap-4 px-2">
              {galleryImages.slice(3, 5).map(renderImage)}
            </div>

            <div className="flex w-full justify-center px-4">
              {renderImage(galleryImages[5])}
            </div>
          </div>
        </div>

        {/* CTA */}
        
      </div>
    </section>
  );
}