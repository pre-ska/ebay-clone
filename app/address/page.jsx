"use client";

// https://nextjs.org/docs/messages/react-hydration-error#solution-1-using-useeffect-to-run-on-the-client-only

import MainLayout from "../layouts/MainLayout";
import TextInput from "../components/TextInput";

export default function Home() {
  return (
    <>
      <MainLayout>
        <div id="AddressPage" className="mt-4 max-w-[600px] mx-auto px-2">
          <div className="mx-auto bg-white rounded-lg p-3">
            <div className="text-xl text-bold mb-2">Address Details</div>

            <form>
              <div className="mb-4">
                <TextInput className="w-full" placeholder="Name" />
              </div>

              <div className="mb-4">
                <TextInput className="w-full" placeholder="Address" />
              </div>

              <div className="mb-4">
                <TextInput className="w-full mt-2" placeholder="Zip Code" />
              </div>

              <button
                type="submit"
                className={`
                    mt-6
                    w-full 
                    text-white 
                    text-lg 
                    font-semibold 
                    p-3 
                    rounded
                    bg-blue-600"
                  
                `}
              ></button>
            </form>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
