
import React, { useState, useEffect } from 'react';
import { SavedPost } from '../types';

interface DocsViewProps {
  onBack: () => void;
}

const DocsView: React.FC<DocsViewProps> = ({ onBack }) => {
  const [docs, setDocs] = useState<SavedPost[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<SavedPost | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('saved_docs');
    if (data) setDocs(JSON.parse(data));
  }, []);

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = docs.filter(d => d.id !== id);
    setDocs(updated);
    localStorage.setItem('saved_docs', JSON.stringify(updated));
    if (selectedDoc?.id === id) setSelectedDoc(null);
  };

  const handleCopy = (markdown: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(markdown);
    alert('Copied to clipboard!');
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in slide-in-from-right-4 duration-500 pb-20">
      <div className="flex items-center justify-between mb-12">
        <div>
          <div className="flex items-center gap-3 text-slate-400 mb-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="font-mono text-sm uppercase tracking-widest font-bold">root / docs /</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Saved Articles</h2>
        </div>
        <button 
          onClick={onBack}
          className="px-6 py-3 bg-white border-2 border-slate-200 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Create New Post
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* File List */}
        <div className="lg:col-span-4 space-y-4">
          {docs.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-slate-200 rounded-[2rem] p-12 text-center">
              <p className="text-slate-400 font-bold">No articles saved yet.</p>
              <button onClick={onBack} className="mt-4 text-indigo-600 font-black text-sm uppercase tracking-widest">Generate First Draft →</button>
            </div>
          ) : (
            docs.map(doc => (
              <div 
                key={doc.id}
                onClick={() => setSelectedDoc(doc)}
                className={`group p-6 rounded-[2rem] border-2 transition-all cursor-pointer relative overflow-hidden ${
                  selectedDoc?.id === doc.id 
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-200' 
                  : 'bg-white border-slate-100 hover:border-indigo-200 text-slate-900 shadow-sm'
                }`}
              >
                <div className="flex gap-4 items-start relative z-10">
                  <img src={doc.thumbnailUrl} className="w-20 h-12 object-cover rounded-lg shadow-sm border border-white/20" alt="" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-black text-sm truncate mb-1">{doc.title}</h3>
                    <p className={`text-[10px] font-bold uppercase tracking-widest ${selectedDoc?.id === doc.id ? 'text-indigo-200' : 'text-slate-400'}`}>
                      {new Date(doc.savedAt).toLocaleDateString()} • YouTube: {doc.videoId}
                    </p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={(e) => handleCopy(doc.markdown, e)}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white"
                    title="Copy Markdown"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                  </button>
                  <button 
                    onClick={(e) => handleDelete(doc.id, e)}
                    className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg text-red-100"
                    title="Delete"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Preview Panel */}
        <div className="lg:col-span-8">
          {selectedDoc ? (
            <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-300">
               <div className="bg-slate-900 px-8 py-4 flex items-center justify-between">
                <span className="text-indigo-400 font-mono text-xs font-black">docs/{selectedDoc.title.toLowerCase().replace(/\s+/g, '_')}.md</span>
                <button 
                  onClick={(e) => handleCopy(selectedDoc.markdown, e as any)}
                  className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-[10px] font-black rounded-lg uppercase tracking-widest transition-colors"
                >
                  Copy Raw
                </button>
              </div>
              <div className="p-8 md:p-12">
                <textarea 
                  readOnly 
                  value={selectedDoc.markdown} 
                  className="w-full h-[600px] bg-transparent text-slate-700 font-mono text-sm leading-relaxed focus:outline-none resize-none"
                />
              </div>
            </div>
          ) : (
            <div className="h-[600px] bg-slate-50 border-4 border-dashed border-slate-200 rounded-[3rem] flex flex-col items-center justify-center text-slate-400 space-y-4">
              <svg className="w-16 h-16 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="font-black text-xl tracking-tight uppercase">Select a file to preview</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocsView;
