import { Loader } from "@/shared/Loader";
import useContainer from "./useContainer";

const Routes = () => {
  const { isLoading, router } = useContainer();
  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loader className="h-[40px] w-[40px] border-black " />
      </div>
    );
  }
  return router;
};

export default Routes;
