import React, { useState ,useEffect} from "react";

const DeleteModal = ({ deleteToggle, setDeleteToggle,updatedExpense, deleteItem }) => {

    const [selectedExpense, setSelectedExpense] = useState("")

  useEffect(() => {
    if (updatedExpense && deleteToggle) {
      setSelectedExpense(updatedExpense)
    }
  }, [updatedExpense, deleteToggle]);
  return (
    <>
      {deleteToggle ? (
        <div className="delete-container">
          <h2>Are you sure you want to delete</h2>
          <div className="border"></div>
          <button className="cancel-btn" onClick={()=>setDeleteToggle(!deleteToggle)}>Cancel</button>
          <button className="delete-btn" onClick={()=>deleteItem(selectedExpense.id)}>Delete</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DeleteModal;
