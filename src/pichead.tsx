import React from 'react';
import styles from './pichead.module.css';
//Picture and description of Joel Hilton
function TopBanner() {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img src="./JoelHiltonHeadshot.jpg" alt="JoelHilton" />
        </div>
        <div>
          <h1 className={styles.h1}>Joel Hilton is a movie person!</h1>
          <p>
            Joel minored in Film Studies at BYU, contracts as a movie reviewer
            for ClearPlay, and does a weekly podcast about movies called
            Baconsale.
          </p>
        </div>
      </div>
    </>
  );
}
export default TopBanner;
