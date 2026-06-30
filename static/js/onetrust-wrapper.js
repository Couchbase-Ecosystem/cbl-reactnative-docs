/**
 * OneTrust callback for cbl-reactnative.dev.
 *
 * The Couchbase OneTrust production script (748511ff-…) is registered for
 * couchbase.com, so OneTrust cannot write OptanonAlertBoxClosed on this
 * domain. Persist consent cookies on the current host when the SDK records
 * a choice but fails to store them.
 */
function OptanonWrapper() {
  if (typeof OneTrust === 'undefined') {
    return;
  }

  var host = window.location.hostname;
  var isCouchbaseDomain =
    host === 'couchbase.com' || host.endsWith('.couchbase.com');

  function hasConsentGroups() {
    return (
      typeof OptanonActiveGroups !== 'undefined' &&
      OptanonActiveGroups.replace(/,/g, '').length > 0
    );
  }

  function hasAlertCookie() {
    return document.cookie.indexOf('OptanonAlertBoxClosed=') !== -1;
  }

  function persistConsentCookies() {
    if (isCouchbaseDomain || hasAlertCookie()) {
      return;
    }

    if (!hasConsentGroups() && OneTrust.IsAlertBoxClosed && OneTrust.IsAlertBoxClosed()) {
      return;
    }

    if (!hasConsentGroups()) {
      return;
    }

    var expiry = new Date();
    expiry.setFullYear(expiry.getFullYear() + 1);
    var expiryStr = 'expires=' + expiry.toUTCString();
    var secure = window.location.protocol === 'https:' ? '; Secure' : '';

    document.cookie =
      'OptanonAlertBoxClosed=' +
      new Date().toISOString() +
      '; path=/; ' +
      expiryStr +
      '; SameSite=Lax' +
      secure;

    document.cookie =
      'OptanonConsent=' +
      'isGpcEnabled=0&datestamp=' +
      encodeURIComponent(new Date().toString()) +
      '&version=202504.1.0&groups=' +
      encodeURIComponent(OptanonActiveGroups) +
      '&hosts=&consentId=&interactionCount=1&landingPath=NotLandingPage&AwaitingReconsent=false' +
      '; path=/; ' +
      expiryStr +
      '; SameSite=Lax' +
      secure;
  }

  OneTrust.OnConsentChanged(persistConsentCookies);
  persistConsentCookies();
}
