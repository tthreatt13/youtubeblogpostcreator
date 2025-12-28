
import React, { useState } from 'react';
import { DiscoveryAnswers } from '../types';

interface DiscoveryWizardProps {
  onComplete: (answers: DiscoveryAnswers) => void;
}

const DiscoveryWizard: React.FC<DiscoveryWizardProps> = ({ onComplete }) => {
  const [answers, setAnswers] = useState<DiscoveryAnswers>({
    referenceMethod: 'text',
    imageSelectionStrategy: 'headers',
    seoFocus: 'comprehensive',
    workflowIntegration: 'download'
  });

  const questions = [
    {
      id: 'referenceMethod',
      title: '1. Voice & Tone Reference',
      description: 'How will you provide the "similar blog posts" for the AI to mimic?',
      options: [
        { value: 'url', label: 'A. Link to an existing blog', icon: '🔗' },
        { value: 'text', label: 'B. Paste raw text from previous posts', icon: '📝' },
        { value: 'archetype', label: 'C. Select from brand archetypes', icon: '🎭' }
      ]
    },
    {
      id: 'imageSelectionStrategy',
      title: '2. Image Selection Strategy',
      description: 'How should the app decide which frames to pull from the video?',
      options: [
        { value: 'ai', label: 'A. AI auto-detects visual transitions', icon: '🤖' },
        { value: 'headers', label: 'B. Align with H2/H3 header changes', icon: '📑' },
        { value: 'fixed', label: 'C. Fixed intervals (every 2 mins)', icon: '⏲️' }
      ]
    },
    {
      id: 'seoFocus',
      title: '3. SEO Depth',
      description: 'What SEO features are most critical for your SaaS blog?',
      options: [
        { value: 'basic', label: 'A. Basic Title & Meta optimization', icon: '🌱' },
        { value: 'comprehensive', label: 'B. Full semantic keyword clustering', icon: '🌳' },
        { value: 'internal', label: 'C. Internal linking & Alt-text focus', icon: '🕸️' }
      ]
    },
    {
      id: 'workflowIntegration',
      title: '4. Output Destination',
      description: 'Where will the generated content primarily go?',
      options: [
        { value: 'download', label: 'A. Download as Markdown/HTML', icon: '💾' },
        { value: 'cms', label: 'B. Direct CMS integration (WP/Webflow)', icon: '🚀' },
        { value: 'clipboard', label: 'C. Copy formatted preview', icon: '📋' }
      ]
    }
  ];

  return (
    <div className="max-w-2xl mx-auto animate-in fade-in duration-500">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Configure Your Strategy</h2>
        <p className="text-slate-600">Before we build, we need to define the "what" and "why" to ensure the AI output hits your exact brand voice.</p>
      </div>

      <div className="space-y-10">
        {questions.map((q) => (
          <div key={q.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-1">{q.title}</h3>
            <p className="text-sm text-slate-500 mb-4">{q.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {q.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setAnswers({ ...answers, [q.id]: opt.value })}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                    answers[q.id as keyof DiscoveryAnswers] === opt.value
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                      : 'border-slate-100 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <span className="text-2xl mb-2">{opt.icon}</span>
                  <span className="text-xs font-semibold text-center">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button
          onClick={() => onComplete(answers)}
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-200/50"
        >
          Finalize Spec & Start Creating
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DiscoveryWizard;
