import { useState } from "react";
import "../index.css";
import Head from "./Head";
import Me from "./Me";
import MyFriend from "./MyFriend";
import Calculator from "./Calculator";

export default function App() {
  const [bill, setBill] = useState("");
  const [myReview, setMyReview] = useState(0);
  const [friendReview, setFriendReview] = useState(0);

  const tip = Math.round(bill * ((myReview + friendReview) / 2 / 100));

  function handleBill(el) {
    setBill(el);
  }

  function handleReset() {
    setBill("");
    setMyReview(0);
    setFriendReview(0);
  }

  return (
    <div className="container">
      <Head bill={bill} onSetBill={(e) => handleBill(Number(e.target.value))} />
      <Me myReview={myReview} onSelect={setMyReview} />
      <MyFriend friendReview={friendReview} onSelect={setFriendReview} />
      {bill > 0 ? (
        <Calculator bill={bill} tip={tip} onReset={handleReset} />
      ) : (
        ""
      )}
    </div>
  );
}
