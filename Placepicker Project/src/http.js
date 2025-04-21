export async function fetchAvailablePlaces() {                              //this used for fetching data from backend to frontEnd. It's used in AvailablePlaces.jsx.
  const response = await fetch("http://localhost:3000/places");                         
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  return resData.places;
}

export async function fetchUserPlaces() {                              //this is also used for fetching data from backend to frontEnd. this is old data which is stored into backend
  const response = await fetch("http://localhost:3000/user-places");                         
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch user places");
  }

  return resData.places;
}

export async function updateUserPlaces(places){                                         //this used for putting selected item into the backend
    const response = await fetch("http://localhost:3000/user-places", {
        method: "PUT",
        body: JSON.stringify({places: places}),
        headers:{
            'Content-Type' : 'application/json'
        }
    })

    const resData = await response.json();


    if(!response.ok){
        throw new Error("Failed to update user data.")
    }

    return resData.message;
}