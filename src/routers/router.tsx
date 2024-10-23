import { createBrowserRouter } from "react-router-dom";
import IdentityLayouts from '@/layouts/identity-layout'
import AccountingRoutes from '@/routers/accounting/index';

const router = createBrowserRouter([
    {
        element: <IdentityLayouts/>,
        children: [
            ...AccountingRoutes
        ]
    }
])

export default router;
