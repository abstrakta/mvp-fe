import '@/styles/globals.css';
import '../fontawesome';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Header />
            <main>
                <Component {...pageProps} />
            </main>
        </div>
    );
}

export default MyApp;