import * as React from 'react';
import algoliasearch from 'algoliasearch';
import { getAlgoliaResults } from '@algolia/autocomplete-js';
import '@algolia/autocomplete-theme-classic';
import BaseAutoComplete from './BaseAutoComplete';

// Hardcode the values since environment variables aren't loading on client side
const appId = 'U22MC2LJRP';
const searchKey = '823fd28e8b14d916acedae27a09866bc';
const indexName = 'development_blog_posts'; // Hardcode the index name

console.log('Search component using hardcoded values:', { appId, searchKey, indexName });

const searchClient = algoliasearch(appId, searchKey);

export default function AutoCompletePosts() {
    return (
        <BaseAutoComplete
            openOnFocus={true}
            placeholder="Search in posts..."
            getSources={({ query }) => [
                {
                    sourceId: 'posts',
                    getItems() {
                        console.log('Searching for query:', query);
                        const results = getAlgoliaResults({
                            searchClient,
                            queries: [
                                {
                                    indexName: indexName,
                                    query
                                }
                            ]
                        });
                        console.log('Search results:', results);
                        return results;
                    },
                    templates: {
                        item({ item, components }) {
                            console.log('Rendering item:', item);
                            return <ResultItem hit={item} components={components} />;
                        }
                    },
                    getItemUrl({ item }) {
                        console.log('Getting URL for item:', item);
                        return item.url;
                    }
                }
            ]}
            onSelect={({ item }) => {
                console.log('Selected item:', item);
                if (item.url) {
                    window.location.href = item.url;
                }
            }}
        />
    );
}

export function ResultItem({ hit, components }) {
    return (
        <a href={hit.url} className="aa-ItemLink" tabIndex="0">
            <div className="aa-ItemContent">
                <div className="aa-ItemTitle">
                    <components.Highlight hit={hit} attribute="title" />
                </div>
            </div>
        </a>
    );
}
