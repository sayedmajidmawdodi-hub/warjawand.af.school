
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, GraduationCap, Users, Shield, BookOpen, Star, School } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const highlights = [
    {
      title: 'استادان مجرب و مسلکی',
      icon: <Users className="w-12 h-12 text-yellow-500" />,
      description: 'کادر آموزشی متخصص با تجربه چندین ساله در سیستم تعلیمی افغانستان.'
    },
    {
      title: 'آموزش با روش‌های نوین',
      icon: <BookOpen className="w-12 h-12 text-yellow-500" />,
      description: 'استفاده از تکنالوژی و میتودهای تدریسی مدرن برای یادگیری بهتر.'
    },
    {
      title: 'محیط امن و مناسب',
      icon: <Shield className="w-12 h-12 text-yellow-500" />,
      description: 'فضای صمیمی، پاک و مصئون برای رشد فکری و جسمی شاگردان.'
    }
  ];

  const features = [
    'ارزیابی انکشافی هفتوار و ماهانه از شاگردان',
    'تدریس با فناوری‌های نوین آموزشی',
    'تطبیق پلان معیاری در تدریس',
    'مهارت در روان‌خوانی و روان‌نویسی',
    'ایجاد علاقه به مطالعه و کتاب‌خوانی',
    'مشاوره تعلیمی توسط متخصصین',
    'آموزش فن سخنرانی (عملی و نظری)',
  ];

  const discounts = [
    { title: 'صنف VIP رایگان', desc: 'برای شاگردان ممتاز و با انگیزه' },
    { title: '20% تخفیف در کتاب', desc: 'تخفیف ویژه در خرید کتاب‌های درسی' },
    { title: 'تخفیف فامیلی', desc: 'تخفیف ویژه برای ۳ نفر از یک فامیل' },
    { title: '30% تخفیف یونیفورم', desc: 'در تهیه لباس مکتب' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-school.jpg" 
            alt="Students in classroom" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-white pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              مکتب خصوصی <span className="text-yellow-400">ورجاوند</span>
            </h1>
            <p className="text-2xl md:text-3xl font-medium mb-4 text-green-100">
              جایی که تعلیم، راه روشن آینده فرزندان ماست
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
              با داشتن استادان مسلکی برای سال تعلیمی ۱۴۰۵ از صنف آمادگی الی صنف ششم شاگرد می‌پذیرد. آینده فرزندان تان را با ما تضمین کنید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/admissions" className="bg-yellow-500 hover:bg-yellow-400 text-green-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-yellow-500/50">
                ثبت نام کنید
                <ArrowLeft size={20} />
              </Link>
              <Link to="/about" className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all">
                بیشتر بدانید
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 bg-green-50 rounded-2xl border border-green-100 text-center shadow-sm"
              >
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-green-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-extrabold mb-8 text-green-800 flex items-center gap-4">
                <Star className="text-yellow-500" />
                ویژگی‌های ما
              </h2>
              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-green-600 h-48 rounded-2xl flex flex-col items-center justify-center text-white p-6 shadow-xl">
                  <GraduationCap size={48} className="mb-4" />
                  <span className="text-xl font-bold">تعلیم</span>
                </div>
                <div className="bg-yellow-400 h-64 rounded-2xl flex flex-col items-center justify-center text-green-900 p-6 shadow-xl">
                  <School size={48} className="mb-4" />
                  <span className="text-xl font-bold">تربیه</span>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-green-800 h-64 rounded-2xl flex flex-col items-center justify-center text-white p-6 shadow-xl">
                  <BookOpen size={48} className="mb-4" />
                  <span className="text-xl font-bold">مطالعه</span>
                </div>
                <div className="bg-green-100 h-48 rounded-2xl flex flex-col items-center justify-center text-green-800 p-6 border-2 border-green-200 shadow-xl">
                  <Users size={48} className="mb-4" />
                  <span className="text-xl font-bold">جامعه</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discounts Banner */}
      <section className="py-16 bg-green-800 text-white overflow-hidden relative">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-yellow-500 rounded-full opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">تخفیفات ویژه ثبت نام سال ۱۴۰۵</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {discounts.map((discount, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl text-center">
                <h4 className="text-xl font-bold text-yellow-400 mb-2">{discount.title}</h4>
                <p className="text-green-100">{discount.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
