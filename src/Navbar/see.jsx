import React from "react";
export default function Appsee() {
    const superHero = [
      {
        name: "Steve Rogers",
        title: "Captain America",
        weapon: "Shield",
        franchise: "Marvel"
      },
      {
        name: "Tony Stark",
        title: "Ironman",
        weapon: "Suit",
        franchise: "Marvel"
      },
      {
        "id": 1,
        "title":"Farmley Popular California Almonds",
        "img":"https://rukminim1.flixcart.com/image/416/416/kylvr0w0/nut-dry-fruit/x/4/f/500-popular-california-almonds-tasty-crunchy-nutritious-badaam-original-imagasrgszqbh3bg.jpeg",
        "price":362,
        "category":"groceries",
        "description":"Farmley source all the nuts & dry fruits directly from the farms which are hygienically packed in a HACCP certified unit. We pack almonds which are handpicked, 100% natural and free from adulteration. These are filled with vitamin E, magnesium and dietary fibres. Almonds also help to counter the bad cholestrol in the body and improve heart health. Just one crunchy handful of Farmley's almond is a satisfying way to treat your taste buds without missing out on nutrients. All natural almonds with zero additives & goodness of nutrients. Enjoy healthy & guilt-free snacking anytime.",
        "rating":"4.2"
    },];
const [searchedArray, setSearchedArray] = React.useState(superHero);
  const [searchString, setSearchString] = React.useState("");

  React.useEffect(() => {
    if(searchString.length === 0){
      setSearchedArray(superHero)
    } else {
      const searchedObjects = []
      superHero.forEach((singleHeroObject, index) => {
        Object.values(singleHeroObject).every((onlyValues, valIndex) => {
          if(onlyValues.toLowerCase().includes(searchString.toLowerCase())){
            searchedObjects.push(singleHeroObject)
            return;
          }
        })
      })
      setSearchedArray(searchedObjects) 
    }
  }, [searchString])

  return (
    <div className="App">
        <p>
        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder="search here.."
        />
      </p>
      <pre>
        {JSON.stringify(searchedArray, null, '    ')}
      </pre>
    </div>
  );
}
