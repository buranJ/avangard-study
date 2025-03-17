import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { setupStore } from 'api/index.ts';
import ErrorBoundary from 'components/ErrorBoundary';

import App from './App.tsx';

import 'assets/styles/main.scss';
import 'swiper/swiper-bundle.css';
import 'react-loading-skeleton/dist/skeleton.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={setupStore()}>
      <ErrorBoundary>
        <Suspense fallback={<div></div>}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </Provider>
  </StrictMode>
);
