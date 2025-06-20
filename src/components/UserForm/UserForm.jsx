// import { useEffect, useState } from "react";
// import { useActivityStatus } from "../../contexts/ActivityContext";

import FullCenterSection from "../../pages/FullCenterSection";
import CardBackgroundGrey from "../CardBackgroundGrey/CardBackgroundGrey";
import Button from "../Button/Button";
import useLocalStorage from "../../hooks/useLocalStorage";

import styles from "./UserForm.module.scss";

// Ocultar este cuando se llena el form por primera vez y se usa el componente de nuevo en una sección emergente para cuando se quiere hacer algún cambio o configuración

const UserForm = () => {
  const initialUserConfig = {
    name: "",
    age: undefined,
    workTime: undefined,
    breakTime: undefined,
  };

  const [userProfile, setUserProfile] = useLocalStorage(
    "userProfile",
    initialUserConfig
  );

  // const { setActivityStatus } = useActivityStatus();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userProfile);
    alert(`Usuario guardado`);
    // setActivityStatus("working");
    // Setear el valor del contexto global ActivityContext a "Working"
  };

  const handleNameChange = (e) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile, // Copia todas las propiedades existentes con "spread operator"
      name: e.target.value,
    }));
  };
  const handleAgeChange = (e) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      age: Number(e.target.value),
    }));
  };
  const handleWorkTimeChange = (e) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      workTime: Number(e.target.value),
    }));
  };
  const handleBreakTimeChange = (e) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      breakTime: Number(e.target.value),
    }));
  };

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
                onChange={handleNameChange}
                type="text"
                placeholder="Tu nombre:"
                value={userProfile.name}
              />
            </div>

            <div className={styles.formGroup}>
              <input
                onChange={handleAgeChange}
                type="number"
                placeholder="Tu edad:"
                value={userProfile.age}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="">
                ¿De cuanto será tu tiempo de trabajo?
              </label>
              <select
                onChange={handleWorkTimeChange}
                className={styles.formLabel}
                name=""
                id=""
                value={userProfile.workTime}
              >
                <option value="undefined">
                  Selecciona tu tiempo de trabajo
                </option>
                <option value="5">5 segundos - Testeos</option>
                <option value="1800">30 minutos</option>
                <option value="2700">45 minutos - Recomendado</option>
                <option value="3600">1 hora</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="">
                ¿Cuanto durará tu pausa activa?
              </label>
              <select
                onChange={handleBreakTimeChange}
                className={styles.formLabel}
                name=""
                id=""
                value={userProfile.breakTime}
              >
                <option value="undefined">
                  Selecciona tu tiempo de pausa activa
                </option>
                <option value="5">5 segundos - Testeos</option>
                <option value="5">5 minutos</option>
                <option value="15">15 minutos - Recomendado</option>
                <option value="30">30 minutos</option>
              </select>
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
