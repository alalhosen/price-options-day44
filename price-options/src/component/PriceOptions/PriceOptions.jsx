import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

  [
    {
      "id": 1,
      "name": "Basic Plan",
      "price": 30,
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Open from 9 AM to 5 PM",
        "Access to cardio machines",
        "Wi-Fi access in common areas",
        "One guest pass per month"
      ]
    },
    {
      "id": 2,
      "name": "Standard Plan",
      "price": 50,
      "features": [
        "24/7 gym access",
        "Locker room and shower access",
        "1 personal training session per month",
        "Access to group classes",
        "Free towel service",
        "Access to swimming pool",
        "5 guest passes per month",
        "Discount on merchandise and supplements"
      ]
    },
    {
      "id": 3,
      "name": "Premium Plan",
      "price": 80,
      "features": [
        "24/7 gym access",
        "Unlimited personal training",
        "Priority access to group classes",
        "Spa and sauna access",
        "Free sports drinks",
        "Private locker",
        "Complimentary massage therapy (1 session per month)",
        "Access to VIP lounge",
        "Unlimited guest passes",
        "Nutrition consultations"
      ]
    }
  ]
  return (
    <div>
      <h2 className="text-4xl">Best Prices in the town</h2>

      {
        PriceOption.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
      }
      {/* <div className="grid grid-cols-3 gap-6">

        {
          // priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
      </div> */}
    </div>
  );
};

export default PriceOptions;