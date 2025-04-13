import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MAXTRNN AI 项目展馆",
  description: "探索人工智能的无限可能",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Script id="copy-script">
          {`
          function copyToClipboard(text) {
            const input = document.createElement('input');
            input.style.position = 'fixed';
            input.style.opacity = 0;
            input.value = text;
            document.body.appendChild(input);
            
            input.select();
            input.setSelectionRange(0, 99999);
            document.execCommand('copy');
            
            document.body.removeChild(input);
            
            showToast('API地址已复制到剪贴板');
          }

          function showToast(message) {
            let toast = document.querySelector('.toast');
            
            if (!toast) {
              toast = document.createElement('div');
              toast.className = 'toast';
              document.body.appendChild(toast);
            }
            
            toast.textContent = message;
            toast.classList.add('show');
            
            setTimeout(() => {
              toast.classList.remove('show');
              setTimeout(() => {
                if (document.body.contains(toast)) {
                  document.body.removeChild(toast);
                }
              }, 300);
            }, 3000);
          }

          document.addEventListener('DOMContentLoaded', function() {
            const copyBtn = document.querySelector('.copy-btn');
            if (copyBtn) {
              copyBtn.addEventListener('click', function() {
                copyToClipboard('https://maxgpt.MAXTRNN.fun/channe');
              });
            }
          });
          `}
        </Script>
      </body>
    </html>
  )
}


import './globals.css'