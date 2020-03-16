import { ADD_ADDON } from "../types";

const initialState = [
  {
    id: Math.random()
      .toString(26)
      .slice(2),
    title: "Google Drive",
    info: {},
    settings: {},
    imageThumbURL:
      "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2017-08-28/232381175025_31793c43d684e5a7c75a_192.png"
  },
  {
    id: Math.random()
      .toString(26)
      .slice(2),
    title: "Dropbox",
    info: {},
    settings: {},
    imageThumbURL:
      "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062016/untitled-1_268.png"
  },
  {
    id: Math.random()
      .toString(26)
      .slice(2),
    title: "Polly Bot",
    info: {},
    settings: {},
    imageThumbURL:
      "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2016-05-09/41532123248_86c89d7c608b75bbd782_512.png"
  },
  {
    id: Math.random()
      .toString(26)
      .slice(2),
    title: "Zoom",
    info: {},
    settings: {},
    imageThumbURL:
      "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2017-09-21/245295805989_06e77af1bfb8e3c81d4d_512.png"
  },
  {
    id: Math.random()
      .toString(26)
      .slice(2),
    title: "Daily Bot",
    info: {},
    settings: {},
    imageThumbURL:
      "https://botlist.imgix.net/632/c/siftbot-medium.jpg?auto=compress"
  },
  {
    id: Math.random()
      .toString(26)
      .slice(2),
    title: "Paint",
    info: {},
    settings: {},
    imageThumbURL:
      "https://apprecs.org/gp/images/app-icons/300/26/com.yooiistudio.sketchkit.jpg"
  },
  {
    id: Math.random()
      .toString(26)
      .slice(2),
    title: "Forecast",
    info: {},
    settings: {},
    imageThumbURL:
      "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-03-02/323927137892_3a5e8d56a20b51df9f30_512.png"
  },
  {
    id: Math.random()
      .toString(26)
      .slice(2),
    title: "Twitter",
    info: {},
    settings: {},
    imageThumbURL: "https://a.slack-edge.com/80588/img/services/twitter_512.png"
  },
  {
    id: Math.random()
      .toString(26)
      .slice(2),
    title: "Analytics",
    info: {},
    settings: {},
    imageThumbURL:
      "https://www.ajastra.com/wp-content/uploads/2016/07/services-analytics-alt-colors-optimized-300x300.png"
  },
  {
    id: Math.random()
      .toString(26)
      .slice(2),
    title: "Evernote",
    info: {},
    settings: {},
    imageThumbURL:
      "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-08-14/417795967318_5268249d36685f199856_512.png"
  },
  {
    id: Math.random()
      .toString(26)
      .slice(2),
    title: "Github",
    info: {},
    settings: {},
    imageThumbURL:
      "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2017-12-19/288981919427_f45f04edd92902a96859_512.png"
  },
  {
    id: Math.random()
      .toString(26)
      .slice(2),
    title: "User Activity Tracking",
    info: {},
    settings: {},
    imageThumbURL:
      "https://firecrux.com/wp-content/uploads/2019/08/user-tracking-300x300.png"
  }
];

function addonsReducer(state = initialState, action) {
  if (action.type === ADD_ADDON) {
    // state.tasks.push(action.payload); wrong approach (mutable, changing in place)
    return Object.assign({}, state, {
      tasks: state.concat(action.payload)
      // tasks: [...state, action.payload] (second way)
    });
  }

  return state;
}

export default addonsReducer;
