import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Target, FileText, Code, ArrowRight, CheckCircle2, Mail, Check } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-2">
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand-blue">
      <g transform="translate(12, 8) skewX(-15)">
        <rect x="0" y="0" width="8" height="8" fill="currentColor" />
        <rect x="0" y="12" width="8" height="20" fill="currentColor" />
        <rect x="12" y="0" width="8" height="32" fill="currentColor" />
        <rect x="20" y="0" width="12" height="8" fill="currentColor" />
        <rect x="20" y="12" width="8" height="8" fill="currentColor" />
      </g>
    </svg>
    <span className="font-serif text-2xl font-bold tracking-tight text-brand-white">IdeaForge</span>
  </div>
);

const AnimatedSparkles = ({ className }: { className?: string }) => (
  <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <motion.path
      variants={{ hover: { rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] } }}
      transition={{ duration: 0.5 }}
      d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
    />
    <motion.path variants={{ hover: { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] } }} transition={{ duration: 0.5 }} d="M20 3v4" />
    <motion.path variants={{ hover: { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] } }} transition={{ duration: 0.5 }} d="M22 5h-4" />
    <motion.path variants={{ hover: { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] } }} transition={{ duration: 0.5, delay: 0.1 }} d="M4 17v2" />
    <motion.path variants={{ hover: { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] } }} transition={{ duration: 0.5, delay: 0.1 }} d="M5 18H3" />
  </motion.svg>
);

const AnimatedTarget = ({ className }: { className?: string }) => (
  <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <motion.circle cx="12" cy="12" r="10" variants={{ hover: { pathLength: [0, 1] } }} transition={{ duration: 0.6 }} />
    <motion.circle cx="12" cy="12" r="6" variants={{ hover: { pathLength: [0, 1] } }} transition={{ duration: 0.6, delay: 0.1 }} />
    <motion.circle cx="12" cy="12" r="2" variants={{ hover: { scale: [1, 1.5, 1] } }} transition={{ duration: 0.4, delay: 0.2 }} />
  </motion.svg>
);

const AnimatedFileText = ({ className }: { className?: string }) => (
  <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <motion.line x1="16" y1="13" x2="8" y2="13" variants={{ hover: { pathLength: [0, 1], opacity: [0, 1] } }} transition={{ duration: 0.4 }} />
    <motion.line x1="16" y1="17" x2="8" y2="17" variants={{ hover: { pathLength: [0, 1], opacity: [0, 1] } }} transition={{ duration: 0.4, delay: 0.1 }} />
    <motion.line x1="10" y1="9" x2="8" y2="9" variants={{ hover: { pathLength: [0, 1], opacity: [0, 1] } }} transition={{ duration: 0.4, delay: 0.2 }} />
  </motion.svg>
);

const AnimatedCode = ({ className }: { className?: string }) => (
  <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <motion.polyline points="16 18 22 12 16 6" variants={{ hover: { x: [0, 3, 0] } }} transition={{ duration: 0.5 }} />
    <motion.polyline points="8 6 2 12 8 18" variants={{ hover: { x: [0, -3, 0] } }} transition={{ duration: 0.5 }} />
    <motion.line x1="14" y1="4" x2="10" y2="20" variants={{ hover: { rotate: [0, 15, 0] } }} transition={{ duration: 0.5 }} style={{ transformOrigin: "center" }} />
  </motion.svg>
);

