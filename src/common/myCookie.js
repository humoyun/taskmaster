import * as Cookies from "js-cookie";

/**
 * Cookies customization
 * set and get any data with the same domain and expiration time
 */

class MyCookie {
  constructor() {
    this.ck = Cookies;
    this.USER = "tm_usr";
    this.AUTH_TOKEN = "tm_auth";
    this.REFRESH_TOKEN = "tm_auth_ref";
    this.LANG = "tm_lang_code";

    this.domain = window.location.hostname;
  }

  // set val with key to cookie
  set(key, val) {
    // this.remove(key);
    this.checkCookieSize(val);

    this.ck.set(key, val, {
      domain: this.domain,
      expires: 365
    });
  }

  checkCookieSize(val) {
    let stringfied = val;

    if (typeof val !== "string") {
      stringfied = JSON.stringify(val);
    }
    if (stringfied.length > 4000) {
      console.error("Cookie size is almost reached at 4KB.");
      return false;
    }

    return true;
  }

  get(key) {
    return this.ck.get(key);
  }

  getJSON(key) {
    return this.ck.getJSON(key);
  }

  // removes key from cookie. ! domain is important
  remove(key) {
    this.ck.remove(key, {
      domain: this.domain
    });
  }

  clear() {
    this.remove(this.AUTH_TOKEN);
    this.remove(this.REFRESH_TOKEN);
    this.remove(this.USER);
  }

  setTokens(token) {
    this.setToken(token.accessToken);
    this.setRefreshToken(token.refreshToken);
  }

  setToken(token) {
    this.set(this.AUTH_TOKEN, token);
  }

  getToken() {
    return this.get(this.AUTH_TOKEN);
  }

  setRefreshToken(refreshToken) {
    this.set(this.REFRESH_TOKEN, refreshToken);
  }

  getRefreshToken() {
    return this.get(this.REFRESH_TOKEN);
  }

  setUser(user) {
    this.set(this.USER, user);
  }

  getUser() {
    return this.getJSON(this.USER);
  }

  getLang() {
    return this.get(this.LANG);
  }

  setLang(lang) {
    return this.set(this.LANG, lang);
  }
}

const myCookie = new MyCookie();
window.myCookie = myCookie;

export default myCookie;
