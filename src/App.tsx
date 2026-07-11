/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import type { Page } from './types';
import { Home } from './screens/Home';
import { Projects } from './screens/Projects';
import { About } from './screens/About';
import { Sidebar, TopBar, BottomBar } from './components/Navigation';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  return (
    <div className="bg-background text-on-background font-body-md paper-texture min-h-screen flex flex-col md:flex-row w-full overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container relative">
      <div className="fixed inset-0 pattern-bg pointer-events-none z-0"></div>
      
      <Sidebar currentPage={page} setPage={setPage} />
      <TopBar />
      <BottomBar currentPage={page} setPage={setPage} />
      
      <main className="relative z-10 w-full flex-1 md:ml-64 p-5 md:p-16 pb-24 md:pb-16 overflow-x-hidden">
        {page === 'home' && <Home />}
        {page === 'projects' && <Projects />}
        {page === 'about' && <About />}
      </main>
    </div>
  );
}
