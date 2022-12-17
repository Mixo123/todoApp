import { useState } from "react";
import Model from "./Model";

interface IAppProps {
}

const Header: React.FC<IAppProps> = (props) => {
  const [openModel, setOpenModel] = useState(false)
  
  return (
    <>
      {openModel && <Model setOpenModal={setOpenModel} />}
      <div className='sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white'>
        <h1 className='text-3xl select-none sm:text-6xl'>TODO LIST</h1>
        <i onClick={() => setOpenModel(true)} className="fa-solid fa-user text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-3xl"></i>
      </div>
    </>
  )
};

export default Header;
