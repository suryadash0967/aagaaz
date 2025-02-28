import React, { useState, useEffect } from "react";
import moment from "moment";

const Countdown = () => {
    const targetDate = moment("2025-03-01 10:00:00", "YYYY-MM-DD HH:mm:ss");

    const [time, setTime] = useState({
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = moment();
            const countdown = moment.duration(targetDate.diff(now));

            if (countdown.asMilliseconds() <= 0) {
                clearInterval(interval);
                setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTime({
                    days: countdown.days(),
                    hours: countdown.hours(),
                    minutes: countdown.minutes(),
                    seconds: countdown.seconds()
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const { days, hours, minutes, seconds } = time;

    // Adjust the mapping so the circle empties as time progresses
    const daysRadius = mapNumber(days, 0, 30, 360, 0);
    const hoursRadius = mapNumber(hours, 0, 24, 360, 0);
    const minutesRadius = mapNumber(minutes, 0, 60, 360, 0);
    const secondsRadius = mapNumber(seconds, 0, 60, 360, 0);

    return (
        <div className="countdown-container">
            <h1 style={{ marginBottom: "2rem" }}>T-MINUS</h1>
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
        <path fill="none" stroke="#fff" strokeWidth="8" d={describeArc(100, 100, 96, 0, radius)} />
    </svg>
);

// Adjust the map function for countdown to decrease the value
function mapNumber(number, inMin, inMax, outMin, outMax) {
    return ((inMax - number) * (outMax - outMin)) / (inMax - inMin) + outMin;
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
