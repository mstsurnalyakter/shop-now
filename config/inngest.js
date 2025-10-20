import { Inngest } from "inngest";
import ConnectDB from "./db";
import User from "@/models/User";

export const inngest = new Inngest({ id: "showNow" });

//inngest function to save user data to a database

export const syncUserCreation = inngest.createFunction(
    {
        id: 'sync-user-from-clerk'
    },
    {
        event: "clerk/user.created"
    },
    async ({ event }) => {
        const {
            id,
            first_name,
            last_name,
            email_addresses,
            image_url
        } = event.data;

        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: `${first_name} ${last_name}`,
            imageUrl: image_url
        }

        await ConnectDB();
        await User.create(userData);

    }
)

//Inngest Function to update user data in database
export const syncUserUpdation = inngest.createFunction(
    {
        id: "update-user-from-cleark"
    },
    {
        event: "clerk/user.updated"
    },
    async ({ event }) => {
        const {
            id,
            first_name,
            last_name,
            email_addresses,
            image_url
        } = event.data;

        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: `${first_name} ${last_name}`,
            imageUrl: image_url
        }
        await ConnectDB();
        await User.findByIdAndUpdate(id, userData);
    }
)

//Inngest Function to delete user from database
export const syncUserDelete = inngest.createFunction(
    {id:"delete-user-from-cleark"},
    {event:"clerk/user.deleted"},
    async ({event}) =>{
        const {id} = event.data;
        await ConnectDB();
        await User.findByIdAndDelete(id);
    }
)

// 1:00:08


