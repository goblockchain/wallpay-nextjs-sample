import "../styles/globals.css";
import wallpaySDK from "./wallpay";

function MyApp({ Component, pageProps }) {
  const { PaymentProvider } = wallpaySDK;

  return (
    <PaymentProvider>
      <Component {...pageProps} />
    </PaymentProvider> 
  );
}

export default MyApp;
