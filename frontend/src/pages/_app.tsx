import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Montserrat } from 'next/font/google';

import store from '../store';
import { LayoutComponent } from '@/components/layout';

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <LayoutComponent>
        <Provider store={store}>
          <ToastContainer position="top-right" />
          <Component {...pageProps} />
        </Provider>
      </LayoutComponent>
    </main>
  );
}
