import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

const cream = '#fff4df';
const brown = '#b8753e';

export const HamsterMatcha: React.FC = () => {
  const frame = useCurrentFrame();
  const bob = Math.sin(frame / 12) * 10;
  const whiskTurn = interpolate(frame, [150, 360], [0, 720], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const steam = interpolate(frame % 90, [0, 45, 90], [0, 22, 0]);
  const titleOpacity = interpolate(frame, [0, 35, 500, 560], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{background: 'linear-gradient(160deg, #f8e9d2 0%, #e8c99d 55%, #b6c9a3 100%)', fontFamily: 'Arial, sans-serif', overflow: 'hidden'}}>
      <div style={{position: 'absolute', top: 110, width: '100%', textAlign: 'center', color: '#4d5938', opacity: titleOpacity}}>
        <div style={{fontSize: 58, fontWeight: 800, letterSpacing: 3}}>LITTLE MATCHA CHEF</div>
        <div style={{fontSize: 30, marginTop: 14}}>A tiny whisk, a big cup of calm</div>
      </div>
      <div style={{position: 'absolute', left: 90, right: 90, bottom: 330, height: 28, borderRadius: 20, background: 'rgba(92,66,39,.18)', filter: 'blur(12px)'}} />
      <div style={{position: 'absolute', left: '50%', top: 770 + bob, width: 560, height: 620, transform: 'translateX(-50%)', borderRadius: '48% 48% 43% 43%', background: `radial-gradient(circle at 35% 25%, #f8d7a3 0%, ${brown} 68%, #8c512f 100%)`, boxShadow: 'inset -24px -32px 45px rgba(75,37,15,.22), 0 35px 55px rgba(70,48,26,.2)'}}>
        <div style={{position: 'absolute', left: 20, top: -95, width: 190, height: 210, borderRadius: '50%', background: brown, boxShadow: 'inset 0 0 0 24px #e9b77b'}} />
        <div style={{position: 'absolute', right: 20, top: -95, width: 190, height: 210, borderRadius: '50%', background: brown, boxShadow: 'inset 0 0 0 24px #e9b77b'}} />
        <div style={{position: 'absolute', left: 95, top: 220, width: 105, height: 120, borderRadius: '50%', background: '#38251d'}} />
        <div style={{position: 'absolute', right: 95, top: 220, width: 105, height: 120, borderRadius: '50%', background: '#38251d'}} />
        <div style={{position: 'absolute', left: 125, top: 245, width: 28, height: 28, borderRadius: '50%', background: 'white'}} />
        <div style={{position: 'absolute', right: 125, top: 245, width: 28, height: 28, borderRadius: '50%', background: 'white'}} />
        <div style={{position: 'absolute', left: 110, top: 360, width: 110, height: 65, borderRadius: '50%', background: '#f1b0a0', opacity: .85}} />
        <div style={{position: 'absolute', right: 110, top: 360, width: 110, height: 65, borderRadius: '50%', background: '#f1b0a0', opacity: .85}} />
        <div style={{position: 'absolute', left: '50%', top: 350, width: 45, height: 34, transform: 'translateX(-50%)', borderRadius: '50%', background: '#8b4b42'}} />
        <div style={{position: 'absolute', left: '50%', top: 390, width: 90, height: 42, transform: 'translateX(-50%)', borderBottom: '8px solid #63382d', borderRadius: '0 0 50% 50%'}} />
        <div style={{position: 'absolute', left: 135, bottom: 10, width: 290, height: 95, borderRadius: '50% 50% 35% 35%', background: '#f8e5c4'}} />
      </div>
      <div style={{position: 'absolute', left: '50%', bottom: 250, width: 500, height: 220, transform: 'translateX(-50%)', borderRadius: '0 0 48% 48%', background: 'linear-gradient(135deg, #fdfcf5, #c9d2b0)', boxShadow: '0 25px 40px rgba(50,60,35,.2)', border: '12px solid #fffaf0'}}>
        <div style={{position: 'absolute', inset: 28, borderRadius: '50%', background: 'radial-gradient(ellipse, #8ca34e 0%, #5b7135 68%, #d9dfc2 70%)'}} />
        <div style={{position: 'absolute', left: '50%', top: -210 + steam, width: 16, height: 220, background: '#d8b47b', borderRadius: 10, transform: `translateX(-50%) rotate(${whiskTurn % 50 - 25}deg)`, transformOrigin: 'bottom center', boxShadow: '4px 0 #b78e58'}} />
      </div>
      <div style={{position: 'absolute', bottom: 100, width: '100%', textAlign: 'center', color: '#465536', fontSize: 34, fontWeight: 700}}>Freshly whisked with love ♡</div>
    </AbsoluteFill>
  );
};
