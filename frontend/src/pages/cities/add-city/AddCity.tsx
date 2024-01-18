import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import { loadRegionsData } from "../../../redux/actionCreators/regionsCreators";
import { City } from "../../../interfaces/city-interface";

import Button from "../../../components/Button/Button";
import MessageContainer from "../../../components/MessageContainer/MessageContainer";

import "./style.css";

interface AddCityProps {
  isOpen: boolean;
  onAddClick: (city: City) => void;
  onCloseClick: () => void;
}

const initialState: City = {
  id: 0,
  name: "",
  regionId: 0,
  statusId: 0,
};

const FIELDS = {
  name: "назва міста",
  regionId: "область",
  statusId: "статус",
};

const PATTERNS = {
  name: /[А-ЩЬЮЯҐЄІЇа-щьюяґєії'`’ʼ-]+/,
};

const ERROR_MESSAGES = {
  required: (field: string) => `${field.charAt(0).toUpperCase() + field.slice(1)} обов'язковий.`,
  patternMismatch: (field: string) => `Пишіть, будь ласка, ${field} українською.`,
};

const AddCity: React.FC<AddCityProps> = ({ isOpen, onAddClick, onCloseClick }) => {
  const dispatch: AppDispatch = useDispatch();

  const { regions } = useSelector((state: RootState) => state.data.regions.data);
  const { error } = useSelector((state: RootState) => state.data.cities.actions.addCity);

  const [values, setValues] = useState<City>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<string[]>([]);

  const handleClose = () => {
    resetForm();
    onCloseClick();
  };
  
  const handleAddcity = () => {
    const validationErrors = validate(values);

    setErrors(validationErrors);
    setTouched(Object.keys(values));
  
    if (!Object.keys(validationErrors).length) {
      onAddClick(values);
    }
  };
  
  const resetForm = () => {
    setValues(initialState);
    setErrors({});
    setTouched([]);
  };  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValues({ 
      ...values, 
      [event.target.name]: event.target.value 
    });
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!touched.includes(event.target.name)) {
      setTouched([
        ...touched,
        event.target.name
      ]);
    }
  };

  const validate = useCallback((data: City) => {
    return Object.entries(data).reduce((acc: Record<string, string>, [key, value]) => {
      if (typeof value === "string") {
        const pattern = PATTERNS[key as keyof typeof PATTERNS];

        if (pattern && !value.trim()) {
          acc[key] = ERROR_MESSAGES.required(FIELDS[key as keyof typeof FIELDS]);
        } else if (pattern && !pattern.test(value)) {
          acc[key] = ERROR_MESSAGES.patternMismatch(FIELDS[key as keyof typeof FIELDS]);
        }
      } else if (typeof value === "number") {
        const numericFields = ["regionId", "statusId"];
  
        if (numericFields.includes(key) && value === 0) {
          acc[key] = ERROR_MESSAGES.required(FIELDS[key as keyof typeof FIELDS]);
        }
      }
  
      return acc;
    }, {});
  }, []);  

  useEffect(() => {
    const validationErrors = validate(values);
    const touchedErrors = Object.keys(validationErrors).reduce((acc: Record<string, string>, key) => {
      if (touched.includes(key)) {
        acc[key] = validationErrors[key];
      }
      return acc;
    }, {});
    setErrors(touchedErrors);
  }, [touched, values, validate]);

  useEffect(() => {
    dispatch(loadRegionsData());
  }, [dispatch]);

  return (
    <div className={`add-city ${isOpen ? "active" : ""}`}>
      <div className="add-city__container">
        <div className="add-city__wrapper">
          <div className="add-city__header">
            <div className="add-city__title">Додавання нового міста</div>
            <div>
              <div className="add-city__close" onClick={handleClose}></div>
            </div>
          </div>

          <div className="add-city__content">
            <div className="form__field">
              <label className="form__label">Назва міста</label>
              <input
                type="input"
                name="name"
                minLength={2}
                maxLength={50}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form__input ${errors.name ? "invalid" : ""}`}
              />
              {errors.name && (
                <label className="error">{errors.name}</label>
              )}
            </div>

            <div className="form__field">
              <label className="form__label">Назва області</label>
              <select
                name="regionId"
                value={values.regionId}
                onChange={handleChange}
                className="form__input"
              >
                <option value={0} disabled>Не обрано</option>
                {regions.map((region) => (
                  <option key={region.id} value={region.id}>
                    {region.name}
                  </option>
                ))}
              </select>
              {errors.regionId && <label className="error">{errors.regionId}</label>}
            </div>

            <div className="form__field">
              <label className="form__label">Статус міста</label>
              <select
                name="statusId"
                value={values.statusId}
                onChange={handleChange}
                className="form__input"
              >
                <option value={0} disabled>Не обрано</option>              
                <option value={1}>Основний</option>   
                <option value={2}>Регіональний</option>                 
                <option value={2}>Тимчасово окупованій</option>    
                <option value={4}>Тимчасово не працює</option> 
              </select>
              {errors.statusId && <label className="error">{errors.statusId}</label>}
            </div>

            {error && (
              <MessageContainer
                type="error"
                message={[error]}
                style={{ marginBottom: "15px" }}
              />
            )} 
          </div>

          <div className="add-city__footer">
            <Button text="Додати" type="button" onClick={handleAddcity} />
          </div>
        </div>
      </div>

      <div className="overlay"></div>
    </div>
  );
};

export default AddCity;
