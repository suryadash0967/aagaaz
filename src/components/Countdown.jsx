import React, { useState, useEffect } from "react";
import moment from "moment";

const Countdown = () => {
	const targetDate = moment("2025-03-01 10:00:00", "YYYY-MM-DD HH:mm:ss");

	const [time, setTime] = useState({
		months: undefined,
		days: undefined,
		hours: undefined,
		minutes: undefined,
		seconds: undefined,
	});    useEffect(() => {
        const interval = setInterval(() => {
            const now = moment();
            // Since the event has passed, we want to count up from the event date
            const timePassed = moment.duration(now.diff(targetDate));
            
            setTime({
                months: timePassed.months(),
                days: timePassed.days(),
                hours: timePassed.hours(),
                minutes: timePassed.minutes(),
                seconds: timePassed.seconds(),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

	const { months, days, hours, minutes, seconds } = time;
	const monthsRadius = mapNumber(months, 12, 0, 0, 360);
	const daysRadius = mapNumber(days, 30, 0, 0, 360);
	const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
	const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
	const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

	return (<div className="countdown-container">
			<h1 style={{ marginBottom: "2rem" }}>T-PLUS</h1>
			<div className="countdown-wrapper">
				{months !== undefined && <CountdownItem label="Months" value={months} radius={monthsRadius} />}
				{days !== undefined && <CountdownItem label="Days" value={days} radius={daysRadius} />}
				{hours !== undefined && <CountdownItem label="Hours" value={hours} radius={hoursRadius} />}
				{minutes !== undefined && <CountdownItem label="Minutes" value={minutes} radius={minutesRadius} />}
				{seconds !== undefined && <CountdownItem label="Seconds" value={seconds} radius={secondsRadius} />}
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
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// Convert polar coordinates to cartesian
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
	const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
	return {
		x: centerX + radius * Math.cos(angleInRadians),
		y: centerY + radius * Math.sin(angleInRadians),
	};
}

// Create SVG Arc Path
function describeArc(x, y, radius, startAngle, endAngle) {
	const start = polarToCartesian(x, y, radius, startAngle);
	const end = polarToCartesian(x, y, radius, endAngle);
	const largeArcFlag = endAngle - startAngle <= 180 ? "1" : "0";

	return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

export default Countdown;
