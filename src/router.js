import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from "./App.js"
import Index from './pages/Index.js'
import Show from './pages/Show.js'
import { peopleLoader } from './loaders.js'
import { createAction } from './actions.js'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>} >
            <Route path='' element={<Index/>} loader={peopleLoader} />
            <Route path='/:id' element={<Show/>} />
            <Route path='create' action={createAction} />
            <Route path='update/:id' />
            <Route path='delete/:id' />
        </Route>
    )
)

export default router