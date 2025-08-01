// Set environment variables before importing modules
process.env.NEXT_PUBLIC_ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || 'U22MC2LJRP';
process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || 'blog_posts';
process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || '823fd28e8b14d916acedae27a09866bc';
process.env.ALGOLIA_ADMIN_API_KEY = process.env.ALGOLIA_ADMIN_API_KEY || '823fd28e8b14d916acedae27a09866bc';

import { index } from '../../utils/indexer';

export default async function handler(req, res) {
    try {
        const result = await index();
        res.status(200).send({ result });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'failed to fetch data' });
    }
}
