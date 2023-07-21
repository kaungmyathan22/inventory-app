import EmailIcon from "../../../shared/Icon/EmailIcon";
import Star from "../../../shared/Icon/Star";
import { PrimaryButton } from "../../../shared/PrimaryButton";
import AuthLayout from "../components/Layout";

const Login = () => {
  return (
    <AuthLayout
      left={
        <div className="flex flex-col justify-between w-full h-full bg-primary-900">
          {/* <Logo  */}
          <div className="p-8">
            <img
              src={"/assets/klink.png"}
              className="w-[152px] h-[35px] bg-contain"
            />
          </div>
          <div className="flex flex-col items-center w-full gap-x-1 gap-y-8">
            <div className="flex items-center gap-x-1">
              {Array(5)
                .fill(0)
                .map((index) => (
                  <Star key={index} />
                ))}
            </div>
            <div className="max-w-[592px] mx-auto text-center text-white text-3xl font-medium leading-9">
              KLink has saved us thousands of hours of work. We’re able to spin
              up projects and features much faster.
            </div>
            <div className="flex flex-col items-center text-white">
              <img src="/assets/person.png" alt="Lori Bryson" />
              <p className="mt-4 mb-1 text-base font-medium leading-6">
                Lori Bryson
              </p>
              <p className="text-sm font-medium leading-5 text-center text-primary-200">
                Product Designer, Sisyphus
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between p-8 text-primary-200">
            <p>© klinkenterprise.com</p>
            <div className="flex items-center gap-x-2">
              <EmailIcon />
              <p>help@klinkenterprise.com</p>
            </div>
          </div>
        </div>
      }
      right={
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-[360px]">
            <div className="flex flex-col mb-10 gap-y-3">
              <h5 className="text-4xl font-semibold leading-10 text-gray-900 ">
                Log in
              </h5>
              <p className="text-base font-normal leading-6 text-gray-500">
                Welcome back! Please enter your details.
              </p>
            </div>
            <div className="flex flex-col mb-6 gap-y-5">
              <div className="flex flex-col gap-y-2">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input"
                />
              </div>
            </div>
            <PrimaryButton isLoading={false}>Sign In</PrimaryButton>
          </div>
        </div>
      }
    />
  );
};

export default Login;
