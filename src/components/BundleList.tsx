import React from 'react';
import BundleItem from './BundleItem';

interface Bundle {
    id: number;
    title: string;
    authors: string[];
    category: string;
    description: string;
}

interface BundleListProps {
    bundles: Bundle[];
    researchId: number;
    viewMode: 'grid' | 'list';
}

const BundleList: React.FC<BundleListProps> = ({ bundles, researchId, viewMode }) => {
    if (!bundles || bundles.length === 0) return <p>No bundles found.</p>;

    return (
        <div className={`w-full ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'flex flex-col'}`}>
            {bundles.map(bundle => (
                <BundleItem key={bundle.id} bundle={bundle} researchId={researchId} viewMode={viewMode} />
            ))}
        </div>
    );
};

export default BundleList;