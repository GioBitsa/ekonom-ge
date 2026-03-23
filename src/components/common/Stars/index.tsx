import React from "react";
import styles from "./Stars.module.scss";

interface StarsProps {
  rate: number; // e.g., 4
  total?: number; // default 5
}

const Stars: React.FC<StarsProps> = ({ rate, total = 5 }) => {
  return (
    <div className={styles.stars}>
      {Array.from({ length: total }).map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill={index < rate ? "#FFD700" : "#E0E0E0"} // gold or gray
        >
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.175L12 18.897l-7.336 3.855 1.402-8.175L.132 9.21l8.2-1.192z" />
        </svg>
      ))}
    </div>
  );
};

export default Stars;
