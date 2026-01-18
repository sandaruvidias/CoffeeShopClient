const VisitUs = () => {
  return (
    <div className="pt-24">
      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[500px] mb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-charcoal/30" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="hero-text text-cream font-serif text-center px-6">
            Visit Us
          </h1>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="font-serif text-4xl text-charcoal mb-8">Location</h2>
            <p className="text-lg leading-relaxed text-charcoal/70 mb-6">
              Jl. Pantai Batu Bolong<br />
              Canggu, Bali<br />
              Indonesia
            </p>
            <p className="text-charcoal/60 text-sm leading-relaxed">
              We're located on the main road, just a 5-minute walk from Batu Bolong Beach. 
              Look for our warm lighting and minimalist signage.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-4xl text-charcoal mb-8">Hours</h2>
            <p className="text-lg leading-relaxed text-charcoal/70 mb-4">
              Daily<br />
              7:30 AM – 6:00 PM
            </p>
            <p className="text-charcoal/60 text-sm leading-relaxed mb-6">
              We're open every day of the week, including holidays. 
              Perfect for your morning ritual or afternoon pick-me-up.
            </p>
            <div className="flex flex-col gap-4 mt-8">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link text-charcoal text-lg"
              >
                Message us on WhatsApp →
              </a>
              <a
                href="tel:+6281234567890"
                className="text-link text-charcoal text-lg"
              >
                Call us →
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="relative h-[500px] rounded-sm overflow-hidden mb-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15798.753024029483!2d115.123456!3d-8.654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzknMTUuNiJTIDExNcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
            title="Ember Coffee Co. Location"
          />
        </div>

        {/* Image Block */}
        <div className="relative h-[60vh] min-h-[500px] rounded-sm overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center image-hover"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80')`,
            }}
          />
        </div>
      </section>
    </div>
  )
}

export default VisitUs

