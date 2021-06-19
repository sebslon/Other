class APIController {
  static getBookData = async () => {
    try {
      const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=_i6bDeoCQzsC&hl");
      const data = await response.json();
      if (data.error) throw data.error.message;
      return data;
    } catch (err) {
      console.error(err);
    }
  };
}

export default APIController;
