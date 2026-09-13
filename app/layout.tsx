import type { Metadata } from "next";import "./globals.css";
export const metadata:Metadata={title:"Revnue — Know your numbers",description:"Clear cash-flow insight for small businesses."};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
