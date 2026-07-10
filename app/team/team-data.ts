export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export const executiveManagementGroup: TeamMember[] = [
  { name: "Weng", role: "Chief Operating Officer", image: "/Weng-Chief-Operating-Officer.png" },
  { name: "David", role: "Chief Financial Officer", image: "/Chief-Financial-Officer-David.png" },
];

export const teamLeadershipGroup: TeamMember[] = [
  { name: "Vicki", role: "Team Manager", image: "/Vicki-Team-Manager.png" },
  { name: "Anis", role: "Team Leader", image: "/Team-Leader-Anis.png" },
  { name: "Bryan", role: "Team Leader", image: "/Team-Leader-Bryan.png" },
];

export const financialPlanningGroup: TeamMember[] = [
  { name: "Alex", role: "Financial Plan", image: "/Financial-Plan-Alex.png" },
  { name: "Ashikin", role: "Financial Plan", image: "/Financial-Plan-Ashikin.png" },
  { name: "Christine", role: "Financial Plan", image: "/Financial-Plan-Christine.png" },
  { name: "Daisy", role: "Financial Plan", image: "/Financial-Plan-Daisy.png" },
  { name: "Faten", role: "Financial Plan", image: "/Financial-Plan-Faten.png" },
  { name: "Ikhwan", role: "Financial Plan", image: "/Financial-Plan-Ikhwan.png" },
  { name: "Izzah", role: "Financial Plan", image: "/Financial-Plan-Izzah.png" },
  { name: "Jason", role: "Financial Plan", image: "/Financial-Plan-Jason.png" },
  { name: "Jasper", role: "Financial Plan", image: "/Financial-Plan-Jasper.png" },
  { name: "Jeremy", role: "Financial Plan", image: "/Financial-Plan-Jeremy.png" },
  { name: "Jessica", role: "Financial Plan", image: "/Financial-Plan-Jessica.png" },
  { name: "Nina", role: "Financial Plan", image: "/Financial-Plan-Nina.png" },
  { name: "Nurul", role: "Financial Plan", image: "/Financial-Plan-Nurul.png" },
  { name: "Shima", role: "Financial Plan", image: "/Financial-Plan-Shima.png" },
  { name: "Zane", role: "Financial Plan", image: "/Zane-Financial-Plan.png" },
];

export const operationsSupportGroup: TeamMember[] = [
  { name: "Edayu", role: "Admin", image: "/Admin-Edayu.png" },
  { name: "Jeney", role: "Admin", image: "/Admin-Jeney.png" },
  { name: "Andy", role: "Content Marketing", image: "/Content-Marketing-Andy.png" },
  { name: "Jun", role: "Financial Operation", image: "/Financial-Operation-Jun.png" },
  { name: "Kenneth", role: "Financial Operation", image: "/Financial-Operation-Kenneth.png" },
  { name: "Elaine", role: "Human Resources", image: "/Human-Resources-Elaine.png" },
  { name: "Hazim", role: "Social Media Admin", image: "/Social-Media-Admin-Hazim.png" },
];

export const totalStaffCount =
  executiveManagementGroup.length +
  teamLeadershipGroup.length +
  financialPlanningGroup.length +
  operationsSupportGroup.length;
