import HomePage from '@renderer/pages/Home/homePage'
import { ROUTES } from './routes'
import AuthLogin from '@renderer/pages/Auth/logn';
import EmployeePage from '@renderer/pages/Employee/employeePage';
import TablesPage from '@renderer/pages/Tables/tablesPage';

export interface IRouesList {
    element: () => JSX.Element;
    routes: string;
}

export const routesList: IRouesList[] = [
    {
        element: HomePage,
        routes: ROUTES.HOME()
    },
    {
        element: AuthLogin,
        routes: ROUTES.SIGN_IN()
    },
    {
        element: EmployeePage,
        routes: ROUTES.EMPLOYEE()
    },
    {
        element: TablesPage,
        routes: ROUTES.TABLES()
    },
]
