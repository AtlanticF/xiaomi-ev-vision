import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "小米汽车 - 智能电动汽车",
  description: "小米汽车官网 - 小米SU7、小米YU7、小米SU7 Ultra，智能电动汽车新选择",
  keywords: "小米汽车,小米SU7,小米YU7,SU7 Ultra,电动汽车,新能源汽车",
  openGraph: {
    title: "小米汽车 - 智能电动汽车",
    description: "小米汽车官网 - 小米SU7、小米YU7、小米SU7 Ultra",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
