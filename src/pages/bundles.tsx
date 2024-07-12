import React, { useState } from 'react';
import BundleList from '@/components/BundleList';

// Mock data for bundles
const bundles = Array.from({ length: 40 }).map((_, index) => ({
    id: index + 1,
    title: `Bundle ${index + 1}`,
    authors: [`Author ${index + 1}`, `Author ${index + 2}`],
    category: index % 2 === 0 ? 'Biology' : 'Chemistry',
    description: `This is a brief description for bundle ${index + 1}, covering various scientific research documents.`
}));

const BundlesPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const researchId = 1; // Replace this with the actual researchId you are using

    const filteredBundles = bundles.filter(bundle =>
        bundle.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bundle.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Research Bundles</h1>
            <input
                type="text"
                placeholder="Search bundles by title or category..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
            />
            <BundleList bundles={filteredBundles} researchId={researchId} viewMode={viewMode} />
        </div>
    );
};

export default BundlesPage;