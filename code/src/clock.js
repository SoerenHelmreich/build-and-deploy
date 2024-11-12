export const getTimeString = (now) => {
    const hour = now.getHours();
    const minute = now.getMinutes();
    const seconds = now.getSeconds();
    return `${formatToDoubleDigit(hour)}:${formatToDoubleDigit(minute)}:${formatToDoubleDigit(seconds)}`
}

const getNextYearDate = (now) => {
    const endOfYearDate = new Date(0)
    endOfYearDate.setUTCFullYear(now.getUTCFullYear() + 1)
    return endOfYearDate;
}

export const getSecondsLeftOfYear = (now) => {
    const startOfNextYear = getNextYearDate(now);
    const startOfNextYearMillis = startOfNextYear.getTime();
    const nowMillis = now.getTime();
    return Math.floor((startOfNextYearMillis - nowMillis) / 1000);
}

export function getMinutesLeftofYear(now) {
    return Math.floor(getSecondsLeftOfYear(now) / 60);
}

function formatToDoubleDigit(i) {
    let s = i + "";
    let len = 2;
    while (s.length < len) s = "0" + s;
    return s;
}
