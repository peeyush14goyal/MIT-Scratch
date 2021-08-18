import { SET_ACTIVE_CHARACTER, ADD_CHARACTER, SET_ANGLE } from "./actionTypes";

const initialState = {
  characters: [{ id: "sprite0", angle: 0 }],
  active: "sprite0",
};

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CHARACTER:
      return {
        ...state,
        active: action.id,
      };

    case ADD_CHARACTER:
      let charactersArray = state.characters;
      charactersArray.push({
        id: `sprite${state.characters.length}`,
        angle: 0,
      });

      return {
        ...state,
        characters: charactersArray,
      };

    case SET_ANGLE:
      let characters_Array = state.characters;
      let curr_character = characters_Array.find(
        (character) => character.id === state.active
      );
      const curr_character_index = characters_Array.findIndex(
        (character) => character.id === state.active
      );
      if (curr_character_index > -1) {
        curr_character.angle = action.angle;
        characters_Array[curr_character_index] = curr_character;
      }
      return {
        ...state,
        characters: characters_Array,
      };

    default:
      return state;
  }
};
