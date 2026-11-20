# Hamster Matcha Studio

A short-form animated video project built with Remotion.

## First episode
- Character: a cute golden Syrian hamster
- Story: preparing a bowl of Japanese matcha
- Format: vertical 1080x1920
- Duration: 20 seconds at 30 fps
- Current visual approach: stylized 3D-inspired shapes built in React; replaceable with original character artwork or 3D renders later.

## Run locally

```bash
npm install
npm run dev
```

## Render MP4

```bash
npm run render
```

The output is written to `out/hamster-matcha.mp4`.

## Project structure

- `src/Root.tsx` — Remotion composition registration
- `src/HamsterMatcha.tsx` — first episode animation
- `src/index.ts` — Remotion entry point

Never commit API keys, passwords, or `.env` files.
