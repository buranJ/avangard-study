export interface Image {
  id: number;
  image: string;
}

export interface Block {
  id: number;
  title: string;
  image: string;
}

export interface FloorSchema {
  id: number;
  blocks: Block[];
  title: string;
  image?: string;
}

export interface Advantage {
  id: number;
  title: string;
  svg: string;
  created_at: string;
}

interface INearbyItem {
  id: number;
  title: string;
  image: string;
}

export interface InterestNearbyBuilding {
  id: number;
  building: INearbyItem;
  time: string;
}

export interface InterestNearby {
  id: number;
  building: number;
  interest_nearby: InterestNearbyBuilding[];
}

export interface ArchitectureFeature {
  id: number;
  title: string;
  features: {
    Architecture: string;
    id: string;
    mini_description: string;
    title: string;
  }[];
  image: string;
}

// Основные секции
export interface Complex {
  id: number;
  first_image: string;
  second_image: string;
  description: string;
  address: string;
  max_blocks: number;
  max_apartment: number;
  building: number;
  apartments: { id: string; title: string; section: string }[];
}

export interface ObjectMetrics {
  id: number;
  plot_area: number;
  parking_spaces: number;
  low_rise_blocks: number;
  construction_area: number;
  appartament_quantity: number;
  yard_area: number;
  green_area: number;
  childrens_playgrounds: number;
  first_image: string;
  second_image: string;
  building: number;
}

export interface BeforeAfter {
  id: number;
  day_image: string;
  night_image: string;
  building: number;
}

export interface FloorPlans {
  id: number;
  floorschemas: FloorSchema[];
  building: number;
}

export interface ParkingPlan {
  id: number;
  under_parking_layout: string;
  images: {
    id: string;
    section: string;
    title: string;
    under_parking_layout: string;
  }[];
  building: number;
}

export interface Architecture {
  id: number;
  architecture: ArchitectureFeature[];
  building: number;
}

export interface Gallery {
  id: number;
  images: Image[];
  building: number;
}

export interface Advantages {
  id: number;
  advantages: Advantage[];
  building: number;
}

export interface Location {
  id: number;
  location_description: string;
  location_iframe_url: string;
  location_image_first: string;
  location_image_second: string;
  building: number;
}

export interface Footer {
  id: number;
  youtube_url: string;
  live_url: string;
  building: string;
}

export interface INumeration {
  id: number;
  image: string;
  gen_plan: string;
  building: number;
}

export interface AvangardComplexData {
  id: number;
  about_complex: Complex;
  object_metrics: ObjectMetrics;
  before_after: BeforeAfter;
  floor_plans: FloorPlans;
  parking_plan: ParkingPlan;
  architecture: Architecture;
  bitrix: string;
  gallery: Gallery;
  advantages: Advantages;
  interest_nearby: InterestNearby;
  numeration: INumeration;
  location: Location;
  footer: Footer;
  slug: string;
  title: string;
  mini_title: string;
  status: string;
  banner: string;
  buklet: string;
  created_at: string;
  category: number;
  threed?: IObject3DTour[];
  banner_img: string;
  banner_phones?: string;
}

export interface IConstructionProgress {
  id: string;
  month: number;
  year: number;
  images: { image: string }[];
}

export interface IObjectFinished {
  id: string;
  title: string;
  mini_title: string;
  slug: string;
  section7: {
    id: number;
    images: { image: string }[];
    building: number;
  };
  section1: {
    id: number;
    first_image: string;
    second_image: string;
    description: string;
    address: string;
    max_blocks: number;
    max_apartment: number;
    building: number;
  };
}

export interface IObjectsList {
  slug: string;
  title: string;
  banner_img: string;
  imagepng: string;
  imagebg: string;
  is_new: boolean;
  info: {
    id: number;
    first_image: string;
    second_image: string;
    building: string;
    description: string;
    address: string;
    max_blocks: number;
    max_apartment: number;
  };
  mini_title: string;
}

export interface IObjectsFinishedList extends Omit<IObjectsList, 'banner_img'> {
  imagebg: string;
}

export type IObjectsListHome = Omit<IObjectsList, 'banner_img'>;

export interface IObject3DTour {
  id: string;
  title: string;
  threed?: string;
  building: string;
}

