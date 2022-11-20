export interface Instruction {
  id: number,
  creator: number // user id
  title: string,
  tags: string[],
  additionalMaterials: string[]
	steps: string[],
  content: string,
  images: string[] // array of base64 encoded images
  category: string;
  additionalMaterials: string[];
  steps: string[];
}

export interface InstructionParams {
  page: number;
  count: number;
  tags?: string;
  category?: string[];
  q?: string;
}
