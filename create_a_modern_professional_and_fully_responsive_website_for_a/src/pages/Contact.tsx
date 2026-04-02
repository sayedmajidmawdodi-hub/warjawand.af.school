
import { MapPin, Phone, MessageSquare, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20">
      <section className="bg-yellow-400 py-16 text-green-900 text-center">
        <h1 className="text-4xl font-extrabold mb-4">تماس با ما</h1>
        <p className="text-xl max-w-2xl mx-auto px-4 font-medium opacity-80">
          ما همیشه آماده شنیدن نظرات و پاسخ به سوالات شما هستیم.
        </p>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-10">
              <h2 className="text-3xl font-bold text-green-800">معلومات تماس</h2>
              
              <div className="flex items-start gap-6">
                <div className="bg-green-100 p-4 rounded-2xl">
                  <MapPin className="text-green-600 w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">آدرس مکتب</h3>
                  <p className="text-gray-600 leading-loose">
                    کابل، چهارقلعه چهاردهی، قلعه وزیر، مقابل مسجد حضرت ابوبکر صدیق (رض)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-green-100 p-4 rounded-2xl">
                  <Phone className="text-green-600 w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">شماره تماس</h3>
                  <p className="text-gray-600 text-lg dir-ltr text-right">077 122 3797</p>
                  <p className="text-gray-600 text-lg dir-ltr text-right">070 705 1715</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-green-100 p-4 rounded-2xl">
                  <Mail className="text-green-600 w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">ایمیل آدرس</h3>
                  <p className="text-gray-600 text-lg">info@warjwand.edu.af</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a 
                  href="https://wa.me/93771223797" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-200"
                >
                  <MessageCircle />
                  واتساپ (WhatsApp)
                </a>
                <button className="bg-yellow-500 hover:bg-yellow-400 text-green-900 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-yellow-200">
                  <MessageSquare />
                  ارسال پیام مستقیم
                </button>
              </div>
            </div>

            <div className="h-[500px] bg-gray-100 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
              {/* Google Map Placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13164.733608796851!2d69.1368936!3d34.4855883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16922df6513c1%3A0x2863071309d5a7d!2sKabul%2C%20Afghanistan!5e0!3m2!1sen!2s!4v1710323321521!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
