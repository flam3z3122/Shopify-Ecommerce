import { Layout } from "../../components/Layout";
import "./styles.css";

function MyAccount() {
  return (
    <>
      <Layout>
        <p className=" m-4">My Account</p>
        <div className="flex flex-col items-center justify-center w-2/4 h-3/4 border border-black rounded-lg MyAccount p-8 my-5">
          <figure className=" flex items-center justify-center flex-col">
            <p className="mb-5 mt-5 font-medium">Created by:</p>

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWuUeyf4IfYcDGkXRf0kp96vVepmNxtK4Vc-29DA6PMw&s"
              alt="flam3z3122"
              className="border border-slate-950 rounded-full"
            />

            <p className="font-bold mt-2 mb-2">
              Jitendra Choudhary
            </p>
            <a
              href="https://github.com/flam3z3122"
              className=" font-light  underline"
            >
              @flam3z3122👈
            </a>
          </figure>
        </div>
      </Layout>
    </>
  );
}

export default MyAccount;
