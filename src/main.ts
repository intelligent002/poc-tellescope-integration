import {api} from "./api/dal"
import {Enduser} from "@tellescope/types-models";

async function run() {

    let createResponse, updateResponse1, updateResponse2: Enduser = {
        businessId: "",
        creator: "",
        hashedPassword: "",
        id: "",
        lastActive: "",
        lastLogout: "",
        updatedAt: new Date()
    };

    try {
        console.log("Creating a new user")
        createResponse = await api.end_users.create({
            externalId: "our-intake-internal-id",
            email: "test-example@tellescope.com",
            phone: "+15555555555",
            fname: "test-sdk",
        })
        console.log("User created:", createResponse)

        console.log("Fetching the user by id [:", createResponse.id, "]")
        createResponse = await api.end_users.fetch(createResponse.id)
        console.log("User fetched by id", createResponse)

        console.log("Updating the user by id (round #1) [", createResponse.id, "]")
        updateResponse1 = await api.end_users.update({
            id: createResponse.id,
            data: {
                externalId: "our-intake-internal-id",
                email: "test-example@tellescope.com",
                phone: "+16666666666",
                fname: "test-sdk",
            }
        })
        console.log("User updated #1:", updateResponse1)

        console.log("Updating the user by id (round #2) [", createResponse.id, "]")
        updateResponse2 = await api.end_users.update({
            id: createResponse.id,
            data: {
                externalId: "our-intake-internal-id",
                email: "test-example@tellescope.com",
                phone: "+17777777777",
                fname: "test-sdk",
            }
        })
        console.log("User updated #2:", updateResponse2)

        console.log("Deleting the user by id [", createResponse.id, "]")
        await api.end_users.delete(createResponse.id)
        console.log("User deleted by id")

    } catch (err) {
        console.error("Error running test:", err)
    }
}

run()
