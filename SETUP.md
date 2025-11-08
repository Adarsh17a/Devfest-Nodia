# Quick Setup Guide

## Installation Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## First Time Setup

### Browser Permissions
- The app will request camera access when you click "Start Webcam"
- Make sure to allow camera permissions in your browser
- For best results, ensure good lighting and a clear view of your body

### Testing the Application

1. **Landing Page:**
   - Visit the home page to see the modern fitness-themed design
   - Click "Try the AI Coach" or "Start Your Workout" to navigate to the analysis page

2. **Workout Analysis:**
   - Click "Start Webcam" to begin real-time analysis
   - Or click "Upload Video" to analyze a pre-recorded workout video
   - Perform exercises like squats, push-ups, or planks
   - Watch the feedback panel for real-time form corrections

3. **Feedback:**
   - Green indicators (✅) = Correct form
   - Yellow indicators (⚠️) = Needs improvement
   - Blue indicators (ℹ️) = Informational tips

## Troubleshooting

### Camera Not Working
- Ensure you've granted camera permissions in your browser
- Check if another application is using your camera
- Try refreshing the page and granting permissions again

### Video Upload Not Working
- Ensure the video file is in a supported format (MP4, WebM, etc.)
- Check that the file size is reasonable (< 100MB recommended)
- Try a different video file to rule out file-specific issues

### Pose Detection Not Working
- Ensure good lighting conditions
- Make sure your full body is visible in the frame
- Try moving to a location with a clear background
- Stand at an appropriate distance from the camera (3-6 feet)

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` directory to Netlify

## Notes

- The app uses MediaPipe Pose which loads models from CDN
- First load may take a few seconds to download the pose estimation models
- For best performance, use Chrome or Edge browsers
- The app works best on desktop, but is responsive for mobile devices

