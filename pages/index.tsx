import Head from "next/head";
import styles from "../styles/Home.module.css";
import wallpaySDK from "./wallpay";
import { useRouter } from "next/router";

export default function Home() {
  const { BuyButton, useWallets } = wallpaySDK;
  const { walletAddress } = useWallets();

  // FOR THIS ERC1155 CONTRACT EXAMPLE, WE NEED THE FOLLOWING PARAMETERS:
  // FOR MINTING:
  // [ tokenId, amount ]
  // FOR TRANSFERING (FIAT PAYMENT):
  // [ tokenId, amount, walletAddress ]

  // FOR A ERC721 CONTRACT EXAMPLE, WE WOULD JUST USE THE FOLLOWING PARAMETERS:
  // FOR MINTING:
  // [ amount ]
  // FOR TRANSFERING (FIAT PAYMENT):
  // [ amount, walletAddress ]

  // transferParams AND mintParams ARE FREE TO FOLLOW YOUR CONTRACT SPECIFICATION

  let unitPrice = 0.001; // IN CRYPTO CURRENCY
  let quantity = 1;
  let myTokenId = 2;

  const nftData = {
    unitPrice: unitPrice,
    amount: quantity,
    itemName: "A+great+NFT",
    itemImage: "https://via.placeholder.com/150x200?text=A+great+NFT",
    transferParams: {
      tokenId: myTokenId,
      amount: quantity,
      walletAddress: walletAddress,
    },
    hasFixedPrice: true,
    mintParams: {
      tokenId: myTokenId,
      amount: quantity,
    },
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BuyButton
          data={nftData}
          style={{
            padding: 0,
            height: "200px",
            backgroundColor: "transparent",
          }}
        >
            Buy Now
        </BuyButton>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://goblockchain.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Wallpay
        </a>
      </footer>
    </div>
  );
}