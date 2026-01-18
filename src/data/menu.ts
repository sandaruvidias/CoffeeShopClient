export interface MenuItem {
  name: string
  description?: string
  price: string
  featured?: boolean
  image?: string
}

export interface MenuCategory {
  name: string
  items: MenuItem[]
}

export const menuItems: MenuCategory[] = [
  {
    name: 'Espresso',
    items: [
      {
        name: 'Espresso',
        description: 'Pure, intense, and perfectly balanced. The foundation of everything we do.',
        price: 'Rp 25,000',
        featured: true,
      },
      {
        name: 'Macchiato',
        description: 'Espresso kissed with a dollop of steamed milk foam.',
        price: 'Rp 28,000',
      },
      {
        name: 'Cortado',
        description: 'Equal parts espresso and warm milk. Smooth and elegant.',
        price: 'Rp 30,000',
      },
      {
        name: 'Americano',
        description: 'Espresso with hot water. Clean and simple.',
        price: 'Rp 27,000',
      },
    ],
  },
  {
    name: 'Milk Coffee',
    items: [
      {
        name: 'Cappuccino',
        description: 'Espresso, steamed milk, and a cloud of microfoam. Classic comfort.',
        price: 'Rp 32,000',
        featured: true,
      },
      {
        name: 'Flat White',
        description: 'Double espresso with velvety steamed milk. Rich and smooth.',
        price: 'Rp 35,000',
        featured: true,
      },
      {
        name: 'Latte',
        description: 'Espresso with steamed milk and a delicate pour. A daily favorite.',
        price: 'Rp 33,000',
      },
      {
        name: 'Mocha',
        description: 'Espresso, dark chocolate, and steamed milk. Decadent and warming.',
        price: 'Rp 38,000',
      },
    ],
  },
  {
    name: 'Filter',
    items: [
      {
        name: 'Pour Over',
        description: 'Single-origin beans, hand-poured. Bright, clean, and nuanced.',
        price: 'Rp 40,000',
      },
      {
        name: 'Cold Brew',
        description: 'Slow-steeped for 18 hours. Smooth, naturally sweet, and refreshing.',
        price: 'Rp 35,000',
        featured: true,
      },
      {
        name: 'Batch Brew',
        description: 'Fresh-brewed daily. Consistent and delicious.',
        price: 'Rp 28,000',
      },
    ],
  },
  {
    name: 'Cold',
    items: [
      {
        name: 'Iced Latte',
        description: 'Espresso with cold milk over ice. Cool and refreshing.',
        price: 'Rp 35,000',
      },
      {
        name: 'Iced Americano',
        description: 'Espresso with cold water and ice. Clean and crisp.',
        price: 'Rp 29,000',
      },
      {
        name: 'Nitro Cold Brew',
        description: 'Cold brew infused with nitrogen. Silky smooth and creamy.',
        price: 'Rp 42,000',
      },
    ],
  },
  {
    name: 'Bakery',
    items: [
      {
        name: 'Croissant',
        description: 'Buttery, flaky, and baked fresh daily.',
        price: 'Rp 35,000',
      },
      {
        name: 'Almond Croissant',
        description: 'Filled with almond cream and topped with sliced almonds.',
        price: 'Rp 40,000',
      },
      {
        name: 'Banana Bread',
        description: 'Moist and spiced, served warm with butter.',
        price: 'Rp 30,000',
      },
      {
        name: 'Chocolate Chip Cookie',
        description: 'Soft, chewy, and loaded with dark chocolate.',
        price: 'Rp 25,000',
      },
    ],
  },
]

