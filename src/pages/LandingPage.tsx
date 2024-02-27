import { FunctionComponent } from "react";
import SectionTitleForm from "../components/SectionTitleForm";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <SectionTitleForm />
      <section className={styles.unassignedasthereisnoclearstru}>
        <div className={styles.unassignedasthereisnoclearstru1} />
        <header className={styles.unassignedasthereisnoclearstru2} />
        <div className={styles.lineTop}>
          <input
            className={styles.unassignedasthereisnoclearstru3}
            type="text"
          />
          <input
            className={styles.unassignedasthereisnoclearstru4}
            type="text"
          />
          <input
            className={styles.unassignedasthereisnoclearstru5}
            type="text"
          />
        </div>
        <img
          className={styles.nikIdBw1Icon}
          loading="lazy"
          alt=""
          src="/nik-id-bw-1@2x.png"
        />
      </section>
      <section className={styles.unassignedasthereisnoclearstru6}>
        <div className={styles.unassignedasthereisnoclearstru7}>
          <div className={styles.headerInfo}>
            <div className={styles.mar22nd}>Mar 22nd</div>
            <div className={styles.nameSection}>
              <div className={styles.profilePicture}>
                <h1 className={styles.photo}>Photo:</h1>
                <div className={styles.timeIndicator}>
                  <div className={styles.pm}>1:02 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.nameFieldWrapper}>
              <div className={styles.nameField}>
                <h2 className={styles.nameNikhilContainer}>
                  <span>{`Name : `}</span>
                  <b>Nikhil Naran</b>
                </h2>
                <div className={styles.frameGroup}>
                  <div className={styles.hourlyTotalWrapper}>
                    <div className={styles.hourlyTotal}>
                      <div className={styles.dob180305Container}>
                        <span>
                          <span>{`DOB : `}</span>
                          <b>18.03.05</b>
                        </span>
                      </div>
                      <div className={styles.capacityIndicator}>
                        <div className={styles.mealSwipesLeftContainer}>
                          <span className={styles.mealSwipesLeftContainer1}>
                            <span>{`Meal Swipes Left Today : `}</span>
                            <b>2</b>
                          </span>
                        </div>
                        <div className={styles.mealSwipesLeftContainer2}>
                          <span>
                            <span>{`Meal Swipes Left This Week : `}</span>
                            <b>16</b>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.totalThisHour128Parent}>
                    <div className={styles.totalThisHourContainer}>
                      <span className={styles.totalThisHourContainer1}>
                        <span className={styles.totalThisHour}>
                          Total This Hour :
                        </span>
                        <span className={styles.span}>{` `}</span>
                        <b>128</b>
                      </span>
                    </div>
                    <div className={styles.dailyStats}>
                      <div className={styles.totalTodayContainer}>
                        <span>
                          <span className={styles.totalToday}>
                            Total Today :
                          </span>
                          <span className={styles.span1}>{` `}</span>
                          <b>598</b>
                        </span>
                      </div>
                    </div>
                    <div className={styles.availableCapacity61Wrapper}>
                      <div className={styles.availableCapacityContainer}>
                        <span>
                          <span
                            className={styles.availableCapacity}
                          >{`Available Capacity : `}</span>
                          <b>61</b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mealSwipeButtonParent}>
              <button className={styles.mealSwipeButton}>
                <div className={styles.rectangleSwipe} />
                <div className={styles.mealSwipe}>Meal Swipe</div>
                <img
                  className={styles.emptySwipeButton}
                  alt=""
                  src="/empty-swipe-button@2x.png"
                />
              </button>
              <button className={styles.tamButton}>
                <div className={styles.tAMButton} />
                <div className={styles.frameTAM}>
                  <img className={styles.tam1Icon} alt="" src="/tam-1@2x.png" />
                  <div className={styles.tam}>TAM</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
