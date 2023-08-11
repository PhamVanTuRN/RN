export type User = {
  id: string;
  fullName: string;
  email: string;
  city: any;
  phone: Phone;
};
export type Phone = {
  countryCode: string;
  phoneNumber: string;
};
