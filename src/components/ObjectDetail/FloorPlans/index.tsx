import { FC, useState } from "react";
import Button from "components/Button";
import "./styles.scss";
import floorImage from "../../../assets/images/FloorPlans/floorsImg.webp";

const floorPlansData = {
  "1-3 этаж": [
    "Блок 1",
    "Блок 2",
    "Блок 3",
    "Блок 4, 10, 11",
    "Блок 5",
    "Блок 6",
    "Блок 7",
    "Блок 8, 9, 12, 13",
  ],
  "4 этаж": [
    "Блок 1",
    "Блок 2",
    "Блок 3",
    "Блок 4, 10, 11",
    "Блок 5",
    "Блок 6",
    "Блок 7",
    "Блок 8, 9, 12, 13",
  ],
};

const FloorPlans: FC = () => {
  const [selectedFloor, setSelectedFloor] =
    useState<keyof typeof floorPlansData>("1-3 этаж");
  const [selectedBlock, setSelectedBlock] = useState<string>("Блок 1");
  const [imageSrc, setImageSrc] = useState(floorImage);

  const handleSelection = (floor: keyof typeof floorPlansData, block: string) => {
    setSelectedFloor(floor);
    setSelectedBlock(block);

    const newImageSrc =
      block === "Блок 5" || block === "Блок 6"
        ? "http://avangardstyle.kg/media/images/buildings/q5.webp"
        : floorImage;

    setImageSrc(newImageSrc);
  };

  return (
    <div className="floor-plans">
      <div className="floor-buttons">
        {Object.keys(floorPlansData).map((floor) => (
          <Button
            key={floor}
            label={floor}
            variant={selectedFloor === floor ? "primary" : "outline"}
            onClick={() =>
              handleSelection(floor as keyof typeof floorPlansData, selectedBlock)
            }
          />
        ))}
      </div>

      <div className="block-buttons">
        {floorPlansData[selectedFloor].map((block) => (
          <Button
            key={block}
            label={block}
            variant={selectedBlock === block ? "primary" : "outline"}
            onClick={() => handleSelection(selectedFloor, block)}
          />
        ))}
      </div>

      <div className="image-container">
        <img src={imageSrc} alt={`Планировка ${selectedBlock}, ${selectedFloor}`} />
      </div>
    </div>
  );
};

export default FloorPlans;
