export interface Instruction {
  id: number,
  creator: number // user id
  title: string,
  tags: string[],
  content: string,
  images: string[] // array of base64 encoded images
  category: string
}

export interface InstructionParams {
  page: number;
  count: number;
  tags?: string[];
  category?: string[];
}
