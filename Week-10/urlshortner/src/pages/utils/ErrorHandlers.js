export function getError(error) {
  return typeof error === "string" ? error : error.message;
}
