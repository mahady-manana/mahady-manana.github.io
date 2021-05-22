import React from 'react';
import { Metatags } from '../common/meta';
import {
  GridOffer,
  Presentation,
  Top,
} from '../components/main/homepage';

export default function Home() {
  return (
    <div id="homepage">
      <Metatags />
      <Top />
      <Presentation />
      <GridOffer />
    </div>
  );
}
