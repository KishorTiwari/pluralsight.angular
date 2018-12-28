import { Contact } from "./contact";

export class Property {
    id: number;
    title: string;
    description: string;
    rent: string;
    noOfBedroom: number;
    noOfBathroom: number;
    noOfTenants: number
    additionalCost: string;
    petAllowed: boolean;
    smokingAllowed: boolean;
    hasKitchen: boolean;
    listedOn: Date;
    updatedOn: Date;
    availableOn: Date;
    listed: Date;
    updated: string;
    location: string;
    viewCount: number;
    locationId: number;
    contacts: Contact[];  
}
