import logo from "./images/logo.svg";
import facebook from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";
import pinterest from "./images/icon-pinterest.svg";
import instagram from "./images/icon-instagram.svg";
import imageInteractive from "./images/desktop/image-interactive.jpg";
import deepEarthDesktop from "./images/desktop/image-deep-earth.jpg";
import nightArcadeDesktop from "./images/desktop/image-night-arcade.jpg";
import soccerTeamDesktop from "./images/desktop/image-soccer-team.jpg";
import gridDesktop from "./images/desktop/image-grid.jpg";
import fromAboveDesktop from "./images/desktop/image-from-above.jpg";
import pocketBorealisDesktop from "./images/desktop/image-pocket-borealis.jpg";
import curiosityDesktop from "./images/desktop/image-curiosity.jpg";
import fisheyeDesktop from "./images/desktop/image-fisheye.jpg";
import deepEarthMobile from "./images/mobile/image-deep-earth.jpg";
import nightArcadeMobile from "./images/mobile/image-night-arcade.jpg";
import soccerTeamMobile from "./images/mobile/image-soccer-team.jpg";
import gridMobile from "./images/mobile/image-grid.jpg";
import fromAboveMobile from "./images/mobile/image-from-above.jpg";
import pocketBorealisMobile from "./images/mobile/image-pocket-borealis.jpg";
import curiosityMobile from "./images/mobile/image-curiosity.jpg";
import fisheyeMobile from "./images/mobile/image-fisheye.jpg";

export { logo };

export const navLinks = ["About", "Careers", "Events", "Products", "Support"];

export const heroText = "Impressive Experiences That Deliver";

export const feature = {
  image: imageInteractive,
  title: "The leader in interactive VR",
  description:
    "Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.",
};

export const creations = [
  { name: "Deep Earth", desktop: deepEarthDesktop, mobile: deepEarthMobile },
  { name: "Night Arcade", desktop: nightArcadeDesktop, mobile: nightArcadeMobile },
  { name: "Soccer Team VR", desktop: soccerTeamDesktop, mobile: soccerTeamMobile },
  { name: "The Grid", desktop: gridDesktop, mobile: gridMobile },
  { name: "From Up Above VR", desktop: fromAboveDesktop, mobile: fromAboveMobile },
  { name: "Pocket Borealis", desktop: pocketBorealisDesktop, mobile: pocketBorealisMobile },
  { name: "The Curiosity", desktop: curiosityDesktop, mobile: curiosityMobile },
  { name: "Make It Fisheye", desktop: fisheyeDesktop, mobile: fisheyeMobile },
];

export const socialIcons = [facebook, twitter, pinterest, instagram];