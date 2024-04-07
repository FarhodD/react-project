import React from "react";
import s from "./Sidebar.module.css";

const Sidebar = () => {
  return (
      <div className={s.friends}>
        <div className={s.friend}>
          <h3 className={s.friend__name}>Somon</h3>
          <img src="https://cdn2.vectorstock.com/i/1000x1000/86/31/programmer-man-faceless-glasses-vector-14398631.jpg" alt="" className={s.friend__avatar} />
        </div>
        <div className={s.friend}>
          <h3 className={s.friend__name}>Umar</h3>
          <img src="https://yobte.ru/uploads/posts/2019-11/programmist-42-foto-34.jpg" alt="" className={s.friend__avatar} />
        </div>
        <div className={s.friend}>
          <h3 className={s.friend__name}>Farhod</h3>
          <img src="https://static10.tgstat.ru/channels/_0/c5/c5c138ace5ad0afac96e804985906e2b.jpg" alt="" className={s.friend__avatar} />
        </div>
      </div>
  )
}

export default Sidebar;