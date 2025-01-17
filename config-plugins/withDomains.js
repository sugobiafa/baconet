/**
 *
 * @param {string[]} props.domains URL domain to associate with the app. (e.g. `example.com` no `https://` or `www`).
 * @param {string} props.mode optional `developer` (dev-mode), `managed` (enterprise or intranet), or `developer+managed` mode. Defaults to `null` (general support for all users).
 * @returns
 */
module.exports = function withDomains(exp, { domains, mode }) {
  if (!exp.ios) exp.ios = {};
  if (!exp.ios.associatedDomains) exp.ios.associatedDomains = [];

  const suffix = mode != null ? `?mode=${mode}` : "";
  const parsedDomains = domains
    .map((domain) => {
      return [
        `applinks:`,
        `webcredentials:`,
        `activitycontinuation:`,
        // https://developer.apple.com/documentation/app_clips/associating_your_app_clip_with_your_website
        "appclips:",
      ].map((value) =>
        [
          value,
          sanitizeUrl(domain),
          suffix,
          // Dev mode does not appear to support `webcredentials`.
          value !== "webcredentials:" ? suffix : "",
        ].join("")
      );
    })
    .flat();

  exp.ios.associatedDomains.push(...parsedDomains);

  // Remove duplicates
  exp.ios.associatedDomains = unique(exp.ios.associatedDomains);
  return exp;
};

function unique(arr) {
  return Array.from(new Set(arr));
}

function sanitizeUrl(url) {
  // remove trailing slash, protocol, extra paths, and www
  return url
    .replace(/\/$/, "")
    .replace(/^https?:\/\//, "")
    .replace(/\/.*$/, "")
    .replace(/^www\./, "");
}
