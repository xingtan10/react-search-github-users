export const reducer = (state, action) => {
  const newItems = [...state.people, action.payload];
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      people: newItems,
      isModalOpen: true,
      modalContent: "item add",
    };
  }
  if (action.type === "NO_VALUE") {
    return { ...state, showModal: true, modalContent: "No value" };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }

  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );

    return { ...state, people: newPeople };
  }

  throw new Error("No matching action type");
};
