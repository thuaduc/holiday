import "./App.css";
import Hotel from "./components/Hotel/Hotel";
import ItemHotel from "./components/Hotel/ItemHotel";
import Navbar from "./components/Hotel/Navbar";

const App = () => {
  const dummy = {
    name: "Ciputra",
    location: "Tran Hung Dao, Hanoi, Vietnam",
    rate: "80%",
    oceanview: true,
    roomtype: "double",
    mealtype: "breakfast",
    price: "1000$",
    days: "4 days",
  };

  return (
    <div>
      <Navbar></Navbar>
      <Hotel>
        <ItemHotel
          name={dummy.name}
          location={dummy.location}
          rate={dummy.rate}
          oceanview={dummy.oceanview}
          roomtype={dummy.roomtype}
          mealtype={dummy.mealtype}
          price={dummy.price}
          days={dummy.days}
        />
        <ItemHotel
          name={dummy.name}
          location={dummy.location}
          rate={dummy.rate}
          oceanview={dummy.oceanview}
          roomtype={dummy.roomtype}
          mealtype={dummy.mealtype}
          price={dummy.price}
          days={dummy.days}
        />
        <ItemHotel
          name={dummy.name}
          location={dummy.location}
          rate={dummy.rate}
          oceanview={dummy.oceanview}
          roomtype={dummy.roomtype}
          mealtype={dummy.mealtype}
          price={dummy.price}
          days={dummy.days}
        />
        <ItemHotel
          name={dummy.name}
          location={dummy.location}
          rate={dummy.rate}
          oceanview={dummy.oceanview}
          roomtype={dummy.roomtype}
          mealtype={dummy.mealtype}
          price={dummy.price}
          days={dummy.days}
        />
        <ItemHotel
          name={dummy.name}
          location={dummy.location}
          rate={dummy.rate}
          oceanview={dummy.oceanview}
          roomtype={dummy.roomtype}
          mealtype={dummy.mealtype}
          price={dummy.price}
          days={dummy.days}
        />
      </Hotel>
    </div>
  );
};

export default App;

/* 
name={dummy[0]}
rate={dummy[1]}
oceanview={dummy[2]}
roomtype={dummy[3]}
mealtype={dummy[4]}
price={dummy[5]}
foto={dummy[6]} 
*/
