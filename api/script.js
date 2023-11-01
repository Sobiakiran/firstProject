const btn = document.getElementById("btn");

const fetchApi =async () =>{
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    data.forEach(item => {
        console.log(data)
        const element = document.createElement("h4")
        const element2 = document.createElement("img")
        element.innerHTML = item.title
        element2.src = item.image
        element2.style.width = "100px"
        document.body.appendChild(element)
        document.body.appendChild(element2)
    });
  } catch(error){
    console.log(error  + "something went wrong")
  }
}
btn.addEventListener('click', fetchApi)

