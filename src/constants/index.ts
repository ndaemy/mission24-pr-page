export type Slug = "mju" | "eulji" | "hufs" | "erica";

export type Univ = {
  slug: Slug;
  univName: string;
  link: string;
};

export const univInfo: Univ[] = [
  { slug: "mju", univName: "명지대학교", link: "https://www.instagram.com/mju_likelion/" },
  { slug: "eulji", univName: "을지대학교", link: "https://www.instagram.com/likelion_eulji/" },
  {
    slug: "hufs",
    univName: "한국외국어대학교 글로벌",
    link: "https://www.instagram.com/hufsglobal_likelion/",
  },
  {
    slug: "erica",
    univName: "한양대학교 에리카",
    link: "https://www.instagram.com/likelion_erica/",
  },
];
