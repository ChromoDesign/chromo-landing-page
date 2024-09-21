import accountTreeSvg from "@material-symbols/svg-400/rounded/account_tree.svg?raw";
import apiSvg from "@material-symbols/svg-400/rounded/api.svg?raw";
import brushSvg from "@material-symbols/svg-400/rounded/brush.svg?raw";
import bugReportSvg from "@material-symbols/svg-400/rounded/bug_report.svg?raw";
import buildSvg from "@material-symbols/svg-400/rounded/build.svg?raw";
import captivePortalSvg from "@material-symbols/svg-400/rounded/captive_portal.svg?raw";
import codeSvg from "@material-symbols/svg-400/rounded/code.svg?raw";
import computerSvg from "@material-symbols/svg-400/rounded/computer.svg?raw";
import designServicesSvg from "@material-symbols/svg-400/rounded/design_services.svg?raw";
import developerModeSvg from "@material-symbols/svg-400/rounded/developer_mode.svg?raw";
import devicesSvg from "@material-symbols/svg-400/rounded/devices.svg?raw";
import dnsSvg from "@material-symbols/svg-400/rounded/dns.svg?raw";
import eventNoteSvg from "@material-symbols/svg-400/rounded/event_note.svg?raw";
import flashOnSvg from "@material-symbols/svg-400/rounded/flash_on.svg?raw";
import integrationInstructionsSvg from "@material-symbols/svg-400/rounded/integration_instructions.svg?raw";
import layersSvg from "@material-symbols/svg-400/rounded/layers.svg?raw";
import mobileFriendlySvg from "@material-symbols/svg-400/rounded/mobile_friendly.svg?raw";
import monitorHeartSvg from "@material-symbols/svg-400/rounded/monitor_heart.svg?raw";
import phoneAndroidSvg from "@material-symbols/svg-400/rounded/phone_android.svg?raw";
import phoneIphoneSvg from "@material-symbols/svg-400/rounded/phone_iphone.svg?raw";
import psychologySvg from "@material-symbols/svg-400/rounded/psychology_alt.svg?raw";
import routeSvg from "@material-symbols/svg-400/rounded/route.svg?raw";
import searchSvg from "@material-symbols/svg-400/rounded/search.svg?raw";
import searchInsightsSvg from "@material-symbols/svg-400/rounded/search_insights.svg?raw";
import securitySvg from "@material-symbols/svg-400/rounded/security.svg?raw";
import shoppingCartSvg from "@material-symbols/svg-400/rounded/shopping_cart.svg?raw";
import speedSvg from "@material-symbols/svg-400/rounded/speed.svg?raw";
import stackedBarChartSvg from "@material-symbols/svg-400/rounded/stacked_bar_chart.svg?raw";
import storageSvg from "@material-symbols/svg-400/rounded/storage.svg?raw";
import supportAgentSvg from "@material-symbols/svg-400/rounded/support_agent.svg?raw";
import taskAltSvg from "@material-symbols/svg-400/rounded/task_alt.svg?raw";
import touchAppSvg from "@material-symbols/svg-400/rounded/touch_app.svg?raw";
import trendingUpSvg from "@material-symbols/svg-400/rounded/trending_up.svg?raw";
import upgradeSvg from "@material-symbols/svg-400/rounded/upgrade.svg?raw";

type SolutionBulletPoint = {
  title: string;
  icon: string;
};

export type Solution = {
  title: string;
  description: string;
  color: "red" | "blue" | "green" | "yellow" | "purple" | "orange";
  icon: string;
  bulletPoints: [
    SolutionBulletPoint,
    SolutionBulletPoint,
    SolutionBulletPoint,
    SolutionBulletPoint,
    SolutionBulletPoint,
  ];
};

export const SOLUTIONS = [
  {
    title: "Website Development",
    description: "Custom, responsive websites tailored to your business.",
    color: "yellow",
    icon: computerSvg,
    bulletPoints: [
      { title: "Tailored web design solutions.", icon: captivePortalSvg },
      { title: "Seamless online shopping platforms.", icon: shoppingCartSvg },
      {
        title: "Content management systems setup.",
        icon: integrationInstructionsSvg,
      },
      { title: "SEO-friendly structures.", icon: searchSvg },
      { title: "Adaptable for all screen sizes.", icon: devicesSvg },
    ],
  },
  {
    title: "Mobile App Development",
    description: "Engaging mobile apps for iOS and Android.",
    color: "blue",
    icon: phoneIphoneSvg,
    bulletPoints: [
      {
        title: "Unified apps for multiple platforms.",
        icon: mobileFriendlySvg,
      },
      { title: "Dedicated iOS and Android builds.", icon: phoneAndroidSvg },
      { title: "Efficient third-party API integration.", icon: apiSvg },
      { title: "Smooth user interface design.", icon: buildSvg },
      { title: "Ongoing app maintenance.", icon: developerModeSvg },
    ],
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and visually appealing design solutions.",
    color: "red",
    icon: brushSvg,
    bulletPoints: [
      { title: "Wireframes & prototypes.", icon: layersSvg },
      { title: "Comprehensive user journey planning.", icon: routeSvg },
      { title: "Detailed high-fidelity design visuals.", icon: brushSvg },
      { title: "Engaging user interaction elements.", icon: touchAppSvg },
      { title: "In-depth user experience testing.", icon: taskAltSvg },
    ],
  },
  {
    title: "Ongoing Support",
    description:
      "Continuous maintenance and updates for your digital products.",
    color: "green",
    icon: psychologySvg,
    bulletPoints: [
      { title: "Consistent issue resolution.", icon: bugReportSvg },
      { title: "Software security enhancements.", icon: securitySvg },
      { title: "Continuous feature updates.", icon: upgradeSvg },
      { title: "Performance monitoring.", icon: monitorHeartSvg },
      { title: "24/7 tech support.", icon: supportAgentSvg },
    ],
  },
  {
    title: "Performance Improvements",
    description: "Optimizing speed and functionality for better performance.",
    icon: codeSvg,
    color: "orange",
    bulletPoints: [
      { title: "Speed optimization.", icon: speedSvg },
      { title: "Clean, efficient code refactoring.", icon: codeSvg },
      { title: "Server efficiency management.", icon: dnsSvg },
      { title: "Database tuning.", icon: storageSvg },
      { title: "Front-end performance boosts.", icon: flashOnSvg },
    ],
  },
  {
    title: "Consulting Services",
    description: "Expert advice to guide your digital strategy and projects.",
    icon: accountTreeSvg,
    color: "purple",
    bulletPoints: [
      { title: "Technology stack evaluation.", icon: stackedBarChartSvg },
      { title: "Strategic project roadmapping.", icon: eventNoteSvg },
      { title: "Insightful market analysis.", icon: searchInsightsSvg },
      { title: "Design audit for improvements.", icon: designServicesSvg },
      { title: "Actionable growth planning advice.", icon: trendingUpSvg },
    ],
  },
] as const satisfies Solution[];
