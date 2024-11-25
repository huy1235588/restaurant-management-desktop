import HomePage from '@renderer/pages/Home/homePage'
import { ROUTES } from './routes'

export interface IRouesList {
    element: () => JSX.Element;
    routes: string;
}

export const routesList: IRouesList[] = [
    {
        element: HomePage,
        routes: ROUTES.HOME()
    }
]
