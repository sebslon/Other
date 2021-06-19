const URLValidation = (url: string) => {
  try {
    const validUrl = new URL(url);
    return validUrl;
  } catch {
    return new URL(`http://${url}`);
  }
};

type resultType = Record<string, any>;

export default function getUrlParameters(url: string): resultType {
  const validUrl = URLValidation(url);
  let searchParams = new URLSearchParams(validUrl.search);
  const array = Array.from(searchParams.entries());

  return array.reduce((acc: resultType, [key, value]) => {
    const arrayRegexp = new RegExp("[[0-9]]");
    switch (true) {
      case arrayRegexp.test(key):
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

    console.log(acc);
    return acc;
  }, {});
}
