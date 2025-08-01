// Set environment variables before importing modules
process.env.NEXT_PUBLIC_ALGOLIA_APP_ID = 'U22MC2LJRP';
process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME = 'blog_posts';
process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY = '823fd28e8b14d916acedae27a09866bc';
process.env.ALGOLIA_ADMIN_API_KEY = '823fd28e8b14d916acedae27a09866bc';

import { index } from '../../utils/indexer';

export default async function handler(req, res) {
    try {
        const result = await index();
        res.status(200).json({
            message: 'Indexing successful!',
            result,
            envVars: {
                ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
                ALGOLIA_INDEX_NAME_SUFFIX: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME,
                ALGOLIA_SEARCH_API_KEY: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
                ALGOLIA_ADMIN_API_KEY: process.env.ALGOLIA_ADMIN_API_KEY
            }
        });
    } catch (error) {
        res.status(500).json({
            message: 'Indexing failed',
            error: error.message,
            envVars: {
                ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
                ALGOLIA_INDEX_NAME_SUFFIX: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME,
                ALGOLIA_SEARCH_API_KEY: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
                ALGOLIA_ADMIN_API_KEY: process.env.ALGOLIA_ADMIN_API_KEY
            }
        });
    }
} 