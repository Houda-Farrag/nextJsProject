type AnimatedCircularProgressProps = {
    percentage: number;
    radius?: number;
    strokeWidth?: number;
    strokeColor?: string;
    trailColor?: string;
    size?: number;
    transitionDuration?: string;
    customClass?: string;
};

const AnimatedCircularProgress: React.FC<AnimatedCircularProgressProps> = ({
    percentage,
    radius = 60,
    strokeWidth = 10,
    strokeColor = 'blue',
    trailColor = '#e6e6e6',
    size = 150,
    transitionDuration = '0.5s',
    customClass=""
}) => {
    const normalizedRadius = radius;
    const circumference = 2 * Math.PI * normalizedRadius;
    const offset = circumference - (percentage / 100) * circumference;
    const center = size / 2;

    return (
        <div className={`${customClass}`}>
            <svg width={size} height={size}>
                <circle
                    cx={center}
                    cy={center}
                    r={normalizedRadius}
                    stroke={trailColor}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                />
                <circle
                    cx={center}
                    cy={center}
                    r={normalizedRadius}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    style={{
                        strokeDasharray: `${circumference}`,
                        strokeDashoffset: `${offset}`,
                        transition: `stroke-dashoffset ${transitionDuration} ease-in-out`,
                    }}
                />
            </svg>
        </div>
    );
};
export default AnimatedCircularProgress