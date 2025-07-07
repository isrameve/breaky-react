import FullCenterSection from "../../pages/FullCenterSection";
import CardBackgroundGrey from "../CardBackgroundGrey/CardBackgroundGrey";
import Button from "../Button/Button";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useMenuStatus } from "../../contexts/ConfigMenuContext";

import styles from "./UserForm.module.scss";

const UserForm = () => {
  const { setIsMenuDisplayed } = useMenuStatus();

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
    setIsMenuDisplayed(false);
    console.log(userProfile);
    alert(`Usuario guardado`);
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
    33;
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
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                onChange={handleAgeChange}
                type="number"
                placeholder="Tu edad:"
                value={userProfile.age}
                required
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
                required
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
                required
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
            typeOfButton={"largePrimaryButton"}
            label={"Listo"}
          />
        </form>
      </CardBackgroundGrey>
    </FullCenterSection>
  );
};

export default UserForm;
