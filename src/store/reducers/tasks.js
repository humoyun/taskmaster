import { ADD_TASK, REMOVE_TASK } from "../types";

const initialState = [
  {
    id: 2000,
    title: "recontextualize synergistic relationships",
    subject: "Donec vitae nisi. Sed vel enim sit amet nunc viverra dapibus.",
    status: "Pending",
    createdAt: "2019-02-24T16:33:15Z",
    dueAt: "2019-02-24T01:50:52Z",
    priority: "High",
    assignee: "Reggie Lines",
    appointer: "Jacklin Dryden"
  },
  {
    id: 2001,
    title: "syndicate seamless experiences",
    subject:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    status: "Resolved",
    createdAt: "2018-12-31T03:47:03Z",
    dueAt: "2019-04-17T05:51:27Z",
    priority: "Medium",
    assignee: "Clarey Riddington",
    appointer: "Kitty Van T'Hoog"
  },
  {
    id: 2002,
    title: "repurpose vertical methodologies",
    subject:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. Duis aliquam convallis nunc.",
    status: "Open",
    createdAt: "2019-01-15T01:00:20Z",
    dueAt: "2019-08-23T00:09:59Z",
    priority: "High",
    assignee: "Harvey Cuddon",
    appointer: "Devland Manuely"
  },
  {
    id: 2003,
    title: "engage wireless ROI",
    subject:
      "Curabitur convallis. Morbi vel lectus in quam fringilla rhoncus. Cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Nullam sit amet turpis elementum ligula vehicula consequat.",
    status: "Pending",
    createdAt: "2018-11-12T05:09:34Z",
    dueAt: "2019-06-18T21:48:26Z",
    priority: "Medium",
    assignee: "Meggi Silverthorne",
    appointer: "Elmo Pasby"
  },
  {
    id: 2004,
    title: "mesh killer metrics",
    subject:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    status: "Pending",
    createdAt: "2019-03-31T23:13:29Z",
    dueAt: "2019-07-15T03:03:45Z",
    priority: "Medium",
    assignee: "Kerr Barcroft",
    appointer: "Wallie Stearley"
  },
  {
    id: 2005,
    title: "utilize rich deliverables",
    subject: "Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    status: "Closed",
    createdAt: "2019-03-06T13:00:33Z",
    dueAt: "2019-06-09T11:32:31Z",
    priority: "Medium",
    assignee: "Patric Grealy",
    appointer: "Annice Hainsworth"
  },
  {
    id: 2006,
    title: "scale intuitive initiatives",
    subject:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    status: "Closed",
    createdAt: "2018-12-13T02:57:02Z",
    dueAt: "2019-01-22T17:04:28Z",
    priority: "High",
    assignee: "Lesli Mapston",
    appointer: "Katusha Gillbanks"
  },
  {
    id: 2007,
    title: "aggregate vertical networks",
    subject:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.  Praesent blandit.",
    status: "Open",
    createdAt: "2018-11-23T05:05:52Z",
    dueAt: "2019-07-19T14:38:36Z",
    priority: "Medium",
    assignee: "Dotti McBrearty",
    appointer: "Victoria Somerville"
  },
  {
    id: 2008,
    title: "transform strategic initiatives",
    subject:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    status: "Pending",
    createdAt: "2019-02-23T21:14:07Z",
    dueAt: "2019-03-03T14:43:17Z",
    priority: "High",
    assignee: "Agna Beake",
    appointer: "Lin Garwell"
  },
  {
    id: 2009,
    title: "reintermediate collaborative relationships",
    subject:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    status: "Resolved",
    createdAt: "2018-12-17T03:14:57Z",
    dueAt: "2019-04-08T12:19:24Z",
    priority: "Low",
    assignee: "Kingsley Eyckel",
    appointer: "Massimo Bendley"
  },
  {
    id: 2010,
    title: "streamline magnetic solutions",
    subject:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    status: "Resolved",
    createdAt: "2019-02-12T18:37:38Z",
    dueAt: "2019-04-05T17:08:40Z",
    priority: "High",
    assignee: "Nadiya Pash",
    appointer: "Stacy Wilsone"
  }
];

function tasksReducer(state = initialState, action) {
  if (action.type === ADD_TASK) {
    // state.tasks.push(action.payload); wrong approach (mutable, changing in place)
    return Object.assign({}, state, {
      tasks: state.concat(action.payload)
      // tasks: [...state, action.payload] (second way)
    });
  }

  if (action.type === REMOVE_TASK) {
    // state.tasks.push(action.payload); wrong approach (mutable, changing in place)
    const index = state.findIndex(todo => todo.id === action.payload.id);

    return Object.assign({}, state, {
      tasks: [...state.slice(0, index), ...state.slice(index + 1)]
      // tasks: [...state, action.payload] (second way)
    });
  }

  return state;
}

export default tasksReducer;
