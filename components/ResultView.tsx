
import React from 'react';
import { BlogDraft } from '../types';

interface ResultViewProps {
  draft: BlogDraft;
  onReset: () => void;
}

const ResultView: React.FC<ResultViewProps> = ({ draft, onReset }) => {
  
  const extractVideoId = (thumbnailUrl: string) => {
    const parts = thumbnailUrl.split('/');
    return parts[parts.length - 2];
  };

  const videoId = extractVideoId(draft.thumbnailUrl);

  const formatHeaders = (text: string) => {
    if (text.startsWith('###')) return `<h3 class="text-2xl font-black text-indigo-900 mt-12 mb-6 tracking-tight">${text.replace(/###\s?/, '')}</h3>`;
    if (text.startsWith('##')) return `<h2 class="text-4xl font-black text-slate-900 mt-20 mb-8 border-b-4 border-indigo-600 pb-4 inline-block">${text.replace(/##\s?/, '')}</h2>`;
    if (text.startsWith('#')) return `<h1 class="text-5xl font-black text-slate-900 mb-10 leading-tight">${text.replace(/#\s?/, '')}</h1>`;
    return text;
  };

  const parseTimestampToSeconds = (ts: string) => {
    if (!ts) return 0;
    const parts = ts.split(':').map(Number);
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    return 0;
  };

  const renderContent = (content: string) => {
    // Split by paragraph first
    const blocks = content.split('\n\n');
    
    return blocks.map((block, i) => {
      // Check for image markers: [FRAME_0], [FRAME_1], etc.
      const frameMatch = block.match(/\[FRAME_(\d+)\]/);
      
      if (frameMatch) {
        const idx = parseInt(frameMatch[1]);
        const img = draft.extractedImages[idx];
        if (!img) return null;

        return (
          <div key={`frame-${i}`} className="my-16 group relative animate-in fade-in zoom-in-95 duration-700">
            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white aspect-video relative bg-slate-100">
              <img src={img.url} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="Frame Placeholder" />
              <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href={`https://youtube.com/watch?v=${videoId}&t=${parseTimestampToSeconds(img.timestamp)}s`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/95 backdrop-blur-md text-indigo-600 px-8 py-4 rounded-3xl font-black shadow-2xl flex items-center gap-3 transform hover:scale-105 transition-all active:scale-95 border border-indigo-50"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                  Capture Frame at {img.timestamp}
                </a>
              </div>
              <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/70 backdrop-blur-lg rounded-xl text-white text-[10px] font-black uppercase tracking-[0.2em]">
                Source Reference {idx + 1}
              </div>
            </div>
            <p className="mt-8 text-center text-slate-500 font-bold italic text-lg px-8 leading-relaxed max-w-2xl mx-auto">
              "{img.caption}"
            </p>
          </div>
        );
      }

      if (block.startsWith('#')) {
        return <div key={i} dangerouslySetInnerHTML={{ __html: formatHeaders(block) }} />;
      }

      // List detection
      if (block.startsWith('- ') || block.startsWith('* ') || /^\d+\./.test(block)) {
        return (
          <div key={i} className="mb-12 pl-8 border-l-4 border-indigo-100 space-y-4">
             {block.split('\n').map((line, li) => (
               <p key={li} className="text-xl text-slate-600 font-medium leading-relaxed">{line}</p>
             ))}
          </div>
        );
      }

      return (
        <p key={i} className="text-2xl text-slate-700 leading-[1.8] mb-12 font-medium whitespace-pre-wrap">
          {block}
        </p>
      );
    });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-1000 pb-20">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="px-4 py-1.5 bg-indigo-600 text-white text-[11px] font-black rounded-full uppercase tracking-widest shadow-lg shadow-indigo-100">Draft v2.0</span>
            <span className="text-slate-400 text-sm font-bold">Brand Cloned • Frame Mapped</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Review Your Content</h2>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button 
            onClick={onReset}
            className="flex-1 md:flex-none px-8 py-5 bg-slate-50 border-2 border-slate-200 text-slate-700 rounded-3xl font-black hover:bg-slate-100 transition-all flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Restart
          </button>
          <button className="flex-1 md:flex-none px-10 py-5 bg-indigo-600 text-white rounded-3xl font-black hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-200 flex items-center justify-center gap-3">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Export to CMS
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-12">
          <article className="bg-white rounded-[4rem] shadow-2xl border border-slate-100 overflow-hidden shadow-slate-200/40 pb-20">
            {/* Hero Thumbnail (Clean) */}
            <div className="w-full aspect-video bg-slate-900">
              <img src={draft.thumbnailUrl} className="w-full h-full object-cover" alt="Hero" />
            </div>
            
            <div className="px-12 md:px-20 py-16">
              <div className="max-w-3xl mx-auto">
                {/* Title below Image */}
                <h1 className="text-5xl md:text-6xl font-black text-slate-950 leading-[1.1] mb-16 tracking-tighter">
                  {draft.title}
                </h1>
                
                {renderContent(draft.content)}
              </div>
            </div>
          </article>
        </div>

        {/* Sidebar / SEO Panel */}
        <div className="lg:col-span-4 space-y-10 sticky top-24">
          <div className="bg-slate-950 rounded-[3.5rem] p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            
            <h3 className="text-2xl font-black mb-12 flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-500/40">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              SEO Package
            </h3>

            <div className="space-y-12">
              <section>
                <h4 className="text-[11px] uppercase font-black text-indigo-400 tracking-[0.4em] mb-4">Snippet Preview</h4>
                <div className="bg-slate-900 p-6 rounded-[2rem] border border-slate-800">
                  <p className="text-blue-400 text-lg font-bold mb-2 line-clamp-1">{draft.seoMetadata.title}</p>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 font-medium">{draft.seoMetadata.description}</p>
                </div>
              </section>

              <section>
                <h4 className="text-[11px] uppercase font-black text-indigo-400 tracking-[0.4em] mb-6">Target Keywords</h4>
                <div className="flex flex-wrap gap-3">
                  {draft.seoMetadata.keywords.map(kw => (
                    <span key={kw} className="px-5 py-2.5 bg-slate-900 rounded-2xl text-xs font-black border-2 border-slate-800 text-slate-100 shadow-sm">
                      {kw}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="text-[11px] uppercase font-black text-indigo-400 tracking-[0.4em] mb-6">Topic Clusters</h4>
                <div className="space-y-4">
                  {draft.seoMetadata.semanticClusters?.map((cluster, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-lg font-bold text-slate-400 group">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform"></div>
                      {cluster}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-16 pt-12 border-t border-slate-900 space-y-4">
              <button className="w-full py-6 bg-indigo-600 hover:bg-indigo-500 rounded-[2rem] font-black text-xl transition-all shadow-2xl shadow-indigo-600/20 active:scale-[0.98]">
                Publish Draft
              </button>
              <button className="w-full py-6 bg-slate-900 hover:bg-slate-800 rounded-[2rem] font-black text-xl transition-all">
                Copy Markdown
              </button>
            </div>
          </div>

          <div className="bg-indigo-50 p-8 rounded-[3rem] border-2 border-indigo-100 flex items-start gap-5">
            <div className="shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md text-2xl">
              📸
            </div>
            <div>
              <p className="text-indigo-950 font-black text-lg leading-tight mb-1">Visual Map Active</p>
              <p className="text-indigo-700/80 text-sm font-bold">Use the "Capture Frame" links in the post to grab screenshots. They will open the exact second in the video.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultView;
