import html2canvas from "html2canvas";

import type { Slug } from "~/constants";

export const getUnivSlug = (name: string): Slug => {
  switch (name) {
    case "명지대학교":
      return "mju";
    case "을지대학교":
      return "eulji";
    case "한국외국어대학교 글로벌":
      return "hufs";
    case "한양대학교 에리카":
      return "erica";
    default:
      throw Error("Unexpected input");
  }
};

export const createImageBlobFromRef = async (ref: React.RefObject<HTMLElement>) => {
  const canvas = await html2canvas(ref.current!);
  return canvas.toDataURL("image/png", 1.0);
};

// client에서만 사용 가능
export const downloadImgFromBlob = (blob: string, fileName: string) => {
  const fakeLink = document.createElement("a");
  fakeLink.style.display = "none";
  fakeLink.download = fileName;

  fakeLink.href = blob;

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);

  fakeLink.remove();
};
