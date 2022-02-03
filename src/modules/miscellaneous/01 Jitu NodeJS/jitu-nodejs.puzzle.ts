// source = {
//   a,
//   b,
//   c
//   custom: {
//     customFieldsRaw: [
//       { key: 'url', value: 'www.google.com' }
//     ]
//   }
// };

// output = {
//   a,
//   b,
//   c
//   custom: {
//     fields: { url: 'www.google.com' }
//   }
// };
function foo(source: { a?: string; b?: string; c?: string; custom: any; }) {
  let fieldsObject: { [key: string]: any; } = {};
  source.custom.customFieldsRaw.forEach((s: { key: string | number; value: any; }) => {
    fieldsObject[s.key] = s.value;
  });
  const approachOne = {
    ...source,
    custom: {
      fields: { ...fieldsObject }
    }
  };

  const approachTwo = Object.assign(source, {
    custom: {
      fields: source.custom.customFieldsRaw.reduce((acc: { [x: string]: any; }, field: { key: string | number; value: any; }) => {
        acc[field.key] = field.value;
        return acc;
      }, {})
    }
  });

  return 0;
}

export { foo };
