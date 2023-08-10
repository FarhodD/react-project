import React, { useState } from 'react'

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false)

  const activateEditMode = () => {
    setEditMode(true);
  }
  const deactivateEditMode = () => {
    setEditMode(false);
  }

  return (
    <>
      {!editMode &&
        <div>
          <span onDoubleClick={activateEditMode}>Hello</span>
        </div>
      }
      {editMode &&
        <div>
          <input autoFocus onBlur={deactivateEditMode} />
        </div>
      }
    </>
  )
}

export default ProfileStatusWithHooks