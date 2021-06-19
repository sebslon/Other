import React, { useState } from "react";
import APIController from "./APIController";

export default function BookDataPage() {
  const [bookInfo, setBookInfo] = useState<any>({});
  const [isDataLoading, setIsDataLoading] = useState(false);

  const handleClick = async () => {
    setIsDataLoading(true);
    const data = await APIController.getBookData();
    setBookInfo(data);
    setIsDataLoading(false);
  };

  return (
    <>
      <h2>Strona z zarządzaniem API</h2>
      <p>Na tej stronie znajduje się przycisk który pobiera informacje o pewnej książce</p>
      <button onClick={() => handleClick()}>Get book data</button>
      {isDataLoading && <p>Loading data...</p>}
      {JSON.stringify(bookInfo)}
    </>
  );
}
