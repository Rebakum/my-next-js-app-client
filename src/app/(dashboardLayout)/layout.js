import Sidebar from "@/components/Shared/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

export default DashboardLayout;
