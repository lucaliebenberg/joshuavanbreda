import self from "../img/self.png";
import IceCream from "../img/Ice-Cream-U-Scream.png";
import JobHunter from "../img/JobHunter.png";
import LicensePlease from "../img/License-Please.png";
import OnTarget from "../img/On-Target.png";
import PathToMoney from "../img/Path-To-Money.png";
import PunishEmAll from "../img/Punish-Em-All.png";
import QualityCheck from "../img/QualityCheck.png";
import StackyCash from "../img/Stacky-Cash.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
// export let colors = ["rgb(0,255,0)", "rgb(0,225,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "joshua",
  lastName: "vanbreda",
  initials: "JvB", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Game Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🇿🇦 ",
      text: "based in SA",
    },
    {
      emoji: "💻 ",
      text: "Unity Developer @ Mesmerize",
    },
    {
      emoji: "📧",
      text: "joshuavanbreda@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/joshuavanbreda",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/joshua-van-breda-a09328209/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // {
    //   link: "https://github.com/joshuavanbreda",
    //   icon: "fa fa-github",
    //   label: "github",
    // },
    // {
    //   link: "https://www.linkedin.com/in/joshua-van-breda-a09328209/",
    //   icon: "fa fa-linkedin",
    //   label: "linkedin",
    // },
    // {
    //   link: "https://twitter.com",
    //   icon: "fa fa-twitter",
    //   label: "twitter",
    // },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! My name is Joshua, a recent BSc Game and Development graduate from Vega School in Cape Town.I’m currently looking for an opportunity in the game development & associated fields. I am friendly and easy to get along with. I consider myself to be a good team player. I enjoy keeping active and meeting new people. In my free-time I play club soccer and attend boxing. I look forward to connecting with like-minded games industry professionals here. Thank you for taking the time to view my profile!",
  skills: {
    proficientWith: [
      "c#",
      "unity",
      "adobe photoshop",
      "autodesk 3ds max",
      "game design",
      "blender",
      "animation",
      "adobe illustrator",
    ],
    exposedTo: ["2d animation", "branding & marketing", "open source coding"],
  },
  hobbies: [
    {
      label: "football",
      emoji: "⚽️ ",
    },
    {
      label: "gaming",
      emoji: "🎮",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "music",
      emoji: "🎵 ",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Ice Cream You Scream",
      live: "https://play.google.com/store/apps/details?id=com.KneeJerk.IceCreamUScream", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/joshuavanbreda/IceCreamUScreamNEW", // this should be a link to the **repository** of the project, where the code is hosted.
      image: IceCream,
    },
    {
      title: "Job Hunter",
      live: "https://play.google.com/store/apps/details?id=com.KneeJerk.JobHunter",
      source: "https://github.com/joshuavanbreda/JobHunter",
      image: JobHunter,
    },
    {
      title: "License Please",
      live: "https://play.google.com/store/apps/details?id=com.KneeJerk.LicensePlease",
      source: "https://github.com/joshuavanbreda/License-Please",
      image: LicensePlease,
    },
    {
      title: "On Target",
      live: "https://play.google.com/store/apps/details?id=com.KneeJerk.OnTarget",
      source: "https://github.com/joshuavanbreda/On-Target-Dev",
      image: OnTarget,
    },
    {
      title: "Path To Money",
      live: "https://play.google.com/store/apps/details?id=com.KneeJerk.PathToMoney",
      source: "https://github.com/joshuavanbreda/PathToMoney",
      image: PathToMoney,
    },
    {
      title: "Punish 'Em All",
      live: "https://apps.apple.com/us/app/punish-em-all/id1638398230",
      source: "https://github.com/joshuavanbreda/",
      image: PunishEmAll,
    },
    {
      title: "Quality Check",
      live: "https://play.google.com/store/apps/details?id=com.mesmerize.qualitycheck",
      source: "https://github.com/joshuavanbreda/",
      image: QualityCheck,
    },
    {
      title: "Stacky Cash",
      live: "https://play.google.com/store/apps/details?id=com.KneeJerk.StackyCash",
      source: "https://github.com/joshuavanbreda/StackyCash",
      image: StackyCash,
    },
  ],
};
