export enum EXCHANGE_ROUTES {
  GET_EXCHANGE_RATES = "/rates/active/",
  GET_STATIC_DATA = "/transactions/static/",
  CREATE_TRANSACTION = "/transactions/",
  JOIN_WAITLIST = "/waitlist/",
  CREATE_VERIFIED_TRANSACTION = "/transactions/internal/",
  GET_USER_TRANSACTIONS = "/transactions/internal/",
}

export enum AUTH_ROUTES {
  LOGIN = "/auth/login/",
  REGISTER = "/auth/signup/",
}

export enum DASHBOARD_ROUTES {
  SUMMARY = "/dashboard/summary/",
}

export enum PROFILE_ROUTES {
  USER_PROFILE = "/user/",
  ADD_BANK_ACCOUNT = "/bank/",
}
