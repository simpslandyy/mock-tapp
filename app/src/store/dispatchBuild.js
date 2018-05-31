export const success = (type, data, extra = null) => {
   return { type: type, data: data, extra: extra };
  };

export const failure = (type, err, extra = null) => {
   return { type: type, error: err, extra: extra };
  };

export const request = (type, msg, extra = null) => {
  return { type: type, msg: msg, extra: extra };
 };
