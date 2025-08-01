export default async function handler(req, res) {
    const searchEnvVars = {
        ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
        ALGOLIA_SEARCH_API_KEY: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
        ALGOLIA_INDEX_NAME: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME
    };
    
    res.status(200).json({
        message: 'Search environment variables test',
        searchEnvVars,
        hasAppId: !!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
        hasSearchKey: !!process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
        hasIndexName: !!process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME
    });
} 