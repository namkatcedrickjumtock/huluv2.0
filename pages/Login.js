import Image from "next/image";
import { ShieldCheckIcon } from "@heroicons/react/solid";
import { LoginIcon } from "@heroicons/react/outline";
import { signIn} from "next-auth/react";


const Login = () => {
  return (
    <div className="grid place-items-center ">
      <Image
        height={300}
        width={300}
        objectFit={"contain"}
        alt={"profile-pic"}
        src={"https://links.papareact.com/ua6"}
      />
      <div className="flex space-x-5">
        <h3
          className="tex-center mt-5 border-2 rounded-md flex text-white cursor-pointer p-3 hover:bg-gray-800"
          onClick={() => signIn('facebook')}
        >
          <ShieldCheckIcon className="h-5 px-2" />
          Login with facebook
        </h3>
        <h3
          className="tex-center mt-5 border-2 rounded-md text-white cursor-pointer flex space-x-1 p-3 hover:bg-gray-800"
          onClick={() => signIn('google')}
        >
          <ShieldCheckIcon className="h-5 px-2" />
          Login with Google
        </h3>
      </div>
    </div>
  );
};

export default Login;
