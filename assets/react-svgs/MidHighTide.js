import * as React from "react";

function SvgMidHighTide(props) {
  return (
    <svg width={75} height={75} {...props}>
      <defs>
        <style>
          {".mid-high-tide_svg__f{fill:none;stroke:#f0f;stroke-linejoin:bevel}"}
        </style>
      </defs>
      <path
        d="M63.29 20.652h0"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#2f8dde"
        fill="none"
      />
      <circle cx={37.5} cy={37.5} r={37.5} fill="#f1f9ff" />
      <path
        d="M74.13 45.8a37.305 37.305 0 01-11.681 20.68l-.643.52H15.15A37.278 37.278 0 011.17 42.28C3.981 44.81 7.631 47 11.881 47c10.188 0 16.911-12.49 16.911-12.49S35.525 22.07 45.659 22s16.965 12.51 16.965 12.51 4.413 8.15 11.506 11.29z"
        fill="#2f8dde"
      />
      <path
        d="M44.772 21.283h0"
        stroke="#bce0fd"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M.36 45.48c2.614 16.442 17.614 28.836 35.687 29.488S70.132 64.343 74.14 48.14c-7.424-2.86-12.072-10.77-12.072-10.77S55.2 25.64 44.8 25.58 27.551 37.37 27.551 37.37 20.65 49.1 10.287 49.16A16.791 16.791 0 01.36 45.48z"
        fill="#bce0fd"
      />
      <path className="mid-high-tide_svg__f" d="M28.261 1v73M46.739 1v73" />
    </svg>
  );
}

export default SvgMidHighTide;
