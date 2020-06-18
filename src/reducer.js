export default function reducer(state, actions) {
  switch (actions.type) {
    case "SET_COUNTRY_LIST":
      return { ...state, countryList: actions.payload };

    case "SET_COUNTRY_BY_NAME":
      let list;
      if (state.filterByRegion !== "") {
        list = state.countryFilteredByRegion;
      } else {
        list = state.countryList;
      }

      const countryListByName = list.filter((country) =>
        country.name.toLowerCase().includes(actions.payload.toLowerCase())
      );
      return { ...state, countryListByName };

    case "FILTER_BY_REGION":
      const { regionSelected } = actions.payload;

      if ("" === regionSelected) {
        return { ...state, countryFilteredByRegion: [], filterByRegion: "" };
      }

      const countryFilteredByRegion = state.countryList.filter(
        (country) => country.region === regionSelected
      );

      return {
        ...state,
        countryFilteredByRegion,
        filterByRegion: regionSelected,
      };
    default:
      return state;
  }
}
