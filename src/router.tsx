import { createBrowserRouter, Link } from "react-router-dom";
import Root from "./layouts/Root";
import CharacterDetail from "./pages/CharacterDetail";
import Characters from "./pages/Characters";
const router = createBrowserRouter([
    {
        path : '',
        element : <Root />,
    
        children : [
            {
                path : '',
                element : <Characters />,
                index : true
            },
            {
                path : ':idcharacter',
                element : <CharacterDetail />
            },

        ]

    },

 

]);

export { router };