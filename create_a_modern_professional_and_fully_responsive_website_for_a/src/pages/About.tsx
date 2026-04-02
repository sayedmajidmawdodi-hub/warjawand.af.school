
import { Target, Lightbulb, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      <section className="bg-green-700 py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">درباره مکتب ورجاوند</h1>
        <p className="text-xl max-w-2xl mx-auto px-4 opacity-90 leading-relaxed">
          تعلیم، تربیه و آینده روشن برای فرزندان شما در مکتب خصوصی ورجاوند.
        </p>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-green-800">معرفی مکتب</h2>
              <p className="text-gray-700 leading-loose mb-6 text-lg">
                مکتب خصوصی ورجاوند با هدف ارائه خدمات آموزشی نوین و با کیفیت در کابل فعالیت می‌کند. ما باور داریم که هر کودک دارای استعدادهای منحصر به فردی است که باید در یک محیط امن و محرک کشف و شکوفا شود.
              </p>
              <p className="text-gray-700 leading-loose text-lg">
                تمرکز ما بر رشد همه جانبه شاگردان (علمی، اخلاقی، و مهارتی) است. با استفاده از روش‌های تدریس فعال و مبتنی بر تحقیق، ما شاگردان را برای چالش‌های قرن ۲۱ آماده می‌کنیم.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-8 rounded-3xl border border-yellow-200 text-center">
                  <Target className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg text-green-800 mb-2">هدف ما</h3>
                  <p className="text-sm text-gray-600">رشد علمی و اخلاقی شاگردان</p>
                </div>
                <div className="bg-green-50 p-8 rounded-3xl border border-green-200 text-center mt-8">
                  <Lightbulb className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg text-green-800 mb-2">روش‌های مدرن</h3>
                  <p className="text-sm text-gray-600">تدریس با فناوری‌های روز</p>
                </div>
                <div className="bg-green-50 p-8 rounded-3xl border border-green-200 text-center">
                  <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg text-green-800 mb-2">کادر مجرب</h3>
                  <p className="text-sm text-gray-600">استادان مسلکی و دلسوز</p>
                </div>
                <div className="bg-yellow-50 p-8 rounded-3xl border border-yellow-200 text-center mt-8">
                  <Award className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg text-green-800 mb-2">آینده روشن</h3>
                  <p className="text-sm text-gray-600">تضمین موفقیت شاگردان</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
