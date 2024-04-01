import type { Params } from "react-router-dom";
import { getPackage } from "../../api/queries/getPackage";
import { PackageDetails } from "../../api/types/PackageDetails";

export interface DetailsLoaderResult {
    details : PackageDetails
}

export async function detailsLoader ({ params } : { params : Params}) : Promise<DetailsLoaderResult>{
    const { name } = params; 

    if(!name)
        throw new Error("Package name must be provided");
    
    const details = await getPackage(name);
    console.log(name);
    return {
        details
    }
}