import FedEx from '../components/ui/Icons/Companies/FedEx';
import FordIcon from '../components/ui/Icons/Companies/FordIcon';
import GoogleIcon from '../components/ui/Icons/Companies/GoogleIcon';
import MicrosoftIcon from '../components/ui/Icons/Companies/MicrosoftIcon';
import NasaIcon from '../components/ui/Icons/Companies/NasaIcon';
import PhizerIcon from '../components/ui/Icons/Companies/PhizerIcon';
import ShopifyIcon from '../components/ui/Icons/Companies/ShopifyIcon';
import UnionBankIcon from '../components/ui/Icons/Companies/UnionBankIcon';
import UnitedIcon from '../components/ui/Icons/Companies/UnitedIcon';
import VolkswagenIcon from '../components/ui/Icons/Companies/VolkswagenIcon';
import FeatureImage from '../components/ui/Images/FeatureImage';
import JoinCommunityImage from '../components/ui/Images/JoinCommunityImage';
import LearnMoreImage from '../components/ui/Images/LearnMoreImage';
import LivePreviewImage from '../components/ui/Images/LivePreviewImage';
import SuperPowerImage from '../components/ui/Images/SuperpowerImage';
import {
  ICompaniesListItem,
  IGetStartedListItem,
  ILeftRightSectionListItem,
  IMeetTheSuitListItem,
  INavigationListItem,
  ITestimonialListItem,
} from './types';

export const navigationList: INavigationListItem[] = [
  {
    id: 0,
    content: 'Product',
    subList: [
      { id: 0, content: 'Figma' },
      { id: 1, content: 'FigJam' },
      { id: 2, content: 'Sketch' },
      { id: 3, content: 'Adobe XD' },
      { id: 4, content: 'Chrome' },
      { id: 5, content: 'FireFox' },
      { id: 6, content: 'Edge' },
      { id: 7, content: 'Safari' },
      { id: 8, content: 'Arc' },
      { id: 9, content: 'Brave' },
    ],
  },
  { id: 1, content: 'Pricing' },
  { id: 2, content: 'Blog' },
  { id: 3, content: 'Library' },
  { id: 4, content: 'Support' },
];

export const heroIntro = 'Introducing the all-new stark suite';
export const heroHeading = 'Supercharge Accessibility';
export const heroParagraph =
  'Tired of manually checking spreadsheets, messy handovers, and expensive retrofitting? Stark connects the tools you and your team already use in a streamlined end-to-end accessibility workflow you actually love.';
export const introducingHeading =
  'Introducing Sidekick <br /> Your new AI-powered accessibility <br /> assistant in Stark';
export const introducingParagraph =
  'Designing with accessibility in mind just got ten times faster. Automatically scan your Figma or Sketch files and, in only seconds, you’ll get suggestions for how to fix the accessibility issues in your design – no prior knowledge needed!';
export const speedHeading =
  'Speed up your accessibility <br /> workflow from months to minutes';
export const speedParagraph =
  'More than 40,000 designers, developers, product managers, and accessibility experts from over 12,000 companies use Stark’s suite of integrated accessibility tools in their daily product development cycle. Join them today!';

export const companiesList: ICompaniesListItem[] = [
  { id: 0, Icon: FedEx },
  { id: 1, Icon: FordIcon },
  { id: 2, Icon: GoogleIcon },
  { id: 3, Icon: MicrosoftIcon },
  { id: 4, Icon: NasaIcon },
  { id: 5, Icon: PhizerIcon },
  { id: 6, Icon: ShopifyIcon },
  { id: 7, Icon: UnionBankIcon },
  { id: 8, Icon: UnitedIcon },
  { id: 9, Icon: VolkswagenIcon },
];

export const leftRightList: ILeftRightSectionListItem[] = [
  {
    id: 0,
    intro: 'Meet your new superpower',
    heading: 'Create and test accessible designs in record time',
    p: 'Whether you’re building a website, online shop, mobile app, or SaaS product, Stark gives every designer, engineer, PM, and QA expert the manual and automated tools to make it accessible with ease.',
    Image: SuperPowerImage,
  },
  {
    id: 1,
    intro: 'Your team’s accessibility Toolbox',
    heading: 'Everything you need, right where you need it',
    p: 'From Contrast Checker with Color Suggestions over Alt-Text Annotations to Focus Order and more, Stark offers the fully integrated and automated tools to help you and your team design, build and test software that meets the latest accessibility standards right in your design app and browser of choice.',
    Image: FeatureImage,
  },
  {
    id: 2,
    intro: 'Train on the job',
    heading: 'Learn as you go',
    p: 'Stark is your accessibility sidekick. Learn best practices on the fly and get tips on how to fix any issues we find. We’ll take you from novice to expert while doing the heavy lifting in the background.',
    Image: LearnMoreImage,
  },
  {
    id: 3,
    intro: 'Live Preview',
    heading: 'Accessibility easy as 1, 2, 3',
    p: 'Stark simplifies and accelerates collaboration on accessibility issues between designers and developers. With Stark for your browser you can not only test and check for accessibility issues but apply color suggestions or typography improvements with Live Preview with a click.',
    Image: LivePreviewImage,
  },
];

