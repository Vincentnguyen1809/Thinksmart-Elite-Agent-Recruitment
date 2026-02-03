
import React, { useState } from 'react';

interface ApplicationFormProps {
  onClose: () => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => onClose(), 5000);
  };

  if (submitted) {
    return (
      <div className="text-center py-20">
        <div className="w-24 h-24 bg-red-50 text-elite-red rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
           <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h2 className="text-4xl font-black text-black mb-4 uppercase tracking-tighter italic leading-none">Cảm ơn bạn đã quan tâm!</h2>
        <p className="text-gray-500 max-w-md mx-auto font-bold uppercase tracking-widest text-[10px] leading-relaxed">
            Hồ sơ đã được gửi. <br/>
            Hệ thống sẽ xác minh email/số điện thoại và gọi điện đặt lịch phỏng vấn 1:1 sớm nhất.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-4xl font-black text-black uppercase tracking-tighter leading-[0.9] italic">BẮT ĐẦU SỰ NGHIỆP <br/> TẠI THINKSMART</h2>
        <p className="text-elite-red font-bold text-[10px] uppercase tracking-[0.3em] mt-6">Info session: Tìm hiểu lộ trình thăng tiến và mô hình kinh doanh</p>
      </div>
      
      <div className="space-y-1.5">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1 italic">Họ và Tên</label>
        <input required type="text" className="w-full px-6 py-4 bg-gray-50 border-0 border-b-2 border-gray-100 focus:border-elite-red focus:bg-white outline-none transition-all font-bold text-black uppercase" placeholder="NGUYEN VAN A" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1 italic">Số Điện Thoại</label>
          <input required type="tel" className="w-full px-6 py-4 bg-gray-50 border-0 border-b-2 border-gray-100 focus:border-elite-red focus:bg-white outline-none transition-all font-bold text-black" placeholder="+1 (000) 000-0000" />
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1 italic">Email</label>
          <input required type="email" className="w-full px-6 py-4 bg-gray-50 border-0 border-b-2 border-gray-100 focus:border-elite-red focus:bg-white outline-none transition-all font-bold text-black uppercase" placeholder="EMAIL@EXAMPLE.COM" />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1 italic">Bạn đang sống tại tiểu bang nào?</label>
        <input required type="text" className="w-full px-6 py-4 bg-gray-50 border-0 border-b-2 border-gray-100 focus:border-elite-red focus:bg-white outline-none transition-all font-bold text-black uppercase" placeholder="VD: GEORGIA, TEXAS..." />
      </div>

      <div className="space-y-1.5">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1 italic">Bạn biết đến chúng tôi qua đâu?</label>
        <select className="w-full px-6 py-4 bg-gray-50 border-0 border-b-2 border-gray-100 focus:border-elite-red focus:bg-white outline-none transition-all font-bold text-black appearance-none uppercase text-xs">
          <option>Website</option>
          <option>Tiktok</option>
          <option>Facebook</option>
          <option>Instagram</option>
          <option>Other</option>
        </select>
      </div>

      <div className="bg-gray-900 p-6 rounded-sm">
        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-3 italic">Trong buổi gọi này, bạn sẽ được học:</h4>
        <ul className="text-[10px] text-gray-400 space-y-2 font-bold uppercase tracking-widest leading-relaxed">
          <li className="flex gap-2"><span className="text-elite-red">●</span> Sự khác biệt của Thinksmart Agency</li>
          <li className="flex gap-2"><span className="text-elite-red">●</span> Cách chúng tôi hỗ trợ leads & training</li>
          <li className="flex gap-2"><span className="text-elite-red">●</span> Cấu trúc thu nhập & lộ trình sự nghiệp</li>
        </ul>
      </div>

      <button 
        type="submit"
        className="w-full bg-elite-red hover:bg-black text-white py-6 rounded-sm font-black text-xl uppercase tracking-widest transition-all shadow-2xl active:scale-95 italic"
      >
        ỨNG TUYỂN ELITE AGENT NGAY
      </button>
      
      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest text-center italic">
        *Cần xác minh email hoặc số phone để chắc chắn là gọi điện được.
      </p>
    </form>
  );
};

export default ApplicationForm;
