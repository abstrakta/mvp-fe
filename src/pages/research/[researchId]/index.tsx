import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useState } from 'react';
import BundleList from '@/components/BundleList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList } from '@fortawesome/free-solid-svg-icons';

// Mock data for bundles
const bundles = Array.from({ length: 40 }).map((_, index) => ({
    id: index + 1,
    title: `Bundle ${index + 1}`,
    authors: [`Author ${index + 1}`, `Author ${index + 2}`],
    category: index % 2 === 0 ? 'Biology' : 'Chemistry',
    description: `This is a brief description for bundle ${index + 1}, covering various scientific research documents.`
}));

interface ResearchProps {
    researchId: number;
}

const Research: React.FC<ResearchProps> = ({ researchId }) => {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    if (!bundles || bundles.length === 0) return <p>No bundles found.</p>;

    return (
        <div className="p-10">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">My Research</h1>
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
            <BundleList bundles={bundles} researchId={researchId} viewMode={viewMode} />
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Array.from({ length: 10 }).map((_, index) => ({
        params: { researchId: (index + 1).toString() }
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { researchId } = context.params as { researchId: string };

    return {
        props: {
            researchId: parseInt(researchId, 10),
        },
    };
};

export default Research;