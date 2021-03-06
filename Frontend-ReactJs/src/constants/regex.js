export const REGEX = {
  EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  // PASSWORD: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*^?&\.])[A-Za-z\d@#$!%*^?&\.]{8,15}$/,
  // CONTACT: /^\d{10}$/,
  CONTACT: /^(\+[0-9]{1,5})?([0-9]{10})$/,
  // /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
  NAME: /^(?!\s)(?![\s\S]*\s$)[A-Za-z0-9 ]+$/,
  FAX: /\+[0-9]{1,3}\([0-9]{3}\)[0-9]{7}$/,
  // /^\+?[0-9]{6,}$/,
  USERNAME: /^\S*$/,
  ///[\p{L}\p{M}\p{S}\p{N}\p{P}]+/
  NOT_BLANK_SPACE: /^(?!\s)(?![\s\S]*\s$)/,
  ADDRESS: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*^?&])[A-Za-z\d@#$!%*^?&]$/,
  ONLY_NO: /\D/,
  ONLY_CHAR: /@!#\$%\^&*()_-\.\?/
  ///^[0-9a-zA-Z\_-]+$/
};
