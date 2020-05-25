import _ from "lodash";

const filterBasedOnUserInput = (data, searchUserInput, propertyPath) => {
  return searchUserInput != ""
    ? [
        ...data.filter((data) => {
          return _.startsWith(
            propertyPath != undefined
              ? _.get(data, propertyPath).toString().toLowerCase()
              : data.toString().toLowerCase(),
            searchUserInput.toLowerCase()
          );
        }),
      ]
    : data;
};

export default {
  filterBasedOnUserInput,
};
