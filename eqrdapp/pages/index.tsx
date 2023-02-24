import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
          <Header />
          <section className={styles.info}>
            <img className={styles.eyelogo} src="./logo.png" alt="logo" />
            <h1>The Last One Take</h1>
            <p>
              Welcome and claim The Last One nft using thirdweb
            </p>
            <br></br>
            <Web3Button contractAddress= "0x306A19033d394f772064ccCa229e7D5553c54DD4" 
            action={(contract) => {
            contract.erc721.claim(1);
            }}
            colorMode="light"
            accentColor="#9702c4"
            >
             Claim The Last One
            </Web3Button>
          </section>
        </div>
  );
};

export default Home;
