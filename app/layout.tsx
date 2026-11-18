import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "LOCALYZE — Local Business OS",
  description: "A premium digital operating system for local businesses."
};
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>;
}