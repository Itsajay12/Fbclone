import "./App.css";

function App() {
  return (
    <>
      <div className=" bg-gray-200 md:h-[90vh]">
        <div className="mx-10 flex  flex-col md:flex-row md:pt-20">
          <div className="">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
              alt=""
              className=" w-[350px]"
            />
            <p className=" font-medium px-8 text-xl w-5/6 md:text-2xl  md:w-2/3">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
          <div className=" flex flex-col justify-between ">
            <div className=" bg-white shadow-2xl rounded-xl mt-5">
              <form
                action=""
                className="p-3 flex flex-col  justify-between gap-7 md:w-96"
              >
                <input
                  type="email"
                  className="border h-10 rounded-lg px-3"
                  placeholder="Enter email"
                />
                <input
                  type="password"
                  className="border h-10 rounded-lg px-3"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2  "
                >
                  <svg
                    class="w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <b className="text-center">Sign in </b>
                </button>
              </form>
              <p className=" text-blue-600 font-light text-sm text-center pb-5">
                Forgotten password
              </p>
              <hr className="mx-8" />
              <button className=" bg-green-600 rounded-lg p-2 mx-20 mt-3 mb-4 text-white hover:bg-green-800">
                Create New Account
              </button>
            </div>
            <p className="mx-2 pt-3 text-sm text-center pb-5">
              <b>Create a Page</b> for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>

      <div className="flex mx-10 text-gray-600 justify-center pt-3 gap-3 text-sm ">
        <p>English (uk)</p>
        <p className=" hover:border-b-2 hover:border-gray-600 hover:transform-cpu">
          മലയാളം
        </p>
        <i class=" text-black bg-white bi bi-plus-square-fill "></i>
      </div>
      <hr className="pt-1 mx-10 mb-2 mt-2" />
      <div className="flex justify-center gap-3 text-sm pb-1 text-grey-600 ">
    <p className=" hover:border-b-2 ">Sign Up</p>
    <p className=" hover:border-b-2 ">Log in</p>
    <p className=" hover:border-b-2 "> Messenger</p>
      </div>
    </>
  );
}

export default App;
