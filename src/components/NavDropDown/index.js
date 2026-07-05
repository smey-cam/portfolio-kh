import React from 'react'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { FaLocationArrow } from "react-icons/fa"

const NavDropDown = (props) => (
  <div className={`${props.isOpen ? 'flex' : 'hidden'} flex-col gap-4 p-4 bg-[#141414] rounded-lg shadow-lg absolute top-16 right-0 z-50 border border-white/10`}>
    <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:bg-white/5 p-2 rounded-lg transition-colors group">
      <div className="text-2xl text-white/70 group-hover:text-[#18C5DD]">
        <AiFillPhone />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white/90 group-hover:text-white">Phone</h4>
        <p className="text-sm text-white/50 group-hover:text-white/70">Let is get together and have a chat?</p>
      </div>
    </a>
    <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:bg-white/5 p-2 rounded-lg transition-colors group">
      <div className="text-2xl text-white/70 group-hover:text-[#18C5DD]">
        <AiOutlineMail />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white/90 group-hover:text-white">Email</h4>
        <p className="text-sm text-white/50 group-hover:text-white/70">If you want to talk jus send a message and I will get back</p>
      </div>
    </a>
    <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:bg-white/5 p-2 rounded-lg transition-colors group">
      <div className="text-2xl text-white/70 group-hover:text-[#18C5DD]">
        <FaLocationArrow />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white/90 group-hover:text-white">Address</h4>
        <p className="text-sm text-white/50 group-hover:text-white/70">1405, Angelus Dr, Florissant. Mo</p>
      </div>
    </a>
  </div>
);

export default NavDropDown;
