import React, { useContext } from 'react';
import styles from './index.module.css';

import DisplayNotes from './DisplayNotes';
import FreqControl from './FreqControl';

export default function DisplayArea() {
  return (
    <>
      <DisplayNotes />

      <FreqControl />
    </>
  );
}