export const joinCommunityContent: ILeftRightSectionListItem = {
  id: 4,
  intro: 'It takes a village',
  heading: 'Join the Stark community',
  p: 'Connect with a global community of experts from all industries and stay up to date with the largest collection of accessibility resources on the internet.',
  Image: JoinCommunityImage,
};

export const meetTheSuitList: IMeetTheSuitListItem[] = [
  {
    id: 0,
    src: 'https://images.getstark.co/marketing/platforms/mac.png',
    link: 'https://apps.apple.com/us/app/stark-your-accessibility-hub/id1624920264',
    p: 'Mac',
  },
  {
    id: 1,
    src: 'https://images.getstark.co/marketing/platforms/figma.png',
    link: 'https://www.figma.com/community/plugin/732603254453395948',
    p: 'Figma',
  },
  {
    id: 2,
    src: 'https://images.getstark.co/marketing/platforms/sketch.png',
    link: 'https://www.getstark.co/sketch/download',
    p: 'Sketch',
  },
  {
    id: 3,
    src: 'https://images.getstark.co/marketing/platforms/xd.png',
    link: 'https://xd.adobelanding.com/en/xd-plugin-download/?name=6cbf275e',
    p: 'Adobe XD',
  },
  {
    id: 4,
    src: 'https://images.getstark.co/marketing/platforms/chrome.png',
    link: 'https://chrome.google.com/webstore/detail/stark/fkfaapnmfippddbeemjjbclenphooipm',
    p: 'Chrome',
  },
  {
    id: 5,
    src: 'https://images.getstark.co/marketing/platforms/firefox.png',
    link: 'https://addons.mozilla.org/en-US/firefox/addon/stark-accessibility-checker/',
    p: 'Firefox',
  },
  {
    id: 6,
    src: 'https://images.getstark.co/marketing/platforms/edge.png',
    link: 'https://microsoftedge.microsoft.com/addons/detail/stark/idpodoagbkllmpdjdepbmlefgiblmnhl',
    p: 'Edge',
  },
  {
    id: 7,
    src: 'https://images.getstark.co/marketing/platforms/safari.png',
    link: 'https://apps.apple.com/us/app/stark-for-safari/id6444031666',
    p: 'Safari',
  },
  {
    id: 8,
    src: 'https://images.getstark.co/marketing/platforms/arc.png',
    link: 'https://chrome.google.com/webstore/detail/stark/fkfaapnmfippddbeemjjbclenphooipm',
    p: 'Arc',
  },
  {
    id: 9,
    src: 'https://images.getstark.co/marketing/platforms/brave.png',
    link: 'https://chrome.google.com/webstore/detail/stark/fkfaapnmfippddbeemjjbclenphooipm',
    p: 'Brave',
  },
];
// https://images.getstark.co/marketing/testimonials/johnny-hill.png

export const testimonialList: ITestimonialListItem[] = [
  {
    id: 0,
    src: 'https://images.getstark.co/marketing/testimonials/johnny-hill.png',
    name: 'Johnny Hill',
    title: 'UX Director at Knock, INC',
    quote: 'Everyone should be using Stark as part of their workflow',
  },
  {
    id: 1,
    src: 'https://images.getstark.co/marketing/testimonials/jon-fox.png',
    name: 'Jon Fox',
    title: 'Lead UX designer at LA VOTING SOLUTIONS',
    quote:
      '...a welcom tool set to make interesting, impactful designs that are also accessible.',
  },
  {
    id: 2,
    src: 'https://images.getstark.co/marketing/testimonials/emily-ching.png',
    name: 'Emily Ching',
    title: 'Head of the design at Marking CO',
    quote: 'Stark is my favorite plugin for Figma! I use it daily.',
  },
];

export const getStartedList: IGetStartedListItem[] = [
  {
    id: 0,
    title: 'Start with free account',
    p: 'Wherever you are in your accessibility journey, we believe you should have access to the best tools.',
    link: 'https://account.getstark.co/sign-in',
    buttonText: 'Create free account',
  },
  {
    id: 1,
    title: 'Download and install Stark',
    p: 'Download and install our plugins for Figma, Sketch, Adobe XD, as well as our browser extensions.',
    link: '#',
    buttonText: 'Download Stark',
  },
  {
    id: 2,
    title: "Go pro when you're ready",
    p: 'From Alt-Text and Typography to Touch Targets and Suggestions, there’s much more you can do with a Pro account.',
    link: 'https://www.getstark.co/pricing/',
    buttonText: 'Compare plans',
  },
];
