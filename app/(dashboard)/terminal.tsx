'use client';

import { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';

export function Terminal() {
  const [terminalStep, setTerminalStep] = useState(0);
  const [copied, setCopied] = useState(false);
  const terminalSteps = [
    'Recruiter account created: talent@northstarstudio.com',
    'Job posted: Senior Full Stack Developer',
    '17 new applications received in the first 48 hours',
    'Shortlist updated: 5 candidates moved to interview stage',
    'Applicant profile completed: accounting.personnel@candidate.com',
    'Application sent through wok successfully'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTerminalStep((prev) =>
        prev < terminalSteps.length - 1 ? prev + 1 : prev
      );
    }, 500);

    return () => clearTimeout(timer);
  }, [terminalStep]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(terminalSteps.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-[2rem] border border-blue-100 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] font-mono text-sm text-slate-800 shadow-[0_28px_70px_-42px_rgba(15,23,42,0.35)]">
      <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_65%)]" />
      <div className="relative p-5">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-200"></div>
            <div className="w-3 h-3 rounded-full bg-sky-300"></div>
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          </div>
          <button
            onClick={copyToClipboard}
            className="text-slate-400 transition-colors hover:text-blue-700"
            aria-label="Copy to clipboard"
          >
            {copied ? (
              <Check className="h-5 w-5" />
            ) : (
              <Copy className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className="space-y-2">
          {terminalSteps.map((step, index) => (
            <div
              key={index}
              className={`${
                index > terminalStep ? 'opacity-0' : 'opacity-100'
              } transition-opacity duration-300`}
            >
              <span className="text-blue-600">$</span> {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
