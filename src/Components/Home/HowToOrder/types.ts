export type GuideIcon = "account" | "bag" | "card" | "heart";

export type GuideStep = {
  number: string;
  title: string;
  description: string;
  icon: GuideIcon;
};
