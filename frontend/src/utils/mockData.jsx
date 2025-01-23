const mockData = [
  {
    username: "johndoe",
    taskTitle: "Add market product",
    associated: "UI8 Market",
    progress: 100,
    status: "Completed",
    assignDate: "06/01/2022",
    comments: [
      {
        author: "manager1",
        text: "Great work!",
        date: "07/01/2022",
      },
    ],
  },
  {
    username: "janedoe",
    taskTitle: "Design new layout",
    associated: "Creative UI",
    progress: 70,
    status: "Onprogress",
    assignDate: "15/02/2022",
    comments: [
      {
        author: "lead2",
        text: "Looking good, keep it up!",
        date: "20/02/2022",
      },
    ],
  },
  {
    username: "michaelb",
    taskTitle: "Write documentation",
    associated: "Tech Docs",
    progress: 50,
    status: "Onprogress",
    assignDate: "20/03/2022",
    comments: [
      {
        author: "editor1",
        text: "Halfway there!",
        date: "25/03/2022",
      },
    ],
  },
  {
    username: "sarahj",
    taskTitle: "Fix UI bugs",
    associated: "Debug Team",
    progress: 30,
    status: "Onprogress",
    assignDate: "01/04/2022",
    comments: [
      {
        author: "teamlead",
        text: "Needs more work.",
        date: "05/04/2022",
      },
    ],
  },
  {
    username: "alexh",
    taskTitle: "Prepare presentation",
    associated: "Sales Team",
    progress: 90,
    status: "Onprogress",
    assignDate: "10/05/2022",
    comments: [
      {
        author: "manager2",
        text: "Almost done!",
        date: "15/05/2022",
      },
    ],
  },
  {
    username: "emilyc",
    taskTitle: "Create wireframe",
    associated: "Design Dept",
    progress: 40,
    status: "Onprogress",
    assignDate: "15/06/2022",
    comments: [
      {
        author: "designer1",
        text: "Looking good so far.",
        date: "20/06/2022",
      },
    ],
  },
  {
    username: "jasonk",
    taskTitle: "Conduct survey",
    associated: "Research",
    progress: 60,
    status: "Onprogress",
    assignDate: "01/07/2022",
    comments: [
      {
        author: "supervisor1",
        text: "Keep going!",
        date: "05/07/2022",
      },
    ],
  },
  {
    username: "lisat",
    taskTitle: "Develop prototype",
    associated: "Innovation",
    progress: 20,
    status: "Onprogress",
    assignDate: "10/08/2022",
    comments: [
      {
        author: "director1",
        text: "Early stages.",
        date: "15/08/2022",
      },
    ],
  },
  {
    username: "roberts",
    taskTitle: "Plan event",
    associated: "Marketing",
    progress: 100,
    status: "Completed",
    assignDate: "01/09/2022",
    comments: [
      {
        author: "event1",
        text: "Excellent execution!",
        date: "10/09/2022",
      },
    ],
  },
  {
    username: "nancyw",
    taskTitle: "Analyze data",
    associated: "Data Team",
    progress: 80,
    status: "Onprogress",
    assignDate: "15/10/2022",
    comments: [
      {
        author: "analyst1",
        text: "Nearly there.",
        date: "20/10/2022",
      },
    ],
  },
  {
    username: "stevec",
    taskTitle: "Review code",
    associated: "Dev Team",
    progress: 50,
    status: "Onprogress",
    assignDate: "01/11/2022",
    comments: [
      {
        author: "coder1",
        text: "Halfway reviewed.",
        date: "05/11/2022",
      },
    ],
  },
  {
    username: "angelad",
    taskTitle: "Test application",
    associated: "QA Team",
    progress: 60,
    status: "Onprogress",
    assignDate: "10/12/2022",
    comments: [
      {
        author: "tester1",
        text: "Tests ongoing.",
        date: "15/12/2022",
      },
    ],
  },
  {
    username: "kevinb",
    taskTitle: "Update website",
    associated: "Web Team",
    progress: 30,
    status: "Onprogress",
    assignDate: "15/01/2023",
    comments: [
      {
        author: "webmaster",
        text: "Website updated.",
        date: "20/01/2023",
      },
    ],
  },
  {
    username: "lauras",
    taskTitle: "Optimize SEO",
    associated: "SEO Team",
    progress: 70,
    status: "Onprogress",
    assignDate: "01/02/2023",
    comments: [
      {
        author: "seo1",
        text: "Good progress.",
        date: "05/02/2023",
      },
    ],
  },
  {
    username: "danielh",
    taskTitle: "Draft newsletter",
    associated: "Content",
    progress: 90,
    status: "Onprogress",
    assignDate: "10/03/2023",
    comments: [
      {
        author: "editor2",
        text: "Almost ready.",
        date: "15/03/2023",
      },
    ],
  },
  {
    username: "paulag",
    taskTitle: "Refine strategy",
    associated: "Biz Dev",
    progress: 40,
    status: "Onprogress",
    assignDate: "15/04/2023",
    comments: [
      {
        author: "strategist",
        text: "On the right track.",
        date: "20/04/2023",
      },
    ],
  },
  {
    username: "frankm",
    taskTitle: "Evaluate feedback",
    associated: "Support",
    progress: 100,
    status: "Completed",
    assignDate: "01/05/2023",
    comments: [
      {
        author: "support1",
        text: "Feedback evaluated.",
        date: "05/05/2023",
      },
    ],
  },
  {
    username: "karenp",
    taskTitle: "Implement features",
    associated: "DevOps",
    progress: 50,
    status: "Onprogress",
    assignDate: "10/06/2023",
    comments: [
      {
        author: "developer",
        text: "Halfway done.",
        date: "15/06/2023",
      },
    ],
  },
  {
    username: "tonyw",
    taskTitle: "Monitor servers",
    associated: "IT Dept",
    progress: 20,
    status: "Onprogress",
    assignDate: "15/07/2023",
    comments: [
      {
        author: "itadmin",
        text: "Initial stages.",
        date: "20/07/2023",
      },
    ],
  },
  {
    username: "annem",
    taskTitle: "Complete market analysis",
    associated: "Market Research",
    progress: 100,
    status: "Completed",
    assignDate: "05/01/2023",
    comments: [
      { author: "research1", text: "Impressive analysis!", date: "10/01/2023" },
    ],
  },
  {
    username: "davidh",
    taskTitle: "Finalize project report",
    associated: "Project Management",
    progress: 100,
    status: "Completed",
    assignDate: "10/02/2023",
    comments: [
      { author: "manager3", text: "Report completed!", date: "15/02/2023" },
    ],
  },
  {
    username: "wendyj",
    taskTitle: "Test new features",
    associated: "QA Dept",
    progress: 80,
    status: "Onprogress",
    assignDate: "12/03/2023",
    comments: [{ author: "qa2", text: "Almost there!", date: "20/03/2023" }],
  },
  {
    username: "brucel",
    taskTitle: "Conduct user interviews",
    associated: "User Research",
    progress: 100,
    status: "Completed",
    assignDate: "25/04/2023",
    comments: [
      { author: "ux1", text: "Interviews completed.", date: "30/04/2023" },
    ],
  },
  {
    username: "monicap",
    taskTitle: "Optimize database",
    associated: "Database Team",
    progress: 60,
    status: "Onprogress",
    assignDate: "01/05/2023",
    comments: [
      { author: "dbadmin", text: "Good progress!", date: "10/05/2023" },
    ],
  },
  {
    username: "bobs",
    taskTitle: "Create promotional video",
    associated: "Marketing",
    progress: 100,
    status: "Completed",
    assignDate: "15/06/2023",
    comments: [
      { author: "videoteam", text: "Video completed!", date: "20/06/2023" },
    ],
  },
  {
    username: "lisat",
    taskTitle: "Revise project plan",
    associated: "Planning Dept",
    progress: 70,
    status: "Onprogress",
    assignDate: "20/07/2023",
    comments: [
      { author: "planner2", text: "Getting close!", date: "25/07/2023" },
    ],
  },
  {
    username: "gregf",
    taskTitle: "Configure network",
    associated: "IT Dept",
    progress: 100,
    status: "Completed",
    assignDate: "01/08/2023",
    comments: [
      { author: "itadmin2", text: "Network configured.", date: "05/08/2023" },
    ],
  },
  {
    username: "claireg",
    taskTitle: "Develop new module",
    associated: "Software Dev",
    progress: 50,
    status: "Onprogress",
    assignDate: "15/09/2023",
    comments: [
      { author: "devlead", text: "Halfway done.", date: "20/09/2023" },
    ],
  },
  {
    username: "tomh",
    taskTitle: "Prepare training materials",
    associated: "HR",
    progress: 100,
    status: "Completed",
    assignDate: "01/10/2023",
    comments: [{ author: "hr1", text: "Materials ready.", date: "05/10/2023" }],
  },
  {
    username: "emilyr",
    taskTitle: "Plan product launch",
    associated: "Product Team",
    progress: 100,
    status: "Completed",
    assignDate: "10/11/2023",
    comments: [
      { author: "productmanager", text: "Launch planned.", date: "15/11/2023" },
    ],
  },
  {
    username: "jamesb",
    taskTitle: "Write user guide",
    associated: "Documentation",
    progress: 90,
    status: "Onprogress",
    assignDate: "15/12/2023",
    comments: [
      { author: "doceditor", text: "Almost complete.", date: "20/12/2023" },
    ],
  },
  {
    username: "jessicap",
    taskTitle: "Draft initial concept",
    associated: "Design Team",
    progress: 0,
    status: "Not started",
    assignDate: "01/11/2023",
    comments: [{ author: "lead3", text: "Just assigned.", date: "01/11/2023" }],
  },
  {
    username: "ryanm",
    taskTitle: "Gather requirements",
    associated: "Business Analysis",
    progress: 20,
    status: "Onprogress",
    assignDate: "10/12/2023",
    comments: [
      { author: "analyst2", text: "Starting phase.", date: "15/12/2023" },
    ],
  },
  {
    username: "helenk",
    taskTitle: "Initiate project planning",
    associated: "Project Team",
    progress: 30,
    status: "Onprogress",
    assignDate: "05/01/2024",
    comments: [
      { author: "planner3", text: "Initial planning.", date: "10/01/2024" },
    ],
  },
];

export const getMockData = async () => {
  return mockData;
};
