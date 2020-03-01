import React from "react";
import { Empty } from "antd";
import styled from "styled-components";
import withEmpty from "@/components/hoc/withEmpty";

import "./style.less";

// const EmptyWrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Marketplace = props => {
//   const list = [];

//   return (
//     <div className="marketplace-wrapper">
//       {list.length ? (
//         <div>
//           <h2>Marketplace for addons</h2>

//           {[].map(item => (
//             <div>item</div>
//           ))}
//         </div>
//       ) : (
//         <EmptyWrapper>
//           <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
//         </EmptyWrapper>
//       )}
//     </div>
//   );
// };

const Marketplace = props => {
  const addons = [{ id: "key-1", data: {}, val: "some item -1" }];

  const AddonList = listProps => (
    <div className="addon-item">
      <h2>Marketplace for addons</h2>

      {listProps.list.map(item => (
        <div key={item.id}>{item.val}</div>
      ))}
    </div>
  );

  const ListWithEmpty = withEmpty(AddonList);

  return (
    <div className="marketplace-wrapper">
      <ListWithEmpty isEmpty={addons.length === 0} list={addons} />
    </div>
  );
};

export default Marketplace;
