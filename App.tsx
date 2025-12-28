
import React, { useState, useCallback } from 'react';
import { AppStep, DiscoveryAnswers, BlogDraft } from './types';
import DiscoveryWizard from './components/DiscoveryWizard';
import BlogCreator from './components/BlogCreator';
import ResultView from './components/ResultView';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.DISCOVERY);
  const [answers, setAnswers] = useState<DiscoveryAnswers | null>(null);
  const [draft, setDraft] = useState<BlogDraft | null>(null);

  const handleDiscoveryComplete = (data: DiscoveryAnswers) => {
    setAnswers(data);
    setStep(AppStep.INPUT);
  };

  const handleReset = () => {
    setStep(AppStep.INPUT);
    setDraft(null);
  };

  const renderStep = () => {
    switch (step) {
      case AppStep.DISCOVERY:
        return <DiscoveryWizard onComplete={handleDiscoveryComplete} />;
      case AppStep.INPUT:
        return (
          <BlogCreator 
            answers={answers!} 
            onDraftCreated={(newDraft) => {
              setDraft(newDraft);
              setStep(AppStep.RESULT);
            }} 
          />
        );
      case AppStep.RESULT:
        return draft ? <ResultView draft={draft} onReset={handleReset} /> : null;
      default:
        return <DiscoveryWizard onComplete={handleDiscoveryComplete} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">YouTube Blogify</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">How it works</a>
            <a href="#" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Examples</a>
            <button 
              onClick={() => setStep(AppStep.DISCOVERY)}
              className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full hover:bg-indigo-100 transition-colors"
            >
              Update Strategy
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        {renderStep()}
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-slate-500">© 2024 YouTube Blogify AI. Built for high-growth SaaS content managers.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
