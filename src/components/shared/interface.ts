export  interface Data {
    id: number;
    title: string;
    icon: string;
}

export interface BaseMessage {
  sender: "ai" | "user";
}

export interface TextMessage extends BaseMessage {
  type: "text";
  content: string;
}

export interface ImageMessage extends BaseMessage {
  type: "image";
  content: {
    src: string;
    alt: string;
  };
}

export interface MusicMessage extends BaseMessage {
  type: "music";
  content: {
    src: string;
    title: string;
  };
}

export interface Cards {
  title: string;
  subtitle: string;
  description: string;
  img: string;
}

export interface SlideItem extends Data {
  image: string;
  details: string;
}