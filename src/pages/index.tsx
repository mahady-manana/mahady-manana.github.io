import React from 'react';
import {
  GridOffer,
  Presentation,
  Top,
} from '../components/main/homepage';

export default function Home() {
  return (
    <div id="homepage">
      <Top />
      <Presentation />
      <GridOffer />
    </div>
  );
}
