import FullCenterSection from "../../pages/FullCenterSection";
import CardBackgroundGrey from "../CardBackgroundGrey/CardBackgroundGrey";
import Button from "../Button/Button";

import styles from "./UserForm.module.scss";

const UserForm = () => {
  return (
    <FullCenterSection position={"fullHeightBottom"}>
      <h2 className={styles.primaryText}>Hagámos una rápida configuración</h2>
      <CardBackgroundGrey typeAlign="alignEnd">
        <div>
          <h3 className={styles.secondaryText}>
            Con estos datos tendrémos la información necesaria para usar la app
          </h3>
        </div>
        <form action="">
          <div className={styles.ContainerForm}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Tu nombre:" />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Tu edad:" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="">
                ¿De cuanto será tu tiempo de trabajo?
              </label>
              <input type="number" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="">
                ¿Cuanto durará tu pausa activa?
              </label>
              <input type="number" />
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
