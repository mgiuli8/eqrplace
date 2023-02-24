import type { NextPage } from "next";
import Header from "../components/Header";
import styles from "../styles/writeNote.module.css";
import { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

const writeNote: NextPage = () => {
  const { contract } = useContract(
    "0x306A19033d394f772064ccCa229e7D5553c54DD4"
    );
    const {
      mutate: write,
      isLoading,
      error,
    } = useContractWrite(contract, "writeNote");
    
  const [id, setID] = useState("");
  const [note, setNote] = useState("");

  return (
    <div className={styles.container}>
          <Header />
          <section className={styles.info}>
            <p className="label">ID:</p>
            <input 
            type="text"
            name="id"
            value={id}
            onChange={(e) => setID(e.target.value)}           
            />
            <p className="label">Note</p>
            <textarea
            name="note"
            rows={10}
            value={note}
            onChange={(e) => setNote(e.target.value)}  
            />
            <br />
            <button disabled={isLoading} onClick={() => write ([id, note])}>
             Write Note
            </button>
            {error ? <p>{error.toString()}</p> :null}
          </section>
        </div>
  );
};

export default writeNote;
