import { useMemo, useState } from 'react';

export interface Block {
  title: string;
  image: string;
}

export interface FloorSchema {
  title: string;
  blocks?: Block[];
  image?: string;
}

export interface UseCurrentImageResult {
  activeFloor: string;
  activeBlock: string;
  activeSchema: string;
  setActiveFloor: (floor: string) => void;
  setActiveBlock: (block: string) => void;
  setActiveSchema: (schema: string) => void;
  currentImage: string;
  nextImages: string[];
}

export const useCurrentImage = (floorschemas: FloorSchema[], hasBlocks: boolean): UseCurrentImageResult => {
  const [activeFloor, setActiveFloor] = useState(floorschemas[0]?.title || '');
  const [activeBlock, setActiveBlock] = useState(floorschemas[0]?.blocks?.[0]?.title || '');
  const [activeSchema, setActiveSchema] = useState(floorschemas[0]?.title || '');

  const { currentImage, nextImages } = useMemo(() => {
    const selectedFloor = floorschemas.find((f) => f.title === activeFloor);
    const selectedBlock = selectedFloor?.blocks?.find((b) => b.title === activeBlock);
    const selectedSchema = floorschemas.find((s) => s.title === activeSchema);

    const currentImage = hasBlocks ? selectedBlock?.image || '' : selectedSchema?.image || '';

    const nextImages: string[] = [];
    if (hasBlocks) {
      const nextBlock = selectedFloor?.blocks?.find((b) => b.title !== activeBlock)?.image;
      if (nextBlock) nextImages.push(nextBlock);
    } else {
      const nextSchema = floorschemas.find((s) => s.title !== activeSchema)?.image;
      if (nextSchema) nextImages.push(nextSchema);
    }

    return { currentImage, nextImages };
  }, [floorschemas, activeFloor, activeBlock, activeSchema, hasBlocks]);

  return {
    activeFloor,
    activeBlock,
    activeSchema,
    setActiveFloor,
    setActiveBlock,
    setActiveSchema,
    currentImage,
    nextImages
  };
};

