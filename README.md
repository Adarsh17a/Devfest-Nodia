# FitMe AI Coach - Smart Workout Form Analyzer

An AI-powered fitness coaching web application that provides real-time feedback on workout form using pose estimation technology.

## Features

- 🎥 **Real-time Video Analysis**: Use your webcam or upload a video to analyze your workout form
- 🤖 **AI-Powered Pose Estimation**: Advanced MediaPipe integration for accurate pose detection
- 💡 **Instant Feedback**: Receive real-time corrections and tips on your form
- 📊 **Visual Feedback**: See your pose skeleton overlay on the video feed
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI**: Beautiful, fitness-themed interface with smooth animations

## Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Pose Estimation**: MediaPipe Pose
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fitme-ai-coach
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
fitme-ai-coach/
├── app/
│   ├── analyze/          # Workout analysis page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── components/
│   ├── FeedbackPanel.tsx # Feedback display component
│   └── PoseEstimator.tsx # MediaPipe pose estimation component
├── types/
│   └── feedback.ts       # TypeScript types for feedback
├── utils/
│   └── poseAnalysis.ts   # Pose analysis logic
└── public/               # Static assets
```

## How It Works

1. **Start Analysis**: Click "Start Webcam" or upload a video file
2. **Pose Detection**: MediaPipe analyzes your pose in real-time
3. **Form Analysis**: Custom algorithms evaluate your form based on:
   - Shoulder alignment
   - Hip alignment
   - Knee angles (for squats)
   - Arm angles (for push-ups)
   - Back posture
4. **Feedback**: Receive instant, color-coded feedback:
   - ✅ Green: Correct form
   - ⚠️ Yellow: Needs improvement
   - ℹ️ Blue: Informational tips

## Customization

### Adding New Exercise Detection

Edit `utils/poseAnalysis.ts` to add detection logic for new exercises:

```typescript
// Example: Plank detection
const plankAngle = calculateAngle(shoulder, hip, knee)
if (plankAngle > 170) {
  feedback.push({
    type: 'correct',
    title: 'Plank Form',
    message: 'Excellent plank position!',
  })
}
```

### Styling

Modify `tailwind.config.js` to customize colors and themes.

### Backend Integration

To add backend functionality (user sessions, progress tracking):

1. Create API routes in `app/api/`
2. Add database integration (e.g., MongoDB, PostgreSQL)
3. Implement authentication (e.g., NextAuth.js)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` directory to Netlify

## Future Enhancements

- [ ] User authentication and profiles
- [ ] Workout history and progress tracking
- [ ] Voice-based feedback
- [ ] Integration with wearable devices
- [ ] Custom workout plans
- [ ] Social sharing features
- [ ] Multi-exercise recognition
- [ ] Rep counting
- [ ] Workout timers

## License

MIT License - feel free to use this project for your own purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ for fitness enthusiasts

