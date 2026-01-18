import { Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">EMBER COFFEE CO.</h3>
            <p className="text-cream/70 text-sm leading-relaxed">
              A place where craft meets community.<br />
              Canggu, Bali.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4">Visit</h4>
            <p className="text-cream/70 text-sm leading-relaxed mb-2">
              Jl. Pantai Batu Bolong<br />
              Canggu, Bali
            </p>
            <p className="text-cream/70 text-sm">
              Daily · 7:30 AM – 6:00 PM
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4">Connect</h4>
            <a 
              href="https://instagram.com/embercoffee.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cream/70 hover:text-cream transition-colors text-sm"
            >
              <Instagram size={18} />
              @embercoffee.co
            </a>
          </div>
        </div>
        
        <div className="border-t border-cream/20 pt-8 text-center text-cream/50 text-xs">
          <p>© {new Date().getFullYear()} Ember Coffee Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

