module.exports = {
  success: ({ data, msg, code }) => {
    return {
      msg: msg || "SUCCESS",
      data: data,
      code: code || "SUCCESS"
    }
  },
  error: ({ data, msg, code }) => {
    return {
      msg: msg || "ERROR",
      data: data,
      code: code || "ERROR"
    }
  },
}