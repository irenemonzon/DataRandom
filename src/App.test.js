import React, { Suspense } from 'react';
import { render } from '@testing-library/react';
import { FirebaseAppProvider } from 'reactfire';
import App from './App';
import firebaseConfig from './firebase-config';

test('renders without crashing', async () => {
  const { findByText } = render(
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback="conectando a la app...">
        <App />
      </Suspense>
    </FirebaseAppProvider>
  );
  const title = await findByText(/Users/i);
  expect(title).toBeInTheDocument();
});
