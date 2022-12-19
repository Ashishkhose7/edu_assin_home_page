//  Fetch states (dynamic dropdown)
let loc_url = "https://zomatoapi.onrender.com/location";
let optLocation = document.getElementById("location")
fetch(loc_url, { method: "GET" })
  .then(response => response.json())
  .then((data) => {
    data.map((item) => {
      let add_option = document.createElement("option")
      let add_text = document.createTextNode(item.state)
      add_option.appendChild(add_text)
      add_option.value = item.state_id
      optLocation.appendChild(add_option)
    })
  })

// Fetch resaturants from state_id
let getRestaurant = () => {
  let getCity = document.getElementById("location").value
  let optRestaurants = document.getElementById("getRestaurant")
  let res_url = "https://zomatoapi.onrender.com/restaurants";

  while (optRestaurants.length > 0) {
    optRestaurants.remove(optRestaurants.children)
  }

  let add_option = document.createElement("option")
  let add_text = document.createTextNode(`Please Select Restaurants`)
  add_option.appendChild(add_text)
  optRestaurants.appendChild(add_option)

  fetch(res_url, { method: "GET" })
    .then(res => res.json())
    .then((data) => {
      data.map((item) => {
        if (item.state_id == getCity) {
          let add_option = document.createElement("option")
          let add_text = document.createTextNode(`${item.restaurant_name}, ${item.address}`)
          add_option.appendChild(add_text)
          optRestaurants.appendChild(add_option)
        }
      })
    })
}

//Ratings
let star = document.getElementsByClassName("star-icon")
for (const key in star) {
 star[key].onclick = ()=>{
  if(star[key].style.color=='yellow'){
    star[key].style.color = "lightyellow"
  }else{
    star[key].style.color = "yellow"
  }
 }
}
