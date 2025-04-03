# Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and professional experience.

## Features

- **Interactive Particle Background**: Dynamic particle system that responds to user interaction
- **Responsive Design**: Fully responsive layout that works on all devices
- **Animated UI**: Smooth animations and transitions using Framer Motion
- **Contact Form**: Functional contact form with EmailJS integration
- **Project Showcase**: Detailed project cards with descriptions and links


## Tech Stack

- **React**: Frontend library for building the user interface
- **TypeScript**: Type-safe JavaScript for better development experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for React
- **EmailJS**: Client-side email sending without a backend
- **React-tsparticles**: Interactive particle backgrounds
- **Lucide React**: Lightweight icon library
- **Vite**: Next-generation frontend tooling

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Byukusenge-Andrew/MyPortfolio.git
   cd MyPortfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory with your EmailJS credentials
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

This site is deployed on Vercel and can be easily deployed to other platforms like:
- GitHub Pages
- Netlify
- Firebase Hosting

## Project Structure

```
MyPortfolio/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable UI components
│   ├── sections/    # Main page sections
│   ├── assets/      # Images and other assets
│   ├── App.tsx      # Main application component
│   └── main.tsx     # Application entry point
├── .env             # Environment variables
└── README.md        # Project documentation
```

## Customization

- Update personal information in the respective components
- Replace project images and descriptions
- Modify the color scheme in the Tailwind configuration

## Contact

Andre Byukusenge - [andrebyukusenge9@gmail.com](mailto:andrebyukusenge9@gmail.com)

Project Link: [https://github.com/Byukusenge-Andrew/MyPortfolio](https://github.com/Byukusenge-Andrew/MyPortfolio)

Live Demo: [https://byukusengeandre.vercel.app/](https://byukusengeandre.vercel.app/) 