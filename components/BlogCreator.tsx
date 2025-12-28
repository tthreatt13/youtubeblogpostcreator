
import React, { useState } from 'react';
import { DiscoveryAnswers, BlogDraft, YouTubeInfo } from '../types';
import { GoogleGenAI } from "@google/genai";

interface BlogCreatorProps {
  answers: DiscoveryAnswers;
  onDraftCreated: (draft: BlogDraft) => void;
}

const BlogCreator: React.FC<BlogCreatorProps> = ({ answers, onDraftCreated }) => {
  const [url, setUrl] = useState('');
  const [transcript, setTranscript] = useState('');
  const [references, setReferences] = useState<string[]>(['', '', '']);
  const [isProcessing, setIsProcessing] = useState(false);
  const [ytInfo, setYtInfo] = useState<YouTubeInfo | null>(null);

  const extractVideoId = (input: string) => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = input.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUrl(val);
    const id = extractVideoId(val);
    if (id) {
      setYtInfo({
        videoId: id,
        thumbnailUrl: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
        title: "Video Detected"
      });
    } else {
      setYtInfo(null);
    }
  };

  const updateReference = (index: number, val: string) => {
    const newRefs = [...references];
    newRefs[index] = val;
    setReferences(newRefs);
  };

  const addReferenceField = () => {
    if (references.length < 5) setReferences([...references, '']);
  };

  const processVideo = async () => {
    if (!ytInfo) return;
    setIsProcessing(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const prompt = `
        You are a world-class SaaS Content Strategist and high-end Copywriter.
        
        TASK: Transform the provided transcript into a professional, high-converting SEO blog post.
        
        SOURCE CONTENT:
        - YouTube ID: ${ytInfo.videoId}
        - TRANSCRIPT: ${transcript || "No transcript provided. Infer context from title/metadata."}
        
        STRICT VOICE & TONE CLONING (CRITICAL): 
        Analyze the specific writing style, sentence pacing, level of technicality, and unique vocabulary from these references. 
        You MUST mimic this style EXACTLY. If they use a first-person "I", you use "I". If they are technical and dry, be technical and dry. If they are punchy and bold, be punchy and bold.
        REFERENCES:
        ${references.filter(r => r).join('\n')}
        
        FORMATTING & STRUCTURE:
        - Use Markdown.
        - DO NOT include a TL;DR or "Executive Summary" section.
        - MANDATORY: Use frequent line breaks. Paragraphs should be short (2-3 sentences max) to ensure readability.
        - Use clean H2 and H3 headers.
        - Insert image markers in the format [FRAME_X] (e.g., [FRAME_0], [FRAME_1], [FRAME_2]) at the exact points in the content where a visual from the video should be inserted to support the text.
        
        MANDATORY END SECTIONS:
        1. "Thanks to Our Sponsors": Identify any sponsors mentioned in the transcript. List them with their names and any URLs provided in the talk. If no sponsors exist, omit this section.
        2. "Episode Links": Create this section at the very end. Include clickable links for:
           - YouTube: https://youtube.com/watch?v=${ytInfo.videoId}
           - Spotify: (Look for a link in the transcript; if not found, use a placeholder "Coming soon")
           - Apple Podcasts: (Look for a link in the transcript; if not found, use a placeholder "Coming soon")
        
        IMAGE MAPPING:
        - Identify 3 high-value visual moments from the video transcript.
        - Provide realistic timestamps (MM:SS).
        - Provide a caption describing what the content manager should capture from that timestamp.
        
        Structure the output as JSON:
        {
          "title": "Brand-Aligned SEO Title",
          "content": "Full markdown content with [FRAME_X] markers and many line breaks",
          "seoMetadata": {
            "title": "Meta Title",
            "description": "Meta Description",
            "keywords": ["key1", "key2"],
            "semanticClusters": ["Cluster 1", "Cluster 2"]
          },
          "extractedImages": [
            {"url": "https://picsum.photos/seed/${ytInfo.videoId}-0/800/450", "timestamp": "01:20", "caption": "Specific UI element or diagram description"}
          ]
        }
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });

      const result = JSON.parse(response.text || '{}');
      
      onDraftCreated({
        title: result.title || "Untitled Blog Post",
        content: result.content || "Content generation failed.",
        thumbnailUrl: ytInfo.thumbnailUrl,
        extractedImages: result.extractedImages || [],
        seoMetadata: result.seoMetadata || { title: "", description: "", keywords: [], semanticClusters: [] }
      });

    } catch (err) {
      console.error("Processing failed:", err);
      alert("Something went wrong. Please check your inputs and try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-200">
        
        {/* Section 1: Source */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-xl shadow-xl shadow-indigo-100">1</span>
            <div>
              <h2 className="text-2xl font-black text-slate-900 leading-none">Video & Transcript</h2>
              <p className="text-slate-500 text-sm mt-1 font-medium">Link the source and provide context.</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="group">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 group-focus-within:text-indigo-600 transition-colors">YouTube Video URL</label>
              <input 
                type="text" 
                value={url}
                onChange={handleUrlChange}
                placeholder="https://www.youtube.com/watch?v=..."
                className="w-full px-6 py-5 rounded-2xl border-2 border-slate-100 bg-slate-50 text-slate-900 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all text-lg font-medium placeholder:text-slate-300 shadow-sm"
              />
            </div>

            {ytInfo && (
              <div className="flex gap-5 p-6 bg-indigo-50/50 rounded-[2rem] border border-indigo-100 animate-in zoom-in-95">
                <div className="relative shrink-0">
                  <img src={ytInfo.thumbnailUrl} className="w-44 h-28 object-cover rounded-2xl shadow-lg border-4 border-white" alt="Thumb" />
                  <div className="absolute inset-0 bg-indigo-600/10 rounded-2xl"></div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Live Connection</span>
                  </div>
                  <p className="text-sm font-black text-slate-800 line-clamp-2">Processing: {ytInfo.videoId}</p>
                </div>
              </div>
            )}

            <div className="group">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 group-focus-within:text-indigo-600 transition-colors">Transcript (Full Paste)</label>
              <textarea 
                rows={6}
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                placeholder="Paste the raw YouTube transcript here. This is vital for cloning your voice accurately..."
                className="w-full px-6 py-5 rounded-2xl border-2 border-slate-100 bg-slate-50 text-slate-900 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all text-sm font-mono placeholder:text-slate-300 shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Voice & Tone */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-xl shadow-xl shadow-indigo-100">2</span>
            <div>
              <h2 className="text-2xl font-black text-slate-900 leading-none">Voice & Tone</h2>
              <p className="text-slate-500 text-sm mt-1 font-medium">Provide 3-5 reference posts to clone your style.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {references.map((ref, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 font-black text-xs group-focus-within:text-indigo-400">#{idx + 1}</div>
                <input 
                  type="text"
                  value={ref}
                  onChange={(e) => updateReference(idx, e.target.value)}
                  placeholder="Paste a reference blog URL here..."
                  className="w-full pl-12 pr-6 py-5 rounded-2xl border-2 border-slate-100 bg-white text-slate-900 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-semibold placeholder:text-slate-200 shadow-sm"
                />
              </div>
            ))}
            {references.length < 5 && (
              <button 
                onClick={addReferenceField}
                className="flex items-center gap-3 px-6 py-3 mt-2 text-indigo-600 hover:text-indigo-800 font-black text-sm transition-all group rounded-xl hover:bg-indigo-50"
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
                </div>
                Add another reference URL
              </button>
            )}
          </div>
        </div>

        <button
          onClick={processVideo}
          disabled={!ytInfo || isProcessing || references.filter(r => r).length < 1}
          className={`w-full py-7 rounded-[2rem] font-black text-2xl text-white transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-4 ${
            !ytInfo || isProcessing || references.filter(r => r).length < 1
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none' 
              : 'bg-indigo-600 hover:bg-indigo-700 shadow-2xl shadow-indigo-300'
          }`}
        >
          {isProcessing ? (
            <>
              <svg className="animate-spin h-7 w-7 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Cloning Brand Strategy...
            </>
          ) : (
            'Generate Brand-Matched Post'
          )}
        </button>
      </div>
    </div>
  );
};

export default BlogCreator;
