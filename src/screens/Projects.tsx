import { motion } from 'motion/react';
import { Download, ExternalLink, FileText } from 'lucide-react';

const projects = [
  { n: 1, title: 'Thao tác cơ bản với tệp tin và thư mục', desc: 'Thực hành tạo cấu trúc ThucHanh_VuAnhMai, tạo – đổi tên – sao chép – di chuyển – xóa và khôi phục tệp bằng File Explorer.', file: 'Bai-1-Vu-Anh-Mai.pdf', pages: 18 },
  { n: 2, title: 'Tìm kiếm và đánh giá thông tin học thuật', desc: 'Tổng hợp, đánh giá 10 nguồn về phương pháp học từ vựng tiếng Hàn; nhấn mạnh học theo ngữ cảnh, lặp lại ngắt quãng và vận dụng thực tế.', file: 'Bai-2-Vu-Anh-Mai.pdf', pages: 4 },
  { n: 3, title: 'Viết prompt hiệu quả cho tác vụ học tập', desc: 'Thử nghiệm ba cấp độ prompt cho tóm tắt tài liệu, giải thích khái niệm và tạo câu hỏi ôn tập; so sánh đầu ra để rút ra nguyên tắc viết prompt.', file: 'Bai-3-Vu-Anh-Mai.pdf', pages: 14 },
  { n: 4, title: 'Công cụ hợp tác trực tuyến cho dự án nhóm', desc: 'Ghi lại quá trình dùng Trello, Google Docs, Drive và Meet để thực hiện dự án “Ứng dụng AI trong học ngoại ngữ”.', file: 'Bai-4-Vu-Anh-Mai.pdf', pages: 9 },
  { n: 5, title: 'AI tạo sinh hỗ trợ sáng tạo nội dung', desc: 'Dùng ChatGPT, DALL·E và Canva AI để xây dựng bài thuyết trình về AI trong quản lý giao thông đô thị Việt Nam.', file: 'Bai-5-Vu-Anh-Mai.pdf', pages: 9, extra: 'Bai-5-San-pham-Vu-Anh-Mai.pdf' },
  { n: 6, title: 'Sử dụng AI có trách nhiệm', desc: 'Phân tích ranh giới hỗ trợ và gian lận, quyền sở hữu trí tuệ, trích dẫn và quy trình kiểm chứng – chỉnh sửa đầu ra AI.', file: 'Bai-6-Vu-Anh-Mai.pdf', pages: 5 },
];

export function Projects() {
  return <div className="max-w-7xl mx-auto pb-24 relative z-10">
    <header className="mb-14 md:w-2/3"><div className="inline-block mb-4 -rotate-2 bg-secondary text-on-secondary px-3 py-1 rounded-sm text-label-sm sticker-shadow">Hành trình học tập 📚</div><h1 className="text-headline-lg-mobile md:text-headline-lg text-primary mb-4">Danh mục bài tập</h1><p className="text-body-lg text-on-surface-variant">Sáu sản phẩm được trình bày từ chính tài liệu gốc. Chọn “Xem nội dung đầy đủ” để đọc PDF tương tác hoặc tải tệp về máy.</p></header>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {projects.map((p, i) => <motion.article key={p.n} initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.1*i}} className={`${i%2 ? '-rotate-1' : 'rotate-1'} hover:rotate-0 transition-transform`}>
        <div className="bg-surface-container-lowest p-4 pb-6 rounded-xl border border-outline-variant/40 polaroid-shadow relative">
          <div className="absolute -top-3 left-8 w-16 h-6 bg-white/60 border border-outline-variant/20 rotate-[-4deg]"/>
          <img src={`/previews/bai-${p.n}.png`} alt={`Trang đầu bài ${p.n}`} className="w-full aspect-[16/10] object-cover object-top rounded bg-surface-container mb-5"/>
          <div className="px-2"><p className="text-label-sm text-primary mb-2">BÀI {p.n} · {p.pages} TRANG</p><h2 className="text-headline-md mb-2">{p.title}</h2><p className="text-body-md text-on-surface-variant mb-5">{p.desc}</p>
            <div className="flex flex-wrap gap-3"><a href={`/files/${p.file}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-full text-label-sm"><ExternalLink size={16}/> Xem nội dung đầy đủ</a><a href={`/files/${p.file}`} download className="inline-flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded-full text-label-sm"><Download size={16}/> Tải bài</a>{p.extra && <a href={`/files/${p.extra}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-secondary-container px-4 py-2 rounded-full text-label-sm"><FileText size={16}/> Xem sản phẩm</a>}</div>
          </div>
        </div>
      </motion.article>)}
    </div>
  </div>;
}
