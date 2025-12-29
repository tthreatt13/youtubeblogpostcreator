
import React, { useState } from 'react';
import { BlogDraft, SavedPost } from '../types';

interface ResultViewProps {
  draft: BlogDraft;
  onReset: () => void;
}

const ResultView: React.FC<ResultViewProps> = ({ draft, onReset }) => {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  
  const extractVideoId = (thumbnailUrl: string) => {
    const parts = thumbnailUrl.split('/');
    return parts[parts.length - 2];
  };

  const videoId = extractVideoId(draft.thumbnailUrl);
  const fullMarkdown = `# ${draft.title}\n\n${draft.content}`;

  const parseTimestampToSeconds = (ts: string) => {
    if (!ts) return 0;
    const parts = ts.split(':').map(Number);
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    return 0;
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(fullMarkdown).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSaveToDocs = () => {
    const newPost: SavedPost = {
      id: Date.now().toString(),
      title: draft.title,
      markdown: fullMarkdown,
      savedAt: new Date().toISOString(),
      videoId: videoId,
      thumbnailUrl: draft.thumbnailUrl
    };

    const existingDocsStr = localStorage.getItem('saved_docs') || '[]';
    const existingDocs: SavedPost[] = JSON.parse(existingDocsStr);
    
    // Avoid duplicates by title (optional check)
    const updatedDocs = [newPost, ...existingDocs.filter(d => d.title !== newPost.title)];
    localStorage.setItem('saved_docs', JSON.stringify(updatedDocs));

    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-1000 pb-20">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <span className="px-4 py-1.5 bg-indigo-600 text-white text-[11px] font-black rounded-full uppercase tracking-widest">Editor Mode</span>
            <span className="text-slate-400 text-sm font-bold">docs/unsaved_draft.md</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Copy Your Content</h2>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button 
            onClick={handleSaveToDocs}
            className={`flex-1 md:flex-none px-8 py-5 rounded-3xl font-black transition-all flex items-center justify-center gap-3 shadow-xl ${
              saved 
              ? 'bg-green-100 text-green-700 border-2 border-green-200' 
              : 'bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
            {saved ? 'Saved to docs/' : 'Save to docs/'}
          </button>
          <button 
            onClick={handleCopyMarkdown}
            className={`flex-1 md:flex-none px-10 py-5 rounded-3xl font-black transition-all shadow-2xl flex items-center justify-center gap-3 ${copied ? 'bg-green-600 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
          >
            {copied ? (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                Copy Markdown
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Main Markdown Editor View */}
        <div className="lg:col-span-8 space-y-12">
          <div className="bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden border border-slate-800">
            <div className="bg-slate-800 px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">blog-post.md</span>
              <div className="w-12"></div>
            </div>
            <div className="p-8 md:p-12">
              <textarea
                readOnly
                value={fullMarkdown}
                className="w-full h-[800px] bg-transparent text-slate-300 font-mono text-lg leading-relaxed focus:outline-none resize-none scrollbar-thin scrollbar-thumb-slate-700"
              />
            </div>
          </div>

          {/* Visual Assets Gallery */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 px-4">Extracted Image Assets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {draft.extractedImages.map((img, idx) => (
                <div key={idx} className="bg-white rounded-[2rem] p-6 shadow-xl border border-slate-100 group transition-all hover:scale-[1.02]">
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 mb-6">
                    <img src={img.url} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt={`Frame ${idx}`} />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <a 
                        href={`https://youtube.com/watch?v=${videoId}&t=${parseTimestampToSeconds(img.timestamp)}s`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-indigo-600 px-6 py-3 rounded-2xl font-black shadow-2xl flex items-center gap-2"
                      >
                        Capture at {img.timestamp}
                      </a>
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-indigo-600 text-white text-[10px] font-black rounded-lg">
                      [FRAME_{idx}]
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed italic">
                    "{img.caption}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEO Sidebar */}
        <div className="lg:col-span-4 space-y-10 sticky top-24">
          <div className="bg-slate-950 rounded-[3.5rem] p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <h3 className="text-2xl font-black mb-12 flex items-center gap-4">
               <svg className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
               SEO Package
            </h3>
            
            <div className="space-y-10">
              <section>
                <h4 className="text-[11px] uppercase font-black text-indigo-400 tracking-widest mb-4">Meta Title</h4>
                <p className="text-slate-300 text-sm font-bold leading-relaxed">{draft.seoMetadata.title}</p>
              </section>
              <section>
                <h4 className="text-[11px] uppercase font-black text-indigo-400 tracking-widest mb-4">Meta Description</h4>
                <p className="text-slate-400 text-xs leading-relaxed italic">{draft.seoMetadata.description}</p>
              </section>
              <section>
                <h4 className="text-[11px] uppercase font-black text-indigo-400 tracking-widest mb-4">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {draft.seoMetadata.keywords.map(kw => (
                    <span key={kw} className="px-3 py-1 bg-slate-900 rounded-lg text-[10px] font-black border border-slate-800 text-slate-100">{kw}</span>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-16 pt-12 border-t border-slate-900">
               <button 
                onClick={handleCopyMarkdown}
                className="w-full py-6 bg-indigo-600 hover:bg-indigo-500 rounded-[2rem] font-black text-xl transition-all shadow-xl shadow-indigo-600/20 active:scale-95"
               >
                {copied ? 'Copied!' : 'Copy Markdown'}
               </button>
            </div>
          </div>

          <div className="bg-indigo-50 p-8 rounded-[3rem] border-2 border-indigo-100">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">💡</span>
              <p className="text-indigo-950 font-black text-lg">Pro-Tip</p>
            </div>
            <p className="text-indigo-800/80 text-sm font-bold leading-relaxed">
              The [FRAME_X] markers in the markdown indicate the perfect spots to insert the visual assets shown on the left.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultView;
