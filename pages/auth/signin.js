import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";
function signIn({ providers }) {
  return (
    <>
      <Header />
      <section className="min-h-screen flex justify-center place-items-center">
        <div className="flex flex-col justify-center place-items-center border-2 border-gray-200 max-w-md  py-20 items-center -mt-20 px-14 text-center">
          <img
            className="w-80"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            alt=""
          />
          <p>This is not a REAL app. It is for educational purposes only</p>
          <div className="mt-40">
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  className="p-3 bg-blue-500 rounded-lg text-white"
                  onClick={() =>
                    SignIntoProvider(provider.id, { callbackUrl: "/" })
                  }
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default signIn;
