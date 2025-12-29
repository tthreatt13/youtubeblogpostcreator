
import React, { useState } from 'react';
import { AppStep, DiscoveryAnswers, BlogDraft } from './types';
import DiscoveryWizard from './components/DiscoveryWizard';
import BlogCreator from './components/BlogCreator';
import ResultView from './components/ResultView';
import DocsView from './components/DocsView';

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
      case AppStep.DOCS:
        return <DocsView onBack={() => setStep(AppStep.INPUT)} />;
      default:
        return <DiscoveryWizard onComplete={handleDiscoveryComplete} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button 
            onClick={() => setStep(AppStep.DISCOVERY)}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">YouTube Blogify</h1>
          </button>
          
          <nav className="flex items-center gap-4 md:gap-8">
            <button 
              onClick={() => setStep(AppStep.DOCS)}
              className={`flex items-center gap-2 text-sm font-black px-4 py-2 rounded-xl transition-all ${
                step === AppStep.DOCS 
                ? 'bg-slate-900 text-white shadow-lg' 
                : 'text-slate-500 hover:text-indigo-600 hover:bg-slate-50'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              docs/
            </button>
            <button 
              onClick={() => setStep(AppStep.DISCOVERY)}
              className="hidden md:block text-sm font-bold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-xl hover:bg-indigo-100 transition-colors"
            >
              Update Strategy
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {renderStep()}
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-slate-500 font-medium">© YouTube Blogify AI. Built for high-growth SaaS content managers.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
