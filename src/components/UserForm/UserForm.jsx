import { useState } from "react";

import FullCenterSection from "../../pages/FullCenterSection";
import CardBackgroundGrey from "../CardBackgroundGrey/CardBackgroundGrey";
import Button from "../Button/Button";

import styles from "./UserForm.module.scss";

const UserForm = () => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputTimeWork, setInputTimeWork] = useState("");
  const [inputTimeRest, setInputTimeRest] = useState("");
  const [user, setUser] = useState({
    name: "",
    age: undefined,
    timeWork: undefined,
    timeRest: undefined,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({
      name: inputName,
      age: inputAge,
      timeWork: inputTimeWork,
      timeRest: inputTimeRest,
    });

    setInputName("");
    setInputAge("");
    setInputTimeWork("");
    setInputTimeRest("");

    alert(`Usuario guardado: ${inputName}`);
  };
  console.log(user);

  return (
    <FullCenterSection position={"fullHeightBottom"}>
      <h2 className={styles.primaryText}>Hagámos una rápida configuración</h2>
      <CardBackgroundGrey typeAlign="alignEnd">
        <div>
          <h3 className={styles.secondaryText}>
            Con estos datos tendrémos la información necesaria para usar la app
          </h3>
        </div>
        <form onSubmit={handleSubmit} action="#">
          <div className={styles.ContainerForm}>
            <div className={styles.formGroup}>
              <input
                onChange={(e) => setInputName(e.target.value)}
                type="text"
                value={inputName}
                placeholder="Tu nombre:"
              />
            </div>
            <div className={styles.formGroup}>
              <input
                onChange={(e) => setInputAge(e.target.value)}
                type="number"
                value={inputAge}
                placeholder="Tu edad:"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="">
                ¿De cuanto será tu tiempo de trabajo?
              </label>
              <select
                onChange={(e) => setInputTimeWork(e.target.value)}
                className={styles.formLabel}
                name=""
                id=""
              >
                <option value="undefined">
                  Selecciona tu tiempo de trabajo
                </option>
                <option value="30">30 minutos</option>
                <option value="45">45 munitos</option>
                <option value="60">1 hora</option>
              </select>
              {/* <input
                
                type="number"
                value={inputTimeWork}
              /> */}
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="">
                ¿Cuanto durará tu pausa activa?
              </label>

              <select
                onChange={(e) => setInputTimeRest(e.target.value)}
                className={styles.formLabel}
                name=""
                id=""
              >
                <option value="undefined">
                  Selecciona tu tiempo de pausa activa
                </option>
                <option value="5">5 munitos</option>
                <option value="15">15 minutos</option>
                <option value="30">30 minutos</option>
              </select>
              {/* <input
                type="number"
                value={inputTimeRest}
              /> */}
            </div>
          </div>

          <Button
            type={"submit"}
            typeOfButton="largePrimaryButton"
            label={"Listo"}
          />
        </form>
      </CardBackgroundGrey>
    </FullCenterSection>
  );
};

export default UserForm;
