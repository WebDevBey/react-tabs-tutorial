import Tabs from "./components/Tabs";

function App() {
  const tabs = [
    {
      label: "Profile",
      content: {
        title: "User Profile",
        description:
          "Manage and update your personal information, avatar, and account preferences. This section allows you to control your visibility settings, configure your bio, and manage connected social media accounts. All changes are saved automatically across all your devices.",
      },
    },
    {
      label: "Dashboard",
      content: {
        title: "Analytics Dashboard",
        description:
          "Gain valuable insights with our comprehensive analytics suite. Track your monthly performance metrics, monitor growth trends, and compare current statistics with historical data. Customizable widgets let you focus on the KPIs that matter most to your workflow.",
      },
    },
    {
      label: "Notifications",
      content: {
        title: "Notification Center",
        description:
          "Take full control of your alert preferences with granular notification settings. Configure desktop, email, and mobile push notifications separately. Review your recent activity feed and set up smart filters to prioritize important alerts while minimizing distractions.",
      },
    },
    {
      label: "Security",
      content: {
        title: "Security Center",
        description:
          "Protect your account with our advanced security features. Enable two-factor authentication, review active login sessions across devices, and set up emergency recovery contacts. Our security dashboard provides real-time alerts about suspicious activity and data breaches.",
      },
    },
    {
      label: "Integrations",
      content: {
        title: "Integration Hub",
        description:
          "Expand your workflow capabilities by connecting with over 50+ third-party services. Our API-powered integrations allow seamless data synchronization with productivity tools, cloud storage providers, and marketing platforms. Set up automated triggers and actions to streamline your daily tasks.",
      },
    },
  ];
  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <h1 className="text-3xl font-bold text-indigo-400 mb-6">
        React Tabs Tutorial
      </h1>
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
