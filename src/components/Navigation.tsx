import { User, Home as HomeIcon, FolderHeart, Menu } from 'lucide-react';
import type { Page } from '../types';

interface NavProps { currentPage: Page; setPage: (page: Page) => void }
const items: {page: Page; label: string; icon: typeof HomeIcon}[] = [
  {page:'home',label:'Trang chủ',icon:HomeIcon},{page:'projects',label:'Bài tập',icon:FolderHeart},{page:'about',label:'Tổng kết',icon:User}
];

export function Sidebar({currentPage,setPage}:NavProps){return <nav className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-surface/90 backdrop-blur-md border-r border-outline-variant/30 z-50 flex-col p-6"><div className="text-headline-md font-bold text-primary mb-12">Anh Mai Portfolio</div><div className="flex flex-col space-y-2 flex-grow">{items.map(i=><div key={i.page}><NavButton {...i} currentPage={currentPage} setPage={setPage}/></div>)}</div><div className="pt-6 border-t border-outline-variant/20 text-label-sm text-on-surface-variant opacity-60">ULIS · 25042496</div></nav>}
function NavButton({page,label,icon:Icon,currentPage,setPage}:NavProps&{page:Page;label:string;icon:typeof HomeIcon}){const active=currentPage===page;return <button onClick={()=>setPage(page)} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${active?'bg-primary-container text-on-primary-container font-bold':'text-on-surface-variant hover:bg-surface-variant/50'}`}><Icon size={20}/><span className="text-label-lg">{label}</span></button>}
export function TopBar(){return <nav className="md:hidden sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 flex justify-between items-center px-5 py-4"><div className="text-headline-md font-bold text-primary">Anh Mai</div><Menu size={24}/></nav>}
export function BottomBar({currentPage,setPage}:NavProps){return <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface/90 backdrop-blur-md border-t border-outline-variant/30 z-50"><div className="flex justify-around h-16">{items.map(({page,label,icon:Icon})=><button key={page} onClick={()=>setPage(page)} className={`flex flex-col items-center justify-center p-2 ${currentPage===page?'text-primary':'text-on-surface-variant'}`}><Icon size={20}/><span className="text-[10px] mt-1">{label}</span></button>)}</div></nav>}
