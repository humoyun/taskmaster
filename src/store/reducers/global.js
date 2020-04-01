import { SIDEBAR_MENU_CLICKED } from "../types";

const initState = {
  sidebarMenuLoading: false,
  sidebarMenuItem: null
};

const globalReducer = (state = initState, action) => {
  if (action.type === SIDEBAR_MENU_CLICKED) {
    const { loading, menuItem } = action.payload;

    return {
      ...state,
      ...{ sidebarMenuLoading: loading, sidebarMenuItem: menuItem }
    };
  }

  return state;
};

export default globalReducer;
