export function timeToSeconds(time: string) {
  const [hours = '0', minuts = '0', seconds = '0'] = time.split(':');
  const hoursToSeconds = Number(hours) * 3600;
  const minutsToSeconds = Number(minuts) * 60;

  return hoursToSeconds + minutsToSeconds + Number(seconds);
}
