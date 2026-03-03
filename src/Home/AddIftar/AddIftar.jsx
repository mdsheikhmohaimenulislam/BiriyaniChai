import React from "react";

const AddIftar = () => {

    const handelSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new formData(form);
        const data = Object.fromEntries(formData)
        console.log(data)
    }



  return (
    <div>
      <section className="min-h-[calc(100vh-68px)] p-6 dark:bg-gray-100 dark:text-gray-900">
        <form 
        onSubmit={handelSubmit}
          className="container flex flex-col mx-auto "
        >
          <fieldset className=" grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Personal Inormation</p>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci fuga autem eum!
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
           {/* Division */}
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">
                  Division
                </label>

                <input
                  id="division"
                  type="text"
                  placeholder="division"
                  className="w-full p-2 rounded-md 
               border-2 border-gray-400 
               focus:outline-none 
               focus:border-blue-500"
                />
              </div>
        {/* District */}
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">
                  First name
                </label>

                <input
                  id="District"
                  type="text"
                  placeholder="District"
                  className="w-full p-2 rounded-md 
               border-2 border-gray-400 
               focus:outline-none 
               focus:border-blue-500"
                />
              </div>
      {/* Upazila */}
              <div className="col-span-full sm:col-span-3">
                <label  className="text-sm">
                 Upazila
                </label>

                <input
                  id="Upazila"
                  type="text"
                  placeholder="Upazila"
                  className="w-full p-2 rounded-md 
               border-2 border-gray-400 
               focus:outline-none 
               focus:border-blue-500"
                />
              </div>
              {/* Mosque */}
              <div className="col-span-full sm:col-span-3">
                <label  className="text-sm">
                Mosque
                </label>

                <input
                  id="Mosque"
                  type="text"
                  placeholder="Mosque"
                  className="w-full p-2 rounded-md 
               border-2 border-gray-400 
               focus:outline-none 
               focus:border-blue-500"
                />
              </div>
              {/* 5 */}
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">
                 Iftar
                </label>

                <input
                  id="Iftar"
                  type="text"
                  placeholder="Iftar"
                  className="w-full p-2 rounded-md 
               border-2 border-gray-400 
               focus:outline-none 
               focus:border-blue-500"
                />
              </div>
              {/* 6 */}
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">
                 Description
                </label>

                <textarea
                  id="description"
                  rows="4"
                  placeholder="Write description..."
                  className="w-full p-2 rounded-md 
               border-2 border-gray-400 
               focus:outline-none 
               focus:border-blue-500"
                />
              </div>
            </div>
          </fieldset>
          <button type="submit" className="btn hover:bg-green-600 hover:text-amber-100">
            Login
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddIftar;
