import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isHome ? 'bg-transparent' : 'bg-cream/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-serif text-charcoal hover:opacity-70 transition-opacity tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            EMBER COFFEE CO.
          </Link>
          
          <div className="hidden md:flex items-center gap-10 text-sm tracking-wide">
            <Link to="/" className="text-link">
              Home
            </Link>
            <Link to="/menu" className="text-link">
              Menu
            </Link>
            <Link to="/story" className="text-link">
              Story
            </Link>
            <Link to="/visit" className="text-link">
              Visit Us
            </Link>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <select 
              value={location.pathname} 
              onChange={(e) => window.location.href = e.target.value}
              className="bg-transparent border-none text-charcoal text-sm focus:outline-none"
            >
              <option value="/">Home</option>
              <option value="/menu">Menu</option>
              <option value="/story">Story</option>
              <option value="/visit">Visit Us</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

