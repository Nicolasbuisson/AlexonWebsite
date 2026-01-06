// Check if the current time is before or at the expiration time
export const isIgMediaUrlValid = (mediaUrl: string, till: Date = new Date()): boolean => {
  let url = new URL(mediaUrl);
  // Get the 'oe' parameter and parse it as a hex integer
  let urlExpiryTimestamp = parseInt(url.searchParams.get("oe") ?? "0", 16);
  // for some reason, oe parameter only contains the time, so must multiply by 1000 to get the date
  return till < new Date(urlExpiryTimestamp * 1000); 
}