const SettingPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Setting Page</h1>
      <p className="text-center mt-4">
        This is the settings page where you can adjust your preferences.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl">Settings Options</h2>
        <ul className="list-disc list-inside">
          <li>Change Password</li>
          <li>Manage Notifications</li>
          <li>Privacy Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default SettingPage;
