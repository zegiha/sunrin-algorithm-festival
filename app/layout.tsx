import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import {Header} from "@/components/organism/Header";
import {Footer} from "@/components/organism/footer";
import React from 'react'

const PretendardJP = localFont({
  src: '../public/font/PretendardJPVariable.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "천하제일 코딩대회",
  description: "천하제일 코딩대회(알고리즘 페스티벌) 홍보 공식 웹사이트",
  openGraph: {
    title: '천하제일 코딩대회',
    description: '천하제일 코딩대회(알고리즘 페스티벌) 공식 홍보 웹사이트',
    type: 'website',
    url: 'https://algorithms.kr/',
    images: '/images/meta.webp',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={'light'}>
      <body className={`${PretendardJP.className} ${PretendardJP.className}`}>
        <header>
          <Header/>
        </header>
        {children}
        <footer>
          <Footer/>
        </footer>
        <div id={'modalBackground'}/>
      </body>
    </html>
  );
}
