import React from "react"
import { mq, zIndex, fonts, colors } from '../style-vars';

export default function TopLogo () { // eslint-disable-line no-shadow
  return (
    <div className="top-logo">
			<img src="https://docs.mux.com/_next/image?url=%2Fimages%2Fmux-logo.png&w=128&q=75" width={56} height={20} alt="Mux logo - video home" />
			<h6>Docs</h6>
      <style jsx>{`
        .top-logo {
          position: sticky;
					height: 0px;
					margin: 25px 0px 35px 0px;
          background: ${colors.white};
					color: ${colors.gray22};
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        h6 {
					font-family: ${fonts.main};
          margin-left: 10px;
          color: ${colors.gray40};
          line-height: 2px;
          font-size: 18px;
          letter-spacing: -0.3px;
        }
      `}
      </style>
    </div>
  );
}