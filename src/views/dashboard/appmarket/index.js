import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import withEmpty from "@/components/hoc/withEmpty";
import Addon from "./Addon";

import "./style.less";

const AppMarket = props => {
  const addons = props.addons;

  const AddonList = listProps => (
    <div className="addons-container">
      <h2 style={{ color: "#6b7d99" }}>App Market Addons</h2>

      <div className="addons-list">
        {listProps.list.map(addon => (
          <Addon key={addon.id} addon={addon}></Addon>
        ))}
      </div>
    </div>
  );

  const ListWithEmpty = withEmpty(AddonList);

  return (
    <div className="app-market-wrapper">
      <ListWithEmpty
        isEmpty={addons.length === 0}
        list={addons}
      ></ListWithEmpty>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    addons: state.addons
  };
};

export default connect(mapStateToProps)(AppMarket);
