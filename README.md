# Ripple Nexus - Modern Next.js Website with Production-Ready Agentic AI Chatbot

This is a [Next.js](https://nextjs.org) project featuring a **production-ready agentic AI chatbot** built with FastAPI, LangChain, and LangGraph.

## 🤖 **NEW: Agentic AI Chatbot (January 2026)**

### Features
- ✅ **LangGraph Agent**: Cyclic execution with reflection (can evaluate tool results before responding)
- ✅ **Real-Time Streaming**: Server-Sent Events (SSE) for token-by-token streaming
- ✅ **Dual Memory System**: Short-term buffer + long-term FAISS vector store
- ✅ **Smart Tools**: Web search, calculator, memory retrieval
- ✅ **Production-Ready**: Full error handling, logging, session management

### Quick Start

**Automated (Windows):**
```bash
.\start-chatbot.ps1
```

**Manual:**
```bash
# Backend
cd agentic-chatbot/backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
# Edit .env and add: OPENAI_API_KEY=sk-your-key
uvicorn app.main:app --reload --port 8000

# Frontend (new terminal)
npm install
npm run dev
```

📚 **Full Documentation:** [CHATBOT_SETUP.md](./CHATBOT_SETUP.md)

---

## 🚀 Previous Features (January 2026)

### AI-Powered Chatbot (Legacy - Now Replaced)
- **Intelligent Assistant**: Answers FAQs, provides service guidance, and collects leads
- **Non-Disruptive Design**: Floating widget in bottom-right corner
- **Privacy-First**: GDPR-compliant behavior tracking and personalization
- **Smart Intent Detection**: Understands user journey stage and personalizes responses
- **Session Management**: Maintains conversation history throughout visit

### Advanced Animations
- **GPU-Optimized**: Smooth 60fps animations using CSS transforms
- **Professional Motion Design**: Subtle, elegant effects that enhance UX
- **Multiple Animation Types**: Fade, slide, scale, rotate, glow, and more
- **Component Library**: Pre-built animated components ready to use
- **Zero Layout Shift**: All animations respect document flow

## 📖 Documentation

- **[AI Features Documentation](./AI_FEATURES_DOCUMENTATION.md)** - Complete chatbot and AI features guide
- **[Implementation Guide](./IMPLEMENTATION_GUIDE.md)** - Step-by-step integration instructions
- **[Integration Examples](./INTEGRATION_GUIDE.md)** - Code examples and best practices
- **[Animation Examples](./ANIMATION_EXAMPLES.md)** - Animation component usage

## 🎯 Quick Start

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### Try the Chatbot
1. Open the website
2. Look for the floating button in the bottom-right corner
3. Click to open the chat widget
4. Ask questions about services, pricing, or schedule a consultation

### Use Animations
Import components into your pages:

```tsx
import { AnimatedSection, ScrollReveal } from '@/components/AnimatedSection';
import { RunningText, DynamicHighlight } from '@/components/DynamicContent';

// Use in your components
<AnimatedSection>Your Content</AnimatedSection>
<RunningText items={['Item 1', 'Item 2']} />
```

## 📁 Project Structure

```
src/
├── components/
│   ├── AIChat/           # Chatbot components
│   ├── AnimatedSection.tsx    # Animation wrappers
│   ├── DynamicContent.tsx     # Dynamic effects (running text, counters, etc.)
│   └── ...
├── lib/
│   ├── ai-service.ts        # AI response generation
│   ├── behavior-tracking.ts  # Intent detection
│   ├── animations.ts        # Animation variants
│   └── ...
└── app/
    ├── layout.tsx           # Updated with ChatWidget
    ├── globals.css          # Enhanced styles
    └── ...
```

## 🎨 Customization

### Change Chatbot Colors
Edit `src/components/AIChat/ChatBot.tsx` and update the color hex code

### Modify FAQ Responses
Edit `src/lib/ai-service.ts` and update `FAQ_RESPONSES`

### Adjust Animation Speed
Edit `src/lib/animations.ts` and modify transition durations

### Add Custom Animations
Add new keyframes to `tailwind.config.js` or create Framer Motion variants

## ⚡ Performance

- **Minimal Impact**: Chatbot adds ~60KB gzipped
- **GPU Accelerated**: All animations use GPU-friendly transforms
- **Zero Layout Shift**: CLS remains at 0
- **Fast Load**: Chatbot loads asynchronously
- **Mobile Optimized**: Fully responsive and touch-friendly

## ♿ Accessibility

- ✅ Keyboard navigation fully supported
- ✅ Screen reader compatible
- ✅ WCAG AA color contrast
- ✅ Respects `prefers-reduced-motion`
- ✅ Visible focus indicators

## 🔒 Security & Privacy

- ✅ GDPR compliant
- ✅ No forced PII collection
- ✅ Encrypted sessions
- ✅ Secure data handling
- ✅ Privacy-first design

## 🧪 Testing

The project is tested for:
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Mobile responsiveness (iOS, Android)
- Accessibility compliance
- Performance impact
- Error handling

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Sanity CMS Integration](https://www.sanity.io/)

## 🤝 Contributing

Improvements and suggestions are welcome!

## 📄 License

© 2026 Ripple Nexus. All rights reserved.

---

**Last Updated**: January 2026  
**Version**: 2.0 (with AI & Animations)  
**Status**: Production Ready

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