const FeatureCard = ({ icon: Icon, title, description, details }: { icon: React.ElementType, title: string, description: string, details: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        hover: { y: -8, transition: { duration: 0.3, ease: "easeOut" } }
      }}
      whileHover="hover"
      className="bg-brand-charcoal border border-brand-grey/30 p-6 rounded-2xl hover:border-brand-blue/60 hover:shadow-[0_8px_30px_rgba(0,123,255,0.15)] transition-colors transition-shadow duration-300 group cursor-pointer flex flex-col h-full"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div 
        variants={{ hover: { scale: 1.15, rotate: 5 } }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue/20 transition-colors duration-300 origin-bottom-left"
      >
        <Icon className="w-6 h-6 text-brand-blue" />
      </motion.div>
      <motion.h3 
        variants={{ hover: { scale: 1.03, x: 2 } }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="font-serif text-xl mb-2 text-brand-white group-hover:text-brand-blue transition-colors duration-300 origin-left"
      >
        {title}
      </motion.h3>
      <motion.p 
        variants={{ hover: { scale: 1.02, opacity: 0.9 } }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="text-brand-silver leading-relaxed origin-left flex-1"
      >
        {description}
      </motion.p>
      
      <div className="mt-4 pt-4 border-t border-brand-grey/20">
        <button
          className="text-brand-blue text-sm font-medium flex items-center gap-1 group-hover:underline focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
        >
          Learn More <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
        </button>
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0, marginTop: isExpanded ? 12 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="text-sm text-brand-silver/80 leading-relaxed">
            {details}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const DeliverablePreview = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="relative w-full max-w-4xl mx-auto mt-20 rounded-2xl overflow-hidden border border-brand-grey/30 bg-[#1A1D21] shadow-2xl"
  >
    <div className="flex items-center px-4 py-3 border-b border-brand-grey/30 bg-[#212529]">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
      </div>
      <div className="mx-auto px-4 py-1 rounded-md bg-black/20 text-xs text-brand-silver font-mono">
        ideaforge.app/project/ai-tutor
      </div>
    </div>
    <div className="flex flex-col md:flex-row h-[500px]">
      {/* Sidebar */}
      <div className="hidden md:block w-64 border-r border-brand-grey/30 p-4 bg-[#1A1D21]">
        <div className="text-xs font-bold text-brand-grey uppercase tracking-wider mb-4">Sessions</div>
        <div className="space-y-2">
          {['Discovery', 'Validation', 'Planning', 'Spec'].map((session, i) => (
            <div key={session} className={`px-3 py-2 rounded-lg text-sm flex items-center gap-2 ${i === 0 ? 'bg-brand-blue/10 text-brand-blue' : 'text-brand-silver hover:bg-white/5'}`}>
              <CheckCircle2 className={`w-4 h-4 ${i === 0 ? 'text-brand-blue' : 'text-brand-grey'}`} />
              {session}
            </div>
          ))}
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Chat */}
        <div className="flex-1 border-r border-brand-grey/30 p-6 flex flex-col bg-[#1A1D21]">
          <div className="flex-1 space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="bg-brand-charcoal p-3 rounded-2xl rounded-tl-none text-sm text-brand-silver border border-brand-grey/20">
                Let's define the problem your AI tutor solves. Who is the primary target user?
              </div>
            </div>
            <div className="flex gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-brand-grey flex items-center justify-center shrink-0">
                <span className="text-xs text-white">U</span>
              </div>
              <div className="bg-brand-blue/20 p-3 rounded-2xl rounded-tr-none text-sm text-brand-white border border-brand-blue/30">
                High school students struggling with math concepts who need personalized, patient explanations.
              </div>
            </div>
          </div>
          <div className="mt-4 relative">
            <input type="text" disabled placeholder="Type your response..." className="w-full bg-brand-charcoal border border-brand-grey/30 rounded-full px-4 py-2 text-sm text-brand-silver" />
          </div>
        </div>
        {/* Document */}
        <div className="hidden lg:block w-80 p-6 bg-[#212529] overflow-y-auto">
          <h4 className="font-serif text-lg mb-4 text-brand-white">Idea Brief</h4>
          <div className="space-y-4">
            <div>
              <div className="text-xs text-brand-grey mb-1">Problem</div>
              <div className="h-12 bg-white/5 rounded border border-white/5 p-2 text-xs text-brand-silver">
                Students lack access to affordable, personalized 1-on-1 tutoring.
              </div>
            </div>
            <div>
              <div className="text-xs text-brand-grey mb-1">Target User</div>
              <motion.div 
                initial={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                animate={{ backgroundColor: ['rgba(255,255,255,0.05)', 'rgba(0,123,255,0.2)', 'rgba(255,255,255,0.05)'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="h-16 rounded border border-brand-blue/30 p-2 text-xs text-brand-white"
              >
                High school students struggling with math concepts who need personalized, patient explanations.
              </motion.div>
            </div>
            <div>
              <div className="text-xs text-brand-grey mb-1">Value Prop</div>
              <div className="h-12 bg-white/5 rounded border border-white/5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const faqs = [
  {
    question: "How much does IdeaForge cost?",
    answer: "We offer a free tier that includes one project and the Discovery session. Pro plans start at $19/mo for unlimited projects and full access to all sessions and PDF exports. Team plans are $49/mo for collaborative workspaces."
  },
  {
    question: "Do I need technical skills to use this?",
    answer: "Not at all! IdeaForge is designed for founders, creators, and dreamers of all technical levels. We guide you through the business and technical planning so you can hand off a complete spec to developers if needed."
  },
  {
    question: "Who owns the ideas and documents generated?",
    answer: "You do. 100%. IdeaForge claims no ownership over your intellectual property, business ideas, or the deliverables generated during your sessions."
  },
  {
    question: "Can I share my deliverables with investors or my team?",
    answer: "Yes! Every deliverable gets a shareable link. Free tier links include a small watermark, while Pro and Team plans offer unbranded sharing and PDF downloads."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => (
  <div className="border-b border-brand-grey/20">
    <button
      className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      onClick={onClick}
    >
      <span className="font-serif text-xl text-brand-white group-hover:text-brand-blue transition-colors">{question}</span>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors shrink-0 ml-4 ${isOpen ? 'bg-brand-blue border-brand-blue text-white' : 'border-brand-grey/30 text-brand-grey group-hover:border-brand-blue/50 group-hover:text-brand-blue'}`}>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center justify-center"
        >
          <Check className="w-4 h-4" />
        </motion.div>
      </div>
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <p className="pb-6 text-brand-silver leading-relaxed pr-12">
        {answer}
      </p>
    </motion.div>
  </div>
);

export default function App() {
  const [idea, setIdea] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, send to API
    }
  };

  return (
    <div className="min-h-screen bg-brand-charcoal text-brand-white selection:bg-brand-blue/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-brand-grey/20 bg-brand-charcoal/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <a href="#join" className="text-sm font-medium text-brand-silver hover:text-brand-white transition-colors">
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
          <motion.div style={{ y: y1, position: 'absolute', inset: 0 }}>
            <motion.div
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -50, 50, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[600px] h-[600px] bg-brand-blue/20 blur-[120px] rounded-full mix-blend-screen"
              style={{ left: '10%', top: '10%' }}
            />
          </motion.div>
          <motion.div style={{ y: y2, position: 'absolute', inset: 0 }}>
            <motion.div
              animate={{
                x: [0, -100, 50, 0],
                y: [0, 50, -50, 0],
                scale: [1, 0.8, 1.2, 1],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[500px] h-[500px] bg-blue-400/10 blur-[100px] rounded-full mix-blend-screen"
              style={{ right: '10%', top: '30%' }}
            />
          </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>AI-Guided Idea Development</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6 leading-tight">
              Turn your spark into a <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">structured plan.</span>
            </h1>
            <p className="text-xl text-brand-silver mb-10 max-w-2xl mx-auto leading-relaxed">
              IdeaForge is a web platform that helps you develop ideas for new businesses, websites, and apps through AI-guided sessions.
            </p>
          </motion.div>

          {/* Idea Spark Input */}
          <motion.div
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl mx-auto bg-white/5 p-2 rounded-2xl border border-brand-grey/30 backdrop-blur-sm flex flex-col sm:flex-row gap-2"
          >
            <input
              type="text"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Describe your idea in one sentence..."
              className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-brand-white placeholder:text-brand-grey"
            />
            <a 
              href="#join"
              className="bg-brand-blue hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Start Forging <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <DeliverablePreview />
      </section>

      {/* How it Works / Sessions */}
      <section className="py-24 px-6 bg-[#1A1D21] border-y border-brand-grey/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Four steps to clarity</h2>
            <p className="text-brand-silver max-w-2xl mx-auto">
              Our AI guides you through a structured workshop, asking the right questions and producing formatted deliverables at each stage.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <FeatureCard 
              icon={AnimatedSparkles}
              title="1. Discovery"
              description="Define the problem, target user, and value proposition. Get a one-page Idea Brief."
              details="Includes a 30-minute AI interview to extract your core vision, followed by automated market research and a synthesized one-page brief."
            />
            <FeatureCard 
              icon={AnimatedTarget}
              title="2. Validation"
              description="Analyze market size, competitors, and key assumptions. Generate a Validation Playbook."
              details="We run your idea through 5 different AI personas representing your target audience to gather simulated feedback and identify critical assumptions."
            />
            <FeatureCard 
              icon={AnimatedFileText}
              title="3. Planning"
              description="Map out your business model, revenue streams, and go-to-market strategy."
              details="Generates a lean canvas, pricing strategy options, and a step-by-step go-to-market plan tailored to your specific industry."
            />
            <FeatureCard 
              icon={AnimatedCode}
              title="4. Spec"
              description="Define core features, tech stack, and MVP scope. Receive a Technical Spec & Roadmap."
              details="Produces a developer-ready technical specification, including recommended tech stack, database schema, and API endpoint definitions."
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-brand-charcoal">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Frequently asked questions</h2>
            <p className="text-brand-silver">Everything you need to know about the product and billing.</p>
          </div>
          <div className="border-t border-brand-grey/20">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === index}
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="join" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-brand-charcoal border border-brand-grey/30 p-10 md:p-16 rounded-3xl shadow-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Get early access</h2>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              We're currently in private beta. Join the waitlist to be notified when IdeaForge opens to the public.
            </p>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-brand-blue/10 border border-brand-blue/30 text-brand-blue p-4 rounded-xl flex items-center justify-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">You're on the list! We'll be in touch soon.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-grey" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-brand-grey/30 rounded-xl pl-12 pr-4 py-3 text-brand-white placeholder:text-brand-grey focus:outline-none focus:border-brand-blue/50 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-brand-white text-brand-charcoal hover:bg-gray-200 px-6 py-3 rounded-xl font-medium transition-colors whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-grey/20 py-8 px-6 text-center text-brand-grey text-sm">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
          <Logo />
        </div>
        <p>&copy; {new Date().getFullYear()} IdeaForge. All rights reserved.</p>
      </footer>
    </div>
  );
}
