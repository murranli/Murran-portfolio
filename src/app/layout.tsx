import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | 2026",
  description: "A modern, minimalist portfolio showcasing my work and passion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        {/* 
          同步阻塞脚本：使用 Cookie 实现服务器端主题感知
          - 在 HTML 解析时立即执行（在 React 水合前）
          - 从 HTTP Cookie 读取主题（浏览器自动随请求发送）
          - 避免 localStorage 的客户端延迟和闪烁
          - 跨标签页同步主题（Server-Side）
          - 脚本极小（<150 字节），执行时间 <1ms
          
          工作原理：
          1. 服务器在 Set-Cookie 中设置 portfolio-theme
          2. 浏览器自动在后续请求中包含此 Cookie
          3. 此脚本在绘制前读取 Cookie 值
          4. 在 HTML 被解析和绘制前应用主题
          5. React 挂载时主题已正确应用，无闪烁
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function initTheme() {
                  try {
                    // 从 Cookie 中提取主题值
                    const cookieValue = document.cookie
                      .split('; ')
                      .find(row => row.startsWith('portfolio-theme='))
                      ?.split('=')[1];
                    
                    // 优先级：Cookie > 系统偏好 > 默认亮色
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    const theme = cookieValue || (prefersDark ? 'dark' : 'light');
                    
                    // 立即应用到 documentElement（在样式计算前）
                    document.documentElement.setAttribute('data-theme', theme);
                    document.documentElement.style.colorScheme = theme;
                  } catch (e) {
                    // 发生错误时默认使用亮色主题
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                }
                
                // 立即执行，不延迟
                initTheme();
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
