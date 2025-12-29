
import React, { useState } from 'react';
import { BlogDraft } from '../types';

interface ResultViewProps {
  draft: BlogDraft;
  onReset: () => void;
}

const ResultView: React.FC<ResultViewProps> = ({ draft, onReset }) => {
  const [copied, setCopied] = useState(false);
  
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

  const handleCopyMarkdown = () => {
    const markdown = `# ${draft.title}\n\n${draft.content}`;
    navigator.clipboard.writeText(markdown).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Helper to process markdown links in strings
  const parseMarkdownLinks = (text: string) => {
    const parts = text.split(/(\[.*?\]\(.*?\))/);
    return parts.map((part, i) => {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        return <a key={i} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline font-bold hover:text-indigo-800">{match[1]}</a>;
      }
      return part;
    });
  };

  const renderContent = (content: string) => {
    const blocks = content.split('\n\n');
    
    return blocks.map((block, i) => {
      const frameMatch = block.match(/\[FRAME_(\d+)\]/);
      
      if (frameMatch) {
        const idx = parseInt(frameMatch[1]);
        const img = draft.extractedImages[idx];
        if (!img) return null;

        return (
          <div key={`frame-${i}`} className="my-16 group animate-in fade-in zoom-in-95 duration-700">
            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white aspect-video relative bg-slate-100">
              <img src={img.url} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="Visual Placeholder" />
              <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href={`https://youtube.com/watch?v=${videoId}&t=${parseTimestampToSeconds(img.timestamp)}s`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-indigo-600 px-8 py-4 rounded-3xl font-black shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                  Open Video at {img.timestamp}
                </a>
              </div>
            </div>
            <p className="mt-6 text-center text-slate-500 font-bold italic text-lg px-8 max-w-2xl mx-auto">
              Suggested Image: {img.caption}
            </p>
          </div>
        );
      }

      if (block.startsWith('#')) {
        return <div key={i} dangerouslySetInnerHTML={{ __html: formatHeaders(block) }} />;
      }

      if (block.startsWith('- ') || block.startsWith('* ') || /^\d+\./.test(block)) {
        return (
          <div key={i} className="mb-10 pl-8 border-l-4 border-indigo-100 space-y-3">
             {block.split('\n').map((line, li) => {
                const cleanedLine = line.replace(/^[\*\-\d\.]+\s?/, '');
                return (
                  <p key={li} className="text-xl text-slate-600 font-medium leading-relaxed flex items-start gap-2">
                    <span className="mt-2 shrink-0 w-2 h-2 bg-indigo-400 rounded-full"></span>
                    <span>{parseMarkdownLinks(cleanedLine)}</span>
                  </p>
                );
             })}
          </div>
        );
      }

      return (
        <p key={i} className="text-2xl text-slate-700 leading-[1.8] mb-12 font-medium whitespace-pre-wrap">
          {parseMarkdownLinks(block)}
        </p>
      );
    });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-1000 pb-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <span className="px-4 py-1.5 bg-indigo-600 text-white text-[11px] font-black rounded-full uppercase tracking-widest">Brand Draft v3.0</span>
            <span className="text-slate-400 text-sm font-bold">Full Package • Sponsors Included</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Production Preview</h2>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button onClick={onReset} className="flex-1 md:flex-none px-8 py-5 bg-slate-50 border-2 border-slate-200 text-slate-700 rounded-3xl font-black hover:bg-slate-100 transition-all flex items-center justify-center gap-3">Restart</button>
          <button 
            onClick={handleCopyMarkdown}
            className={`flex-1 md:flex-none px-10 py-5 rounded-3xl font-black transition-all shadow-2xl flex items-center justify-center gap-3 ${copied ? 'bg-green-600 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
          >
            {copied ? 'Copied Markdown!' : 'Copy Full Post'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-8">
          <article className="bg-white rounded-[4rem] shadow-2xl border border-slate-100 overflow-hidden pb-20">
            <img src={draft.thumbnailUrl} className="w-full aspect-video object-cover" alt="Hero" />
            <div className="px-12 md:px-20 py-16">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-black text-slate-950 leading-[1.1] mb-16 tracking-tighter">
                  {draft.title}
                </h1>
                {renderContent(draft.content)}
              </div>
            </div>
          </article>
        </div>

        <div className="lg:col-span-4 space-y-10 sticky top-24">
          <div className="bg-slate-950 rounded-[3.5rem] p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <h3 className="text-2xl font-black mb-12">SEO Insights</h3>
            <div className="space-y-10">
              <section>
                <h4 className="text-[11px] uppercase font-black text-indigo-400 tracking-widest mb-4">Snippet Preview</h4>
                <div className="bg-slate-900 p-6 rounded-[2rem] border border-slate-800">
                  <p className="text-blue-400 text-lg font-bold mb-2">{draft.seoMetadata.title}</p>
                  <p className="text-slate-500 text-sm italic">"{draft.seoMetadata.description}"</p>
                </div>
              </section>
              <section>
                <h4 className="text-[11px] uppercase font-black text-indigo-400 tracking-widest mb-6">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {draft.seoMetadata.keywords.map(kw => (
                    <span key={kw} className="px-4 py-2 bg-slate-900 rounded-xl text-xs font-black border border-slate-800 text-slate-100">{kw}</span>
                  ))}
                </div>
              </section>
            </div>
            <div className="mt-16 pt-12 border-t border-slate-900 space-y-4">
              <button onClick={handleCopyMarkdown} className="w-full py-6 bg-indigo-600 hover:bg-indigo-500 rounded-[2rem] font-black text-xl transition-all shadow-xl">
                {copied ? 'Content Copied!' : 'Copy Markdown'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultView;
