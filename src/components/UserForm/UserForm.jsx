// import { useEffect, useState } from "react";

import FullCenterSection from "../../pages/FullCenterSection";
import CardBackgroundGrey from "../CardBackgroundGrey/CardBackgroundGrey";
import Button from "../Button/Button";
import useLocalStorage from "../../hooks/useLocalStorage";

import styles from "./UserForm.module.scss";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userProfile);
    alert(`Usuario guardado`);
  };

  const handleNameChange = (e) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile, // Copia todas las propiedades existentes con spread operator
      name: e.target.value, // Solo actualiza 'name'
    }));
  };

  const handleAgeChange = (e) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      age: Number(e.target.value), // Convierte a número si es necesario
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
              />
            </div>
            <div className={styles.formGroup}>
              <input
                onChange={handleAgeChange}
                type="number"
                placeholder="Tu edad:"
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
                onChange={handleBreakTimeChange}
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
