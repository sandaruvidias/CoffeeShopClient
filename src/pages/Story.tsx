const Story = () => {
  return (
    <div className="pt-24">
      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[500px] mb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-charcoal/20" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="hero-text text-cream font-serif text-center px-6">
            Our Story
          </h1>
        </div>
      </section>

      {/* Story Content */}
      <article className="max-w-4xl mx-auto px-6 md:px-12 pb-20">
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-lg leading-relaxed text-charcoal/80 mb-16">
            <p className="text-2xl leading-relaxed text-charcoal font-serif">
              It started with a simple belief: coffee should be an experience, not just a drink.
            </p>
          </div>

          <div className="relative h-[60vh] min-h-[400px] mb-16 rounded-sm overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center image-hover"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=80')`,
              }}
            />
          </div>

          <div className="space-y-8 text-lg leading-relaxed text-charcoal/80 mb-16">
            <p>
              In 2019, after years of traveling through coffee regions across Indonesia, 
              we found ourselves in Canggu. The energy was magnetic—surfers, digital nomads, 
              artists, and locals all coming together in this coastal village. We knew this 
              was where we had to open Ember.
            </p>
            <p>
              The name "Ember" comes from the glowing embers of a fire—warmth, comfort, 
              and the slow burn of something carefully tended. That's how we approach coffee. 
              We don't rush. We don't compromise. We tend to every detail, from the moment 
              the bean is picked to the moment it reaches your cup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative h-[400px] rounded-sm overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center image-hover"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80')`,
                }}
              />
            </div>
            <div className="relative h-[400px] rounded-sm overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center image-hover"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80')`,
                }}
              />
            </div>
          </div>

          <div className="space-y-8 text-lg leading-relaxed text-charcoal/80 mb-16">
            <h2 className="font-serif text-4xl text-charcoal mb-6">Our Sourcing</h2>
            <p>
              We work directly with small farms in Bali, Java, and Sumatra. These relationships 
              aren't transactional—they're partnerships built on trust, respect, and shared values. 
              By paying fair prices and supporting sustainable farming practices, we ensure that 
              the coffee you enjoy supports the communities that grow it.
            </p>
            <p>
              Every batch is roasted in-house, in small quantities, to bring out the unique 
              characteristics of each origin. Whether it's the bright, citrusy notes of a 
              Java Arabica or the rich, chocolatey profile of a Sumatran Mandheling, we let 
              the bean speak for itself.
            </p>
          </div>

          <div className="relative h-[70vh] min-h-[500px] mb-16 rounded-sm overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center image-hover"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=1200&q=80')`,
              }}
            />
          </div>

          <div className="space-y-8 text-lg leading-relaxed text-charcoal/80">
            <h2 className="font-serif text-4xl text-charcoal mb-6">The Space</h2>
            <p>
              Our café is designed to be a sanctuary. Natural light floods through large windows. 
              Plants fill every corner. Comfortable seating invites you to stay—whether you're 
              working, reading, or simply watching the world go by.
            </p>
            <p>
              The baristas behind the counter are craftspeople, trained not just to make coffee, 
              but to understand it. They'll remember your name, ask about your day, and maybe 
              even suggest something new to try.
            </p>
            <p>
              This is more than a coffee shop. It's a gathering place. A creative space. A moment 
              of calm in a busy world. Welcome to Ember. We're glad you're here.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Story

