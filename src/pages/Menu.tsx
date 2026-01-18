import { menuItems } from '../data/menu'

const Menu = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Image */}
      <section className="relative h-[50vh] min-h-[400px] mb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-charcoal/30" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="hero-text text-cream font-serif text-center px-6">
            Menu
          </h1>
        </div>
      </section>

      {/* Menu Content */}
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="text-center text-charcoal/60 mb-20 leading-relaxed text-lg max-w-2xl mx-auto">
          Every drink is crafted with care, using the finest beans and traditional methods. 
          Simple, honest, and delicious.
        </p>

        {menuItems.map((category, categoryIdx) => (
          <section key={categoryIdx} className="mb-24 last:mb-0">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-12 border-b border-charcoal/10 pb-4">
              {category.name}
            </h2>
            
            <div className="space-y-8">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-8 border-b border-charcoal/5 last:border-0">
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-serif text-2xl text-charcoal">{item.name}</h3>
                      <span className="text-charcoal/50 text-lg font-light whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-charcoal/60 leading-relaxed mt-2 max-w-2xl">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Menu

