import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 bg-clay hover:bg-coffee text-cream rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  )
}

export default WhatsAppButton

