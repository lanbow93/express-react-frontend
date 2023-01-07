import { useLoaderData, Form } from 'react-router-dom'
const Show = (props) => {
    const person = useLoaderData()
    console.log(person)

    return <div className="person">
        <h1>{person.name}</h1>
        <img src={person.image} alt={person.name} />
        <h3>{person.title}</h3>

        <Form action={`/delete/${person._id}`} method="post">
            <input type="submit" value={`Delete ${person.name}`} />
        </Form>

        <Form action={`/update/${person._id}`} method='post'>
            <h2>Update Person</h2>
            <input type="text" name='name' placeholder={person.name} />
            <input type="text" name='title' placeholder={person.title} />
            <input type="text" name='image' placeholder={person.image} />
            <input type="submit" value={`Update "${person.name}"`} />
        </Form>
    </div>


}

export default Show