import { Form, Link, useLoaderData } from "react-router-dom"
import '../styles.scss'

const Index = (props) => {
    const people = useLoaderData();
    return (
        <div>
            <h2>Create A Person</h2>
            <Form action="/create" method="post">
                <input type="text" name="name" placeholder="Person's Name"/>
                <input type="text" name="title" placeholder="Person's Title" />
                <input type="text" name="image" placeholder="Image URL" />
                <input type="submit" value="Create Person" />
            </Form>
            <h2>People</h2>
            {people.map((person)=> {
            return <div className="indexThumbnail" key={person._id}>
                <Link to={`/${person._id}`}><h1>{person.name}</h1></Link>
                <img src={person.image} alt={person.name} />
                <h3>{person.title}</h3>
            </div>
            })}
        </div>
    )
}

export default Index