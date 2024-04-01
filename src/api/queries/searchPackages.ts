import type { PackageSummary } from "../types/PackageSummary";

interface SearchResponse {
    objects : {
        package : {
            name : string,
            version : string,
            description : string,
            keywords : string[],
        }
    }[]
}

export async function searchPackage(term : string) : Promise<PackageSummary[]> {
    const res = await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${term}`
      )
    const data : SearchResponse = await res.json();

    return data.objects.map(({package : {name, version, description, keywords}})=>{
        return {
            name,
            version,
            description,
            keywords,
        }
    });
}