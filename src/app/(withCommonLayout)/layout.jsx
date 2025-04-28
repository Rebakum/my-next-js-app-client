import Navbar from "@/components/Shared/Navber";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default CommonLayout;
