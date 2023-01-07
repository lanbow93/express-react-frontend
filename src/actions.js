import { redirect } from "react-router-dom";
const URL = process.env.REACT_APP_URL

export const createAction = async ({request}) => {
    // Get data from the form
    const formData = await request.formData();
    // Set up out new person with the Schema
    const newPerson = {
        name: formData.get("name"),
        title: formData.get("title"),
        image: formData.get("image")
    }
    // Send new person to the API
    await fetch(URL + "/people", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPerson)
    })
    // Redirect back to index
    return redirect("/")
}

export const updateAction = async ({request, params}) => {
    // Loads in the data from the form
    const formData = await request.formData();

    // Creates a new person object matching the schema 
    const updatedPerson = {
        name: formData.get("name"),
        title: formData.get("title"),
        image: formData.get("image")
    }

    // Calls the backend api with the new object to replace the old one
    await fetch(URL + "/people/" + params.id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPerson)
    })
    return redirect("/")
}

export const deleteAction = async ({request, params}) => {
    await  fetch(URL + `/people/${params.id}`, {
        method: "delete",
        headers: {
            "Content-Type": "application/json"
        },
    } )
    return redirect('/')
}