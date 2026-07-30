const CONTACT_EMAIL = "andaidavid8@gmail.com";

/**
 * Builds a prefilled mailto: link for requesting a document.
 *
 * The site is a static build, so anything shipped in public/ is downloadable
 * by anyone. Documents that shouldn't be public are kept out of the build and
 * requested by email instead.
 *
 * @param subject  Subject line, e.g. "CV request".
 * @param ask      What the visitor is asking for, e.g. "a copy of your CV".
 */
export function requestMailto(subject: string, ask: string) {
  const body = [
    "Hello Dr. Andai,",
    "",
    `I would like to request ${ask}.`,
    "",
    "Name:",
    "Organisation:",
    "Reason for the request:",
    "",
    "Thank you,",
  ].join("\n");

  return (
    `mailto:${CONTACT_EMAIL}` +
    `?subject=${encodeURIComponent(`${subject} — Dr. David Andai`)}` +
    `&body=${encodeURIComponent(body)}`
  );
}
