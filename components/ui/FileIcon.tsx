import React, { FC } from "react";

import iconDarkHtml from "./assets/icon_dark_html.svg";
import iconDarkJpg from "./assets/icon_dark_jpg.svg";
import iconDarkMov from "./assets/icon_dark_mov.svg";
import iconDarkMp3 from "./assets/icon_dark_mp3.svg";
import iconDarkMp4 from "./assets/icon_dark_mp4.svg";
import iconDarkPng from "./assets/icon_dark_png.svg";
import iconDarkSvg from "./assets/icon_dark_svg.svg";
import iconDarkWav from "./assets/icon_dark_wav.svg";
import iconDarkXml from "./assets/icon_dark_xml.svg";

import iconLightHtml from "./assets/icon_light_html.svg";
import iconLightJpg from "./assets/icon_light_jpg.svg";
import iconLightMov from "./assets/icon_light_mov.svg";
import iconLightMp3 from "./assets/icon_light_mp3.svg";
import iconLightMp4 from "./assets/icon_light_mp4.svg";
import iconLightPng from "./assets/icon_light_png.svg";
import iconLightSvg from "./assets/icon_light_svg.svg";
import iconLightWav from "./assets/icon_light_wav.svg";
import iconLightXml from "./assets/icon_light_xml.svg";
import Image from "next/image";

export type fileName =
  | "html"
  | "jpg"
  | "mov"
  | "mp3"
  | "mp4"
  | "png"
  | "svg"
  | "wav"
  | "xml";

interface FileIconProps {
  theme?: "dark" | "light";
  fileName: fileName;
}

const icons = {
  dark: {
    html: iconDarkHtml,
    jpg: iconDarkJpg,
    mov: iconDarkMov,
    mp3: iconDarkMp3,
    mp4: iconDarkMp4,
    png: iconDarkPng,
    svg: iconDarkSvg,
    wav: iconDarkWav,
    xml: iconDarkXml,
  },
  light: {
    html: iconLightHtml,
    jpg: iconLightJpg,
    mov: iconLightMov,
    mp3: iconLightMp3,
    mp4: iconLightMp4,
    png: iconLightPng,
    svg: iconLightSvg,
    wav: iconLightWav,
    xml: iconLightXml,
  },
};

const FileIcon: FC<FileIconProps> = ({ theme = 'dark', fileName }) => {
  const selectedIcon = icons[theme][fileName];

  return (
    <div>
      {selectedIcon ? (
        <Image src={selectedIcon} alt={`${theme} ${fileName} icon`} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default FileIcon;
