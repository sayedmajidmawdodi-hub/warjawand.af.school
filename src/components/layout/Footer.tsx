import { Phone, Mail, MapPin, Globe, MessageCircle, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Intro */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white p-1 rounded">
                <span className="text-green-800 font-bold text-lg">W</span>
              </div>
              <span className="text-2xl font-bold">مکتب خصوصی ورجاوند</span>
            </div>
            <p className="text-green-100 text-sm">
              جایی که تعلیم، راه روشن آینده فرزندان ماست. ما متعهد به رشد علمی و اخلاقی نسل آینده افغانستان هستیم.
            </p>
            <div className="flex gap-4">
              <Globe size={20} className="hover:text-yellow-400 cursor-pointer" />
              <MessageCircle size={20} className="hover:text-yellow-400 cursor-pointer" />
              <Share2 size={20} className="hover:text-yellow-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-green-600 pb-2">لینک‌های مهم</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-green-100 hover:text-yellow-400 transition-colors">درباره ما</Link></li>
              <li><Link to="/classes" className="text-green-100 hover:text-yellow-400 transition-colors">صنوف درسی</Link></li>
              <li><Link to="/gallery" className="text-green-100 hover:text-yellow-400 transition-colors">گالری تصاویر</Link></li>
              <li><Link to="/admissions" className="text-green-100 hover:text-yellow-400 transition-colors">ثبت نام</Link></li>
              <li><Link to="/contact" className="text-green-100 hover:text-yellow-400 transition-colors">تماس با ما</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-green-600 pb-2">تماس با ما</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-green-100 text-sm leading-relaxed">کابل، چهارقلعه چهاردهی، قلعه وزیر، مقابل مسجد حضرت ابوبکر صدیق (رض)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-400" />
                <span className="text-green-100 text-sm">0771223797 / 0707051715</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-400" />
                <span className="text-green-100 text-sm">info@warjwand.edu.af</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-green-600 pb-2">ثبت نام ۱۴۰۵</h3>
            <p className="text-green-100 text-sm">فرصت را از دست ندهید، ثبت نام برای سال تعلیمی جدید آغاز شده است.</p>
            <Link to="/admissions" className="inline-block bg-yellow-500 text-green-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors">
              ثبت نام کنید
            </Link>
          </div>
        </div>

        <hr className="my-8 border-green-700" />
        <div className="text-center text-sm text-green-200">
          Copyright © {new Date().getFullYear()} Warjwand Private School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
