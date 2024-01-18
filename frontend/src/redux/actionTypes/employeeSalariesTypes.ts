export enum EmployeeSalariesTypes {
  // завантаження зарплат
  LOAD_EMPLOYEE_SALARIES_REQUEST = "LOAD_EMPLOYEE_SALARIES_REQUEST",
  LOAD_EMPLOYEE_SALARIES_SUCCESS = "LOAD_EMPLOYEE_SALARIES_SUCCESS",
  LOAD_EMPLOYEE_SALARIES_FAILURE = "LOAD_EMPLOYEE_SALARIES_FAILURE",
  // зміна статусу зарплати
  UPDATE_EMPLOYEE_SALARIES_REQUEST = "UPDATE_EMPLOYEE_SALARIES_REQUEST",
  UPDATE_EMPLOYEE_SALARIES_SUCCESS = "UPDATE_EMPLOYEE_SALARIES_SUCCESS",
  UPDATE_EMPLOYEE_SALARIES_FAILURE = "UPDATE_EMPLOYEE_SALARIES_FAILURE",
  // скидання даних
  RESET_DATA = "RESET_DATA",
}
