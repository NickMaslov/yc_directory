import { Navbar } from "../components/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("second layout");
  return (
    <main className="font-work-sans">
      <h1>Layout 2</h1>
      <Navbar />
      {children}
    </main>
  );
}
