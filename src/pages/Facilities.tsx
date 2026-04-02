import React from 'react';
import { Library, Monitor, Beaker, Bus, Waves } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      title: 'حوض ریگی',
      icon: <Waves className="w-10 h-10 text-blue-500" />,
      description: 'فضای تفریحی برای شاگردان صنف آمادگی جهت رشد خلاقیت و بازی.',
      image: '/hero-school.jpg' // Use hero if no better placeholder
    },
    {
      title: 'کتابخانه مجهز',
      icon: <Library className="w-10 h-10 text-green-600" />,
      description: 'بیش از هزاران جلد کتاب آموزشی و داستانی برای ترویج فرهنگ مطالعه.',
      image: '/library.jpg'
    },
    {
      title: 'لابراتوار معیاری',
      icon: <Beaker className="w-10 h-10 text-red-500" />,
      description: 'امکانات آزمایشگاهی برای مضامین ساینسی جهت یادگیری عملی.',
      image: '/hero-school.jpg'
    },
    {
      title: 'کمپیوترلب مجهز',
      icon: <Monitor className="w-10 h-10 text-indigo-500" />,
      description: 'آموزش مهارت‌های تکنالوژی و استفاده از اینترنت برای تحقیق.',
      image: '/computer-lab.jpg'
    },
    {
      title: 'سرویس رفت و برگشت',
      icon: <Bus className="w-10 h-10 text-yellow-600" />,
      description: 'ترانسپورت منظم و مصئون برای تمام نقاط شهر.',
      image: '/hero-school.jpg'
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-green-600 py-16 text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4">سهولت‌ها و امکانات</h1>
        <p className="text-xl max-w-2xl mx-auto px-4 opacity-90">
          ما بهترین محیط و امکانات را برای یادگیری شاگردان فراهم کرده‌ایم.
        </p>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded-xl">{item.icon}</div>
                    <h3 className="text-xl font-bold text-green-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
