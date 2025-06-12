import FullCenterSection from "../../pages/FullCenterSection";
import CardBackgroundGrey from "../CardBackgroundGrey/CardBackgroundGrey";
import Button from "../Button/Button";

import styles from "./UserForm.module.scss";

const UserForm = () => {
  return (
    <FullCenterSection position={"fullHeightBottom"}>
      <h2 className={styles.primaryText}>Hagámos una rápida configuración</h2>
      <CardBackgroundGrey typeAlign="card">
        <form action="">
          <h3>
            Con estos datos tendrémos la información necesaria para usar la app
          </h3>
          <div className={styles.ContainerForm}>
            <input type="text" placeholder="Tu nombre:" />
            <input type="text" placeholder="Tu edad:" />
            <label className={styles.formLabel} htmlFor="">
              ¿De cuanto será tu tiempo de trabajo?
            </label>
            <input type="text" />
            <label className={styles.formLabel} htmlFor="">
              ¿Cuanto durará tu pausa activa?
            </label>
            <input type="text" />
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
