import React from 'react';

const Gallery = () => {
  const images = [
    { src: '/hero-school.jpg', title: 'صنف درسی' },
    { src: '/library.jpg', title: 'کتابخانه' },
    { src: '/computer-lab.jpg', title: 'کمپیوتر لب' },
    { src: '/hero-school.jpg', title: 'شاگردان' },
    { src: '/library.jpg', title: 'فعالیت‌های فوق برنامه' },
    { src: '/computer-lab.jpg', title: 'لابراتوار' },
  ];

  return (
    <div className="pt-20">
      <section className="bg-green-700 py-16 text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4">گالری تصاویر</h1>
        <p className="text-xl max-w-2xl mx-auto px-4 opacity-90">
          لحظات شاد و فعالیت‌های آموزشی شاگردان ما در مکتب ورجاوند.
        </p>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-2xl aspect-video">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
