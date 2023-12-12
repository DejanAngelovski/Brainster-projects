import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      {router.pathname.startsWith(`/logOn`) ||
      router.pathname.startsWith(`/orderForm`) ? null : (
        <Navbar />
      )}

      <div
        className={`container-fluid ${
          router.pathname === "/" ? "mainPageColorsBg" : ""
        }`}
        style={{ paddingTop: `96px`, paddingBottom: `20px` }}
      >
        <Component {...pageProps} />
        {router.pathname.startsWith(`/logOn`) ||
        router.pathname.startsWith(`/orderForm`) ? null : (
          <Footer />
        )}
      </div>
    </>
  );
}
