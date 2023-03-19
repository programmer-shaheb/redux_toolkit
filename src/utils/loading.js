const Loading = () => {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 24 24"
    //   width="24"
    //   height="24"
    // >
    //   <circle
    //     cx="12"
    //     cy="12"
    //     r="10"
    //     stroke="currentColor"
    //     strokeWidth="4"
    //     fill="none"
    //     strokeDasharray="24 24"
    //     strokeLinecap="round"
    //   >
    //     <animateTransform
    //       attributeName="transform"
    //       type="rotate"
    //       from="0 12 12"
    //       to="360 12 12"
    //       dur="1s"
    //       repeatCount="indefinite"
    //     />
    //   </circle>
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="50"
      height="50"
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke-width="5"
        stroke="#007aff"
        stroke-dasharray="31.42 31.42"
        transform="rotate(135 25 25)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default Loading;
