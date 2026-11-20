import React from 'react';
import {Composition} from 'remotion';
import {HamsterMatcha} from './HamsterMatcha';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HamsterMatcha"
        component={HamsterMatcha}
        durationInFrames={600}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
