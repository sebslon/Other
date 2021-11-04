function validateUrl(url: string) {
  try {
    return new URL(url);
  } catch {
    return new URL(`http://${url}`);
  }
}

type Result = Record<string, any>;

function getUrlParameters<T>(url: string): Result {
  const validUrl = validateUrl(url);
  const searchParams = new URLSearchParams(validUrl.search);

  const params = [...searchParams];

  return params.reduce((acc: Result, val) => {
    const [key, value] = val;
    const regexp = new RegExp("[[0-9]]");

    switch (true) {
      case regexp.test(key):
        // For array parameters for example "colors[0]=green"
        const keyArray = key.split("[");
        const keyName = keyArray[0];
        const keyIndex = parseInt(keyArray[1].slice(0, -1));

        if (acc[keyName] === undefined) acc[keyName] = [];
        acc[keyName][keyIndex] = value;
        break;
      case value === "true" || value === "false":
        acc[key] = Boolean(value);
        break;
      case Number.isFinite(Number(value)):
        acc[key] = Number(value);
        break;
      default:
        acc[key] = value;
        break;
    }

    return acc;
  }, {});
}

const urlString =
  "url.com/post?colors[2]=red&valid=true&colors[0]=green&user=Jan&age=25";
const res = getUrlParameters(urlString);
/* 
{
  colors: [ 'green', <1 empty item>, 'red' ],
  valid: true,
  user: 'Jan',
  age: 25
} 
*/
