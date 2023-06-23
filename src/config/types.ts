export interface INavigationListItem {
  id: number;
  content: string;
  subList?: {
    id: number;
    content: string;
  }[];
}

export interface ICompaniesListItem {
  id: number;
  Icon: () => JSX.Element;
}

export interface ILeftRightSectionListItem {
  id: number;
  intro: string;
  p: string;
  heading: string;
  Image: () => JSX.Element;
}

export interface IMeetTheSuitListItem {
  id: number;
  src: string;
  p: string;
  link: string;
}

export interface ITestimonialListItem {
  id: number;
  src: string;
  name: string;
  title: string;
  quote: string;
}

export interface IGetStartedListItem {
  id: number;
  title: string;
  p: string;
  link: string;
  buttonText: string;
}

export interface IFooterNavigationListItem {
  id: number;
  content: string;
  subList: {
    id: number;
    content: string;
  }[];
}

export interface ImageListItem {
  id: number;
  src: string;
  alt: string;
}
