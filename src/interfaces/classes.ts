export interface ClassItem {
  name: string;
  code: string;
  requirementCode?: string;
  requiredHours?: number;
  classHrs: number;
  labHrs: number;
  totalHrs: number;
}

export type TakenMapType = Record<string, ClassItem>;
