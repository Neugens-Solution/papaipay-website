export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export const teamLeaderGroup: TeamMember[] = [
  { name: "Weng", role: "Chief Operating Officer", image: "/chief-operating-officer-weng.png" },
  { name: "David", role: "Chief Financial Officer", image: "/chief-financial-officer-david.png" },
  { name: "Vicki", role: "Team Manager", image: "/team-manager-vicky.png" },
  { name: "Anis", role: "Team Leader", image: "/team-leader-anis.png" },
  { name: "Bryan", role: "Team Leader", image: "/team-leader-bryan.png" },
];

export const financialStaffGroup: TeamMember[] = [
  { name: "Alex", role: "Financial Plan", image: "/financial-plan-alex.png" },
  { name: "Ashikin", role: "Financial Plan", image: "/financial-plan-ashikin.png" },
  { name: "Christine", role: "Financial Plan", image: "/financial-plan-christine.png" },
  { name: "Daisy", role: "Financial Plan", image: "/financial-plan-daisy.png" },
  { name: "Faten", role: "Financial Plan", image: "/financial-plan-faten.png" },
  { name: "Ikhwan", role: "Financial Plan", image: "/financial-plan-ikhwan.png" },
  { name: "Izzah", role: "Financial Plan", image: "/financial-plan-izzah.png" },
  { name: "Jason", role: "Financial Plan", image: "/financial-plan-jason.png" },
  { name: "Jasper", role: "Financial Plan", image: "/financial-plan-jasper.png" },
  { name: "Jeremy", role: "Financial Plan", image: "/financial-plan-jeremy.png" },
  { name: "Jessica", role: "Financial Plan", image: "/financial-plan-jessica.png" },
  { name: "Nina", role: "Financial Plan", image: "/financial-plan-nina.png" },
  { name: "Nurul", role: "Financial Plan", image: "/financial-plan-nurul.png" },
  { name: "Shima", role: "Financial Plan", image: "/financial-plan-shima.png" },
  { name: "Zane", role: "Financial Plan", image: "/financial-plan-zane.png" },
];

export const operationStaffGroup: TeamMember[] = [
  { name: "Edayu", role: "Admin", image: "/admin-edayu.png" },
  { name: "Jeney", role: "Admin", image: "/admin-jeney.png" },
  { name: "Andy", role: "Content Marketing", image: "/content-marketing-andy.png" },
  { name: "Jun", role: "Financial Operation", image: "/financial-operation-jun.png" },
  { name: "Kenneth", role: "Financial Operation", image: "/financial-operation-kenneth.png" },
  { name: "Elaine", role: "Human Resources", image: "/human-resources-elaine.png" },
  { name: "Hazim", role: "Social Media Admin", image: "/social-media-admin-hazim.png" },
];

export const totalStaffCount = teamLeaderGroup.length + financialStaffGroup.length + operationStaffGroup.length;
