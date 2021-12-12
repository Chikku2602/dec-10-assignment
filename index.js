 //to get the response in json format
 let r = fetch('https://reqres.in/api/user')

 //when promise is fullfilled, then
 let s = r.then(function (response) {
   return response.json()
 })

 s.then(function (a) {
   //console.log(data);
   //return the data if the promise is fulfilled

   displayData(a.data)
   //you can access data on line51 from line48, due to hoisting (works both on variables and functions)
 })

 function displayData(data) {
   let table = document.getElementById('table')

   //data.forEach(function(element){
   // console.log(element);
   for (let i = 0; i < data.length; i++) {
     let obj = data[i]

     //were inserting these values in table
     let row = document.createElement('tr')
     let id = document.createElement('td')
     let name = document.createElement('td')
     let year = document.createElement('td')
     let color = document.createElement('td')
     let pantone_value = document.createElement('td')

     id.innerHTML = obj.id
     name.innerHTML = obj.name
     year.innerHTML = obj.year
     color.innerHTML = obj.color
     pantone_value.innerHTML = obj.pantone_value

     row.appendChild(id)
     row.appendChild(name)
     row.appendChild(year)
     row.appendChild(color)
     row.appendChild(pantone_value)

     table.appendChild(row)
   }
 }