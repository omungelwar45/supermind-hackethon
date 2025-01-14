





import React, { useState } from 'react';

import { BarChart3, Instagram, Twitter, Youtube, Facebook, TrendingUp, Users, MessageCircle, Share2, Search, Sparkles, ArrowRight, TrendingDown } from 'lucide-react';

type Platform = 'instagram' | 'twitter' | 'youtube' | 'facebook';

type ReelAnalysis = {
  engagement: number;
  reach: number;
  comments: number;
  shares: number;
  trending: 'up' | 'down' | 'stable';
  aiSuggestions: string[];
};

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
            className=" w-40 h-40 mx-auto mb-6 rounded-full shadow-lg border-4 border-white cursor-pointer"
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
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center cursor-pointer hover:scale-105 transition-all duration-300"
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
        'Use relevant hashtags for better reach'
      ]
    };
  };

  const handleAnalyze = async (platform: Platform) => {
    setSelectedPlatform(platform);
    setIsAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    if (reelUrl) {
      setAnalysis(analyzeReel(reelUrl));
    }
    if (comparisonUrl) {
      setComparisonAnalysis(analyzeReel(comparisonUrl));
    }
    setIsAnalyzing(false);
  };

  const renderMetric = (label: string, value1: number | string, value2?: number | string, icon: React.ReactNode) => (
    <div className="bg-white/5 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="flex items-center justify-between mb-4">
        {icon}
        <div className="text-right">
          <span className="text-3xl font-bold text-purple-300">{value1}</span>
          {value2 && (
            <div className="text-sm text-gray-400 mt-1">
              vs {value2}
              <span className={value1 > value2 ? 'text-green-400' : 'text-red-400'}>
                {value1 > value2 ? ' ↑' : ' ↓'}
              </span>
            </div>
          )}
        </div>
      </div>
      <p className="text-gray-300">{label}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {currentPage === 'about' ? (
        <AboutPage />
      ) : (
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-12 h-12 mr-4 animate-bounce" />
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Social Media Analyser Tool
              </h1>
            </div>
            <p className="text-xl text-gray-300 animate-slide-up">
              Compare and analyze social media content with AI-powered insights
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('about')}
            className="mb-8 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white cursor-pointer"
          >
            About Us
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Search className="w-6 h-6 mr-2 text-purple-400" />
                <h3 className="text-xl font-semibold">Paste Reel URL</h3>
              </div>
              <input
                type="text"
                value={reelUrl}
                onChange={(e) => setReelUrl(e.target.value)}
                placeholder="Paste your reel URL here"
                className="w-full bg-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-text"
              />
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <ArrowRight className="w-6 h-6 mr-2 text-purple-400" />
                <h3 className="text-xl font-semibold">Comparison Reel URL</h3>
              </div>
              <input
                type="text"
                value={comparisonUrl}
                onChange={(e) => setComparisonUrl(e.target.value)}
                placeholder="Paste comparison reel URL"
                className="w-full bg-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-text"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {platforms.map(({ name, icon: Icon, color, label }) => (
              <button
                key={name}
                onClick={() => handleAnalyze(name as Platform)}
                className={`${color} p-6 rounded-xl transform hover:scale-105 transition-all duration-300 
                  hover:shadow-2xl hover:shadow-${color.split('-')[1]}-400/30 group cursor-pointer`}
                disabled={!reelUrl}
              >
                <div className="flex flex-col items-center space-y-4">
                  <Icon className="w-16 h-16 group-hover:animate-pulse" />
                  <span className="text-xl font-semibold">{label}</span>
                </div>
              </button>
            ))}
          </div>

          {isAnalyzing && (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500 cursor-wait"></div>
            </div>
          )}

          {analysis && !isAnalyzing && (
            <div className="space-y-8 animate-fade-in">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Analysis Results</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {renderMetric('Engagement Rate', `${analysis.engagement.toFixed(1)}%`, 
                    comparisonAnalysis?.engagement.toFixed(1) + '%',
                    <TrendingUp className="w-8 h-8 text-purple-400" />)}
                  {renderMetric('Reach', analysis.reach.toLocaleString(),
                    comparisonAnalysis?.reach.toLocaleString(),
                    <Users className="w-8 h-8 text-purple-400" />)}
                  {renderMetric('Comments', analysis.comments.toLocaleString(),
                    comparisonAnalysis?.comments.toLocaleString(),
                    <MessageCircle className="w-8 h-8 text-purple-400" />)}
                  {renderMetric('Shares', analysis.shares.toLocaleString(),
                    comparisonAnalysis?.shares.toLocaleString(),
                    <Share2 className="w-8 h-8 text-purple-400" />)}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">AI Recommendations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {analysis.aiSuggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-white/5 p-4 rounded-lg cursor-help">
                      <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      <p className="text-gray-300">{suggestion}</p>
                    </div>
                  ))}
                </div>
              </div>

              {analysis.trending !== 'stable' && (
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                  <div className="flex items-center justify-center space-x-4">
                    {analysis.trending === 'up' ? (
                      <TrendingUp className="w-8 h-8 text-green-400" />
                    ) : (
                      <TrendingDown className="w-8 h-8 text-red-400" />
                    )}
                    <h3 className="text-xl font-semibold">
                      This content is trending {analysis.trending}!
                    </h3>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
