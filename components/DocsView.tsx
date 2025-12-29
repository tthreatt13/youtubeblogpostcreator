
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
    if (data) {
      const parsedDocs = JSON.parse(data);
      setDocs(parsedDocs);
      // Automatically select the most recent doc if available
      if (parsedDocs.length > 0) setSelectedDoc(parsedDocs[0]);
    }
  }, []);

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('Are you sure you want to delete this file from docs/?')) return;
    const updated = docs.filter(d => d.id !== id);
    setDocs(updated);
    localStorage.setItem('saved_docs', JSON.stringify(updated));
    if (selectedDoc?.id === id) setSelectedDoc(null);
  };

  const handleCopy = (markdown: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(markdown);
    alert('Markdown copied to clipboard!');
  };

  const getFileName = (title: string) => {
    return title.toLowerCase()
      .replace(/[^a-z0-9]/g, '_')
      .replace(/_+/g, '_')
      .substring(0, 40) + '.md';
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in slide-in-from-right-4 duration-500 pb-20">
      <div className="flex items-center justify-between mb-12">
        <div>
          <div className="flex items-center gap-3 text-slate-400 mb-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="font-mono text-sm uppercase tracking-widest font-bold">project_root / docs /</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Content Explorer</h2>
        </div>
        <button 
          onClick={onBack}
          className="px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          New Post
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start min-h-[700px]">
        {/* Sidebar / File Tree */}
        <div className="lg:col-span-4 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Files ({docs.length})</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-slate-200"></div>
              <div className="w-2 h-2 rounded-full bg-slate-200"></div>
              <div className="w-2 h-2 rounded-full bg-slate-200"></div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-2 max-h-[600px] scrollbar-thin scrollbar-thumb-slate-200">
            {docs.length === 0 ? (
              <div className="py-20 text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Archive Empty</p>
              </div>
            ) : (
              docs.map(doc => (
                <div 
                  key={doc.id}
                  onClick={() => setSelectedDoc(doc)}
                  className={`group px-4 py-4 rounded-xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                    selectedDoc?.id === doc.id 
                    ? 'bg-indigo-50 border-indigo-200 text-indigo-900' 
                    : 'bg-transparent border-transparent hover:bg-slate-50 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <svg className={`w-4 h-4 flex-shrink-0 ${selectedDoc?.id === doc.id ? 'text-indigo-500' : 'text-slate-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold truncate leading-tight">{getFileName(doc.title)}</p>
                      <p className="text-[9px] font-bold opacity-50 uppercase tracking-tighter mt-1">
                        {new Date(doc.savedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={(e) => handleDelete(doc.id, e)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 opacity-0 group-hover:opacity-100 hover:text-red-600 transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Editor Preview Area */}
        <div className="lg:col-span-8 bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-800 overflow-hidden flex flex-col h-full min-h-[700px]">
          {selectedDoc ? (
            <>
              <div className="bg-slate-800/50 px-8 py-4 flex items-center justify-between border-b border-slate-700/50">
                <div className="flex items-center gap-4">
                  <div className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded text-[10px] font-black font-mono tracking-widest border border-indigo-500/20">
                    MARKDOWN
                  </div>
                  <span className="text-slate-400 font-mono text-xs font-bold truncate max-w-[300px]">
                    docs/{getFileName(selectedDoc.title)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                   <button 
                    onClick={(e) => handleCopy(selectedDoc.markdown, e as any)}
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-[10px] font-black rounded-xl uppercase tracking-widest transition-all flex items-center gap-2"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2" /></svg>
                    Copy
                  </button>
                  <a 
                    href={selectedDoc.thumbnailUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-black rounded-xl uppercase tracking-widest transition-all"
                  >
                    Source Video
                  </a>
                </div>
              </div>
              <div className="flex-1 p-8 md:p-12 overflow-y-auto bg-slate-900/50">
                <textarea 
                  readOnly 
                  value={selectedDoc.markdown} 
                  className="w-full h-full bg-transparent text-slate-300 font-mono text-base leading-relaxed focus:outline-none resize-none scrollbar-thin scrollbar-thumb-slate-800"
                />
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-600 space-y-6">
              <div className="p-8 rounded-[2rem] bg-slate-800/30 border-2 border-dashed border-slate-800">
                <svg className="w-16 h-16 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="font-black text-xl tracking-tight text-slate-400 uppercase">No File Selected</p>
                <p className="text-slate-500 text-sm mt-2 font-bold italic">Select an article from the sidebar to preview markdown content.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocsView;
