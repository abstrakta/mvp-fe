import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import Header from '@/components/Header';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}