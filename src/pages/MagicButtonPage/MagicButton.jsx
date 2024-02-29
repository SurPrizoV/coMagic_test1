import { useState } from "react";
import { Button } from "../../components/MagicButton/Button";
import { Header } from "../../components/Header/Header";

export const MagicButtonPage = () => {
  const [magic, setMagig] = useState(true);

  return (
    <>
      <Header />
      <Button setting={magic} setSetting={setMagig}>
        {magic ? "Светло-серый" : "Серый"}
      </Button>
    </>
  );
};
