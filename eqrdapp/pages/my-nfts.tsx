import { 
  useContract, 
  useNFTs, 
  ThirdwebNftMedia, 
  useAddress,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import Header from "../components/Header";
import styles from "../styles/MyNfts.module.css";
import { useState } from "react";


const MyNfts: NextPage = () => {
  const { contract } = useContract(
    "0x306A19033d394f772064ccCa229e7D5553c54DD4"
  );
  const address = useAddress();
  const { data: nfts, isLoading, error } = useNFTs(contract);
  const [msg, setMsg] = useState("");

  const readNote = (id: string) => {
    contract
    ?.call("notes", id)
    .then(data => setMsg(data))
    .catch(err => setMsg(""));
  };

  return (
    <div className={styles.container}>
          <Header />
           {msg? <p>Note: {msg}</p> : null}
          <section className={styles.info}>
          {isLoading? (
          <p>Loading...</p>
          ) : (
          nfts
          ?.filter(nft => nft.owner == address)
          ?.map((nft) => {
            return (
            <div key={nft.metadata.id}>
              <ThirdwebNftMedia
              metadata={nft.metadata}
              height="200"
              style={{ borderRadius: "10px"}}
              />
              <p> ID: {nft.metadata.id} | {nft.metadata.name}
              </p>
              <button onClick={() => readNote(nft.metadata.id)}>
              Read Note
              </button>
              </div>
            );
          })
        )}
          </section>
        </div>
  );
};

export default MyNfts;
