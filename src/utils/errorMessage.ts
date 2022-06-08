export const formatErrMsg = (error: any) => {
  const err = { ...error };
  const { response, request, message } = err;

  let errMsg = response
    ? {
        status: response.status,
        message: response.data.error,
      }
    : request
    ? "Network error, please try again later"
    : message;

  return errMsg;
};
