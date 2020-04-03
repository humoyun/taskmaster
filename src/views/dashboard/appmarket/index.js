import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import withEmpty from "@/components/hoc/withEmpty";
import { getAddons, clearAddons } from "@/store/actions/addons";
import { Loader } from "@/components/loader";
import Addon from "./Addon";

import "./style.less";

const AppMarket = ({ addons, getAddons, clearAddons }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const call = async () => await getAddons();
    call();
    setLoading(false);
    return () => {
      clearAddons();
      console.log("AppMarket clean up code");
    };
  }, []);

  const AddonList = listProps => (
    <div className="addons-container">
      <h2 style={{ color: "#6b7d99" }}>App Market Addons</h2>

      <div className="addons-list">
        {listProps.list.map(addon => (
          <Addon key={addon.id} addon={addon} className="addon"></Addon>
        ))}
      </div>
    </div>
  );

  const ListWithEmpty = withEmpty(AddonList, "There is addons yet");

  return (
    <div className="app-market-wrapper">
      {loading ? (
        <Loader></Loader>
      ) : (
        <ListWithEmpty
          isEmpty={addons.length === 0}
          list={addons}
        ></ListWithEmpty>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    addons: state.addons
  };
};

// NOTE: actionCreators is better suited than mapDispatchToProps
// NOTE: mapDispatchToProps can be also {} plain object, much better syntax
/**
 * NOTE: If your actions do need arguments,
 * then you can just wrap those specific action creators in a function, like so:
 * removeAddon: () => increment(42),
 * */

const actionCreators = {
  getAddons,
  clearAddons
};

export default connect(mapStateToProps, actionCreators)(AppMarket);
