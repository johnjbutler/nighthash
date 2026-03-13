import { useState, useEffect } from 'react'

function App() {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(d => d.length >= 3 ? '' : d + '.')
    }, 500)
    return () => clearInterval(interval)
  }, [])

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <div className="min-h-screen bg-cyber-black text-white font-body overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-blue/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyber-purple-start/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ 
          backgroundImage: `linear-gradient(rgba(78, 240, 244, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(78, 240, 244, 0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Scan line */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue/40 to-transparent animate-scan"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        {/* Logo */}
        <div className="mb-12">
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-14 h-14 border-2 border-neon-blue/60 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-neon-blue/10 group-hover:bg-neon-blue/20 transition-colors"></div>
                <span className="text-neon-blue font-header text-2xl font-bold relative z-10">N</span>
              </div>
              <div className="absolute -inset-2 border border-neon-blue/20 rounded-lg animate-pulse"></div>
            </div>
            <span className="font-header text-2xl font-bold tracking-[0.2em]">NIGHTHASH</span>
          </div>
        </div>

        {/* Coming Soon Text */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-purple-start/30 bg-cyber-purple-start/5 text-cyber-purple-start text-sm mb-6">
            <span className="w-2 h-2 bg-cyber-purple-start rounded-full animate-pulse"></span>
            Something Dangerous Is Brewing
          </div>
          
          <h1 className="text-6xl md:text-8xl font-header font-black mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-white via-neon-blue to-white bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              COMING
            </span>
            <br />
            <span className="bg-gradient-to-r from-neon-blue via-cyber-purple-start to-neon-blue bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              SOON
            </span>
          </h1>
        </div>

        {/* Clever Tagline */}
        <div className="mb-12 text-center">
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-xl">
            We're building the <span className="text-neon-blue font-medium">last security company</span> you'll ever need.
            <span className="inline-block w-1 h-5 bg-neon-blue ml-1 animate-blink"></span>
          </p>
          <p className="text-gray-500 mt-3 text-sm">
            Full-spectrum protection for those who refuse to be breached.
          </p>
        </div>

        {/* Email Capture */}
        <div className="w-full max-w-md">
          {submitted ? (
            <div className="text-center p-6 border border-neon-blue/30 bg-neon-blue/5 rounded-xl">
              <div className="text-4xl mb-3">🎯</div>
              <p className="text-neon-blue font-medium">You're on the list.</p>
              <p className="text-gray-500 text-sm mt-1">We'll notify you the moment we go live.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for early access"
                  required
                  className="w-full px-6 py-4 bg-cyber-dark/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue/50 transition-all backdrop-blur"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-cyber-purple-start via-cyber-purple-end to-cyber-purple-start bg-[length:200%_auto] px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-all hover:scale-[1.02] animate-gradient"
              >
                Get Early Access
              </button>
            </form>
          )}
          <p className="text-gray-600 text-xs text-center mt-4">
            Join 2,400+ security-conscious leaders on the waitlist
          </p>
        </div>

        {/* Social Links / Contact */}
        <div className="mt-16 flex items-center gap-8">
          {[
            { icon: '📧', label: 'Email', value: 'security@nighthash.com' },
            { icon: '📱', label: 'Phone', value: '+1 (555) 123-4567' },
          ].map((item, i) => (
            <a 
              key={i}
              href={item.label === 'Email' ? `mailto:${item.value}` : `tel:${item.value}`}
              className="flex items-center gap-2 text-gray-500 hover:text-neon-blue transition-colors group"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm">{item.value}</span>
            </a>
          ))}
        </div>

        {/* Status Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2 text-gray-600 text-xs">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>Systems initializing{dots}</span>
          </div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-neon-blue/30"></div>
      <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-neon-blue/30"></div>
      <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-neon-blue/30"></div>
      <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-neon-blue/30"></div>
    </div>
  )
}

export default App
