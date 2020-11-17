import React from "react";
import "../../assets/styles/Tabs/Tabs.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Tabssitos = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Overview</Tab>
        <Tab>Features</Tab>
        <Tab>What's in</Tab>
      </TabList>

      <TabPanel>
        <p>
          For the past 75 years, Sennheiser has put sound first. The new
          MOMENTUM True Wireless 2 is no different. Thanks to leading audio
          technology and innovation, these new earbuds deliver the best
          listening experience anytime, anywhere. With improved ergonomics
          designed for full day wearing and refined touch controls for a more
          personalised experience, they have been finely crafted for the most
          discerning listener and aim to simplify your life by enhancing your
          everyday.
        </p>
      </TabPanel>
      <TabPanel>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </TabPanel>
      <TabPanel>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </TabPanel>
    </Tabs>
  );
};
export default Tabssitos;
