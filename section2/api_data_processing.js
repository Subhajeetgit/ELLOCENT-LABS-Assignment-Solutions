async function getUsersDetails(cityName) {

    try{
        const respone = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await respone.json();

        const result = users
        .filter(user => user.address.city.toLowerCase() === cityName.toLowerCase())
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(user => ({
        name: user.name,
        email: user.email
    }));

     return result;

    }catch(err){
        console.log("Failed to fetch the user", err);

    }
    
}

getUsersDetails("Gwenborough").then(data=> console.log(data));