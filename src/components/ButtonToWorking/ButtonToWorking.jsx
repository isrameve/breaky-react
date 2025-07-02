import Button from "../Button/Button";

import { useActivityStatus } from "../../contexts/ActivityContext";

const ButtonToWorking = () => {
  const { setActivityStatus } = useActivityStatus();

  const handleClickButtonComenzar = () => {
    setActivityStatus("working"); //Indica a la app que damos inicio a la app con working al setear el valor del contexto global ActivityContext a "working"
  };

  return (
    <Button
      label={"Comenzar"}
      typeOfButton={"largePrimaryButton"}
      onClick={handleClickButtonComenzar}
    />
  );
};

export default ButtonToWorking;
