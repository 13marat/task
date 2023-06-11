import { usersType } from "../types/types";

export const filterUsersData = (users: any): any => {
    const filteredUsers:usersType[]  = users.map((user: any): usersType => {
        return {
            id: user.id,
            name: user.name,
            phone: user.phone,
            username: user.username,
            email: user.email
        }
    })

return filteredUsers
}


