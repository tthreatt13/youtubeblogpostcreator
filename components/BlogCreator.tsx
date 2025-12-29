
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
  const [videoDescription, setVideoDescription] = useState('');
  const [spotifyUrl, setSpotifyUrl] = useState('');
  const [applePodcastsUrl, setApplePodcastsUrl] = useState('');
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
        
        TASK: Transform the provided transcript and video description into a professional, high-converting SEO blog post.
        
        SOURCE CONTENT:
        - YouTube ID: ${ytInfo.videoId}
        - TRANSCRIPT: ${transcript || "No transcript provided."}
        - VIDEO DESCRIPTION: ${videoDescription || "No description provided."}
        
        STRICT VOICE & TONE CLONING (CRITICAL): 
        Analyze the specific writing style, sentence pacing, level of technicality, and unique vocabulary from these references. 
        You MUST mimic this style EXACTLY.
        REFERENCES:
        ${references.filter(r => r).join('\n')}
        
        FORMATTING & STRUCTURE:
        - Use Markdown.
        - DO NOT include a TL;DR or "Executive Summary" section.
        - MANDATORY: Use frequent line breaks. Paragraphs should be 2-3 sentences max.
        - Use clean H2 and H3 headers.
        - Insert image markers [FRAME_0], [FRAME_1], [FRAME_2] at logical visual breakpoints.
        
        MANDATORY END SECTIONS:
        
        ## Thanks to Our Sponsors
        This section must look EXACTLY like this:
        This episode is brought to you by:
        - **[Sponsor Name](URL)**: [A 1-2 sentence description about what they do and their specific offer mentioned in the transcript or description].
        
        Identify all sponsors. If none are found, write "No sponsors mentioned in this episode."
        
        ## Episode Links
        Format this EXACTLY as a bulleted list using the following URLs:
        * [YouTube](https://youtube.com/watch?v=${ytInfo.videoId})
        * [Spotify](${spotifyUrl || 'Coming soon'})
        * [Apple Podcasts](${applePodcastsUrl || 'Coming soon'})
        
        IMAGE MAPPING:
        - Identify 3 high-value visual moments from the video.
        - Provide realistic timestamps (MM:SS).
        - Provide a caption describing what the content manager should capture.
        
        Structure the output as JSON:
        {
          "title": "Brand-Aligned SEO Title",
          "content": "Full markdown content with [FRAME_X] markers and the mandatory end sections formatted as requested",
          "seoMetadata": {
            "title": "Meta Title",
            "description": "Meta Description",
            "keywords": ["key1", "key2"],
            "semanticClusters": ["Cluster 1", "Cluster 2"]
          },
          "extractedImages": [
            {"url": "https://picsum.photos/seed/${ytInfo.videoId}-0/800/450", "timestamp": "01:20", "caption": "Screenshot description"}
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
      alert("Something went wrong. Please check your inputs.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-200">
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-xl shadow-xl shadow-indigo-100">1</span>
            <div>
              <h2 className="text-2xl font-black text-slate-900 leading-none">Source Content</h2>
              <p className="text-slate-500 text-sm mt-1 font-medium">Link your video, podcasts, and provide the raw context.</p>
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
                className="w-full px-6 py-5 rounded-2xl border-2 border-slate-100 bg-slate-50 text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all text-lg font-medium shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 group-focus-within:text-green-600 transition-colors">Spotify URL (Optional)</label>
                <input 
                  type="text" 
                  value={spotifyUrl}
                  onChange={(e) => setSpotifyUrl(e.target.value)}
                  placeholder="https://open.spotify.com/..."
                  className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 text-slate-900 focus:bg-white focus:border-green-500 outline-none transition-all text-sm font-medium shadow-sm"
                />
              </div>
              <div className="group">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 group-focus-within:text-purple-600 transition-colors">Apple Podcasts URL (Optional)</label>
                <input 
                  type="text" 
                  value={applePodcastsUrl}
                  onChange={(e) => setApplePodcastsUrl(e.target.value)}
                  placeholder="https://podcasts.apple.com/..."
                  className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 text-slate-900 focus:bg-white focus:border-purple-500 outline-none transition-all text-sm font-medium shadow-sm"
                />
              </div>
            </div>

            {ytInfo && (
              <div className="flex gap-5 p-6 bg-indigo-50/50 rounded-[2rem] border border-indigo-100 animate-in zoom-in-95">
                <img src={ytInfo.thumbnailUrl} className="w-44 h-28 object-cover rounded-2xl shadow-lg border-4 border-white" alt="Thumb" />
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-1">Detected ID</span>
                  <p className="text-lg font-black text-slate-800">{ytInfo.videoId}</p>
                </div>
              </div>
            )}

            <div className="group">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 group-focus-within:text-indigo-600 transition-colors">YouTube Video Description (For Sponsors & Links)</label>
              <textarea 
                rows={4}
                value={videoDescription}
                onChange={(e) => setVideoDescription(e.target.value)}
                placeholder="Paste the YouTube description here. We use this to find sponsor details and links..."
                className="w-full px-6 py-5 rounded-2xl border-2 border-slate-100 bg-slate-50 text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all text-sm font-medium shadow-sm"
              />
            </div>

            <div className="group">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 group-focus-within:text-indigo-600 transition-colors">Transcript (Full Paste)</label>
              <textarea 
                rows={6}
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                placeholder="Paste the raw YouTube transcript here..."
                className="w-full px-6 py-5 rounded-2xl border-2 border-slate-100 bg-slate-50 text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all text-sm font-mono shadow-sm"
              />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-xl shadow-xl shadow-indigo-100">2</span>
            <div>
              <h2 className="text-2xl font-black text-slate-900 leading-none">Voice Reference</h2>
              <p className="text-slate-500 text-sm mt-1 font-medium">Clone style from 3-5 existing blog posts.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {references.map((ref, idx) => (
              <input 
                key={idx}
                type="text"
                value={ref}
                onChange={(e) => updateReference(idx, e.target.value)}
                placeholder={`Reference Blog URL #${idx + 1}`}
                className="w-full px-6 py-5 rounded-2xl border-2 border-slate-100 bg-white text-slate-900 focus:border-indigo-600 outline-none transition-all font-semibold shadow-sm"
              />
            ))}
            {references.length < 5 && (
              <button 
                onClick={addReferenceField}
                className="flex items-center gap-3 px-6 py-3 text-indigo-600 hover:text-indigo-800 font-black text-sm transition-all"
              >
                + Add another reference URL
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
          {isProcessing ? 'Generating Brand-Matched Post...' : 'Generate Blog Post'}
        </button>
      </div>
    </div>
  );
};

export default BlogCreator;
