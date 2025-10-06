import { RotateLoader } from "react-spinners";

const PageLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#073F77]/5 bg-opacity-50">
      <RotateLoader color="#fff" size={15} />
    </div>
  );
};

export default PageLoader;
