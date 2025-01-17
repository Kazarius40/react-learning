import {UsersComponent} from "../components/users/UsersComponent.tsx";
import {PaginationComponent} from "../layouts/PaginationComponent.tsx";

export const UsersPage = () => {
    return (
        <div>
            <PaginationComponent/>
            <UsersComponent/>
        </div>
    );
};