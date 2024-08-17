import Header from "../components/Header";
import Hero from "../components/Hero";
import ExploreMenu from "../components/ExploreMenu";

import { Outlet } from "react-router-dom";
import useSignIn from "../services/useSignIn";

import AuthForm from "../components/AuthForm";
import useScrollStore from "../services/useScrollStore";

const Layout = () => {
  const { signIn } = useSignIn();
  const { sectionId } = useScrollStore();

  console.log(signIn);
  return (
    <>
      <div className="relative">
        <div className=" w-[93%] lg:w-[80%] mx-auto my-0">
          <div className="mb-10 relative">
            <Header />
          </div>
          <div id={sectionId || undefined} className="mb-10">
            <Hero />
          </div>
          <div className="mb-10">
            <ExploreMenu />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
        {signIn && (
          <div className="fixed z-[200] w-full h-[100vh] bg-[#00000052] top-0 left-0 flex justify-center items-center">
            <AuthForm />
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;

{
  /* <div>
  <Dishes />
</div>; */
}
