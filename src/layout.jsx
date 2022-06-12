import React, { Children } from 'react'
import Header from './components/Header'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header name="Berezhnev" />

      <main className="container mx-auto flex-1">{children}</main>

      <footer className="bg-gray-700 mt-8 py-4">
        <div className="container mx-auto flex justify-center text-white font-bold">
          <a>
            Made with ❤ by{' '}
            <a href="https://github.com/tell396">
              <span className="text-blue-400 cursor-pointer">Berezhnev</span>
            </a>
          </a>
        </div>
      </footer>
    </div>
  );
}