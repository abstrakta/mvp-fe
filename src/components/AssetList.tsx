import React from 'react';
import { AssetItem } from './AssetItem';

interface Asset {
    id: number;
    title: string;
    description: string;
}

interface AssetListProps {
    assets: Asset[];
    viewMode: 'grid' | 'list';
}

export const AssetList: React.FC<AssetListProps> = ({ assets, viewMode }) => {
    return (
        <div className={`w-full ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'flex flex-col'}`}>
            {assets.map(asset => (
                <AssetItem key={asset.id} asset={asset} viewMode={viewMode} />
            ))}
        </div>
    );
};