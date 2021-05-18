import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {

    const [cheeses, setCheeses] = useState(null);

    const URL = "http://localhost:4000/cheeses/"

    const getCheeses = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setCheeses(data);
    };

    const createCheeses = async (cheese) => {
        console.log(cheese)
        //make post request to create cheese
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cheese),
        });
        //update list of cheese
        getCheeses();
    }

    const updateCheeses = async (cheese, id) => {
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cheese)
        })
        //update all cheese list
        getCheeses()
    }

    const deleteCheeses = async id => {
        // post to delete people
        await fetch(URL + id, {
            method: "delete",
        })
        //update list of cheese
        getCheeses()
    }

    useEffect(() => {
        getCheeses()
    }, [])

    return (
        <main>
        <Switch>
            <Route exact path="/">
                <Index cheeses={cheeses} createCheeses={(newForm) => createCheeses(newForm)} />
            </Route>
            <Route
            path="/cheeses/:id"
            render={(rp) => (
                <Show
                {...rp}
                />
            )}
            />
        </Switch>
        </main>
    );
}

export default Main;