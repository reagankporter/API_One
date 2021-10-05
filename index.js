
const baseURL = 'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'

async function fetchData(){
    const response = await fetch(baseURL);
    const data = await response.json();
    const {title, original_title, description, release_date, director} = data; 

    document.getElementById('title').textContent = title;
    document.getElementById('original_title').textContent = original_title;
    document.getElementById('director').textContent = director;
    document.getElementById('release_date').textContent = release_date;
    document.getElementById('description').textContent = description;
    console.log(data)

}




button.addEventListener('click', fetchData);








