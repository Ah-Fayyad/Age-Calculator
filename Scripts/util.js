const validateDay = (day) => {
  day = Number(day);
  return day && day > 0 && day <= 31;
};

const validateMonth = (month) => {
  month = Number(month);
  return month && month > 0 && month <= 12;
};

const validateYear = (year) => {
  const currentYear = new Date().getFullYear();
  year = Number(year);
  return year && year > 0 && year <= currentYear;
};

export { validateDay, validateMonth, validateYear };
