const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  extends: [
    "react-app",
    "@cr4zyc4t/common",
  ],
  rules: {
    // "no-console": isProduction ? "warn" : "off"
  }
}