import { Route, Routes } from 'react-router-dom'
import { routesList } from './routes/routes-list'
import BasePage from './components/basePase'


function App(): JSX.Element {
    return (
        <div className="min-h-screen">
            <Routes>
                {routesList.map((item) => {
                    const Element = item.element

                    return (
                        <Route
                            path={item.routes}
                            key={item.routes}
                            element={
                                <BasePage>
                                    <Element />
                                </BasePage>
                            }
                        />
                    )
                })}
            </Routes>
        </div>
    )
}

export default App
