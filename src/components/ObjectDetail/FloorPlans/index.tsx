import { FC, useState, useEffect } from "react";
import Button from "components/Button";
import "./styles.scss";

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

const imageMap: Record<string, Record<string, string>> = {
  "1-3 этаж": {
    "Блок 1": "https://avangardstyle.kg/media/images/buildings/q1.webp",
    "Блок 2": "https://avangardstyle.kg/media/images/buildings/q3.webp",
    "Блок 3": "https://avangardstyle.kg/media/images/buildings/q5.webp",
    "Блок 4, 10, 11": "https://avangardstyle.kg/media/images/buildings/q7.webp",
    "Блок 5": "https://avangardstyle.kg/media/images/buildings/q10.webp",
    "Блок 6": "https://avangardstyle.kg/media/images/buildings/q12.webp",
    "Блок 7": "https://avangardstyle.kg/media/images/buildings/q15.webp",
    "Блок 8, 9, 12, 13": "https://avangardstyle.kg/media/images/buildings/q18.webp",
  },
  "4 этаж": {
    "Блок 1": "https://avangardstyle.kg/media/images/buildings/q2.webp",
    "Блок 2": "https://avangardstyle.kg/media/images/buildings/q4.webp",
    "Блок 3": "https://avangardstyle.kg/media/images/buildings/q6.webp",
    "Блок 4, 10, 11": "https://avangardstyle.kg/media/images/buildings/q8.webp",
    "Блок 5": "https://avangardstyle.kg/media/images/buildings/5__4_.svg",
    "Блок 6": "https://avangardstyle.kg/media/images/buildings/q14.webp",
    "Блок 7": "https://avangardstyle.kg/media/images/buildings/q17.webp",
    "Блок 8, 9, 12, 13": "https://avangardstyle.kg/media/images/buildings/q19.webp",
  },
};

const FloorPlans: FC = () => {
  const [selectedFloor, setSelectedFloor] = useState<keyof typeof floorPlansData>("1-3 этаж");
  const [selectedBlock, setSelectedBlock] = useState<string>("Блок 1");
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    const newImage = imageMap[selectedFloor]?.[selectedBlock] || "";
    setImageSrc(newImage);
  }, [selectedFloor, selectedBlock]);
  // ?. — опциональная цепочка (optional chaining), предотвращает ошибку, если этаж не существует.

  return (
    <div className="floor-plans">
      <div className="floor-buttons">
        {Object.keys(floorPlansData).map((floor) => (
          <Button
            key={floor}
            label={floor}
            variant={selectedFloor === floor ? "primary" : "outline"}
            onClick={() => setSelectedFloor(floor as keyof typeof floorPlansData)}
          />
        ))}
      </div>

      <div className="block-buttons">
        {floorPlansData[selectedFloor].map((block) => (
          <Button
            key={block}
            label={block}
            variant={selectedBlock === block ? "primary" : "outline"}
            onClick={() => setSelectedBlock(block)}
          />
        ))}
      </div>

      {imageSrc && (
        <div className="image-container">
          <img
            src={imageSrc}
            alt={`Планировка ${selectedBlock}, ${selectedFloor}`}
          />
        </div>
      )}
    </div>
  );
};

export default FloorPlans;
