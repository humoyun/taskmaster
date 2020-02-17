/* eslint-disable import/no-extraneous-dependencies */
import jwtDecode from "jwt-decode";
import axios from "axios";
import myCookie from "./MyCookie";

class Token {
  constructor() {
    this.refreshTokenClient = axios.create({
      baseURL: ""
    });
    this.isRefreshingToken = false;
    this.setInterceptors();

    this.myCookie = myCookie;
  }

  exist() {
    const accessToken = this.getToken();
    return accessToken && accessToken !== "undefined" && accessToken !== "null";
  }

  getToken() {
    return this.myCookie.getToken();
  }

  getRefreshToken() {
    return this.myCookie.getRefreshToken();
  }

  setToken(token) {
    return this.myCookie.setToken(token);
  }

  setRefreshToken(refreshToken) {
    return this.myCookie.setRefreshToken(refreshToken);
  }

  clear() {
    this.myCookie.clear();
  }

  setInterceptors() {
    this.refreshTokenClient.interceptors.response.use(
      resp => {
        if (resp.data) {
          resp.data.status = resp.status;
        }
        return resp.data;
      },
      err => {
        const errorResponse = err.response;
        const error = errorResponse ? errorResponse.data : null;

        if (error.status === 401 || errorResponse.status === 401) {
          console.log("refreshTokenClient: 401, clear token and goto login");
          this.clear();
          // this.routeMan.go('auth');
          // temporary for mudin
          const hostname = window.location.hostname;
          if (hostname.includes("vrse") || hostname.includes("onsite")) {
            this.routeMan.go("login");
          } else {
            this.routeMan.go("auth");
          }
        }
        return Promise.reject(error);
      }
    );
  }

  /**
   * Check token validity
   */
  async isExpired() {
    let isRefreshingToken = this.isRefreshingToken;

    if (isRefreshingToken) {
      let cpt = 0; // cpt to avoid infinite loop
      // we don t want to make two refresh request at the same time,
      // so we wait until the first one is finished
      while (isRefreshingToken && cpt < 500) {
        /* eslint-disable-next-line no-await-in-loop */
        await this.waitFor(100);
        isRefreshingToken = this.isRefreshingToken;
        cpt += 1;
      }

      // if it is still refreshing, there is probably a problem
      if (isRefreshingToken) return false;
    }

    const accessToken = this.getToken();

    const token = jwtDecode(accessToken);
    // curent time + plus 10 seconds, to make sure the token will not be expired during req
    const currentTime = (Date.now() + 10000) / 1000;
    return token.exp < currentTime;
  }

  /**
   * API request to renew token
   */
  async renew() {
    try {
      const data = {
        accessToken: this.getToken(),
        refreshToken: this.getRefreshToken()
      };

      // check again if token is being refreshed
      // if it is refreshing, we return the refreshed token
      let isRefreshingToken = this.isRefreshingToken;
      if (isRefreshingToken) {
        let cpt = 0; // cpt to avoid infinite loop
        // we don t want to make two refresh request at the same time,
        // so we wait until the first one is finished
        while (isRefreshingToken && cpt < 500) {
          /* eslint-disable-next-line no-await-in-loop */
          await this.waitFor(100);
          isRefreshingToken = this.isRefreshingToken;
          cpt += 1;
          console.log(cpt);
        }

        return {
          accessToken: this.getToken(),
          refreshToken: this.getRefreshToken()
        };
      }

      this.isRefreshingToken = true;
      const resp = await this.refreshTokenClient({
        method: "post",
        url: "/aun/p/authn/refresh",
        data
      });

      this.isRefreshingToken = false;

      if (resp) {
        if (resp.status !== 200) {
          console.log("error on refreshing token");
          return null;
        }

        const { accessToken, refreshToken } = resp.data;
        this.setToken(accessToken);
        this.setRefreshToken(refreshToken);
        return {
          accessToken,
          refreshToken
        };
      }

      return null;
    } catch (err) {
      console.error(err);
      this.isRefreshingToken = false;
      return null;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  waitFor(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default Token;
