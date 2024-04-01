import { searchPackage } from "../../api/queries/searchPackages";
import { PackageSummary } from "../../api/types/PackageSummary";

export interface SearchLoaderResult {
    searchResults : PackageSummary[]
}
export async function searchLoader ({ request } : {request : Request}) : Promise<SearchLoaderResult>{
    const { searchParams } = new URL(request.url);
    const term = searchParams.get('term');

    if(!term)
      throw new Error('Search term must be provided');

    const results = await searchPackage(term);

    return {
        searchResults : results
    }
  }