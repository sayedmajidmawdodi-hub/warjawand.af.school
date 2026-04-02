import React, { useState } from 'react';
import { Send, User, Phone, BookOpen, UserPlus } from 'lucide-react';

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    phone: '',
    classLevel: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('درخواست شما با موفقیت ثبت شد. بزودی با شما تماس خواهیم گرفت.');
    setFormData({ studentName: '', fatherName: '', phone: '', classLevel: '' });
  };

  return (
    <div className="pt-20">
      <section className="bg-green-700 py-20 text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4">ثبت نام برای سال تعلیمی ۱۴۰۵</h1>
        <p className="text-xl max-w-2xl mx-auto px-4 opacity-90">
          با ما بپیوندید و آینده‌ای درخشان برای فرزندتان رقم بزنید. ثبت نام از صنف آمادگی الی صنف ششم ادامه دارد.
        </p>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 bg-green-600 p-8 text-white flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <UserPlus />
                چرا ورجاوند؟
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <p>استادان مسلکی و باتجربه</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <p>محیط آموزشی مدرن و مجهز</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <p>تمرکز بر اخلاق و معارف اسلامی</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <p>تخفیفات ویژه برای ثبت نام جدید</p>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-2/3 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-green-800 mb-8">فورم ثبت نام آنلاین</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <User size={16} />
                      نام شاگرد
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                      placeholder="نام مکمل شاگرد"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <User size={16} />
                      نام پدر
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.fatherName}
                      onChange={(e) => setFormData({...formData, fatherName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                      placeholder="نام پدر شاگرد"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <Phone size={16} />
                      شماره تماس
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                      placeholder="07XXXXXXXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <BookOpen size={16} />
                      صنف مورد نظر
                    </label>
                    <select 
                      required
                      value={formData.classLevel}
                      onChange={(e) => setFormData({...formData, classLevel: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">انتخاب کنید...</option>
                      <option value="آمادگی">آمادگی</option>
                      <option value="اول">صنف اول</option>
                      <option value="دوم">صنف دوم</option>
                      <option value="سوم">صنف سوم</option>
                      <option value="چهارم">صنف چهارم</option>
                      <option value="پنجم">صنف پنجم</option>
                      <option value="ششم">صنف ششم</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-yellow-500/30"
                >
                  <Send size={20} />
                  ارسال درخواست ثبت نام
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
