# Featured Events Website

A modern, responsive single-page React application showcasing featured events with a clean and intuitive user interface.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with breakpoints at 640px, 768px, and 1024px
- **Interactive Navigation**: Animated hamburger menu for mobile devices
- **Modern UI**: Clean design using Tailwind CSS with custom color scheme
- **Event Cards**: Hover effects and smooth transitions
- **Accessibility**: Proper contrast ratios (>4.5:1) and semantic HTML
- **Google Fonts**: Inter font family for modern typography

## 🛠️ Technologies Used

- **React 18** - Modern React with functional components and hooks
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Google Fonts** - Inter font family

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd featured-events-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm run start
# or
yarn build
yarn start
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### Netlify
1. Build the project: \`npm run build\`
2. Upload the \`out\` folder to [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: \`npm run build\`
   - Publish directory: \`out\`

### GitHub Pages
1. Install gh-pages: \`npm install --save-dev gh-pages\`
2. Add to package.json scripts:
   \`\`\`json
   "homepage": "https://yourusername.github.io/featured-events-website",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d out"
   \`\`\`
3. Run: \`npm run deploy\`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 card per row)
- **Tablet**: 640px - 1024px (2 cards per row)
- **Desktop**: > 1024px (3 cards per row)

## 🎨 Design System

### Colors
- **Primary**: #1e3a8a (Blue 800)
- **Accent**: #facc15 (Yellow 400)
- **Background**: #f9fafb (Gray 50)
- **Text**: #111827 (Gray 900)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-700)
- **Body**: Regular weight (400)

## 📁 Project Structure

\`\`\`
featured-events-website/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── EventCard.tsx
│   ├── FeaturedEvents.tsx
│   ├── Hero.tsx
│   └── Navigation.tsx
├── data/
│   └── events.json
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
\`\`\`

## ✨ Extra Features Added

1. **Smooth Animations**: Hover effects on cards and menu transitions
2. **Loading States**: Optimized for performance with Next.js
3. **SEO Optimization**: Meta tags and semantic HTML structure
4. **Accessibility**: ARIA labels, focus states, and keyboard navigation
5. **TypeScript**: Full type safety throughout the application
6. **Modern Icons**: Lucide React icons for consistent design
7. **Gradient Backgrounds**: Beautiful gradient hero section
8. **Interactive Elements**: Animated decorative elements in hero section

## 🔧 Customization

### Adding New Events
Edit \`data/events.json\` to add or modify events:

\`\`\`json
{
  "id": 6,
  "name": "Your Event Name",
  "datetime": "2025-07-01T19:00:00",
  "location": "Your Location",
  "description": "Your event description..."
}
\`\`\`

### Styling
Modify \`tailwind.config.ts\` to customize colors, fonts, and other design tokens.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using React, Next.js, and Tailwind CSS
