export enum CitiesTypes {
  // завантаження міст
  LOAD_CITIES_REQUEST = "LOAD_CITIES_REQUEST",
  LOAD_CITIES_SUCCESS = "LOAD_CITIES_SUCCESS",
  LOAD_CITIES_FAILURE = "LOAD_CITIES_FAILURE",
  // завантаження міст області
  LOAD_CITIES_BY_REGION_REQUEST = "LOAD_CITIES_BY_REGION_REQUEST",
  LOAD_CITIES_BY_REGION_SUCCESS = "LOAD_CITIES_BY_REGION_SUCCESS",
  LOAD_CITIES_BY_REGION_FAILURE = "LOAD_CITIES_BY_REGION_FAILURE",
  // додавання нового міста
  ADD_CITY_REQUEST = "ADD_CITY_REQUEST",
  ADD_CITY_SUCCESS = "ADD_CITY_SUCCESS",
  ADD_CITY_FAILURE = "ADD_CITY_FAILURE",
  // зміна міста
  UPDATE_CITY_REQUEST = "UPDATE_CITY_REQUEST",
  UPDATE_CITY_SUCCESS = "UPDATE_CITY_SUCCESS",
  UPDATE_CITY_FAILURE = "UPDATE_CITY_FAILURE",
  // видалення міста
  DELETE_CITY_REQUEST = "DELETE_CITY_REQUEST",
  DELETE_CITY_SUCCESS = "DELETE_CITY_SUCCESS",
  DELETE_CITY_FAILURE = "DELETE_CITY_FAILURE",
  // скидання даних
  RESET_DATA = "RESET_DATA",
}
