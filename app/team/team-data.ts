export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export const teamLeaderGroup: TeamMember[] = [
  { name: "Anis", role: "Team Leader", image: "/team-leader-anis.png" },
  { name: "Vicky", role: "Team Manager", image: "/team-manager-vicky.png" },
  { name: "Bryan", role: "Team Leader", image: "/team-leader-bryan.png" },
];

export const financialStaffGroup: TeamMember[] = [
  { name: "Alex", role: "Financial Plan", image: "/financial-plan-alex.png" },
  { name: "Ashikin", role: "Financial Plan", image: "/financial-plan-ashikin.png" },
  { name: "Faten", role: "Financial Plan", image: "/financial-plan-faten.png" },
  { name: "Ikhwan", role: "Financial Plan", image: "/financial-plan-ikhwan.png" },
  { name: "Izzah", role: "Financial Plan", image: "/financial-plan-izzah.png" },
  { name: "Jeremy", role: "Financial Plan", image: "/financial-plan-jeremy.png" },
  { name: "Nina", role: "Financial Plan", image: "/financial-plan-nina.png" },
  { name: "Nurul", role: "Financial Plan", image: "/financial-plan-nurul.png" },
  { name: "Shima", role: "Financial Plan", image: "/financial-plan-shima.png" },
  { name: "Zane", role: "Financial Plan", image: "/financial-plan-zane.png" },
];

export const operationStaffGroup: TeamMember[] = [
  { name: "Hazim", role: "Social Media Admin", image: "/social-media-admin-hazim.png" },
  { name: "Edayu", role: "Admin", image: "/admin-edayu.png" },
  { name: "Jeney", role: "Admin", image: "/admin-jeney.png" },
  { name: "Andy", role: "Content Marketing", image: "/content-marketing-andy.png" },
  { name: "Jun", role: "Financial Operation", image: "/financial-operation-jun.png" },
  { name: "Kenneth", role: "Financial Operation", image: "/financial-operation-kenneth.png" },
  { name: "Lilin", role: "Human Resources", image: "/human-resources-lilin.png" },
];

export const totalStaffCount = teamLeaderGroup.length + financialStaffGroup.length + operationStaffGroup.length;
