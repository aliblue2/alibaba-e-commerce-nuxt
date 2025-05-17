import { defineStore } from "pinia";

interface userAuth {
  accessToken: string | null;
  refreshToken: string | null;
}

export const useAuthStore = defineStore("auth", {
  state: (): userAuth => ({
    accessToken: null,
    refreshToken: null,
  }),

  actions: {
    setTokens(payload: { accessToken: string; refreshToken: string }) {
      this.accessToken = payload.accessToken;
      this.refreshToken = payload.refreshToken;

      if (process.client) {
        localStorage.setItem("accessToken", payload.accessToken);
        localStorage.setItem("refreshToken", payload.refreshToken);
      }
    },
    clearTokens() {
      this.accessToken = null;
      this.refreshToken = null;

      if (process.client) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    },

    loadTokens() {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (accessToken && refreshToken) {
        this.setTokens({ accessToken, refreshToken });
      }
    },
  },

  getters: {
    isAuthenticated: (state) => !!state.accessToken,
  },
});
