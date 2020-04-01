import { SIDEBAR_MENU_CLICKED } from "../types";

export function menuItemClicked(payload) {
  return { type: SIDEBAR_MENU_CLICKED, payload };
}
