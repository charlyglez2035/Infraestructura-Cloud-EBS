import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

import Dashboard from "./Dashboard";

const Index = () => {
  return <Dashboard />;
};

export default Index;
