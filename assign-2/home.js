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
      // console.log(add_option)
    })
  })


let getRestaurant = () => {
  let getCity = document.getElementById("location").value
  let optRestaurants = document.getElementById("getRestaurant")
  let res_url = "https://zomatoapi.onrender.com/restaurants";
  while(optRestaurants.length>0){
      optRestaurants.remove(optRestaurants.children)
  }
  fetch(res_url, { method: "GET" })
    .then(res => res.json())
    .then((data) => {
      data.map((item) => {
        if(item.state_id==getCity){
          let add_option = document.createElement("option")
          let add_text = document.createTextNode(`${item.restaurant_name}, ${item.address}`)
          add_option.appendChild(add_text)
          optRestaurants.appendChild(add_option)
        }
      })
    })
}
