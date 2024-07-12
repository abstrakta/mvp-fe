import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useState } from 'react';
import { AssetList } from '@/components/AssetList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

// Mock data for assets
const assets = Array.from({ length: 10 }).map((_, index) => ({
    id: index + 1,
    title: `Asset ${index + 1}`,
    description: `Description for asset ${index + 1}`,
}));

interface BundleDetailProps {
    researchId: number;
    bundleId: number;
}

const BundleDetail: React.FC<BundleDetailProps> = ({ researchId, bundleId }) => {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    return (
        <div className="p-10">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">
                    Assets in Bundle {bundleId} of{' '}
                    <Link href={`/research/${researchId}`} className="text-blue-500 hover:underline">
                        Research {researchId}
                    </Link>
                </h1>
                <div>
                    <FontAwesomeIcon
                        icon={faTh}
                        className={`cursor-pointer ${viewMode === 'grid' ? 'text-blue-500' : ''}`}
                        onClick={() => setViewMode('grid')}
                    />
                    <FontAwesomeIcon
                        icon={faList}
                        className={`ml-4 cursor-pointer ${viewMode === 'list' ? 'text-blue-500' : ''}`}
                        onClick={() => setViewMode('list')}
                    />
                </div>
            </div>
            <AssetList assets={assets} viewMode={viewMode} />
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Array.from({ length: 10 }).flatMap((_, researchIndex) =>
        Array.from({ length: 10 }).map((_, bundleIndex) => ({
            params: {
                researchId: (researchIndex + 1).toString(),
                bundleId: (bundleIndex + 1).toString(),
            }
        }))
    );

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { researchId, bundleId } = context.params as { researchId: string; bundleId: string };

    return {
        props: {
            researchId: parseInt(researchId, 10),
            bundleId: parseInt(bundleId, 10),
        },
    };
};

export default BundleDetail;