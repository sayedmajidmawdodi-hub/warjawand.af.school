import React from 'react';
import { Target, Users, Layout, BookOpen, MessageCircle, Star, Sparkles } from 'lucide-react';

const Features = () => {
  const allFeatures = [
    { title: 'ارزیابی انکشافی', desc: 'ارزیابی‌های هفتوار و ماهانه از پیشرفت شاگردان.', icon: <Target className="w-8 h-8 text-green-600" /> },
    { title: 'فناوری‌های نوین', desc: 'استفاده از تخته‌های هوشمند و میتودهای دیجیتال.', icon: <Sparkles className="w-8 h-8 text-yellow-600" /> },
    { title: 'پلان معیاری', desc: 'تطبیق نصاب تعلیمی طبق معیارهای جهانی.', icon: <Layout className="w-8 h-8 text-blue-600" /> },
    { title: 'روان‌خوانی و روان‌نویسی', desc: 'تمرکز بر مهارت‌های زبانی (دری، پشتو، انگلیسی).', icon: <BookOpen className="w-8 h-8 text-red-600" /> },
    { title: 'ترویج کتاب‌خوانی', desc: 'برنامه‌های ویژه برای ایجاد علاقه به مطالعه.', icon: <Star className="w-8 h-8 text-purple-600" /> },
    { title: 'مشاوره تعلیمی', desc: 'خدمات مشورتی توسط متخصصین تعلیم و تربیه.', icon: <Users className="w-8 h-8 text-indigo-600" /> },
    { title: 'فن سخنرانی', desc: 'آموزش عملی و نظری مهارت‌های بیانی.', icon: <MessageCircle className="w-8 h-8 text-pink-600" /> },
  ];

  return (
    <div className="pt-20">
      <section className="bg-yellow-400 py-16 text-green-900 text-center">
        <h1 className="text-4xl font-extrabold mb-4">ویژگی‌های متمایز ما</h1>
        <p className="text-xl max-w-2xl mx-auto px-4 font-medium opacity-80">
          آنچه مکتب ورجاوند را از دیگران متمایز می‌کند.
        </p>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allFeatures.map((feature, idx) => (
              <div key={idx} className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all border-t-4 border-t-green-600">
                <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
