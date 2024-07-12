import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faLock, faCircle } from '@fortawesome/free-solid-svg-icons';

interface Bundle {
    id: number;
    title: string;
    authors: string[];
    category: string;
    description: string;
}

interface BundleItemProps {
    bundle: Bundle;
    researchId: number;
    viewMode: 'grid' | 'list';
}

const BundleItem: React.FC<BundleItemProps> = ({ bundle, researchId, viewMode }) => {
    return (
        <div className={`p-4 border rounded shadow hover:shadow-md transition-shadow duration-200 bg-white ${viewMode === 'list' ? 'mb-4' : ''}`}>
            <Link href={`/research/${researchId}/bundles/${bundle.id}`} className="text-blue-500 hover:underline">
                <h2 className="text-xl font-semibold">{bundle.title}</h2>
            </Link>
            <p className="mt-2">{bundle.description}</p>
            <div className="flex items-center space-x-4 mt-4">
                <FontAwesomeIcon icon={faPencilAlt} className="cursor-pointer text-gray-600 hover:text-blue-500" />
                <FontAwesomeIcon icon={faLock} className="cursor-pointer text-gray-600 hover:text-blue-500" />
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faCircle} className="text-green-500 mr-1" />
                    <span className="text-sm">Ready</span>
                </div>
            </div>
        </div>
    );
};

export default BundleItem;