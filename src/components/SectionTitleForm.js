import styles from "./SectionTitleForm.module.css";

const SectionTitleForm = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.wrapperQueenslogoColour1Wrapper}>
        <div className={styles.wrapperQueenslogoColour1}>
          <img
            className={styles.queenslogoColour1Icon}
            loading="lazy"
            alt=""
            src="/queenslogo-colour-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.queensIdPortalWrapper}>
        <h1 className={styles.queensIdPortal}>Queen’s ID Portal</h1>
      </div>
      <div className={styles.buttonsWrapper}>
        <div className={styles.buttons}>
          <div className={styles.mealSwipeButtonParent}>
            <div className={styles.mealSwipeButton} />
            <div className={styles.logOut}>Log Out</div>
            <div className={styles.unassignedasthereisnoclearstru}>
              <img
                className={styles.logOutIcon2048x2048Cru8zab}
                loading="lazy"
                alt=""
                src="/logouticon2048x2048cru8zabe-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTitleForm;
