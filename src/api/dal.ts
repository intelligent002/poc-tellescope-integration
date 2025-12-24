import {Session} from "@tellescope/sdk"
import {Enduser} from "@tellescope/types-models"
import {CustomUpdateOptions} from "@tellescope/types-utilities";

const API_KEY = process.env.TELLESCOPE_API_KEY
if (!API_KEY) {
    throw new Error("Missing TELLESCOPE_API_KEY environment variable")
}
const sdk = new Session({apiKey: API_KEY})


if (!API_KEY) {
    throw new Error("Missing TELLESCOPE_API_KEY environment variable")
}

export const api = {
    end_users: {
        create: async (data: Partial<Enduser>): Promise<Enduser> => {
            return await sdk.api.endusers.createOne(data)
        },
        update: async ({id, data, options, _overrideUnique}: {
            id: string,
            data: Partial<Enduser>,
            options?: CustomUpdateOptions,
            _overrideUnique?: boolean
        }): Promise<Enduser> => {
            return await sdk.api.endusers.updateOne(id, data, options, _overrideUnique)
        },
        fetch: async (id: string): Promise<Enduser> => {
            return await sdk.api.endusers.getOne(id)
        },
        delete: async (id: string): Promise<void> => {
            return await sdk.api.endusers.deleteOne(id)
        },
    }
}
