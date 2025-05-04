import { ConfigProvider, Divider } from "antd";
import IconButton from "./IconButton";

import DarkLogo from "../assets/dark-logo.svg";
import TikTokIcon from "../assets/tik-tok.svg";
import FacebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import YoutubeIcon from "../assets/youtube.svg";

export type CopyrightProps = {
  links: {
    title: string;
  }[];
};

export default function Copyright(props: CopyrightProps) {
  return (
    <div className="footer">
      <div
        className="navbar"
        style={{ backgroundColor: "rgba(38, 37, 34, 1)", height: "85px" }}
      >
        <IconButton
          src={DarkLogo}
          text="ReciBook"
          textColor={"rgba(240, 235, 225, 1)"}
        />
        <div className="footer-content">
          {props.links.map((item, idx) => (
            <div key={idx} className="links-action">
              <p className="link-text link-text-white">{item.title}</p>
              {idx !== props.links.length - 1 && (
                <ConfigProvider
                  theme={{
                    token: {
                      colorSplit: "rgba(240, 235, 225, 0.08)",
                    },
                  }}
                >
                  <Divider type="vertical" />
                </ConfigProvider>
              )}
            </div>
          ))}
        </div>
        <div className="navbar-right-content">
          <img src={TikTokIcon} alt="Tik Tok" />
          <img src={FacebookIcon} alt="Facebook" />
          <img src={InstagramIcon} alt="Instagram" />
          <img src={YoutubeIcon} alt="Youtube" />
        </div>
      </div>
      <div className="copyright-content">
        <ConfigProvider
          theme={{
            token: {
              colorSplit: "rgba(240, 235, 225, 0.08)",
            },
          }}
        >
          <Divider />
          <p className="link-text" style={{ margin: "-5px" }}>
            Copyright: ©2025 ReciBook
          </p>
        </ConfigProvider>
      </div>
    </div>
  );
}
