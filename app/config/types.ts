import { ImageSourcePropType } from "react-native";

export type Errors = {
  [fieldName: string]: string;
};

export type Touched = {
  [fieldName: string]: boolean;
};

export type ImageType = string | null;

export type Listing = {
  id: number;
  title: string;
  images: listingImages[];
  price: number;
  userId: string;
  categoryId: number;
  location: {
    latitude: number;
    longitude: number;
  };
};

type listingImages = {
  url: string;
  thumbnailUrl: string;
};
