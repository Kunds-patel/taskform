import { Navigate, Outlet } from "react-router-dom";

function App() {
  const changePath = (path) => {
    console.log(path);
    return <Navigate to={path} />;
  };
  return (
    <>
      <div className="max-w-2xl mx-auto flex items-center h-screen">
        <div className="flex border w-full p-10">
          <div className="flex flex-col mx-10">
            <button type="button" onClick={() => changePath("/")}>
              <div className="flex items-center gap-4">
                <p className="aspect-square border rounded-full h-7">1</p>
                <div className="uppercase text-left">
                  <p>Step 1</p>
                  <p>your info</p>
                </div>
              </div>
            </button>
            <button type="button" onClick={() => changePath("step2")}>
              <div className="flex items-center gap-4">
                <p className="aspect-square border rounded-full h-7">2</p>
                <div className="uppercase text-left">
                  <p>Step 2</p>
                  <p>selete plan</p>
                </div>
              </div>
            </button>
            <button type="button" onClick={() => changePath("step3")}>
              <div className="flex items-center gap-4">
                <p className="aspect-square border rounded-full h-7">3</p>
                <div className="uppercase text-left">
                  <p>Step 3</p>
                  <p>add-ons</p>
                </div>
              </div>
            </button>
            <button type="button" onClick={() => changePath("step4")}>
              <div className="flex items-center gap-4">
                <p className="aspect-square border rounded-full h-7">4</p>
                <div className="uppercase text-left">
                  <p>Step 4</p>
                  <p>summry</p>
                </div>
              </div>
            </button>
          </div>
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
