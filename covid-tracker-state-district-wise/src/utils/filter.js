import _ from "lodash";

const filterBasedOnUserInput = (data, searchUserInput) => {
  return searchUserInput != ""
    ? [
        ...data.filter((data) => {
          return _.startsWith(
            data.state.toString().toLowerCase(),
            searchUserInput.toLowerCase()
          );
        }),
      ]
    : data;
};

export default {
  filterBasedOnUserInput,
};
