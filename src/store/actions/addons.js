import axios from "axios";
import { ADDONS_LOADED, CLEAR_ADDONS } from "../types";

const addonDB = [
  {
    id: "addon-id-1",
    title: "Google Drive",
    info: {},
    settings: {},
    imageThumbURL:
      "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2017-08-28/232381175025_31793c43d684e5a7c75a_192.png"
  },
  {
    id: "addon-id-2",
    title: "Dropbox",
    info: {},
    settings: {},
    imageThumbURL:
      "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062016/untitled-1_268.png"
  },
  {
    id: "addon-id-3",
    title: "Polly Bot",
    info: {},
    settings: {},
    imageThumbURL:
      "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2016-05-09/41532123248_86c89d7c608b75bbd782_512.png"
  },
  {
    id: "addon-id-4",
    title: "Zoom",
    info: {},
    settings: {},
    imageThumbURL:
      "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2017-09-21/245295805989_06e77af1bfb8e3c81d4d_512.png"
  },
  {
    id: "addon-id-5",
    title: "Daily Bot",
    info: {},
    settings: {},
    imageThumbURL:
      "https://botlist.imgix.net/632/c/siftbot-medium.jpg?auto=compress"
  },
  {
    id: "addon-id-6",
    title: "Paint",
    info: {},
    settings: {},
    imageThumbURL:
      "https://apprecs.org/gp/images/app-icons/300/26/com.yooiistudio.sketchkit.jpg"
  },
  {
    id: "addon-id-7",
    title: "Forecast",
    info: {},
    settings: {},
    imageThumbURL:
      "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-03-02/323927137892_3a5e8d56a20b51df9f30_512.png"
  },
  {
    id: "addon-id-8",
    title: "Twitter",
    info: {},
    settings: {},
    imageThumbURL: "https://a.slack-edge.com/80588/img/services/twitter_512.png"
  },
  {
    id: "addon-id-9",
    title: "Analytics",
    info: {},
    settings: {},
    imageThumbURL:
      "https://www.ajastra.com/wp-content/uploads/2016/07/services-analytics-alt-colors-optimized-300x300.png"
  },
  {
    id: "addon-id-10",
    title: "Evernote",
    info: {},
    settings: {},
    imageThumbURL:
      "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-08-14/417795967318_5268249d36685f199856_512.png"
  },
  {
    id: "addon-id-11",
    title: "Github",
    info: {},
    settings: {},
    imageThumbURL:
      "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2017-12-19/288981919427_f45f04edd92902a96859_512.png"
  },
  {
    id: "addon-id-12",
    title: "User Activity Tracking",
    info: {},
    settings: {},
    imageThumbURL:
      "https://firecrux.com/wp-content/uploads/2019/08/user-tracking-300x300.png"
  }
];

export const getAddons = () => {
  return async (dispatch, getState) => {
    try {
      const rs = await axios.get("https://jsonplaceholder.typicode.com/posts");
      if (rs) {
        dispatch({
          type: ADDONS_LOADED,
          payload: addonDB
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const clearAddons = () => ({
  type: CLEAR_ADDONS,
  payload: []
});
