import React, { useEffect, useState } from 'react';
import {
  BarChart3,
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  TrendingUp,
  Users,
  MessageCircle,
  Share2,
  Search,
  Sparkles,
  ArrowRight,
  TrendingDown,
} from 'lucide-react';
import './App.css';

type Platform = 'instagram' | 'twitter' | 'youtube' | 'facebook';

type ReelAnalysis = {
  engagement: number;
  reach: number;
  comments: number;
  shares: number;
  trending: 'up' | 'down' | 'stable';
  aiSuggestions: string[];
};

function MagicalCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="magical-cursor"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    />
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            About Us
          </h1>
          <p className="text-xl text-gray-300 mt-4">
            Meet the team behind the Social Media Analyser Tool
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/WhatsApp Image 2025-01-10 at 15.40.07_dd46f047.jpg" // Replace with the actual logo URL
            alt="Team Logo"
            className="w-40 h-40 mx-auto mb-6 rounded-full shadow-lg border-4 border-white"
          />
          <h2 className="text-3xl font-bold mb-8">Team Innovators</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Om Mungelwar', role: 'Developer' },
              { name: 'Suraj Baviskar', role: 'Developer' },
              { name: 'Ojas', role: 'Developer' },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [reelUrl, setReelUrl] = useState('');
  const [comparisonUrl, setComparisonUrl] = useState('');
  const [analysis, setAnalysis] = useState<ReelAnalysis | null>(null);
  const [comparisonAnalysis, setComparisonAnalysis] = useState<ReelAnalysis | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  const platforms = [
    { name: 'instagram', icon: Instagram, color: 'bg-pink-500', label: 'Instagram' },
    { name: 'twitter', icon: Twitter, color: 'bg-blue-400', label: 'Twitter' },
    { name: 'youtube', icon: Youtube, color: 'bg-red-500', label: 'YouTube' },
    { name: 'facebook', icon: Facebook, color: 'bg-blue-600', label: 'Facebook' },
  ];

  const analyzeReel = (url: string): ReelAnalysis => {
    return {
      engagement: Math.random() * 10 + 5,
      reach: Math.floor(Math.random() * 100000),
      comments: Math.floor(Math.random() * 2000),
      shares: Math.floor(Math.random() * 1000),
      trending: ['up', 'down', 'stable'][Math.floor(Math.random() * 3)] as 'up' | 'down' | 'stable',
      aiSuggestions: [
        'Use more trending music to increase engagement',
        'Post during peak hours (6-8 PM)',
        'Add more interactive elements',
        'Use relevant hashtags for better reach',
      ],
    };
  };

  const handleAnalyze = async (platform: Platform) => {
    setSelectedPlatform(platform);
    setIsAnalyzing(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    if (reelUrl) {
      setAnalysis(analyzeReel(reelUrl));
    }
    if (comparisonUrl) {
      setComparisonAnalysis(analyzeReel(comparisonUrl));
    }
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <MagicalCursor />
      {currentPage === 'about' ? (
        <AboutPage />
      ) : (
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Social Media Analyser Tool
            </h1>
            <p className="text-xl text-gray-300 mt-4">
              Compare and analyze social media content with AI-powered insights
            </p>
          </div>
          {/* Content from original app */}
        </div>
      )}
    </div>
  );
}

export default App;
