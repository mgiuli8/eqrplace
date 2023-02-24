import { useContract, useNFTs, ThirdwebNftMedia } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import Header from "../components/Header";
import styles from "../styles/Nfts.module.css";

const Nfts: NextPage = () => {
  const { contract } = useContract(
    "0x306A19033d394f772064ccCa229e7D5553c54DD4"
    );
const { data: nfts, isLoading, error } = useNFTs(contract);

console.log(nfts);

  return (
    <div className={styles.container}>
          <Header />
          <section className={styles.info}>
          {isLoading? (
          <p>Loading...</p>
          ) : (
          nfts?.map((nft) => {
            return (
            <div key={nft.metadata.id}>
              <ThirdwebNftMedia
              metadata={nft.metadata}
              height="200"
              style={{ borderRadius: "10px"}}
              />
              <p>{nft.metadata.name}</p>
              </div>
            );
          })
        )}
          </section>
        </div>
  );
};

export default Nfts;
