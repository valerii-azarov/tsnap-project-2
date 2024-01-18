export enum OfficesTypes {
  // завантаження офісів
  LOAD_OFFICES_REQUEST = "LOAD_OFFICES_REQUEST",
  LOAD_OFFICES_SUCCESS = "LOAD_OFFICES_SUCCESS",
  LOAD_OFFICES_FAILURE = "LOAD_OFFICES_FAILURE",
  // завантаження офісів міста
  LOAD_OFFICES_BY_CITY_REQUEST = "LOAD_OFFICES_BY_CITY_REQUEST",
  LOAD_OFFICES_BY_CITY_SUCCESS = "LOAD_OFFICES_BY_CITY_SUCCESS",
  LOAD_OFFICES_BY_CITY_FAILURE = "LOAD_OFFICES_BY_CITY_FAILURE",
  // додавання нового офісу
  ADD_OFFICE_REQUEST = "ADD_OFFICE_REQUEST",
  ADD_OFFICE_SUCCESS = "ADD_OFFICE_SUCCESS",
  ADD_OFFICE_FAILURE = "ADD_OFFICE_FAILURE",
  // зміна офісу
  UPDATE_OFFICE_REQUEST = "UPDATE_OFFICE_REQUEST",
  UPDATE_OFFICE_SUCCESS = "UPDATE_OFFICE_SUCCESS",
  UPDATE_OFFICE_FAILURE = "UPDATE_OFFICE_FAILURE",
  // видалення офісу
  DELETE_OFFICE_REQUEST = "DELETE_OFFICE_REQUEST",
  DELETE_OFFICE_SUCCESS = "DELETE_OFFICE_SUCCESS",
  DELETE_OFFICE_FAILURE = "DELETE_OFFICE_FAILURE",
  // скидання даних
  RESET_DATA = "RESET_DATA",
}
