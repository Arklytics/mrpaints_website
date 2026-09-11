import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from './site';
export const metadata: Metadata = {title: {default:'MR Paints — Make room for colour.',template:'%s | MR Paints'}, description:'Discover MR Paints. Paint manufacturing and distribution in India, for homes, spaces and the people who bring them to life.'};
export default function RootLayout({children}: {children: React.ReactNode}) {return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><Header/>{children}<Footer/></body></html>}
