import React from 'react';

const Teachers = () => {
  const teachers = [
    { name: 'استاد احمدی', role: 'مدیر مکتب', experience: '۱۵ سال تجربه', bio: 'متخصص در مدیریت آموزشی و رهبری.' },
    { name: 'استاد محمدی', role: 'استاد دری و ادبیات', experience: '۱۰ سال تجربه', bio: 'عاشق آموزش زبان و ادبیات فارسی دری.' },
    { name: 'استاد کریمی', role: 'استاد ریاضی و ساینس', experience: '۸ سال تجربه', bio: 'متخصص در آموزش مفاهیم پیچیده به زبان ساده.' },
    { name: 'خانم رضایی', role: 'استاد صنف آمادگی', experience: '۱۲ سال تجربه', bio: 'متخصص در روانشناسی کودک و آموزش ابتدایی.' },
  ];

  return (
    <div className="pt-20">
      <section className="bg-green-800 py-16 text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4">کادر آموزشی ما</h1>
        <p className="text-xl max-w-2xl mx-auto px-4 opacity-90">
          استادان مجرب، مسلکی و دلسوز که آینده فرزندان شما را می‌سازند.
        </p>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 text-center hover:shadow-2xl transition-all p-8">
                <div className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-green-700">{teacher.name.charAt(5)}</span>
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">{teacher.name}</h3>
                <p className="text-yellow-600 font-bold mb-4">{teacher.role}</p>
                <p className="text-sm text-gray-500 mb-4">{teacher.experience}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{teacher.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teachers;
