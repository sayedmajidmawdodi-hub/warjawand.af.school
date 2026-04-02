
import { Book, Calculator, Languages, Music, Atom } from 'lucide-react';

const Classes = () => {
  const subjects = [
    { name: 'دری', icon: <Book className="text-green-600" /> },
    { name: 'پشتو', icon: <Book className="text-blue-600" /> },
    { name: 'انگلیسی', icon: <Languages className="text-yellow-600" /> },
    { name: 'ریاضی', icon: <Calculator className="text-red-600" /> },
    { name: 'ساینس', icon: <Atom className="text-purple-600" /> },
    { name: 'هنر و مهارت', icon: <Music className="text-pink-600" /> },
  ];

  return (
    <div className="pt-20">
      <section className="bg-yellow-400 py-16 text-green-900 text-center">
        <h1 className="text-4xl font-extrabold mb-4">صنوف و مضامین تعلیمی</h1>
        <p className="text-xl max-w-2xl mx-auto px-4 font-medium leading-relaxed">
          ارائه خدمات تعلیمی از صنف آمادگی الی صنف ششم برای سال تعلیمی ۱۴۰۵
        </p>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Preparatory Class */}
            <div className="bg-green-50 p-8 rounded-3xl border-2 border-green-200">
              <h2 className="text-3xl font-extrabold text-green-800 mb-6 border-b-2 border-green-200 pb-4">صنف آمادگی</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                صنف آمادگی ما محیطی شاد و تعاملی برای کودکان است تا با الفبا، اعداد، و مهارت‌های اجتماعی اولیه آشنا شوند. تمرکز ما در این صنف بر ایجاد انگیزه برای یادگیری است.
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold text-green-700 mb-4">فعالیت‌های صنف آمادگی:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>آشنایی با حروف و صداها</li>
                  <li>مهارت‌های ظریف حرکتی (نقاشی و کاردستی)</li>
                  <li>بازی‌های آموزشی و فکری</li>
                  <li>قصه خوانی و تقویت بیان</li>
                </ul>
              </div>
            </div>

            {/* Primary Classes */}
            <div className="bg-yellow-50 p-8 rounded-3xl border-2 border-yellow-200">
              <h2 className="text-3xl font-extrabold text-green-800 mb-6 border-b-2 border-yellow-200 pb-4">صنف اول تا ششم</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                در دوره‌ی ابتدائیه، ما بر روی پایه‌های اساسی علوم و زبان تمرکز می‌کنیم. نصاب تعلیمی وزارت معارف با میتودهای مدرن و مضامین تقویتی غنی‌تر شده است.
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold text-green-700 mb-4">مضامین اصلی:</h3>
                <div className="grid grid-cols-2 gap-4">
                  {subjects.map((sub, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 border border-gray-100 rounded-lg">
                      {sub.icon}
                      <span className="font-medium">{sub.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;
