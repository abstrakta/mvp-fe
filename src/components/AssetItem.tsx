import React from 'react';

interface Asset {
    id: number;
    title: string;
    description: string;
}

interface AssetItemProps {
    asset: Asset;
    viewMode: 'grid' | 'list';
}

export const AssetItem: React.FC<AssetItemProps> = ({ asset, viewMode }) => {
    return (
        <div className={`p-4 border rounded shadow hover:shadow-md transition-shadow duration-200 bg-white ${viewMode === 'list' ? 'mb-4' : ''}`}>
            <h2 className="text-xl font-semibold">{asset.title}</h2>
            <p className="mt-2">{asset.description}</p>
        </div>
    );
};