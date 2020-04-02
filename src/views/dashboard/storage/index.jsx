import React, { useEffect } from "react";
import StorageHeader from "./StorageHeader";
import Dummy from "./Dummy";
import { connect } from "react-redux";
import { getFiles } from "@/store/actions/storage";
import withLoader from "@/components/hoc/withLoader";

import "./style.less";

const Storage = ({ getFiles, loading }) => {
  useEffect(() => {
    const getCloudFiles = async () => {
      await getFiles();
    };

    getCloudFiles();
  }, []);

  const Cloud = withLoader(Dummy);

  return (
    <div className="tm-cloud-storage">
      <StorageHeader></StorageHeader>
      <Cloud loading={loading}></Cloud>
    </div>
  );
};

const actionCreator = {
  getFiles
};
const mapStateToProps = state => ({
  loading: state.global.sidebarMenuLoading
});

export default connect(mapStateToProps, actionCreator)(Storage);
