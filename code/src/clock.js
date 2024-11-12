export const getTimeString = (now) => {
    const hour = formatToDoubleDigit(now.getHours());
    const minute = formatToDoubleDigit(now.getMinutes());
    const seconds = formatToDoubleDigit(now.getSeconds());
    return `${hour}:${minute}:${seconds}`
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

export function getMinuteLeftofYear() {
    return getSecondsLeftOfYear()/60;
}

function formatToDoubleDigit(i) {
    let s = i + "";
    let len = 2;
    while (s.length < len) s = "0" + s;
    return s;
}
