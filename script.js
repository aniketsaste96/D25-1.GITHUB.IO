
//Get hold of Elements
var maindiv = document.querySelector(".container").innerHTML
const subdiv = document.getElementsByClassName("subcontainer")
const btn = document.querySelector(".btn")

//api Url 
const url = "https://animechan.vercel.app/api/random"



//Fetch data on event
btn.addEventListener("click", () => {

    const fetchData = async () => {
        try {


            const response = await fetch(url);
            const Qdata = await response.json();


            //appending data to HTML
            let realData = Qdata
            document.querySelector(".p1").innerHTML = ` ${realData.anime}`
            document.querySelector(".p2").innerHTML = `${realData.character}`
            document.querySelector(".p3").innerHTML = `${realData.quote}`

            //Error Handling
        } catch (err) {
            console.log(err)
        }
    };
    //calling fecth function
    fetchData();

});






