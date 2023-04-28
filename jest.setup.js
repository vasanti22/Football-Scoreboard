import '@testing-library/jest-dom'
import React from 'react';
import {randomUUID} from 'node:crypto';
global.React = React;

window.crypto.randomUUID = randomUUID;