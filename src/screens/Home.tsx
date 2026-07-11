import { Heart, GraduationCap, Pin, Brain, BookOpen, Sparkles, UserRound } from 'lucide-react';
import { motion } from 'motion/react';

export function Home() {
  return (
    <div className="max-w-5xl mx-auto overflow-x-hidden">
      <section className="relative mb-24">
        <div className="washi-tape -top-2 left-10" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className="bg-surface-container-lowest rounded-xl p-8 md:p-12 border border-outline-variant/30 relative mt-8">
          <div className="absolute -top-6 -right-6 bg-secondary-container text-on-secondary-container p-4 rounded-full sticker-shadow sticker-rotate"><Heart size={24} fill="currentColor" /></div>
          <div className="grid md:grid-cols-[220px_1fr] gap-8 items-center">
            <div className="relative mx-auto">
              <div className="absolute inset-0 bg-primary-container rounded-3xl rotate-6" />
              <motion.img
                src="/avatar.jpg"
                alt="Ảnh chân dung Vũ Anh Mai"
                animate={{ rotate: [-2, 2, -2], y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-52 h-64 object-cover rounded-3xl border-4 border-white polaroid-shadow"
              />
            </div>
            <div>
              <p className="text-label-lg text-primary mb-2">안녕하세요!</p>
              <h1 className="text-display-lg font-display-lg text-primary mb-2">Vũ Anh Mai</h1>
              <h2 className="text-headline-md text-on-surface-variant mb-6">Sinh viên Ngôn ngữ Hàn Quốc · ULIS</h2>
              <p className="text-body-lg text-on-surface">Mình là Vũ Anh Mai, mã sinh viên 25042496, sinh viên Trường Đại học Ngoại ngữ – ĐHQGHN. Portfolio này lưu lại sáu sản phẩm của học phần Nhập môn Công nghệ số và Ứng dụng trí tuệ nhân tạo.</p>
              <div className="flex flex-wrap gap-3 mt-7">
                <span className="inline-flex items-center gap-2 bg-primary-container/40 px-4 py-2 rounded-full text-label-sm border border-primary-container"><GraduationCap size={16}/> MSSV 25042496</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-12 gap-8 mb-24">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .2 }} className="md:col-span-5 relative">
          <div className="washi-tape -top-2 right-12 z-20" />
          <div className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/30 shadow-sm -rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-2 mb-4 border-b border-outline-variant/30 pb-2"><UserRound className="text-primary" size={20}/><h3 className="text-label-lg">Hồ sơ học tập</h3></div>
            <img src="/avatar.jpg" alt="Vũ Anh Mai" className="w-full aspect-[4/5] object-cover rounded-lg" />
            <div className="space-y-2 text-body-md mt-4"><p><b>Ngành:</b> Ngôn ngữ Hàn Quốc</p><p><b>Trường:</b> Đại học Ngoại ngữ – ĐHQGHN</p><p><b>Học phần:</b> Nhập môn CNS & Ứng dụng AI</p></div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .3 }} className="md:col-span-7 space-y-8">
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 relative">
            <Pin size={24} className="absolute top-4 right-4 text-primary fill-current opacity-50"/>
            <h3 className="text-headline-md text-primary mb-6">Mục tiêu & định hướng</h3>
            <ul className="space-y-6">
              <li className="flex gap-4"><div className="bg-tertiary-container p-2 rounded mt-1 h-fit"><Brain size={20}/></div><div><h4 className="text-label-lg font-bold">Năng lực số và AI</h4><p className="text-body-md text-on-surface-variant">Biết tổ chức dữ liệu, tìm kiếm nguồn tin, viết prompt và sử dụng AI minh bạch, có trách nhiệm.</p></div></li>
              <li className="flex gap-4"><div className="bg-secondary-container p-2 rounded mt-1 h-fit"><BookOpen size={20}/></div><div><h4 className="text-label-lg font-bold">Hỗ trợ học ngoại ngữ</h4><p className="text-body-md text-on-surface-variant">Vận dụng công nghệ để học từ vựng tiếng Hàn, cộng tác trực tuyến và phát triển tư duy nghiên cứu.</p></div></li>
            </ul>
          </div>
          <div className="relative h-48 bg-surface-container-high rounded-xl border border-outline-variant/50 flex items-center justify-center text-center p-8"><p className="text-on-surface-variant text-label-lg italic">“언어는 문화를 이해하는 창이다.”<br/><span className="text-label-sm font-normal">Ngôn ngữ là cánh cửa để hiểu văn hóa.</span></p><div className="absolute bottom-4 right-4 bg-primary text-on-primary p-3 rounded-full rotate-12"><Sparkles size={20}/></div></div>
        </motion.div>
      </section>
    </div>
  );
}
