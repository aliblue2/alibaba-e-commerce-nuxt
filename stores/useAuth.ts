interface userAuth {
  accessToken: string | undefined;
  refreshToken: string | undefined;
}

export const useAuth = defineStore("auth", {
  state: (): userAuth => ({
    accessToken: undefined,
    refreshToken: undefined,
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
      this.accessToken = undefined;
      this.refreshToken = undefined;
      if (process.client) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    },

    loadTokens() {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (accessToken && refreshToken) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
      }
    },
  },

  getters: {
    isAuthenticated: (state) => !!state.accessToken,
  },
});
