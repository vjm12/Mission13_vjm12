import React from 'react';
import TopBanner from './pichead';
//Moved from App.tsx to use in multi-page routing
class Home extends React.Component {
  render() {
    return (
      <>
        <h4>
          This site has Joel Hilton's Movie Collection, a link to his podcasts,
          and this picture of Joel!
        </h4>
        <TopBanner />
      </>
    );
  }
}
export default Home;
