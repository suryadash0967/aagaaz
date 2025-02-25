import React, { useState, useEffect } from "react";
import moment from "moment";

const Countdown = ({ timeTillDate, timeFormat }) => {
    const [time, setTime] = useState({
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment.duration(then.diff(now));

            setTime({
                days: countdown.days(),
                hours: countdown.hours(),
                minutes: countdown.minutes(),
                seconds: countdown.seconds()
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [timeTillDate, timeFormat]);

    const { days, hours, minutes, seconds } = time;
    const daysRadius = mapNumber(days, 30, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

    return (
        <div className="countdown-container">
            <h1>Countdown</h1>
            <div className="countdown-wrapper">
                {days !== undefined && (
                    <CountdownItem label="Days" value={days} radius={daysRadius} />
                )}
                {hours !== undefined && (
                    <CountdownItem label="Hours" value={hours} radius={hoursRadius} />
                )}
                {minutes !== undefined && (
                    <CountdownItem label="Minutes" value={minutes} radius={minutesRadius} />
                )}
                {seconds !== undefined && (
                    <CountdownItem label="Seconds" value={seconds} radius={secondsRadius} />
                )}
            </div>
        </div>
    );
};

const CountdownItem = ({ label, value, radius }) => (
    <div className="countdown-item">
        <SVGCircle radius={radius} />
        {value} <span>{label}</span>
    </div>
);

const SVGCircle = ({ radius }) => (
    <svg className="countdown-svg">
        <path fill="none" stroke="#333" strokeWidth="4" d={describeArc(50, 50, 48, 0, radius)} />
    </svg>
);

function mapNumber(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// Convert polar coordinates to cartesian
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

// Create SVG Arc Path
function describeArc(x, y, radius, startAngle, endAngle) {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

export default Countdown;
