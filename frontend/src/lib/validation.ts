export const hasValue = (value: string) => value.trim().length > 0;

export const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export const isValidPhoneNumber = (value: string) => {
  const digits = value.replace(/\D/g, "");
  const normalizedDigits = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;

  return /^[6-9]\d{9}$/.test(normalizedDigits);
};

export const isPositiveInteger = (value: string) => /^[1-9]\d*$/.test(value.trim());

export const isPositiveAmount = (value: string) => {
  const amount = Number(value.replace(/[^\d.]/g, ""));

  return Number.isFinite(amount) && amount > 0;
};

export const isValidDateValue = (value: string) => {
  if (!hasValue(value)) {
    return false;
  }

  const parsedDate = new Date(value);
  return !Number.isNaN(parsedDate.getTime());
};
