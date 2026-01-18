import { useEffect } from 'react'
import { menuItems } from '../data/menu'

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    const elements = document.querySelectorAll('.scroll-reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const featuredDrinks = menuItems
    .flatMap(category => category.items)
    .filter(item => item.featured)
    .slice(0, 3)

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center image-hover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-charcoal/20" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="hero-text text-cream font-serif mb-6 fade-in">
            Where every cup tells a story.
          </h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-spacing px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal mb-16">
            <h2 className="display-text font-serif text-charcoal mb-8">
              Our Philosophy
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-charcoal/80">
              <p>
                At Ember, we believe coffee is more than a morning ritual. It's a moment of pause, 
                a connection to the earth, and an invitation to slow down.
              </p>
              <p>
                Every bean is carefully sourced from small farms across Indonesia and beyond. 
                We roast with intention, brew with precision, and serve with care.
              </p>
              <p>
                Our space is designed for conversation, contemplation, and community. 
                Welcome to Ember—where warmth meets craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Drinks */}
      <section className="section-spacing px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="display-text font-serif text-charcoal mb-16 text-center scroll-reveal">
            Featured
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {featuredDrinks.map((drink, idx) => (
              <div key={idx} className="scroll-reveal">
                <div className="aspect-[4/5] mb-6 overflow-hidden rounded-sm bg-charcoal/5">
                  <div
                    className="w-full h-full bg-cover bg-center image-hover"
                    style={{
                      backgroundImage: drink.image ? `url('${drink.image}')` : `url('https://images.unsplash.com/photo-${idx === 0 ? '1511920170033-f8396924c348' : idx === 1 ? '1517487881594-2787fef5ebf7' : '1495474472287-4d71bcdd2085'}?w=800&q=80')`,
                    }}
                  />
                </div>
                <h3 className="font-serif text-2xl mb-2 text-charcoal">{drink.name}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{drink.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Block */}
      <section className="relative h-[70vh] min-h-[500px] scroll-reveal">
        <div
          className="absolute inset-0 bg-cover bg-center image-hover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=1920&q=80')`,
          }}
        />
      </section>

      {/* Location & Hours */}
      <section className="section-spacing px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 scroll-reveal">
            <div>
              <h3 className="font-serif text-3xl mb-6 text-charcoal">Location</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Jl. Pantai Batu Bolong<br />
                Canggu, Bali
              </p>
              <p className="text-charcoal/50 text-sm">
                A short walk from the beach. Find us on the main road.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-3xl mb-6 text-charcoal">Hours</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Daily<br />
                7:30 AM – 6:00 PM
              </p>
              <p className="text-charcoal/50 text-sm">
                We're open every day, rain or shine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="py-16 px-6 md:px-12 bg-charcoal/5">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              Follow our journey
            </h2>
            <a
              href="https://instagram.com/embercoffee.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-charcoal/70 text-sm"
            >
              @embercoffee.co
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {[
              '1517487881594-2787fef5ebf7',
              '1447933601403-0c6688de566e',
              '1501339847302-ac426a4a7cbb',
              '1511920170033-f8396924c348',
            ].map((id) => (
              <div
                key={id}
                className="aspect-square bg-cover bg-center image-hover rounded-sm"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-${id}?w=600&q=80')`,
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

